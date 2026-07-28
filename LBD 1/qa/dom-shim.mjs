/* Minimal DOM + fake-clock shim for headless smoke testing (no browser needed).
 * It is deliberately small: just enough of the DOM/timer/Audio surface that
 * engine/interaction/controllers/main use. The viewport is fixed at 1920x1080 so
 * stage scale === 1 and client coordinates equal logical coordinates, which keeps
 * getBoundingClientRect() a straight sum of style left/top/width/height.
 */
export function makeEnv(opts) {
  opts = opts || {};
  const VW = opts.width || 1920, VH = opts.height || 1080;
  const allElements = [];

  // ---- fake clock ----
  let vnow = 0;
  let timerSeq = 1;
  const timers = new Map();       // id -> {time, fn, interval}
  const rafCbs = [];
  function setTimeout_(fn, ms) { const id = timerSeq++; timers.set(id, { time: vnow + (ms || 0), fn, interval: null }); return id; }
  function clearTimeout_(id) { timers.delete(id); }
  function setInterval_(fn, ms) { const id = timerSeq++; timers.set(id, { time: vnow + (ms || 0), fn, interval: ms || 16 }); return id; }
  function clearInterval_(id) { timers.delete(id); }
  function raf(fn) { rafCbs.push(fn); return rafCbs.length; }
  function caf() {}
  const performance_ = { now: () => vnow };

  // advance virtual time by ms in fixed ~16ms frames, firing due timers (in time order)
  // and one RAF frame per step, flushing microtasks between steps. RAF is driven on a
  // steady cadence independent of timers so pure-RAF tweens progress correctly.
  const FRAME = 16;
  async function advance(ms) {
    const end = vnow + ms;
    let guard = 0;
    while (vnow < end - 1e-6 && guard++ < 500000) {
      vnow = Math.min(end, vnow + FRAME);
      // fire all timers due by now, earliest first
      let due;
      do {
        due = null;
        for (const [id, t] of timers) if (t.time <= vnow + 1e-6 && (due === null || t.time < due.t.time)) due = { id, t };
        if (due) {
          if (due.t.interval != null) due.t.time = vnow + due.t.interval; else timers.delete(due.id);
          try { due.t.fn(); } catch (e) { console.error("[timer]", e); }
          await flush();
        }
      } while (due);
      // one RAF frame
      const frame = rafCbs.splice(0, rafCbs.length);
      for (const cb of frame) { try { cb(vnow); } catch (e) { console.error("[raf]", e); } }
      await flush();
    }
    vnow = end;
  }
  function flush() { return new Promise((res) => setImmediate(res)); }
  function pendingTimers() { return timers.size; }

  // ---- element ----
  function numeric(px) { const v = parseFloat(px); return isFinite(v) ? v : 0; }
  class Style { constructor() { this._m = {}; } }
  const styleHandler = {
    get(t, k) { if (k === "_m") return t._m; return t._m[k] != null ? t._m[k] : ""; },
    set(t, k, v) { t._m[k] = v == null ? "" : String(v); return true; }
  };

  class ClassList {
    constructor(el) { this.el = el; this.set = new Set(); }
    add(c) { this.set.add(c); this._sync(); }
    remove(c) { this.set.delete(c); this._sync(); }
    contains(c) { return this.set.has(c); }
    _sync() { this.el.className = [...this.set].join(" "); }
  }

  class El {
    constructor(tag) {
      this.tagName = (tag || "div").toUpperCase();
      this.children = [];
      this.parentElement = null;
      this.style = new Proxy(new Style(), styleHandler);
      this._id = "";
      this._class = "";
      this.classList = new ClassList(this);
      this.dataset = {};
      this.attrs = {};
      this.listeners = {};
      this._text = "";
      allElements.push(this);
    }
    get id() { return this._id; }
    set id(v) { this._id = v; }
    get className() { return this._class; }
    set className(v) { this._class = v; this.classList.set = new Set(String(v).split(/\s+/).filter(Boolean)); }
    get firstChild() { return this.children[0] || null; }
    get parentNode() { return this.parentElement; }
    get isConnected() { let c = this; while (c) { if (c === body || c === documentElement) return true; c = c.parentElement; } return false; }
    get textContent() { return this._text; }
    set textContent(v) { this._text = v == null ? "" : String(v); this.children = []; }
    appendChild(c) { if (c.parentElement) c.parentElement._remove(c); c.parentElement = this; this.children.push(c); return c; }
    insertBefore(c, ref) { if (c.parentElement) c.parentElement._remove(c); c.parentElement = this; if (!ref) { this.children.push(c); } else { const i = this.children.indexOf(ref); if (i < 0) this.children.push(c); else this.children.splice(i, 0, c); } return c; }
    removeChild(c) { this._remove(c); return c; }
    _remove(c) { const i = this.children.indexOf(c); if (i >= 0) this.children.splice(i, 1); c.parentElement = null; }
    remove() { if (this.parentElement) this.parentElement._remove(this); }
    setAttribute(k, v) { this.attrs[k] = String(v); if (k === "id") this.id = v; }
    getAttribute(k) { return this.attrs[k] != null ? this.attrs[k] : null; }
    addEventListener(type, fn) { (this.listeners[type] = this.listeners[type] || []).push(fn); }
    removeEventListener(type, fn) { const a = this.listeners[type]; if (a) { const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); } }
    dispatchEvent(ev) { ev.target = ev.target || this; const a = this.listeners[ev.type]; if (a) a.slice().forEach((fn) => fn(ev)); return true; }
    setPointerCapture() {}
    releasePointerCapture() {}
    focus() {}
    // rect: logical sum of left/top up the chain, then the stage transform (translate+scale) applied
    getBoundingClientRect() {
      const st = parseStageTransform();
      if (this === stage) return rect(st.ox, st.oy, 1920 * st.s, 1080 * st.s);
      let x = 0, y = 0, c = this;
      while (c && c !== stage && c !== body && c !== documentElement) { x += numeric(c.style.left); y += numeric(c.style.top); c = c.parentElement; }
      const w = numeric(this.style.width), h = numeric(this.style.height);
      return rect(st.ox + x * st.s, st.oy + y * st.s, w * st.s, h * st.s);
    }
    querySelectorAll(sel) {
      const pred = sel === "[id]" ? (e) => !!e.id : sel === ".node" ? (e) => e.classList.contains("node") : () => false;
      return allElements.filter((e) => pred(e) && e.isConnected);
    }
  }
  function rect(x, y, w, h) { return { left: x, top: y, right: x + w, bottom: y + h, width: w, height: h, x, y }; }
  function parseStageTransform() {
    const tr = stage.style.transform || "";
    const t = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(tr);
    const s = /scale\(([-\d.]+)\)/.exec(tr);
    return { ox: t ? parseFloat(t[1]) : 0, oy: t ? parseFloat(t[2]) : 0, s: s ? parseFloat(s[1]) : 1 };
  }

  // ---- document / window ----
  const documentElement = new El("html");
  const body = new El("body");
  documentElement.appendChild(body);
  const byId = {};
  const stage = new El("div"); stage.id = "stage"; body.appendChild(stage);
  const boot = new El("div"); boot.id = "boot"; body.appendChild(boot);
  byId.stage = stage; byId.boot = boot;

  const docListeners = {};
  const document_ = {
    documentElement, body,
    getElementById: (id) => byId[id] || allElements.find((e) => e.id === id) || null,
    createElement: (t) => new El(t),
    createTextNode: (t) => { const e = new El("text"); e.textContent = t; return e; },
    querySelectorAll: (sel) => body.querySelectorAll(sel),
    addEventListener: (t, fn) => (docListeners[t] = docListeners[t] || []).push(fn),
    removeEventListener: (t, fn) => { const a = docListeners[t]; if (a) { const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); } },
    dispatchEvent: (ev) => { const a = docListeners[ev.type]; if (a) a.slice().forEach((fn) => fn(ev)); return true; },
    hidden: false,
    fonts: { ready: Promise.resolve(), addEventListener: () => {} }
  };

  const winListeners = {};
  class AudioEl {
    constructor() { this.loop = false; this.currentTime = 0; this.duration = NaN; this.readyState = 0; this.paused = true; this.src = ""; this._l = {}; }
    play() { this.paused = false; return Promise.resolve(); }
    pause() { this.paused = true; }
    load() {}
    addEventListener(t, fn) { (this._l[t] = this._l[t] || []).push(fn); }
    removeEventListener() {}
    cloneNode() { return new AudioEl(); }
  }
  const window_ = {
    innerWidth: VW, innerHeight: VH,
    devicePixelRatio: 1,
    location: { search: "", hostname: "localhost" },
    addEventListener: (t, fn) => (winListeners[t] = winListeners[t] || []).push(fn),
    removeEventListener: (t, fn) => { const a = winListeners[t]; if (a) { const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); } },
    dispatchEvent: (ev) => { const a = winListeners[ev.type]; if (a) a.slice().forEach((fn) => fn(ev)); return true; },
    matchMedia: () => ({ matches: false, addEventListener: () => {}, addListener: () => {} }),
    requestIdleCallback: (fn) => setTimeout_(() => fn({ timeRemaining: () => 5 }), 10),
    cancelIdleCallback: () => {},
    getComputedStyle: () => ({ getPropertyValue: () => "" })
  };

  function makeEvent(type, props) {
    return Object.assign({ type, preventDefault() {}, stopPropagation() {}, isPrimary: true, button: 0, pointerId: 1 }, props || {});
  }

  const globals = {
    window: window_, document: document_,
    location: window_.location,
    setTimeout: setTimeout_, clearTimeout: clearTimeout_, setInterval: setInterval_, clearInterval: clearInterval_,
    requestAnimationFrame: raf, cancelAnimationFrame: caf, requestIdleCallback: window_.requestIdleCallback,
    performance: performance_, Audio: AudioEl, Image: class { set src(v) { this._src = v; } get src() { return this._src; } },
    console, Math, JSON, Promise, Object, Array, String, Number, Boolean, isFinite, parseFloat, parseInt, Set, Map, Date,
    navigator: { userAgent: "node-smoke", maxTouchPoints: opts.touch ? 5 : 0 }
  };
  globals.globalThis = globals;

  return {
    globals, window: window_, document: document_, stage, body,
    advance, flush, pendingTimers, vnow: () => vnow,
    makeEvent, winListeners, allElements,
    // helper: dispatch a full pointer drag of item to a target client point
    dragTo(itemEl, toX, toY) {
      const r = itemEl.getBoundingClientRect();
      const fromX = r.left + r.width / 2, fromY = r.top + r.height / 2;
      itemEl.dispatchEvent(makeEvent("pointerdown", { clientX: fromX, clientY: fromY }));
      window_.dispatchEvent(makeEvent("pointermove", { clientX: toX, clientY: toY }));
      window_.dispatchEvent(makeEvent("pointerup", { clientX: toX, clientY: toY }));
    }
  };
}
