window.LAYOUT = {
 "id": "n1_Canvas",
 "tfId": "1792445937",
 "goId": "1792445933",
 "name": "Canvas",
 "active": true,
 "anchoredPos": {
  "x": 0,
  "y": 0
 },
 "sizeDelta": {
  "x": 0,
  "y": 0
 },
 "anchorMin": {
  "x": 0,
  "y": 0
 },
 "anchorMax": {
  "x": 0,
  "y": 0
 },
 "pivot": {
  "x": 0,
  "y": 0
 },
 "scale": {
  "x": 0,
  "y": 0
 },
 "rotZ": 0,
 "components": {
  "scripts": [
   "dc42784cf147c0c48a680349fa168899",
   "0cd44c1031e13a943bb63640046fad76"
  ],
  "audioSource": {
   "clip": "assets/audio/bgm.mp3",
   "playOnAwake": false,
   "loop": true
  }
 },
 "children": [
  {
   "id": "n2_Intro_1",
   "tfId": "2437127237354074174",
   "goId": "2195438766563812501",
   "name": "Intro (1)",
   "active": true,
   "anchoredPos": {
    "x": 0,
    "y": 0
   },
   "sizeDelta": {
    "x": 0,
    "y": 0
   },
   "anchorMin": {
    "x": 0,
    "y": 0
   },
   "anchorMax": {
    "x": 1,
    "y": 1
   },
   "pivot": {
    "x": 0.5,
    "y": 0.5
   },
   "scale": {
    "x": 1,
    "y": 1
   },
   "rotZ": 0,
   "components": {
    "image": {
     "sprite": {
      "path": "assets/img/TITLE.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 1920,
       "h": 1080
      }
     },
     "type": 0,
     "fillMethod": 4,
     "fillOrigin": 0,
     "fillAmount": 1,
     "fillClockwise": true,
     "preserveAspect": false,
     "color": {
      "r": 1,
      "g": 1,
      "b": 1,
      "a": 1
     },
     "raycast": true,
     "enabled": true,
     "maskable": true
    },
    "audioSource": {
     "clip": "assets/audio/the_sorting_path__1_.mp3",
     "playOnAwake": false,
     "loop": false
    },
    "button": {
     "interactable": true,
     "onClick": [
      {
       "target": "6485829540679039207",
       "method": "Play",
       "mode": 1,
       "arg": null
      }
     ],
     "targetGraphic": "863435731377588701",
     "transition": 1
    }
   },
   "children": [
    {
     "id": "n3_LetsGo_Btn",
     "tfId": "5443357854644636424",
     "goId": "8328136506264186238",
     "name": "LetsGo Btn",
     "active": true,
     "anchoredPos": {
      "x": -244.5,
      "y": 181
     },
     "sizeDelta": {
      "x": 489,
      "y": 362
     },
     "anchorMin": {
      "x": 1,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 0
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Aerrow_LetsGo.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 489,
         "h": 362
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      },
      "button": {
       "interactable": true,
       "onClick": [
        {
         "target": "6485829540679039207",
         "method": "Stop",
         "mode": 1,
         "arg": null
        },
        {
         "target": "1792445938",
         "method": "Play",
         "mode": 1,
         "arg": null
        }
       ],
       "targetGraphic": "966877132521426474",
       "transition": 1
      },
      "btnAnim": {
       "goButton": "2494554370490975646",
       "gameplayPanel": "1329191854",
       "delay": 0.3,
       "clip": null
      }
     }
    },
    {
     "id": "n4_Text_TMP",
     "tfId": "8094440155483903697",
     "goId": "2480081474898010869",
     "name": "Text (TMP)",
     "active": false,
     "anchoredPos": {
      "x": 100,
      "y": 25
     },
     "sizeDelta": {
      "x": 220,
      "y": 50
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 0,
      "y": 0
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "tmp": {
       "text": "vMT_01_03",
       "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
       "fontSize": 36,
       "autoSize": false,
       "sizeMin": 18,
       "sizeMax": 72,
       "alignH": 2,
       "alignV": 512,
       "charSpacing": 0,
       "lineSpacing": 0,
       "wordSpacing": 0,
       "style": 0,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "enabled": true,
       "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
      }
     }
    }
   ]
  },
  {
   "id": "n5_Tutorial",
   "tfId": "1329191855",
   "goId": "1329191854",
   "name": "Tutorial",
   "active": false,
   "anchoredPos": {
    "x": 0,
    "y": 0
   },
   "sizeDelta": {
    "x": 0,
    "y": 0
   },
   "anchorMin": {
    "x": 0,
    "y": 0
   },
   "anchorMax": {
    "x": 1,
    "y": 1
   },
   "pivot": {
    "x": 0.5,
    "y": 0.5
   },
   "scale": {
    "x": 1,
    "y": 1
   },
   "rotZ": 0,
   "components": {
    "_gm": "1329191856",
    "canvasGroup": {
     "alpha": 1,
     "interactable": true,
     "blocksRaycasts": true
    },
    "image": {
     "sprite": {
      "path": "assets/img/Slide_16_9_-_184.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 1920,
       "h": 1080
      }
     },
     "type": 0,
     "fillMethod": 4,
     "fillOrigin": 0,
     "fillAmount": 1,
     "fillClockwise": true,
     "preserveAspect": false,
     "color": {
      "r": 1,
      "g": 1,
      "b": 1,
      "a": 1
     },
     "raycast": true,
     "enabled": true,
     "maskable": true
    }
   },
   "children": [
    {
     "id": "n6_Part_1",
     "tfId": "341237432",
     "goId": "341237429",
     "name": "Part 1",
     "active": true,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_192.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n7_box_iteams",
       "tfId": "1216265001",
       "goId": "1216265000",
       "name": "box iteams",
       "active": true,
       "anchoredPos": {
        "x": -31.039,
        "y": 101.88
       },
       "sizeDelta": {
        "x": 577.935,
        "y": 876.24
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n8_box_02",
         "tfId": "1795126197",
         "goId": "1795126196",
         "name": "box 02",
         "active": true,
         "anchoredPos": {
          "x": 31,
          "y": 17.9
         },
         "sizeDelta": {
          "x": 684,
          "y": 843
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/0000113.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 684,
             "h": 843
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n9_highlight",
         "tfId": "312380602",
         "goId": "312380601",
         "name": "highlight",
         "active": true,
         "anchoredPos": {
          "x": 31.039,
          "y": -94
         },
         "sizeDelta": {
          "x": 1920,
          "y": 1080
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Glow.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 1920,
             "h": 1080
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.8666667
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n10_Image",
           "tfId": "1579468539",
           "goId": "1579468538",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": -23,
            "y": -104
           },
           "sizeDelta": {
            "x": 1882,
            "y": 1080
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Vector__6_.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 1882,
               "h": 1080
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n11_box_open",
         "tfId": "298563505",
         "goId": "298563504",
         "name": "box open",
         "active": true,
         "anchoredPos": {
          "x": 36,
          "y": -62
         },
         "sizeDelta": {
          "x": 684,
          "y": 649
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/000011.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 684,
             "h": 649
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "298563507",
           "transition": 1
          }
         }
        },
        {
         "id": "n12_box_top",
         "tfId": "1257903334",
         "goId": "1257903333",
         "name": "box top",
         "active": true,
         "anchoredPos": {
          "x": 36,
          "y": 133.1
         },
         "sizeDelta": {
          "x": 649,
          "y": 301
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1257903336",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__14__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 649,
             "h": 301
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n13_Lantern",
         "tfId": "545379904",
         "goId": "545379903",
         "name": " Lantern",
         "active": false,
         "anchoredPos": {
          "x": 27.839039,
          "y": 65.99945
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.99999994,
          "y": -5.2154064e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n14_object",
           "tfId": "1176269058",
           "goId": "1176269057",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 166,
            "y": 167
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Untitled_design__21__8.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 166,
               "h": 167
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n15_Feather",
         "tfId": "1048011556",
         "goId": "1048011555",
         "name": " Feather ",
         "active": false,
         "anchoredPos": {
          "x": 33.538876,
          "y": 65.9996
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 2.0489097e-8,
          "y": -1.6763806e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n16_object",
           "tfId": "65875854",
           "goId": "65875853",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 169,
            "y": 166
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Untitled_design__33__7.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 169,
               "h": 166
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        }
       ]
      },
      {
       "id": "n17_roy",
       "tfId": "239318543",
       "goId": "239318542",
       "name": "roy",
       "active": true,
       "anchoredPos": {
        "x": 647,
        "y": -63
       },
       "sizeDelta": {
        "x": 468,
        "y": 777
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_May_4__2026__11_23_34_AM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 468,
           "h": 777
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n18_hand",
       "tfId": "1859059830",
       "goId": "P746695228_820586250070207530",
       "name": "hand",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -86.23999
       },
       "sizeDelta": {
        "x": 500,
        "y": 500
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 0.19999999,
        "y": 0.19999999
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/frame_00_delay-0.02s.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 0,
           "h": 0
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": true,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": false,
         "enabled": true,
         "maskable": true
        },
        "animator": {
         "present": true
        }
       }
      }
     ]
    },
    {
     "id": "n19_Part_2",
     "tfId": "1854060967",
     "goId": "1854060964",
     "name": "Part 2",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Rectangle_100.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n20_item_01",
       "tfId": "987236198",
       "goId": "987236197",
       "name": "item 01",
       "active": true,
       "anchoredPos": {
        "x": -225,
        "y": 29
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n21_Bell",
         "tfId": "692743302",
         "goId": "692743301",
         "name": "Bell",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 279,
          "y": 262
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Untitled_design__21__7__1_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 279,
             "h": 262
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n22_item_02",
       "tfId": "193388975",
       "goId": "193388974",
       "name": "item 02",
       "active": true,
       "anchoredPos": {
        "x": 197,
        "y": 26
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n23_paper_fan",
         "tfId": "1386697824",
         "goId": "1386697823",
         "name": "paper fan",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 285,
          "y": 280
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Untitled_design__33__6__1_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 285,
             "h": 280
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n24_Next_button",
       "tfId": "695899354",
       "goId": "695899350",
       "name": "Next button",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -476
       },
       "sizeDelta": {
        "x": 559,
        "y": 94
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "button": {
         "interactable": true,
         "onClick": [],
         "targetGraphic": "695899352",
         "transition": 1
        },
        "image": {
         "sprite": {
          "path": "assets/img/Button_Blue__5_.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 559,
           "h": 94
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n25_Bell_text",
       "tfId": "286489567",
       "goId": "286489563",
       "name": "Bell text",
       "active": false,
       "anchoredPos": {
        "x": -224,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n26_image_01",
         "tfId": "1375227703",
         "goId": "1375227702",
         "name": "image 01",
         "active": false,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n27_left",
         "tfId": "1530870314",
         "goId": "1530870313",
         "name": " left ",
         "active": false,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n28_right",
         "tfId": "1665619939",
         "goId": "1665619938",
         "name": "right",
         "active": false,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n29_Text_TMP",
         "tfId": "133203340",
         "goId": "133203339",
         "name": "Text (TMP) ",
         "active": false,
         "anchoredPos": {
          "x": 2,
          "y": 5
         },
         "sizeDelta": {
          "x": 300,
          "y": 46
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Lantern",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      },
      {
       "id": "n30_Paper_fan_text",
       "tfId": "1278580835",
       "goId": "1278580831",
       "name": "Paper fan text ",
       "active": false,
       "anchoredPos": {
        "x": 188,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": false,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n31_image_01",
         "tfId": "1565303187",
         "goId": "1565303186",
         "name": "image 01",
         "active": true,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n32_left",
         "tfId": "1037775127",
         "goId": "1037775126",
         "name": " left ",
         "active": true,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n33_right",
         "tfId": "1081786860",
         "goId": "1081786859",
         "name": "right",
         "active": true,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n34_Text_TMP",
         "tfId": "2114343587",
         "goId": "2114343586",
         "name": "Text (TMP) ",
         "active": false,
         "anchoredPos": {
          "x": 12,
          "y": 5.5
         },
         "sizeDelta": {
          "x": 300,
          "y": 51
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Feather ",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n35_Part_3",
     "tfId": "1387641297",
     "goId": "1387641293",
     "name": "Part 3",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "wmg": {
       "scaleController": "1335478556",
       "nextButton": "1399351699"
      },
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 0
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n36_controller",
       "tfId": "1335478552",
       "goId": "1335478551",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 27,
        "y": -95.2
       },
       "sizeDelta": {
        "x": 378,
        "y": 839
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 378,
           "h": 839
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        },
        "scaleCtrl": {
         "animator": "1335478553"
        }
       },
       "children": [
        {
         "id": "n37_plate",
         "tfId": "2017084620",
         "goId": "2017084619",
         "name": "plate",
         "active": true,
         "anchoredPos": {
          "x": -26,
          "y": 0.0000076294
         },
         "sizeDelta": {
          "x": 802,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/hands_bg.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 802,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n38_plate_1",
           "tfId": "944427442",
           "goId": "944427441",
           "name": "plate 1",
           "active": true,
           "anchoredPos": {
            "x": -241.6,
            "y": 22.2
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1.000031,
            "y": 1.000031
           },
           "rotZ": 4.89,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_579.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          },
          {
           "id": "n39_plate_2",
           "tfId": "153721276",
           "goId": "153721275",
           "name": "plate 2",
           "active": true,
           "anchoredPos": {
            "x": 237.60002,
            "y": 12.699993
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1.0000309,
            "y": 1.0000309
           },
           "rotZ": -9.19,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_580.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n40_Support_base",
         "tfId": "307192169",
         "goId": "307192168",
         "name": "Support base",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": 0
         },
         "sizeDelta": {
          "x": 378,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 378,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n41_left",
         "tfId": "707983201",
         "goId": "707983200",
         "name": "left ",
         "active": true,
         "anchoredPos": {
          "x": -389,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n42_Basket",
           "tfId": "610434766",
           "goId": "610434765",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": -42,
            "y": 23
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n43_Image",
             "tfId": "123582531",
             "goId": "123582530",
             "name": "Image",
             "active": true,
             "anchoredPos": {
              "x": -3.423,
              "y": 78.44
             },
             "sizeDelta": {
              "x": 162,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": true,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "343250460",
               "gameManager": "1329191856",
               "allowedItem": "556865662"
              },
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n44_Book",
               "tfId": "343250457",
               "goId": "343250456",
               "name": "Book",
               "active": false,
               "anchoredPos": {
                "x": 1.808,
                "y": 56.7
               },
               "sizeDelta": {
                "x": 166,
                "y": 167
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "343250460",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/Untitled_design__21__8.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 166,
                   "h": 167
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n45_GameObject",
               "tfId": "899030380",
               "goId": "899030379",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 30
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1.0000306,
                "y": 1.0000306
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n46_Basket",
           "tfId": "71386099",
           "goId": "71386098",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": -42.000046,
            "y": 23.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": true,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n47_Right",
         "tfId": "453035376",
         "goId": "453035375",
         "name": "Right",
         "active": true,
         "anchoredPos": {
          "x": 386,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n48_Basket",
           "tfId": "834062041",
           "goId": "834062040",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 6,
            "y": 2
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n49_Image_1",
             "tfId": "791088834",
             "goId": "791088833",
             "name": "Image (1)",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 72.7
             },
             "sizeDelta": {
              "x": 167.898,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "820408460",
               "gameManager": "1329191856",
               "allowedItem": "922179943"
              },
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n50_Ball",
               "tfId": "820408457",
               "goId": "820408456",
               "name": "Ball",
               "active": false,
               "anchoredPos": {
                "x": 1.051,
                "y": 41.2
               },
               "sizeDelta": {
                "x": 170,
                "y": 197
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "820408460",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/normal_bell.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 170,
                   "h": 197
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n51_GameObject",
               "tfId": "840011256",
               "goId": "840011255",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 1.0510006,
                "y": 30
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n52_Basket",
           "tfId": "1923989108",
           "goId": "1923989107",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": 6.0000095,
            "y": 4.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n53_hand",
         "tfId": "372834862",
         "goId": "P1449564973_820586250070207530",
         "name": "hand",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 400,
          "y": 400
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 0.5,
          "y": 0.5
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/frame_00_delay-0.02s.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 0,
             "h": 0
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": true,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": true
          },
          "animator": {
           "present": true
          }
         }
        },
        {
         "id": "n54_items",
         "tfId": "1783179967",
         "goId": "1783179966",
         "name": "items ",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": -167
         },
         "sizeDelta": {
          "x": 1920,
          "y": 249.36
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n55_Item_2",
           "tfId": "494171848",
           "goId": "494171847",
           "name": "Item 2",
           "active": true,
           "anchoredPos": {
            "x": -685,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n56_Bell",
             "tfId": "556865657",
             "goId": "556865656",
             "name": "Bell",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 0
             },
             "sizeDelta": {
              "x": 191,
              "y": 192
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__21__7.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 191,
                 "h": 192
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "556865660",
               "transition": 1
              },
              "draggable": {
               "itemData": {
                "name": "Bell",
                "weight": 1,
                "itemSprite": {
                 "path": "assets/img/Untitled_design__21__7.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 191,
                  "h": 192
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/Untitled_design__21__7.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 191,
                  "h": 192
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "556865660",
               "dragLayer": null,
               "leftBalance": "71386099",
               "rightBalance": "1923989108"
              }
             }
            },
            {
             "id": "n57_Hint_hand",
             "tfId": "1939250813",
             "goId": "1939250812",
             "name": "Hint hand",
             "active": false,
             "anchoredPos": {
              "x": 642.36993,
              "y": 244.39003
             },
             "sizeDelta": {
              "x": 1702.233,
              "y": 584.781
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n58_Image",
               "tfId": "191411892",
               "goId": "191411891",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -662,
                "y": -27
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n59_Hand",
               "tfId": "636938302",
               "goId": "636938301",
               "name": "Hand",
               "active": false,
               "anchoredPos": {
                "x": -643,
                "y": -263
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n60_Item_1",
           "tfId": "383031978",
           "goId": "383031977",
           "name": "Item 1",
           "active": true,
           "anchoredPos": {
            "x": 629,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n61_paper_fan",
             "tfId": "922179938",
             "goId": "922179937",
             "name": "paper fan",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 0
             },
             "sizeDelta": {
              "x": 193,
              "y": 190
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__33__6.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 193,
                 "h": 190
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "922179941",
               "transition": 1
              },
              "draggable": {
               "itemData": {
                "name": "Paper fan",
                "weight": 0.5,
                "itemSprite": {
                 "path": "assets/img/Untitled_design__33__6.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 193,
                  "h": 190
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/Untitled_design__33__6.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 193,
                  "h": 190
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "922179941",
               "dragLayer": null,
               "leftBalance": "71386099",
               "rightBalance": "1923989108"
              }
             }
            },
            {
             "id": "n62_Hint_hand_1",
             "tfId": "1375116182",
             "goId": "1375116181",
             "name": "Hint hand (1)",
             "active": false,
             "anchoredPos": {
              "x": 31.338,
              "y": 244.39003
             },
             "sizeDelta": {
              "x": 466.297,
              "y": 584.781
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n63_Image",
               "tfId": "526744549",
               "goId": "526744548",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -25
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 0.9
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n64_Hand",
               "tfId": "230743394",
               "goId": "230743393",
               "name": "Hand",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -234
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n65_Arrows",
           "tfId": "994381764",
           "goId": "994381763",
           "name": "Arrows",
           "active": true,
           "anchoredPos": {
            "x": -28,
            "y": 262.2
           },
           "sizeDelta": {
            "x": 100,
            "y": 100
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {},
           "children": [
            {
             "id": "n66_Heavy",
             "tfId": "2063639835",
             "goId": "2063639834",
             "name": "Heavy",
             "active": false,
             "anchoredPos": {
              "x": -655,
              "y": -56
             },
             "sizeDelta": {
              "x": 228,
              "y": 209
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_566.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 228,
                 "h": 209
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n67_Image",
               "tfId": "708462478",
               "goId": "708462477",
               "name": "Image",
               "active": true,
               "anchoredPos": {
                "x": 0,
                "y": 0
               },
               "sizeDelta": {
                "x": 228,
                "y": 209
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/Group_566.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 228,
                   "h": 209
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              }
             ]
            },
            {
             "id": "n68_Heavy_1",
             "tfId": "1063397963",
             "goId": "1063397962",
             "name": "Heavy (1)",
             "active": false,
             "anchoredPos": {
              "x": 656,
              "y": 128
             },
             "sizeDelta": {
              "x": 282,
              "y": 216
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_565.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 282,
                 "h": 216
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          }
         ]
        },
        {
         "id": "n69_Next_button_1",
         "tfId": "1399351700",
         "goId": "1399351699",
         "name": "Next button (1)",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1399351701",
           "transition": 1
          }
         }
        },
        {
         "id": "n70_Try_Again_button",
         "tfId": "1605777928",
         "goId": "1605777927",
         "name": "Try Again button ",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__6_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1605777929",
           "transition": 1
          }
         }
        },
        {
         "id": "n71_Hint_Hand",
         "tfId": "1613115243",
         "goId": "1613115242",
         "name": "Hint Hand",
         "active": false,
         "anchoredPos": {
          "x": 389,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n72_Hint_Hand_1",
         "tfId": "67995925",
         "goId": "67995924",
         "name": "Hint Hand (1)",
         "active": false,
         "anchoredPos": {
          "x": -441,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n73_item",
         "tfId": "527521695",
         "goId": "527521692",
         "name": "item",
         "active": false,
         "anchoredPos": {
          "x": -581,
          "y": -205.99997
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.0000306,
          "y": 1.0000306
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/drag-hand.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 135
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n74_Ghost",
         "tfId": "436825181",
         "goId": "436825180",
         "name": "Ghost",
         "active": false,
         "anchoredPos": {
          "x": -581,
          "y": -205.99997
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.0000306,
          "y": 1.0000306
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/drag-hand.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 135
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n75_Part_4",
     "tfId": "1441447303",
     "goId": "1441447302",
     "name": "Part 4",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n76_controller",
       "tfId": "1194520846",
       "goId": "1194520845",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 0,
        "y": 0
       },
       "sizeDelta": {
        "x": 0,
        "y": 0
       },
       "anchorMin": {
        "x": 0,
        "y": 0
       },
       "anchorMax": {
        "x": 1,
        "y": 1
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n77_Trolly",
         "tfId": "1950793648",
         "goId": "1950793647",
         "name": "Trolly",
         "active": true,
         "anchoredPos": {
          "x": 650,
          "y": -242
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n78_Trolly",
           "tfId": "1365102176",
           "goId": "1365102175",
           "name": "Trolly",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n79_Lantern",
             "tfId": "1585928471",
             "goId": "1585928470",
             "name": "Lantern",
             "active": true,
             "anchoredPos": {
              "x": 142,
              "y": 61
             },
             "sizeDelta": {
              "x": 166,
              "y": 167
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__21__8.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 166,
                 "h": 167
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              },
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "1585928472",
               "gameManager": "1329191856",
               "allowedItem": "49489340"
              }
             }
            }
           ]
          },
          {
           "id": "n80_Trolly",
           "tfId": "426263367",
           "goId": "426263366",
           "name": "Trolly ",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n81_Basket",
         "tfId": "1585022580",
         "goId": "1585022579",
         "name": "Basket",
         "active": true,
         "anchoredPos": {
          "x": -737,
          "y": -294
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n82_Basket",
           "tfId": "1153367870",
           "goId": "1153367869",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 101,
            "y": 257
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n83_Feather",
             "tfId": "1780542569",
             "goId": "1780542568",
             "name": "Feather",
             "active": true,
             "anchoredPos": {
              "x": -147,
              "y": -231
             },
             "sizeDelta": {
              "x": 169,
              "y": 166
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__33__7.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 169,
                 "h": 166
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              },
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": true,
               "acceptDistance": 200,
               "basketImage": "1780542570",
               "gameManager": "1329191856",
               "allowedItem": "1518134199"
              }
             }
            }
           ]
          },
          {
           "id": "n84_Basket",
           "tfId": "1369164241",
           "goId": "1369164240",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 100.999954,
            "y": 256.99997
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n85_image",
         "tfId": "1985224892",
         "goId": "1985224891",
         "name": "image",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n86_Item_01",
         "tfId": "680656687",
         "goId": "680656686",
         "name": "Item 01",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n87_Image",
           "tfId": "49489339",
           "goId": "49489338",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 279,
            "y": 262
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "draggable": {
             "itemData": {
              "name": "book",
              "weight": 1,
              "itemSprite": {
               "path": "assets/img/Untitled_design__21__7__1_.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 279,
                "h": 262
               }
              },
              "droppedSprite": {
               "path": "assets/img/Untitled_design__21__7.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 191,
                "h": 192
               }
              }
             },
             "dropRadius": 30,
             "itemImage": "49489342",
             "dragLayer": "456864594",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            },
            "image": {
             "sprite": {
              "path": "assets/img/Untitled_design__21__7__1_.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 279,
               "h": 262
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n88_Item_02",
         "tfId": "1829836375",
         "goId": "1829836374",
         "name": "Item 02",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n89_Image",
           "tfId": "1518134198",
           "goId": "1518134197",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 0.000002861023,
            "y": 0.000005722046
           },
           "sizeDelta": {
            "x": 285,
            "y": 280
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "draggable": {
             "itemData": {
              "name": "ball",
              "weight": 0.5,
              "itemSprite": {
               "path": "assets/img/Untitled_design__33__6__1_.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 285,
                "h": 280
               }
              },
              "droppedSprite": {
               "path": "assets/img/Untitled_design__33__6.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 193,
                "h": 190
               }
              }
             },
             "dropRadius": 30,
             "itemImage": "1518134201",
             "dragLayer": "456864594",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            },
            "image": {
             "sprite": {
              "path": "assets/img/Untitled_design__33__6__1_.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 285,
               "h": 280
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n90_GameObject",
         "tfId": "456864594",
         "goId": "456864593",
         "name": "GameObject",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {}
        },
        {
         "id": "n91_hint_hand",
         "tfId": "1694135321",
         "goId": "1694135320",
         "name": "hint hand ",
         "active": false,
         "anchoredPos": {
          "x": -165.99998,
          "y": 76.99999
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n92_Image",
           "tfId": "703299216",
           "goId": "703299215",
           "name": "Image",
           "active": false,
           "anchoredPos": {
            "x": 24,
            "y": -50
           },
           "sizeDelta": {
            "x": 794,
            "y": 340
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 794,
               "h": 340
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n93_Hand",
           "tfId": "2027573849",
           "goId": "2027573848",
           "name": "Hand",
           "active": false,
           "anchoredPos": {
            "x": 416,
            "y": -17.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n94_hint_hand_1",
         "tfId": "1010522784",
         "goId": "1010522783",
         "name": "hint hand  (1)",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n95_Image",
           "tfId": "1426263018",
           "goId": "1426263017",
           "name": "Image",
           "active": false,
           "anchoredPos": {
            "x": 15,
            "y": -49
           },
           "sizeDelta": {
            "x": 794,
            "y": 340
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": -4,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 794,
               "h": 340
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n96_Hand",
           "tfId": "876391328",
           "goId": "876391327",
           "name": "Hand",
           "active": false,
           "anchoredPos": {
            "x": -408,
            "y": -25.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n97_Next_button_2",
         "tfId": "2012641899",
         "goId": "2012641898",
         "name": "Next button (2)",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": -475.99997
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [
            {
             "target": "1329191854",
             "method": "SetActive",
             "mode": 6,
             "arg": false
            },
            {
             "target": "1816981549",
             "method": "SetActive",
             "mode": 6,
             "arg": true
            }
           ],
           "targetGraphic": "2012641901",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n98_ConfettiBlast",
         "tfId": "1790975095",
         "goId": "P1382047776_5798539967110598939",
         "name": "ConfettiBlast",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 0,
          "y": 0
         },
         "anchorMin": {
          "x": 0,
          "y": 0
         },
         "anchorMax": {
          "x": 0,
          "y": 0
         },
         "pivot": {
          "x": 0,
          "y": 0
         },
         "scale": {
          "x": 199.99998,
          "y": 199.99998
         },
         "rotZ": 0,
         "components": {
          "particles": {
           "kind": "confetti"
          }
         },
         "children": [
          {
           "id": "n99_SmallGlow",
           "tfId": "P1382047776_5751487847434861004",
           "goId": "P1382047776_7809919986099652209",
           "name": "SmallGlow",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 0,
            "y": 0
           },
           "anchorMin": {
            "x": 0,
            "y": 0
           },
           "anchorMax": {
            "x": 0,
            "y": 0
           },
           "pivot": {
            "x": 0,
            "y": 0
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "particles": {
             "kind": "confetti"
            }
           }
          },
          {
           "id": "n100_BrakeDown",
           "tfId": "P1382047776_5806848637278835358",
           "goId": "P1382047776_6273870505818435593",
           "name": "BrakeDown",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 0,
            "y": 0
           },
           "anchorMin": {
            "x": 0,
            "y": 0
           },
           "anchorMax": {
            "x": 0,
            "y": 0
           },
           "pivot": {
            "x": 0,
            "y": 0
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "particles": {
             "kind": "confetti"
            }
           }
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "n101_Message_bar",
     "tfId": "1443359453",
     "goId": "1443359452",
     "name": "Message bar",
     "active": true,
     "anchoredPos": {
      "x": -14,
      "y": -121
     },
     "sizeDelta": {
      "x": 1786,
      "y": 242
     },
     "anchorMin": {
      "x": 0.5,
      "y": 1
     },
     "anchorMax": {
      "x": 0.5,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Group_578.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1786,
         "h": 242
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n102_Text_TMP",
       "tfId": "886743194",
       "goId": "886743193",
       "name": "Text (TMP)",
       "active": true,
       "anchoredPos": {
        "x": -24.5,
        "y": 13
       },
       "sizeDelta": {
        "x": 1501,
        "y": 54
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "tmp": {
         "text": "Tap the box.",
         "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
         "fontSize": 48,
         "autoSize": false,
         "sizeMin": 18,
         "sizeMax": 72,
         "alignH": 1,
         "alignV": 512,
         "charSpacing": 0,
         "lineSpacing": 0,
         "wordSpacing": 0,
         "style": 0,
         "color": {
          "r": 0.58431375,
          "g": 0.28627452,
          "b": 0.11764706,
          "a": 1
         },
         "enabled": true,
         "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
        }
       }
      }
     ]
    },
    {
     "id": "n103_Image",
     "tfId": "989806302",
     "goId": "989806301",
     "name": "Image",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5029.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    },
    {
     "id": "n104_Image_1",
     "tfId": "1531263569",
     "goId": "1531263568",
     "name": "Image (1)",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5024.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    }
   ]
  },
  {
   "id": "n105_Level_1",
   "tfId": "1816981550",
   "goId": "1816981549",
   "name": "Level 1",
   "active": false,
   "anchoredPos": {
    "x": 0,
    "y": 0
   },
   "sizeDelta": {
    "x": 0,
    "y": 0
   },
   "anchorMin": {
    "x": 0,
    "y": 0
   },
   "anchorMax": {
    "x": 1,
    "y": 1
   },
   "pivot": {
    "x": 0.5,
    "y": 0.5
   },
   "scale": {
    "x": 1,
    "y": 1
   },
   "rotZ": 0,
   "components": {
    "canvasGroup": {
     "alpha": 1,
     "interactable": true,
     "blocksRaycasts": true
    },
    "image": {
     "sprite": {
      "path": "assets/img/Slide_16_9_-_184.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 1920,
       "h": 1080
      }
     },
     "type": 0,
     "fillMethod": 4,
     "fillOrigin": 0,
     "fillAmount": 1,
     "fillClockwise": true,
     "preserveAspect": false,
     "color": {
      "r": 1,
      "g": 1,
      "b": 1,
      "a": 1
     },
     "raycast": true,
     "enabled": true,
     "maskable": true
    },
    "_gm": "1816981556"
   },
   "children": [
    {
     "id": "n106_Part_1",
     "tfId": "1847748176",
     "goId": "1847748175",
     "name": "Part 1",
     "active": true,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_192.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n107_box_iteams",
       "tfId": "272711126",
       "goId": "272711125",
       "name": "box iteams",
       "active": true,
       "anchoredPos": {
        "x": -31.039,
        "y": 101.88
       },
       "sizeDelta": {
        "x": 577.935,
        "y": 876.24
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n108_box_02",
         "tfId": "296164636",
         "goId": "296164635",
         "name": "box 02",
         "active": true,
         "anchoredPos": {
          "x": 31,
          "y": 17.9
         },
         "sizeDelta": {
          "x": 684,
          "y": 843
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_538-1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 684,
             "h": 843
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n109_highlight",
         "tfId": "1343559295",
         "goId": "1343559294",
         "name": "highlight",
         "active": true,
         "anchoredPos": {
          "x": 31.039,
          "y": -94
         },
         "sizeDelta": {
          "x": 1920,
          "y": 1080
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Glow.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 1920,
             "h": 1080
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.8666667
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n110_Image",
           "tfId": "2132642727",
           "goId": "2132642726",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": -23,
            "y": -104
           },
           "sizeDelta": {
            "x": 1882,
            "y": 1080
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Vector__6_.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 1882,
               "h": 1080
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n111_box_open",
         "tfId": "1870489378",
         "goId": "1870489377",
         "name": "box open",
         "active": true,
         "anchoredPos": {
          "x": 20,
          "y": -79.100006
         },
         "sizeDelta": {
          "x": 647,
          "y": 649
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/001.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 647,
             "h": 649
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1870489379",
           "transition": 1
          }
         }
        },
        {
         "id": "n112_box_top",
         "tfId": "288834294",
         "goId": "288834293",
         "name": "box top",
         "active": true,
         "anchoredPos": {
          "x": 39,
          "y": 95.9
         },
         "sizeDelta": {
          "x": 690,
          "y": 286
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "288834296",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__13__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 690,
             "h": 286
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n113_Lantern",
         "tfId": "928567838",
         "goId": "928567837",
         "name": " Lantern",
         "active": false,
         "anchoredPos": {
          "x": 27.839039,
          "y": 65.99945
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.99999994,
          "y": -5.2154064e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n114_object",
           "tfId": "545825454",
           "goId": "545825453",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 152,
            "y": 140
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 152,
               "h": 140
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n115_Feather",
         "tfId": "1530924159",
         "goId": "1530924158",
         "name": " Feather ",
         "active": false,
         "anchoredPos": {
          "x": 33.538876,
          "y": 65.9996
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 2.0489097e-8,
          "y": -1.6763806e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n116_object",
           "tfId": "216885473",
           "goId": "216885472",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 13.599998,
            "y": 0
           },
           "sizeDelta": {
            "x": 170,
            "y": 197
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Untitled_design__34__3.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 170,
               "h": 197
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        }
       ]
      },
      {
       "id": "n117_roy",
       "tfId": "838903400",
       "goId": "838903399",
       "name": "roy",
       "active": true,
       "anchoredPos": {
        "x": 647,
        "y": -63
       },
       "sizeDelta": {
        "x": 468,
        "y": 777
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_May_4__2026__11_23_34_AM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 468,
           "h": 777
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n118_hand",
       "tfId": "1410885316",
       "goId": "P164832639_820586250070207530",
       "name": "hand",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -86.23999
       },
       "sizeDelta": {
        "x": 500,
        "y": 500
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 0.19999999,
        "y": 0.19999999
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/frame_00_delay-0.02s.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 0,
           "h": 0
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": true,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": false,
         "enabled": true,
         "maskable": true
        },
        "animator": {
         "present": true
        }
       }
      }
     ]
    },
    {
     "id": "n119_Part_2",
     "tfId": "766141769",
     "goId": "766141768",
     "name": "Part 2",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Rectangle_100.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n120_item_01",
       "tfId": "1611492994",
       "goId": "1611492993",
       "name": "item 01",
       "active": true,
       "anchoredPos": {
        "x": -225,
        "y": 29
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n121_Lantern",
         "tfId": "1728978502",
         "goId": "1728978501",
         "name": "Lantern",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 257,
          "y": 237
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__26__3.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 257,
             "h": 237
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n122_item_02",
       "tfId": "778196145",
       "goId": "778196144",
       "name": "item 02",
       "active": true,
       "anchoredPos": {
        "x": 197,
        "y": 26
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n123_Feather",
         "tfId": "2001159590",
         "goId": "2001159589",
         "name": "Feather",
         "active": true,
         "anchoredPos": {
          "x": -0.0000076294,
          "y": 9.5367e-7
         },
         "sizeDelta": {
          "x": 254,
          "y": 295
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Untitled_design__34__3_1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 254,
             "h": 295
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n124_Next_button",
       "tfId": "864456798",
       "goId": "864456797",
       "name": "Next button",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -476
       },
       "sizeDelta": {
        "x": 559,
        "y": 94
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "button": {
         "interactable": true,
         "onClick": [],
         "targetGraphic": "864456800",
         "transition": 1
        },
        "image": {
         "sprite": {
          "path": "assets/img/Button_Blue__5_.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 559,
           "h": 94
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n125_Lantern_text",
       "tfId": "1991766612",
       "goId": "1991766611",
       "name": "Lantern text",
       "active": false,
       "anchoredPos": {
        "x": -224,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n126_image_01",
         "tfId": "2112127759",
         "goId": "2112127758",
         "name": "image 01",
         "active": false,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n127_left",
         "tfId": "2100766303",
         "goId": "2100766302",
         "name": " left ",
         "active": false,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n128_right",
         "tfId": "1974863953",
         "goId": "1974863952",
         "name": "right",
         "active": false,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n129_Text_TMP",
         "tfId": "2133757656",
         "goId": "2133757655",
         "name": "Text (TMP) ",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 10.1
         },
         "sizeDelta": {
          "x": 300,
          "y": 48
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Ribbon",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      },
      {
       "id": "n130_Feather_text",
       "tfId": "1549500688",
       "goId": "1549500687",
       "name": "Feather text ",
       "active": false,
       "anchoredPos": {
        "x": 188,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": false,
         "maskable": true
        },
        "animator": {
         "present": true
        }
       },
       "children": [
        {
         "id": "n131_image_01",
         "tfId": "25239826",
         "goId": "25239825",
         "name": "image 01",
         "active": true,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n132_left",
         "tfId": "1141494650",
         "goId": "1141494649",
         "name": " left ",
         "active": true,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n133_right",
         "tfId": "294017538",
         "goId": "294017537",
         "name": "right",
         "active": true,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n134_Text_TMP",
         "tfId": "654274314",
         "goId": "654274313",
         "name": "Text (TMP) ",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 9.3
         },
         "sizeDelta": {
          "x": 300,
          "y": 48
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Bell",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n135_Part_3",
     "tfId": "1253624060",
     "goId": "1253624059",
     "name": "Part 3",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 0
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      },
      "wmg": {
       "scaleController": "1368258812",
       "nextButton": "437715196"
      }
     },
     "children": [
      {
       "id": "n136_controller",
       "tfId": "1368258807",
       "goId": "1368258806",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 27,
        "y": -95.2
       },
       "sizeDelta": {
        "x": 378,
        "y": 839
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 378,
           "h": 839
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        },
        "animator": {
         "present": true
        },
        "scaleCtrl": {
         "animator": "1368258811"
        }
       },
       "children": [
        {
         "id": "n137_plate",
         "tfId": "42231949",
         "goId": "42231948",
         "name": "plate",
         "active": true,
         "anchoredPos": {
          "x": -28,
          "y": 0.0000076294
         },
         "sizeDelta": {
          "x": 802,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/hands_bg.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 802,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n138_plate_1",
           "tfId": "693874669",
           "goId": "693874668",
           "name": "plate 1",
           "active": true,
           "anchoredPos": {
            "x": -239.6,
            "y": 22.2
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 4.89,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_579.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          },
          {
           "id": "n139_plate_2",
           "tfId": "1077885612",
           "goId": "1077885611",
           "name": "plate 2",
           "active": true,
           "anchoredPos": {
            "x": 239.6,
            "y": 12.7
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": -9.19,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_580.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n140_Support_base",
         "tfId": "1139074223",
         "goId": "1139074222",
         "name": "Support base",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": 0
         },
         "sizeDelta": {
          "x": 378,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 378,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n141_left",
         "tfId": "1024314081",
         "goId": "1024314080",
         "name": "left ",
         "active": true,
         "anchoredPos": {
          "x": -389,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n142_Basket",
           "tfId": "852393468",
           "goId": "852393467",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": -42,
            "y": 23
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n143_Image",
             "tfId": "308246517",
             "goId": "308246516",
             "name": "Image",
             "active": true,
             "anchoredPos": {
              "x": -3.423,
              "y": 56.848
             },
             "sizeDelta": {
              "x": 162,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "basket": {
               "isLeftBasket": true,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 100,
               "basketImage": "391120113",
               "gameManager": "1816981556",
               "allowedItem": "1099802339"
              }
             },
             "children": [
              {
               "id": "n144_Book",
               "tfId": "391120110",
               "goId": "391120109",
               "name": "Book",
               "active": false,
               "anchoredPos": {
                "x": 1.808,
                "y": 36
               },
               "sizeDelta": {
                "x": 166,
                "y": 167
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "391120113",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/Untitled_design__21__8.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 166,
                   "h": 167
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n145_GameObject",
               "tfId": "1225038564",
               "goId": "1225038563",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 1.8080051,
                "y": 41.98
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n146_Basket",
           "tfId": "602244416",
           "goId": "602244415",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": -42.000046,
            "y": 23.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": true,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n147_Right",
         "tfId": "1916420462",
         "goId": "1916420461",
         "name": "Right",
         "active": true,
         "anchoredPos": {
          "x": 386,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n148_Basket",
           "tfId": "810986393",
           "goId": "810986392",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 6,
            "y": 2
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n149_Image_1",
             "tfId": "849400875",
             "goId": "849400874",
             "name": "Image (1)",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 67.09
             },
             "sizeDelta": {
              "x": 167.898,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "basket": {
               "isLeftBasket": false,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 100,
               "basketImage": "938265685",
               "gameManager": "1816981556",
               "allowedItem": "428222836"
              }
             },
             "children": [
              {
               "id": "n150_Ball",
               "tfId": "938265682",
               "goId": "938265681",
               "name": "Ball",
               "active": false,
               "anchoredPos": {
                "x": 1.051,
                "y": 0
               },
               "sizeDelta": {
                "x": 170,
                "y": 197
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "938265685",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/normal_bell.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 170,
                   "h": 197
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n151_GameObject",
               "tfId": "1114524563",
               "goId": "1114524562",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 50.73801
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1.0000306,
                "y": 1.0000306
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n152_Basket",
           "tfId": "461060782",
           "goId": "461060781",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": 6.0000095,
            "y": 4.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n153_hand",
         "tfId": "237851303",
         "goId": "P1803652730_820586250070207530",
         "name": "hand",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 400,
          "y": 400
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 0.5,
          "y": 0.5
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/frame_00_delay-0.02s.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 0,
             "h": 0
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": true,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": true
          },
          "animator": {
           "present": true
          }
         }
        },
        {
         "id": "n154_items",
         "tfId": "2027898236",
         "goId": "2027898235",
         "name": "items ",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": -167
         },
         "sizeDelta": {
          "x": 1920,
          "y": 249.36
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n155_Item_2",
           "tfId": "523460434",
           "goId": "523460433",
           "name": "Item 2",
           "active": true,
           "anchoredPos": {
            "x": -685,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n156_Book",
             "tfId": "1099802334",
             "goId": "1099802333",
             "name": "Book",
             "active": true,
             "anchoredPos": {
              "x": -0.000032425,
              "y": 0
             },
             "sizeDelta": {
              "x": 152,
              "y": 140
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "1099802337",
               "transition": 1
              },
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 152,
                 "h": 140
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "draggable": {
               "itemData": {
                "name": "Ribbon",
                "weight": 0.5,
                "itemSprite": {
                 "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 152,
                  "h": 140
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 152,
                  "h": 140
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "1099802337",
               "dragLayer": null,
               "leftBalance": "602244416",
               "rightBalance": "461060782"
              }
             }
            },
            {
             "id": "n157_Hint_hand",
             "tfId": "553154539",
             "goId": "553154538",
             "name": "Hint hand",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 0.000015258789
             },
             "sizeDelta": {
              "x": 150,
              "y": 150
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n158_Image",
               "tfId": "136176351",
               "goId": "136176350",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 291
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n159_item",
               "tfId": "896364973",
               "goId": "896364972",
               "name": "item",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 0
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n160_Ghost",
               "tfId": "2126458311",
               "goId": "2126458310",
               "name": "Ghost",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 0
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n161_Item_1",
           "tfId": "1029409258",
           "goId": "1029409257",
           "name": "Item 1",
           "active": true,
           "anchoredPos": {
            "x": 629,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n162_Ball",
             "tfId": "428222831",
             "goId": "428222830",
             "name": "Ball",
             "active": true,
             "anchoredPos": {
              "x": 0.00002861,
              "y": 0
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "428222834",
               "transition": 1
              },
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/normal_bell.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "draggable": {
               "itemData": {
                "name": "Bell",
                "weight": 1,
                "itemSprite": {
                 "path": "assets/img/Untitled_design__34__2.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 146,
                  "h": 197
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/Untitled_design__34__2.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 146,
                  "h": 197
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "428222834",
               "dragLayer": null,
               "leftBalance": "602244416",
               "rightBalance": "461060782"
              }
             }
            },
            {
             "id": "n163_Hint_hand_1",
             "tfId": "1380835336",
             "goId": "1380835335",
             "name": "Hint hand (1)",
             "active": true,
             "anchoredPos": {
              "x": 0.0000019073486,
              "y": 0.000015258789
             },
             "sizeDelta": {
              "x": 150,
              "y": 150
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n164_Image",
               "tfId": "368290240",
               "goId": "368290239",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -25
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 0.9
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n165_Item",
               "tfId": "1911206510",
               "goId": "1911206509",
               "name": "Item",
               "active": false,
               "anchoredPos": {
                "x": 1.5643309e-10,
                "y": 0
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n166_Ghost",
               "tfId": "319362080",
               "goId": "319362079",
               "name": "Ghost",
               "active": false,
               "anchoredPos": {
                "x": 1.5643309e-10,
                "y": 0
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n167_Arrows",
           "tfId": "251478040",
           "goId": "251478039",
           "name": "Arrows",
           "active": true,
           "anchoredPos": {
            "x": -28,
            "y": 262.2
           },
           "sizeDelta": {
            "x": 100,
            "y": 100
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {},
           "children": [
            {
             "id": "n168_Heavy",
             "tfId": "1782665744",
             "goId": "1782665743",
             "name": "Heavy",
             "active": false,
             "anchoredPos": {
              "x": 655,
              "y": -56
             },
             "sizeDelta": {
              "x": 228,
              "y": 209
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_566.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 228,
                 "h": 209
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n169_Image",
               "tfId": "1858108743",
               "goId": "1858108742",
               "name": "Image",
               "active": true,
               "anchoredPos": {
                "x": 0,
                "y": 0
               },
               "sizeDelta": {
                "x": 228,
                "y": 209
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/Group_566.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 228,
                   "h": 209
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              }
             ]
            },
            {
             "id": "n170_Heavy_1",
             "tfId": "186930072",
             "goId": "186930071",
             "name": "Heavy (1)",
             "active": false,
             "anchoredPos": {
              "x": -605,
              "y": 128
             },
             "sizeDelta": {
              "x": 282,
              "y": 216
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_565.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 282,
                 "h": 216
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          }
         ]
        },
        {
         "id": "n171_Next_button_1",
         "tfId": "437715197",
         "goId": "437715196",
         "name": "Next button (1)",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "437715199",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n172_Try_Again_button",
         "tfId": "1603852427",
         "goId": "1603852426",
         "name": "Try Again button ",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1603852429",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__6_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n173_Hint_Hand",
         "tfId": "291199844",
         "goId": "291199843",
         "name": "Hint Hand",
         "active": false,
         "anchoredPos": {
          "x": 389,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n174_Hint_Hand_1",
         "tfId": "661394101",
         "goId": "661394100",
         "name": "Hint Hand (1)",
         "active": false,
         "anchoredPos": {
          "x": -441,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        }
       ]
      },
      {
       "id": "n175_item",
       "tfId": "1975956666",
       "goId": "1975956663",
       "name": "item",
       "active": false,
       "anchoredPos": {
        "x": -554,
        "y": -301.19995
       },
       "sizeDelta": {
        "x": 129,
        "y": 155
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1.0000306,
        "y": 1.0000306
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/drag-hand.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 135,
           "h": 135
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": false,
         "enabled": true,
         "maskable": false
        }
       }
      },
      {
       "id": "n176_Ghost",
       "tfId": "941114282",
       "goId": "941114281",
       "name": "Ghost",
       "active": false,
       "anchoredPos": {
        "x": -554,
        "y": -301.19995
       },
       "sizeDelta": {
        "x": 129,
        "y": 155
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1.0000306,
        "y": 1.0000306
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/drag-hand.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 135,
           "h": 135
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": false,
         "enabled": true,
         "maskable": false
        }
       }
      }
     ]
    },
    {
     "id": "n177_Part_4",
     "tfId": "1682871666",
     "goId": "1682871665",
     "name": "Part 4",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n178_controller",
       "tfId": "962075151",
       "goId": "962075150",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 0,
        "y": 0
       },
       "sizeDelta": {
        "x": 0,
        "y": 0
       },
       "anchorMin": {
        "x": 0,
        "y": 0
       },
       "anchorMax": {
        "x": 1,
        "y": 1
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n179_Trolly",
         "tfId": "1407501867",
         "goId": "1407501866",
         "name": "Trolly",
         "active": true,
         "anchoredPos": {
          "x": 650,
          "y": -242
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n180_Trolly",
           "tfId": "2009917335",
           "goId": "2009917334",
           "name": "Trolly",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n181_Lantern",
             "tfId": "1213860529",
             "goId": "1213860528",
             "name": "Lantern",
             "active": true,
             "anchoredPos": {
              "x": 142,
              "y": 61
             },
             "sizeDelta": {
              "x": 166,
              "y": 167
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__21__8.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 166,
                 "h": 167
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n182_Bell",
             "tfId": "2146899736",
             "goId": "2146899735",
             "name": "Bell",
             "active": true,
             "anchoredPos": {
              "x": 39,
              "y": 45.99997
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__34__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 146,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": false,
               "acceptDistance": 100,
               "basketImage": "2146899737",
               "gameManager": "1816981556",
               "allowedItem": null
              }
             }
            }
           ]
          },
          {
           "id": "n183_Trolly",
           "tfId": "1710902516",
           "goId": "1710902515",
           "name": "Trolly ",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n184_Basket",
         "tfId": "404194167",
         "goId": "404194166",
         "name": "Basket",
         "active": true,
         "anchoredPos": {
          "x": -737,
          "y": -294
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n185_Basket",
           "tfId": "155635169",
           "goId": "155635168",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 101,
            "y": 257
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n186_Feather",
             "tfId": "762318764",
             "goId": "762318763",
             "name": "Feather",
             "active": true,
             "anchoredPos": {
              "x": -147,
              "y": -231
             },
             "sizeDelta": {
              "x": 169,
              "y": 166
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__33__7.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 169,
                 "h": 166
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n187_Ribbon",
             "tfId": "310081032",
             "goId": "310081031",
             "name": "Ribbon",
             "active": true,
             "anchoredPos": {
              "x": -25.144043,
              "y": -231
             },
             "sizeDelta": {
              "x": 173.706,
              "y": 140
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 152,
                 "h": 140
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": true,
               "acceptDistance": 100,
               "basketImage": "310081033",
               "gameManager": "1816981556",
               "allowedItem": null
              }
             }
            }
           ]
          },
          {
           "id": "n188_Basket",
           "tfId": "1295389900",
           "goId": "1295389899",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 100.999954,
            "y": 256.99997
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n189_image",
         "tfId": "2133754395",
         "goId": "2133754394",
         "name": "image",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n190_Item_01",
         "tfId": "1292219491",
         "goId": "1292219490",
         "name": "Item 01",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n191_Image",
           "tfId": "643978167",
           "goId": "643978166",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 257,
            "y": 237
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__26__3.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 257,
               "h": 237
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            },
            "draggable": {
             "itemData": {
              "name": "book",
              "weight": 0.5,
              "itemSprite": {
               "path": "assets/img/The_Royal_Bloom_Fest__26__3.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 257,
                "h": 237
               }
              },
              "droppedSprite": {
               "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 152,
                "h": 140
               }
              }
             },
             "dropRadius": 40,
             "itemImage": "643978168",
             "dragLayer": "1043317579",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            }
           }
          }
         ]
        },
        {
         "id": "n192_Item_02",
         "tfId": "2046629794",
         "goId": "2046629793",
         "name": "Item 02",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n193_Image",
           "tfId": "1514132913",
           "goId": "1514132912",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 270,
            "y": 281
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Untitled_design__34__3_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 254,
               "h": 295
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            },
            "draggable": {
             "itemData": {
              "name": "ball",
              "weight": 1,
              "itemSprite": {
               "path": "assets/img/Untitled_design__34__3_1.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 254,
                "h": 295
               }
              },
              "droppedSprite": {
               "path": "assets/img/Untitled_design__34__2.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 146,
                "h": 197
               }
              }
             },
             "dropRadius": 40,
             "itemImage": "1514132914",
             "dragLayer": "1043317579",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            }
           }
          }
         ]
        },
        {
         "id": "n194_GameObject",
         "tfId": "1043317579",
         "goId": "1043317578",
         "name": "GameObject",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {}
        },
        {
         "id": "n195_hint_hand",
         "tfId": "296114431",
         "goId": "296114430",
         "name": "hint hand ",
         "active": false,
         "anchoredPos": {
          "x": -165.99998,
          "y": 76.99999
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n196_Image",
           "tfId": "522438786",
           "goId": "522438785",
           "name": "Image",
           "active": false,
           "anchoredPos": {
            "x": 637,
            "y": -123
           },
           "sizeDelta": {
            "x": 456,
            "y": 290
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 456,
               "h": 290
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n197_Hand",
           "tfId": "1429723000",
           "goId": "1429722999",
           "name": "Hand",
           "active": false,
           "anchoredPos": {
            "x": 416,
            "y": -17.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n198_hint_hand_1",
         "tfId": "698604055",
         "goId": "698604054",
         "name": "hint hand  (1)",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n199_Image",
           "tfId": "281079208",
           "goId": "281079207",
           "name": "Image",
           "active": false,
           "anchoredPos": {
            "x": -642,
            "y": -103.00001
           },
           "sizeDelta": {
            "x": 456,
            "y": 290
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": -4,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 456,
               "h": 290
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n200_Hand",
           "tfId": "1210163829",
           "goId": "1210163828",
           "name": "Hand",
           "active": false,
           "anchoredPos": {
            "x": -408,
            "y": -25.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n201_Next_button_2",
         "tfId": "891882089",
         "goId": "891882088",
         "name": "Next button (2)",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": -475.99997
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [
            {
             "target": "1816981549",
             "method": "SetActive",
             "mode": 6,
             "arg": false
            },
            {
             "target": "1335508914",
             "method": "SetActive",
             "mode": 6,
             "arg": true
            }
           ],
           "targetGraphic": "891882091",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n202_Message_bar",
     "tfId": "1347841788",
     "goId": "1347841787",
     "name": "Message bar",
     "active": true,
     "anchoredPos": {
      "x": -14,
      "y": -121
     },
     "sizeDelta": {
      "x": 1786,
      "y": 242
     },
     "anchorMin": {
      "x": 0.5,
      "y": 1
     },
     "anchorMax": {
      "x": 0.5,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Group_578.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1786,
         "h": 242
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n203_Text_TMP",
       "tfId": "1907861578",
       "goId": "1907861577",
       "name": "Text (TMP)",
       "active": true,
       "anchoredPos": {
        "x": -24.5,
        "y": 13
       },
       "sizeDelta": {
        "x": 1501,
        "y": 54
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "tmp": {
         "text": "Tap the box.",
         "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
         "fontSize": 48,
         "autoSize": false,
         "sizeMin": 18,
         "sizeMax": 72,
         "alignH": 1,
         "alignV": 512,
         "charSpacing": 0,
         "lineSpacing": 0,
         "wordSpacing": 0,
         "style": 0,
         "color": {
          "r": 0.58431375,
          "g": 0.28627452,
          "b": 0.11764706,
          "a": 1
         },
         "enabled": true,
         "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
        }
       }
      }
     ]
    },
    {
     "id": "n204_Image",
     "tfId": "614809079",
     "goId": "614809078",
     "name": "Image",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5028.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    },
    {
     "id": "n205_Image_1",
     "tfId": "962991863",
     "goId": "962991862",
     "name": "Image (1)",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5033.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    }
   ]
  },
  {
   "id": "n206_Level_2",
   "tfId": "1335508915",
   "goId": "1335508914",
   "name": "Level 2",
   "active": false,
   "anchoredPos": {
    "x": 0,
    "y": 0
   },
   "sizeDelta": {
    "x": 0,
    "y": 0
   },
   "anchorMin": {
    "x": 0,
    "y": 0
   },
   "anchorMax": {
    "x": 1,
    "y": 1
   },
   "pivot": {
    "x": 0.5,
    "y": 0.5
   },
   "scale": {
    "x": 1,
    "y": 1
   },
   "rotZ": 0,
   "components": {
    "_gm": "1335508916",
    "canvasGroup": {
     "alpha": 1,
     "interactable": true,
     "blocksRaycasts": true
    },
    "image": {
     "sprite": {
      "path": "assets/img/Slide_16_9_-_184.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 1920,
       "h": 1080
      }
     },
     "type": 0,
     "fillMethod": 4,
     "fillOrigin": 0,
     "fillAmount": 1,
     "fillClockwise": true,
     "preserveAspect": false,
     "color": {
      "r": 1,
      "g": 1,
      "b": 1,
      "a": 1
     },
     "raycast": true,
     "enabled": true,
     "maskable": true
    }
   },
   "children": [
    {
     "id": "n207_Part_1",
     "tfId": "250076007",
     "goId": "250076004",
     "name": "Part 1",
     "active": true,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_192.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n208_box_iteams",
       "tfId": "1039590162",
       "goId": "1039590161",
       "name": "box iteams",
       "active": true,
       "anchoredPos": {
        "x": -31.039,
        "y": 101.88
       },
       "sizeDelta": {
        "x": 577.935,
        "y": 876.24
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n209_box_02",
         "tfId": "672602821",
         "goId": "672602820",
         "name": "box 02",
         "active": true,
         "anchoredPos": {
          "x": 31,
          "y": 17.9
         },
         "sizeDelta": {
          "x": 684,
          "y": 843
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_541-1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 684,
             "h": 843
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n210_highlight",
         "tfId": "987700980",
         "goId": "987700979",
         "name": "highlight",
         "active": true,
         "anchoredPos": {
          "x": 31.039,
          "y": -94
         },
         "sizeDelta": {
          "x": 1920,
          "y": 1080
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Glow.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 1920,
             "h": 1080
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.8666667
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n211_Image",
           "tfId": "234496817",
           "goId": "234496816",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": -23,
            "y": -104
           },
           "sizeDelta": {
            "x": 1882,
            "y": 1080
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Vector__6_.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 1882,
               "h": 1080
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n212_box_open",
         "tfId": "853589587",
         "goId": "853589586",
         "name": "box open",
         "active": true,
         "anchoredPos": {
          "x": 36.00003,
          "y": -53.000004
         },
         "sizeDelta": {
          "x": 652,
          "y": 649
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/003.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 652,
             "h": 649
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "853589589",
           "transition": 1
          }
         }
        },
        {
         "id": "n213_box_top",
         "tfId": "1669222112",
         "goId": "1669222111",
         "name": "box top",
         "active": true,
         "anchoredPos": {
          "x": 38.718,
          "y": 118.919
         },
         "sizeDelta": {
          "x": 674.431,
          "y": 319.806
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1669222114",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__15__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 597,
             "h": 285
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n214_Lantern",
         "tfId": "1044350749",
         "goId": "1044350748",
         "name": " Lantern",
         "active": false,
         "anchoredPos": {
          "x": 27.839039,
          "y": 65.99945
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.99999994,
          "y": -5.2154064e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n215_object",
           "tfId": "2094348020",
           "goId": "2094348019",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 170,
            "y": 197
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/normal_bell.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 170,
               "h": 197
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n216_Feather",
         "tfId": "552235646",
         "goId": "552235645",
         "name": " Feather ",
         "active": false,
         "anchoredPos": {
          "x": 33.538876,
          "y": 65.9996
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 2.0489097e-8,
          "y": -1.6763806e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n217_object",
           "tfId": "714007127",
           "goId": "714007126",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 170,
            "y": 197
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/paper_fan.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 170,
               "h": 197
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        }
       ]
      },
      {
       "id": "n218_roy",
       "tfId": "1806826746",
       "goId": "1806826745",
       "name": "roy",
       "active": true,
       "anchoredPos": {
        "x": 647,
        "y": -63
       },
       "sizeDelta": {
        "x": 468,
        "y": 777
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_May_4__2026__11_23_34_AM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 468,
           "h": 777
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n219_hand",
       "tfId": "645637478",
       "goId": "P645637477_820586250070207530",
       "name": "hand",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -86.23999
       },
       "sizeDelta": {
        "x": 500,
        "y": 500
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 0.19999999,
        "y": 0.19999999
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/frame_00_delay-0.02s.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 0,
           "h": 0
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": true,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": false,
         "enabled": true,
         "maskable": true
        },
        "animator": {
         "present": true
        }
       }
      }
     ]
    },
    {
     "id": "n220_Part_2",
     "tfId": "41087202",
     "goId": "41087199",
     "name": "Part 2",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Rectangle_100.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n221_item_01",
       "tfId": "193394614",
       "goId": "193394613",
       "name": "item 01",
       "active": true,
       "anchoredPos": {
        "x": -225,
        "y": 29
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n222_Bell",
         "tfId": "1892653784",
         "goId": "1892653783",
         "name": "Bell",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 254,
          "y": 295
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Untitled_design__34__3_1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 254,
             "h": 295
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n223_item_02",
       "tfId": "1197120854",
       "goId": "1197120853",
       "name": "item 02",
       "active": true,
       "anchoredPos": {
        "x": 197,
        "y": 26
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n224_paper_fan",
         "tfId": "1999485981",
         "goId": "1999485980",
         "name": "paper fan",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 232.768,
          "y": 269.737
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/paper_fan.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 170,
             "h": 197
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n225_Next_button",
       "tfId": "907390819",
       "goId": "907390815",
       "name": "Next button",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -476
       },
       "sizeDelta": {
        "x": 559,
        "y": 94
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "button": {
         "interactable": true,
         "onClick": [],
         "targetGraphic": "907390817",
         "transition": 1
        },
        "image": {
         "sprite": {
          "path": "assets/img/Button_Blue__5_.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 559,
           "h": 94
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n226_Bell_text",
       "tfId": "78254506",
       "goId": "78254502",
       "name": "Bell text",
       "active": false,
       "anchoredPos": {
        "x": -224,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n227_image_01",
         "tfId": "54464955",
         "goId": "54464954",
         "name": "image 01",
         "active": false,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n228_left",
         "tfId": "1464606165",
         "goId": "1464606164",
         "name": " left ",
         "active": false,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n229_right",
         "tfId": "1048697045",
         "goId": "1048697044",
         "name": "right",
         "active": false,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n230_Text_TMP",
         "tfId": "607787915",
         "goId": "607787914",
         "name": "Text (TMP) ",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 10.1
         },
         "sizeDelta": {
          "x": 300,
          "y": 48
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Bell",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      },
      {
       "id": "n231_Paper_fan_text",
       "tfId": "1526743940",
       "goId": "1526743936",
       "name": "Paper fan text ",
       "active": false,
       "anchoredPos": {
        "x": 188,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": false,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n232_image_01",
         "tfId": "1729222327",
         "goId": "1729222326",
         "name": "image 01",
         "active": true,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n233_left",
         "tfId": "1045733056",
         "goId": "1045733055",
         "name": " left ",
         "active": true,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n234_right",
         "tfId": "631284228",
         "goId": "631284227",
         "name": "right",
         "active": true,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n235_Text_TMP",
         "tfId": "2063797106",
         "goId": "2063797105",
         "name": "Text (TMP) ",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 9.3
         },
         "sizeDelta": {
          "x": 300,
          "y": 48
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Paper fan",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n236_Part_3",
     "tfId": "298936201",
     "goId": "298936197",
     "name": "Part 3",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "wmg": {
       "scaleController": "609624840",
       "nextButton": "1060377912"
      },
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 0
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n237_controller",
       "tfId": "609624836",
       "goId": "609624835",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 27,
        "y": -95.2
       },
       "sizeDelta": {
        "x": 378,
        "y": 839
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 378,
           "h": 839
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        },
        "scaleCtrl": {
         "animator": "609624837"
        }
       },
       "children": [
        {
         "id": "n238_plate",
         "tfId": "2020679244",
         "goId": "2020679243",
         "name": "plate",
         "active": true,
         "anchoredPos": {
          "x": -26,
          "y": 0.0000076294
         },
         "sizeDelta": {
          "x": 802,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/hands_bg.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 802,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n239_plate_1",
           "tfId": "978301793",
           "goId": "978301792",
           "name": "plate 1",
           "active": true,
           "anchoredPos": {
            "x": -241.6,
            "y": 22.2
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1.000031,
            "y": 1.000031
           },
           "rotZ": 4.89,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_579.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          },
          {
           "id": "n240_plate_2",
           "tfId": "1218217552",
           "goId": "1218217551",
           "name": "plate 2",
           "active": true,
           "anchoredPos": {
            "x": 237.60002,
            "y": 12.699983
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1.0000309,
            "y": 1.0000309
           },
           "rotZ": -9.19,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_580.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n241_Support_base",
         "tfId": "1739230989",
         "goId": "1739230988",
         "name": "Support base",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": 0
         },
         "sizeDelta": {
          "x": 378,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 378,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n242_left",
         "tfId": "788462801",
         "goId": "788462800",
         "name": "left ",
         "active": true,
         "anchoredPos": {
          "x": -389,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n243_Basket",
           "tfId": "1710694816",
           "goId": "1710694815",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": -42,
            "y": 23
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n244_Image",
             "tfId": "1129026044",
             "goId": "1129026043",
             "name": "Image",
             "active": true,
             "anchoredPos": {
              "x": -3.423,
              "y": 56.848
             },
             "sizeDelta": {
              "x": 162,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": true,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "1556261868",
               "gameManager": "1335508916",
               "allowedItem": "904948360"
              },
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n245_Book",
               "tfId": "1556261865",
               "goId": "1556261864",
               "name": "Book",
               "active": false,
               "anchoredPos": {
                "x": 1.808,
                "y": 36
               },
               "sizeDelta": {
                "x": 166,
                "y": 167
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "1556261868",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/Untitled_design__21__8.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 166,
                   "h": 167
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n246_GameObject",
               "tfId": "548719347",
               "goId": "548719346",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 30
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1.0000306,
                "y": 1.0000306
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n247_Basket",
           "tfId": "123306851",
           "goId": "123306850",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": -42.000046,
            "y": 23.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": true,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n248_Right",
         "tfId": "2085313072",
         "goId": "2085313071",
         "name": "Right",
         "active": true,
         "anchoredPos": {
          "x": 386,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n249_Basket",
           "tfId": "1101780925",
           "goId": "1101780924",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 6,
            "y": 2
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n250_Image_1",
             "tfId": "2051289242",
             "goId": "2051289241",
             "name": "Image (1)",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 67.09
             },
             "sizeDelta": {
              "x": 167.898,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "1289152511",
               "gameManager": "1335508916",
               "allowedItem": "1134099106"
              },
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n251_Ball",
               "tfId": "1289152508",
               "goId": "1289152507",
               "name": "Ball",
               "active": false,
               "anchoredPos": {
                "x": 1.051,
                "y": 0
               },
               "sizeDelta": {
                "x": 170,
                "y": 197
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "1289152511",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/normal_bell.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 170,
                   "h": 197
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n252_GameObject",
               "tfId": "237855507",
               "goId": "237855506",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 1.0510006,
                "y": 30
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n253_Basket",
           "tfId": "1218361455",
           "goId": "1218361454",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": 6.0000095,
            "y": 4.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n254_hand",
         "tfId": "1338393809",
         "goId": "P1338393808_820586250070207530",
         "name": "hand",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 400,
          "y": 400
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 0.5,
          "y": 0.5
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/frame_00_delay-0.02s.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 0,
             "h": 0
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": true,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": true
          },
          "animator": {
           "present": true
          }
         }
        },
        {
         "id": "n255_items",
         "tfId": "720516306",
         "goId": "720516305",
         "name": "items ",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": -167
         },
         "sizeDelta": {
          "x": 1920,
          "y": 249.36
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n256_Item_2",
           "tfId": "1180894170",
           "goId": "1180894169",
           "name": "Item 2",
           "active": true,
           "anchoredPos": {
            "x": -685,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n257_Bell",
             "tfId": "904948355",
             "goId": "904948354",
             "name": "Bell",
             "active": true,
             "anchoredPos": {
              "x": -0.000032425,
              "y": 0
             },
             "sizeDelta": {
              "x": 146,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__34__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 146,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "904948358",
               "transition": 1
              },
              "draggable": {
               "itemData": {
                "name": "Bell",
                "weight": 1,
                "itemSprite": {
                 "path": "assets/img/Untitled_design__34__2.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 146,
                  "h": 197
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/Untitled_design__34__2.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 146,
                  "h": 197
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "904948358",
               "dragLayer": null,
               "leftBalance": "123306851",
               "rightBalance": "1218361455"
              }
             }
            },
            {
             "id": "n258_Hint_hand",
             "tfId": "286723678",
             "goId": "286723677",
             "name": "Hint hand",
             "active": false,
             "anchoredPos": {
              "x": 642.36993,
              "y": 244.39003
             },
             "sizeDelta": {
              "x": 1702.233,
              "y": 584.781
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n259_Image",
               "tfId": "1813458795",
               "goId": "1813458794",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -662,
                "y": -27
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n260_Hand",
               "tfId": "736026464",
               "goId": "736026463",
               "name": "Hand",
               "active": false,
               "anchoredPos": {
                "x": -643,
                "y": -263
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n261_Item_1",
           "tfId": "601909362",
           "goId": "601909361",
           "name": "Item 1",
           "active": true,
           "anchoredPos": {
            "x": 629,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n262_paper_fan",
             "tfId": "1134099101",
             "goId": "1134099100",
             "name": "paper fan",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 0
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/paper_fan.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "1134099104",
               "transition": 1
              },
              "draggable": {
               "itemData": {
                "name": "Paper fan",
                "weight": 0.5,
                "itemSprite": {
                 "path": "assets/img/paper_fan.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 170,
                  "h": 197
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/paper_fan.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 170,
                  "h": 197
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "1134099104",
               "dragLayer": null,
               "leftBalance": "123306851",
               "rightBalance": "1218361455"
              }
             }
            },
            {
             "id": "n263_Hint_hand_1",
             "tfId": "170715792",
             "goId": "170715791",
             "name": "Hint hand (1)",
             "active": false,
             "anchoredPos": {
              "x": 31.338,
              "y": 244.39003
             },
             "sizeDelta": {
              "x": 466.297,
              "y": 584.781
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n264_Image",
               "tfId": "1595273849",
               "goId": "1595273848",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -25
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 0.9
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n265_Hand",
               "tfId": "40694094",
               "goId": "40694093",
               "name": "Hand",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -234
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n266_Arrows",
           "tfId": "1337309031",
           "goId": "1337309030",
           "name": "Arrows",
           "active": true,
           "anchoredPos": {
            "x": -28,
            "y": 262.2
           },
           "sizeDelta": {
            "x": 100,
            "y": 100
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {},
           "children": [
            {
             "id": "n267_Heavy",
             "tfId": "1040559528",
             "goId": "1040559527",
             "name": "Heavy",
             "active": false,
             "anchoredPos": {
              "x": -671,
              "y": -56
             },
             "sizeDelta": {
              "x": 228,
              "y": 209
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_566.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 228,
                 "h": 209
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n268_Image",
               "tfId": "1324769653",
               "goId": "1324769652",
               "name": "Image",
               "active": true,
               "anchoredPos": {
                "x": 0,
                "y": 0
               },
               "sizeDelta": {
                "x": 228,
                "y": 209
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/Group_566.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 228,
                   "h": 209
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              }
             ]
            },
            {
             "id": "n269_Heavy_1",
             "tfId": "2107065126",
             "goId": "2107065125",
             "name": "Heavy (1)",
             "active": false,
             "anchoredPos": {
              "x": 630,
              "y": 128
             },
             "sizeDelta": {
              "x": 282,
              "y": 216
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_565.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 282,
                 "h": 216
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          }
         ]
        },
        {
         "id": "n270_Next_button_1",
         "tfId": "1060377913",
         "goId": "1060377912",
         "name": "Next button (1)",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1060377914",
           "transition": 1
          }
         }
        },
        {
         "id": "n271_Try_Again_button",
         "tfId": "1013534460",
         "goId": "1013534459",
         "name": "Try Again button ",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__6_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1013534461",
           "transition": 1
          }
         }
        },
        {
         "id": "n272_Hint_Hand",
         "tfId": "1506459002",
         "goId": "1506459001",
         "name": "Hint Hand",
         "active": false,
         "anchoredPos": {
          "x": 389,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n273_Hint_Hand_1",
         "tfId": "1708307565",
         "goId": "1708307564",
         "name": "Hint Hand (1)",
         "active": false,
         "anchoredPos": {
          "x": -441,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n274_item",
         "tfId": "1529731684",
         "goId": "1529731681",
         "name": "item",
         "active": false,
         "anchoredPos": {
          "x": -581,
          "y": -205.99997
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.0000306,
          "y": 1.0000306
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/drag-hand.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 135
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n275_Ghost",
         "tfId": "1966221517",
         "goId": "1966221516",
         "name": "Ghost",
         "active": false,
         "anchoredPos": {
          "x": -581,
          "y": -205.99997
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.0000306,
          "y": 1.0000306
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/drag-hand.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 135
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n276_Part_4",
     "tfId": "1410448788",
     "goId": "1410448787",
     "name": "Part 4",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n277_controller",
       "tfId": "548619100",
       "goId": "548619099",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 0,
        "y": 0
       },
       "sizeDelta": {
        "x": 0,
        "y": 0
       },
       "anchorMin": {
        "x": 0,
        "y": 0
       },
       "anchorMax": {
        "x": 1,
        "y": 1
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n278_Trolly",
         "tfId": "562082285",
         "goId": "562082284",
         "name": "Trolly",
         "active": true,
         "anchoredPos": {
          "x": 650,
          "y": -242
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n279_Trolly",
           "tfId": "1254007853",
           "goId": "1254007852",
           "name": "Trolly",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n280_Lantern",
             "tfId": "2108763363",
             "goId": "2108763362",
             "name": "Lantern",
             "active": true,
             "anchoredPos": {
              "x": 142,
              "y": 61
             },
             "sizeDelta": {
              "x": 166,
              "y": 167
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__21__8.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 166,
                 "h": 167
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n281_Bell_1",
             "tfId": "90907566",
             "goId": "90907565",
             "name": "Bell (1)",
             "active": true,
             "anchoredPos": {
              "x": 39,
              "y": 45.99997
             },
             "sizeDelta": {
              "x": 146,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__34__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 146,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n282_Bell",
             "tfId": "592731332",
             "goId": "592731331",
             "name": "Bell",
             "active": true,
             "anchoredPos": {
              "x": 17.03,
              "y": 45.99997
             },
             "sizeDelta": {
              "x": 146,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "592731335",
               "gameManager": "1335508916",
               "allowedItem": null
              },
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__34__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 146,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          },
          {
           "id": "n283_Trolly",
           "tfId": "379562319",
           "goId": "379562318",
           "name": "Trolly ",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n284_Basket",
         "tfId": "126228440",
         "goId": "126228439",
         "name": "Basket",
         "active": true,
         "anchoredPos": {
          "x": -737,
          "y": -294
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n285_Basket",
           "tfId": "1162047237",
           "goId": "1162047236",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 101,
            "y": 257
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n286_Feather",
             "tfId": "276083032",
             "goId": "276083031",
             "name": "Feather",
             "active": true,
             "anchoredPos": {
              "x": -147,
              "y": -231
             },
             "sizeDelta": {
              "x": 169,
              "y": 166
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__33__7.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 169,
                 "h": 166
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n287_Ribbon",
             "tfId": "1615618637",
             "goId": "1615618636",
             "name": "Ribbon",
             "active": true,
             "anchoredPos": {
              "x": -62,
              "y": -239.53
             },
             "sizeDelta": {
              "x": 173.706,
              "y": 140
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 152,
                 "h": 140
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n288_paper_fan",
             "tfId": "1363560547",
             "goId": "1363560546",
             "name": "paper fan ",
             "active": true,
             "anchoredPos": {
              "x": 22.5,
              "y": -215.5
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": true,
               "acceptDistance": 200,
               "basketImage": "1363560550",
               "gameManager": "1335508916",
               "allowedItem": null
              },
              "image": {
               "sprite": {
                "path": "assets/img/paper_fan.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          },
          {
           "id": "n289_Basket",
           "tfId": "1970411142",
           "goId": "1970411141",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 100.999954,
            "y": 256.99997
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n290_image",
         "tfId": "2124960143",
         "goId": "2124960142",
         "name": "image",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n291_Item_01",
         "tfId": "1918837192",
         "goId": "1918837191",
         "name": "Item 01",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n292_Image",
           "tfId": "303905752",
           "goId": "303905751",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 270,
            "y": 281
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "draggable": {
             "itemData": {
              "name": "book",
              "weight": 1,
              "itemSprite": {
               "path": "assets/img/Untitled_design__34__3_1.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 254,
                "h": 295
               }
              },
              "droppedSprite": {
               "path": "assets/img/Untitled_design__34__2.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 146,
                "h": 197
               }
              }
             },
             "dropRadius": 30,
             "itemImage": "303905755",
             "dragLayer": "1634132121",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            },
            "image": {
             "sprite": {
              "path": "assets/img/Untitled_design__34__3_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 254,
               "h": 295
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n293_Item_02",
         "tfId": "93323625",
         "goId": "93323624",
         "name": "Item 02",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n294_Image",
           "tfId": "572977575",
           "goId": "572977574",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 0.000002861023,
            "y": 0.000005722046
           },
           "sizeDelta": {
            "x": 212,
            "y": 247
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "draggable": {
             "itemData": {
              "name": "ball",
              "weight": 0.5,
              "itemSprite": {
               "path": "assets/img/The_Royal_Bloom_Fest__26__4_1.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 212,
                "h": 247
               }
              },
              "droppedSprite": {
               "path": "assets/img/paper_fan.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 170,
                "h": 197
               }
              }
             },
             "dropRadius": 30,
             "itemImage": "572977578",
             "dragLayer": "1634132121",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            },
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__26__4_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 212,
               "h": 247
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n295_GameObject",
         "tfId": "1634132121",
         "goId": "1634132120",
         "name": "GameObject",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {}
        },
        {
         "id": "n296_hint_hand",
         "tfId": "1409191424",
         "goId": "1409191423",
         "name": "hint hand ",
         "active": false,
         "anchoredPos": {
          "x": -165.99998,
          "y": 76.99999
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n297_Image",
           "tfId": "1280548702",
           "goId": "1280548701",
           "name": "Image",
           "active": false,
           "anchoredPos": {
            "x": 24,
            "y": -50
           },
           "sizeDelta": {
            "x": 794,
            "y": 340
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 794,
               "h": 340
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n298_Hand",
           "tfId": "1806791274",
           "goId": "1806791273",
           "name": "Hand",
           "active": false,
           "anchoredPos": {
            "x": 416,
            "y": -17.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n299_hint_hand_1",
         "tfId": "1662273242",
         "goId": "1662273241",
         "name": "hint hand  (1)",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n300_Image",
           "tfId": "1312432386",
           "goId": "1312432385",
           "name": "Image",
           "active": false,
           "anchoredPos": {
            "x": 15,
            "y": -49
           },
           "sizeDelta": {
            "x": 794,
            "y": 340
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": -4,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 794,
               "h": 340
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n301_Hand",
           "tfId": "1999244792",
           "goId": "1999244791",
           "name": "Hand",
           "active": false,
           "anchoredPos": {
            "x": -408,
            "y": -25.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n302_Next_button_2",
         "tfId": "289615304",
         "goId": "289615303",
         "name": "Next button (2)",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": -475.99997
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [
            {
             "target": "1335508914",
             "method": "SetActive",
             "mode": 6,
             "arg": false
            },
            {
             "target": "243223522",
             "method": "SetActive",
             "mode": 6,
             "arg": true
            }
           ],
           "targetGraphic": "289615306",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n303_Message_bar",
     "tfId": "1793654131",
     "goId": "1793654130",
     "name": "Message bar",
     "active": true,
     "anchoredPos": {
      "x": -14,
      "y": -121
     },
     "sizeDelta": {
      "x": 1786,
      "y": 242
     },
     "anchorMin": {
      "x": 0.5,
      "y": 1
     },
     "anchorMax": {
      "x": 0.5,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Group_578.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1786,
         "h": 242
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n304_Text_TMP",
       "tfId": "393599881",
       "goId": "393599880",
       "name": "Text (TMP)",
       "active": true,
       "anchoredPos": {
        "x": -24.5,
        "y": 13
       },
       "sizeDelta": {
        "x": 1501,
        "y": 54
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "tmp": {
         "text": "Tap the box.",
         "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
         "fontSize": 48,
         "autoSize": false,
         "sizeMin": 18,
         "sizeMax": 72,
         "alignH": 1,
         "alignV": 512,
         "charSpacing": 0,
         "lineSpacing": 0,
         "wordSpacing": 0,
         "style": 0,
         "color": {
          "r": 0.58431375,
          "g": 0.28627452,
          "b": 0.11764706,
          "a": 1
         },
         "enabled": true,
         "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
        }
       }
      }
     ]
    },
    {
     "id": "n305_Image",
     "tfId": "1453724966",
     "goId": "1453724965",
     "name": "Image",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5030.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    },
    {
     "id": "n306_Image_1",
     "tfId": "1803912717",
     "goId": "1803912716",
     "name": "Image (1)",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5025.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    }
   ]
  },
  {
   "id": "n307_Level_3",
   "tfId": "243223523",
   "goId": "243223522",
   "name": "Level 3",
   "active": false,
   "anchoredPos": {
    "x": 0,
    "y": 0
   },
   "sizeDelta": {
    "x": 0,
    "y": 0
   },
   "anchorMin": {
    "x": 0,
    "y": 0
   },
   "anchorMax": {
    "x": 1,
    "y": 1
   },
   "pivot": {
    "x": 0.5,
    "y": 0.5
   },
   "scale": {
    "x": 1,
    "y": 1
   },
   "rotZ": 0,
   "components": {
    "_gm": "243223524",
    "canvasGroup": {
     "alpha": 1,
     "interactable": true,
     "blocksRaycasts": true
    },
    "image": {
     "sprite": {
      "path": "assets/img/Slide_16_9_-_184.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 1920,
       "h": 1080
      }
     },
     "type": 0,
     "fillMethod": 4,
     "fillOrigin": 0,
     "fillAmount": 1,
     "fillClockwise": true,
     "preserveAspect": false,
     "color": {
      "r": 1,
      "g": 1,
      "b": 1,
      "a": 1
     },
     "raycast": true,
     "enabled": true,
     "maskable": true
    }
   },
   "children": [
    {
     "id": "n308_Part_1",
     "tfId": "1869165829",
     "goId": "1869165826",
     "name": "Part 1",
     "active": true,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_192.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n309_box_iteams",
       "tfId": "1380209324",
       "goId": "1380209323",
       "name": "box iteams",
       "active": true,
       "anchoredPos": {
        "x": -31.039,
        "y": 101.88
       },
       "sizeDelta": {
        "x": 577.935,
        "y": 876.24
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n310_box_02",
         "tfId": "2035959068",
         "goId": "2035959067",
         "name": "box 02",
         "active": true,
         "anchoredPos": {
          "x": 31,
          "y": 17.9
         },
         "sizeDelta": {
          "x": 684,
          "y": 843
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_539-1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 684,
             "h": 843
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n311_highlight",
         "tfId": "1761537425",
         "goId": "1761537424",
         "name": "highlight",
         "active": true,
         "anchoredPos": {
          "x": 31.039,
          "y": -94
         },
         "sizeDelta": {
          "x": 1920,
          "y": 1080
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Glow.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 1920,
             "h": 1080
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.8666667
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n312_Image",
           "tfId": "1948499141",
           "goId": "1948499140",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": -23,
            "y": -104
           },
           "sizeDelta": {
            "x": 1882,
            "y": 1080
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Vector__6_.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 1882,
               "h": 1080
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n313_box_open",
         "tfId": "120815199",
         "goId": "120815198",
         "name": "box open",
         "active": true,
         "anchoredPos": {
          "x": 16,
          "y": -79.100006
         },
         "sizeDelta": {
          "x": 655,
          "y": 649
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/005.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 655,
             "h": 649
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "120815201",
           "transition": 1
          }
         }
        },
        {
         "id": "n314_box_top",
         "tfId": "1048831927",
         "goId": "1048831926",
         "name": "box top",
         "active": true,
         "anchoredPos": {
          "x": 16,
          "y": 83.273
         },
         "sizeDelta": {
          "x": 713.798,
          "y": 260.455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1048831929",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__16__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 655,
             "h": 239
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n315_Lantern",
         "tfId": "1160214349",
         "goId": "1160214348",
         "name": " Lantern",
         "active": false,
         "anchoredPos": {
          "x": 27.839039,
          "y": 65.99945
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.99999994,
          "y": -5.2154064e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n316_object",
           "tfId": "1521128421",
           "goId": "1521128420",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 170,
            "y": 197
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/crown.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 170,
               "h": 197
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n317_Feather",
         "tfId": "864472269",
         "goId": "864472268",
         "name": " Feather ",
         "active": false,
         "anchoredPos": {
          "x": 33.538876,
          "y": 65.9996
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 2.0489097e-8,
          "y": -1.6763806e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n318_object",
           "tfId": "1126637322",
           "goId": "1126637321",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 152,
            "y": 140
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 152,
               "h": 140
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        }
       ]
      },
      {
       "id": "n319_roy",
       "tfId": "813407057",
       "goId": "813407056",
       "name": "roy",
       "active": true,
       "anchoredPos": {
        "x": 647,
        "y": -63
       },
       "sizeDelta": {
        "x": 468,
        "y": 777
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_May_4__2026__11_23_34_AM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 468,
           "h": 777
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n320_hand",
       "tfId": "1668467292",
       "goId": "P1668467291_820586250070207530",
       "name": "hand",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -86.23999
       },
       "sizeDelta": {
        "x": 500,
        "y": 500
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 0.19999999,
        "y": 0.19999999
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/frame_00_delay-0.02s.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 0,
           "h": 0
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": true,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": false,
         "enabled": true,
         "maskable": true
        },
        "animator": {
         "present": true
        }
       }
      }
     ]
    },
    {
     "id": "n321_Part_2",
     "tfId": "1876467129",
     "goId": "1876467126",
     "name": "Part 2",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Rectangle_100.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n322_item_01",
       "tfId": "1314180310",
       "goId": "1314180309",
       "name": "item 01",
       "active": true,
       "anchoredPos": {
        "x": -225,
        "y": 29
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n323_Crown",
         "tfId": "441670732",
         "goId": "441670731",
         "name": "Crown",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 282,
          "y": 327
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/crown.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 170,
             "h": 197
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n324_item_02",
       "tfId": "1106068779",
       "goId": "1106068778",
       "name": "item 02",
       "active": true,
       "anchoredPos": {
        "x": 197,
        "y": 26
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n325_Ribbon",
         "tfId": "2075015417",
         "goId": "2075015416",
         "name": "Ribbon",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 257,
          "y": 237
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__26__3.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 257,
             "h": 237
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n326_Next_button",
       "tfId": "1283700443",
       "goId": "1283700439",
       "name": "Next button",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -476
       },
       "sizeDelta": {
        "x": 559,
        "y": 94
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "button": {
         "interactable": true,
         "onClick": [],
         "targetGraphic": "1283700441",
         "transition": 1
        },
        "image": {
         "sprite": {
          "path": "assets/img/Button_Blue__5_.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 559,
           "h": 94
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n327_Crown_text",
       "tfId": "1831835069",
       "goId": "1831835065",
       "name": "Crown text",
       "active": false,
       "anchoredPos": {
        "x": -224,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n328_image_01",
         "tfId": "1272180741",
         "goId": "1272180740",
         "name": "image 01",
         "active": false,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n329_left",
         "tfId": "1522541753",
         "goId": "1522541752",
         "name": " left ",
         "active": false,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n330_right",
         "tfId": "497351613",
         "goId": "497351612",
         "name": "right",
         "active": false,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n331_Text_TMP",
         "tfId": "1512918043",
         "goId": "1512918042",
         "name": "Text (TMP) ",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 10.1
         },
         "sizeDelta": {
          "x": 300,
          "y": 48
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Crown",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      },
      {
       "id": "n332_Ribbon_text",
       "tfId": "841295790",
       "goId": "841295786",
       "name": "Ribbon text ",
       "active": false,
       "anchoredPos": {
        "x": 188,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": false,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n333_image_01",
         "tfId": "186222416",
         "goId": "186222415",
         "name": "image 01",
         "active": true,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n334_left",
         "tfId": "270203538",
         "goId": "270203537",
         "name": " left ",
         "active": true,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n335_right",
         "tfId": "1107216760",
         "goId": "1107216759",
         "name": "right",
         "active": true,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n336_Text_TMP",
         "tfId": "357458887",
         "goId": "357458886",
         "name": "Text (TMP) ",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 9.3
         },
         "sizeDelta": {
          "x": 300,
          "y": 48
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Ribbon",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n337_Part_3",
     "tfId": "1152861219",
     "goId": "1152861215",
     "name": "Part 3",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "wmg": {
       "scaleController": "1021545064",
       "nextButton": "1701538518"
      },
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 0
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n338_controller",
       "tfId": "1021545060",
       "goId": "1021545059",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 27,
        "y": -95.2
       },
       "sizeDelta": {
        "x": 378,
        "y": 839
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 378,
           "h": 839
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        },
        "scaleCtrl": {
         "animator": "1021545061"
        }
       },
       "children": [
        {
         "id": "n339_plate",
         "tfId": "1872946126",
         "goId": "1872946125",
         "name": "plate",
         "active": true,
         "anchoredPos": {
          "x": -26,
          "y": 0.0000076294
         },
         "sizeDelta": {
          "x": 802,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/hands_bg.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 802,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n340_plate_1",
           "tfId": "1745562405",
           "goId": "1745562404",
           "name": "plate 1",
           "active": true,
           "anchoredPos": {
            "x": -241.6,
            "y": 22.2
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1.000031,
            "y": 1.000031
           },
           "rotZ": 4.89,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_579.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          },
          {
           "id": "n341_plate_2",
           "tfId": "647149819",
           "goId": "647149818",
           "name": "plate 2",
           "active": true,
           "anchoredPos": {
            "x": 237.60002,
            "y": 12.699983
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1.0000309,
            "y": 1.0000309
           },
           "rotZ": -9.19,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_580.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n342_Support_base",
         "tfId": "212862761",
         "goId": "212862760",
         "name": "Support base",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": 0
         },
         "sizeDelta": {
          "x": 378,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 378,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n343_left",
         "tfId": "1793023535",
         "goId": "1793023534",
         "name": "left ",
         "active": true,
         "anchoredPos": {
          "x": -389,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n344_Basket",
           "tfId": "1268979245",
           "goId": "1268979244",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": -42,
            "y": 23
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n345_Image",
             "tfId": "1444326632",
             "goId": "1444326631",
             "name": "Image",
             "active": true,
             "anchoredPos": {
              "x": -3.423,
              "y": 56.848
             },
             "sizeDelta": {
              "x": 162,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": true,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "1290096020",
               "gameManager": "243223524",
               "allowedItem": "2086803139"
              },
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n346_Book",
               "tfId": "1290096017",
               "goId": "1290096016",
               "name": "Book",
               "active": false,
               "anchoredPos": {
                "x": 1.808,
                "y": 36
               },
               "sizeDelta": {
                "x": 166,
                "y": 167
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "1290096020",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/Untitled_design__21__8.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 166,
                   "h": 167
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n347_GameObject",
               "tfId": "1316246284",
               "goId": "1316246283",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 30
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1.0000306,
                "y": 1.0000306
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n348_Basket",
           "tfId": "2008730859",
           "goId": "2008730858",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": -42.000046,
            "y": 23.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": true,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n349_Right",
         "tfId": "2032959618",
         "goId": "2032959617",
         "name": "Right",
         "active": true,
         "anchoredPos": {
          "x": 386,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n350_Basket",
           "tfId": "753320443",
           "goId": "753320442",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 6,
            "y": 2
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n351_Image_1",
             "tfId": "1631280103",
             "goId": "1631280102",
             "name": "Image (1)",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 67.09
             },
             "sizeDelta": {
              "x": 167.898,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "218129161",
               "gameManager": "243223524",
               "allowedItem": "1282424820"
              },
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n352_Ball",
               "tfId": "218129158",
               "goId": "218129157",
               "name": "Ball",
               "active": false,
               "anchoredPos": {
                "x": 1.051,
                "y": 0
               },
               "sizeDelta": {
                "x": 152,
                "y": 140
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "218129161",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 152,
                   "h": 140
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n353_GameObject",
               "tfId": "1020913435",
               "goId": "1020913434",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 30.000004
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1.0000306,
                "y": 1.0000306
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n354_Basket",
           "tfId": "1086503869",
           "goId": "1086503868",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": 6.0000095,
            "y": 4.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n355_hand",
         "tfId": "1202123957",
         "goId": "P1202123956_820586250070207530",
         "name": "hand",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 400,
          "y": 400
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 0.5,
          "y": 0.5
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/frame_00_delay-0.02s.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 0,
             "h": 0
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": true,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": true
          },
          "animator": {
           "present": true
          }
         }
        },
        {
         "id": "n356_items",
         "tfId": "1122102846",
         "goId": "1122102845",
         "name": "items ",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": -167
         },
         "sizeDelta": {
          "x": 1920,
          "y": 249.36
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n357_Item_2",
           "tfId": "1669786709",
           "goId": "1669786708",
           "name": "Item 2",
           "active": true,
           "anchoredPos": {
            "x": -685,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n358_Crown",
             "tfId": "2086803134",
             "goId": "2086803133",
             "name": "Crown",
             "active": true,
             "anchoredPos": {
              "x": -0.000032425,
              "y": 0
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/crown.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "2086803137",
               "transition": 1
              },
              "draggable": {
               "itemData": {
                "name": "Crown",
                "weight": 1,
                "itemSprite": {
                 "path": "assets/img/crown.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 170,
                  "h": 197
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/crown.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 170,
                  "h": 197
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "2086803137",
               "dragLayer": null,
               "leftBalance": "2008730859",
               "rightBalance": "1086503869"
              }
             }
            },
            {
             "id": "n359_Hint_hand",
             "tfId": "1517581622",
             "goId": "1517581621",
             "name": "Hint hand",
             "active": false,
             "anchoredPos": {
              "x": 642.36993,
              "y": 244.39003
             },
             "sizeDelta": {
              "x": 1702.233,
              "y": 584.781
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n360_Image",
               "tfId": "956204096",
               "goId": "956204095",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -662,
                "y": -27
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n361_Hand",
               "tfId": "2022464677",
               "goId": "2022464676",
               "name": "Hand",
               "active": false,
               "anchoredPos": {
                "x": -643,
                "y": -263
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n362_Item_1",
           "tfId": "1321025063",
           "goId": "1321025062",
           "name": "Item 1",
           "active": true,
           "anchoredPos": {
            "x": 629,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n363_Ribbon",
             "tfId": "1282424815",
             "goId": "1282424814",
             "name": "Ribbon",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 0
             },
             "sizeDelta": {
              "x": 152,
              "y": 140
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 152,
                 "h": 140
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "1282424818",
               "transition": 1
              },
              "draggable": {
               "itemData": {
                "name": "Ribbon",
                "weight": 0.5,
                "itemSprite": {
                 "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 152,
                  "h": 140
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 152,
                  "h": 140
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "1282424818",
               "dragLayer": null,
               "leftBalance": "2008730859",
               "rightBalance": "1086503869"
              }
             }
            },
            {
             "id": "n364_Hint_hand_1",
             "tfId": "932788286",
             "goId": "932788285",
             "name": "Hint hand (1)",
             "active": false,
             "anchoredPos": {
              "x": 31.338,
              "y": 244.39003
             },
             "sizeDelta": {
              "x": 466.297,
              "y": 584.781
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n365_Image",
               "tfId": "2072675344",
               "goId": "2072675343",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -25
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 0.9
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n366_Hand",
               "tfId": "1635360249",
               "goId": "1635360248",
               "name": "Hand",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -234
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n367_Arrows",
           "tfId": "83948578",
           "goId": "83948577",
           "name": "Arrows",
           "active": true,
           "anchoredPos": {
            "x": -28,
            "y": 262.2
           },
           "sizeDelta": {
            "x": 100,
            "y": 100
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {},
           "children": [
            {
             "id": "n368_Heavy",
             "tfId": "1478255959",
             "goId": "1478255958",
             "name": "Heavy",
             "active": false,
             "anchoredPos": {
              "x": -647,
              "y": -56
             },
             "sizeDelta": {
              "x": 228,
              "y": 209
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_566.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 228,
                 "h": 209
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n369_Image",
               "tfId": "551044620",
               "goId": "551044619",
               "name": "Image",
               "active": true,
               "anchoredPos": {
                "x": 0,
                "y": 0
               },
               "sizeDelta": {
                "x": 228,
                "y": 209
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/Group_566.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 228,
                   "h": 209
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              }
             ]
            },
            {
             "id": "n370_Heavy_1",
             "tfId": "752717312",
             "goId": "752717311",
             "name": "Heavy (1)",
             "active": false,
             "anchoredPos": {
              "x": 622,
              "y": 128
             },
             "sizeDelta": {
              "x": 282,
              "y": 216
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_565.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 282,
                 "h": 216
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          }
         ]
        },
        {
         "id": "n371_Next_button_1",
         "tfId": "1701538519",
         "goId": "1701538518",
         "name": "Next button (1)",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1701538520",
           "transition": 1
          }
         }
        },
        {
         "id": "n372_Try_Again_button",
         "tfId": "326396624",
         "goId": "326396623",
         "name": "Try Again button ",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__6_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "326396625",
           "transition": 1
          }
         }
        },
        {
         "id": "n373_Hint_Hand",
         "tfId": "627935886",
         "goId": "627935885",
         "name": "Hint Hand",
         "active": false,
         "anchoredPos": {
          "x": 389,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n374_Hint_Hand_1",
         "tfId": "1216680404",
         "goId": "1216680403",
         "name": "Hint Hand (1)",
         "active": false,
         "anchoredPos": {
          "x": -441,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n375_item",
         "tfId": "1405657213",
         "goId": "1405657210",
         "name": "item",
         "active": false,
         "anchoredPos": {
          "x": -581,
          "y": -205.99997
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.0000306,
          "y": 1.0000306
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/drag-hand.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 135
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n376_Ghost",
         "tfId": "1990009155",
         "goId": "1990009154",
         "name": "Ghost",
         "active": false,
         "anchoredPos": {
          "x": -581,
          "y": -205.99997
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.0000306,
          "y": 1.0000306
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/drag-hand.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 135
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n377_Part_4",
     "tfId": "1090444980",
     "goId": "1090444979",
     "name": "Part 4",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n378_controller",
       "tfId": "25487972",
       "goId": "25487971",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 0,
        "y": 0
       },
       "sizeDelta": {
        "x": 0,
        "y": 0
       },
       "anchorMin": {
        "x": 0,
        "y": 0
       },
       "anchorMax": {
        "x": 1,
        "y": 1
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n379_Trolly",
         "tfId": "2040067138",
         "goId": "2040067137",
         "name": "Trolly",
         "active": true,
         "anchoredPos": {
          "x": 650,
          "y": -242
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n380_Trolly",
           "tfId": "1219954773",
           "goId": "1219954772",
           "name": "Trolly",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n381_Lantern",
             "tfId": "1711597568",
             "goId": "1711597567",
             "name": "Lantern",
             "active": true,
             "anchoredPos": {
              "x": 142,
              "y": 61
             },
             "sizeDelta": {
              "x": 166,
              "y": 167
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__21__8.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 166,
                 "h": 167
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n382_Bell",
             "tfId": "105891189",
             "goId": "105891188",
             "name": "Bell",
             "active": true,
             "anchoredPos": {
              "x": 47,
              "y": 44.2
             },
             "sizeDelta": {
              "x": 146,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__34__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 146,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n383_Bell_1",
             "tfId": "1765753206",
             "goId": "1765753205",
             "name": "Bell (1)",
             "active": true,
             "anchoredPos": {
              "x": 25.02998,
              "y": 44.20001
             },
             "sizeDelta": {
              "x": 146,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__34__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 146,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n384_Crown",
             "tfId": "952187897",
             "goId": "952187896",
             "name": "Crown",
             "active": true,
             "anchoredPos": {
              "x": -76,
              "y": 61
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "952187900",
               "gameManager": "243223524",
               "allowedItem": null
              },
              "image": {
               "sprite": {
                "path": "assets/img/crown.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          },
          {
           "id": "n385_Trolly",
           "tfId": "1688819350",
           "goId": "1688819349",
           "name": "Trolly ",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n386_Basket",
         "tfId": "1788957004",
         "goId": "1788957003",
         "name": "Basket",
         "active": true,
         "anchoredPos": {
          "x": -737,
          "y": -294
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n387_Basket",
           "tfId": "1270784478",
           "goId": "1270784477",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 101,
            "y": 257
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n388_Feather",
             "tfId": "903687486",
             "goId": "903687485",
             "name": "Feather",
             "active": true,
             "anchoredPos": {
              "x": -174.1,
              "y": -231
             },
             "sizeDelta": {
              "x": 169,
              "y": 166
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__33__7.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 169,
                 "h": 166
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n389_paper_fan",
             "tfId": "996588554",
             "goId": "996588550",
             "name": "paper fan ",
             "active": true,
             "anchoredPos": {
              "x": 44,
              "y": -215.5
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/paper_fan.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n390_Ribbon_1",
             "tfId": "43584272",
             "goId": "43584271",
             "name": "Ribbon (1)",
             "active": true,
             "anchoredPos": {
              "x": -70.2,
              "y": -241.1
             },
             "sizeDelta": {
              "x": 152,
              "y": 140
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 152,
                 "h": 140
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n391_Ribbon",
             "tfId": "2125536013",
             "goId": "2125536012",
             "name": "Ribbon",
             "active": true,
             "anchoredPos": {
              "x": -40.5,
              "y": -239.53
             },
             "sizeDelta": {
              "x": 173.706,
              "y": 140
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": true,
               "acceptDistance": 200,
               "basketImage": "2125536015",
               "gameManager": "243223524",
               "allowedItem": null
              },
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 152,
                 "h": 140
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          },
          {
           "id": "n392_Basket",
           "tfId": "636644261",
           "goId": "636644260",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 100.999954,
            "y": 256.99997
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n393_image",
         "tfId": "327147354",
         "goId": "327147353",
         "name": "image",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n394_Item_02",
         "tfId": "1170106271",
         "goId": "1170106270",
         "name": "Item 02",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n395_Image",
           "tfId": "578764027",
           "goId": "578764026",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 0.000002861023,
            "y": 0.000005722046
           },
           "sizeDelta": {
            "x": 257,
            "y": 237
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "draggable": {
             "itemData": {
              "name": "ball",
              "weight": 0.5,
              "itemSprite": {
               "path": "assets/img/The_Royal_Bloom_Fest__26__3.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 257,
                "h": 237
               }
              },
              "droppedSprite": {
               "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 152,
                "h": 140
               }
              }
             },
             "dropRadius": 40,
             "itemImage": "578764030",
             "dragLayer": "1814169364",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            },
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__26__3.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 257,
               "h": 237
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n396_Item_01",
         "tfId": "689169680",
         "goId": "689169679",
         "name": "Item 01",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n397_Image",
           "tfId": "518594520",
           "goId": "518594519",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 235,
            "y": 262
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "draggable": {
             "itemData": {
              "name": "book",
              "weight": 1,
              "itemSprite": {
               "path": "assets/img/The_Royal_Bloom_Fest__26__4-1.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 235,
                "h": 262
               }
              },
              "droppedSprite": {
               "path": "assets/img/crown.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 170,
                "h": 197
               }
              }
             },
             "dropRadius": 40,
             "itemImage": "518594523",
             "dragLayer": "1814169364",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            },
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__26__4-1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 235,
               "h": 262
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n398_GameObject",
         "tfId": "1814169364",
         "goId": "1814169363",
         "name": "GameObject",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {}
        },
        {
         "id": "n399_hint_hand",
         "tfId": "619211219",
         "goId": "619211218",
         "name": "hint hand ",
         "active": false,
         "anchoredPos": {
          "x": -165.99998,
          "y": 76.99999
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n400_Image",
           "tfId": "1841093485",
           "goId": "1841093484",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 24,
            "y": -50
           },
           "sizeDelta": {
            "x": 794,
            "y": 340
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 794,
               "h": 340
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n401_Hand",
           "tfId": "1915268258",
           "goId": "1915268257",
           "name": "Hand",
           "active": true,
           "anchoredPos": {
            "x": 416,
            "y": -17.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n402_hint_hand_1",
         "tfId": "816922962",
         "goId": "816922961",
         "name": "hint hand  (1)",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n403_Image",
           "tfId": "785181244",
           "goId": "785181243",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": 15,
            "y": -49
           },
           "sizeDelta": {
            "x": 794,
            "y": 340
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": -4,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 794,
               "h": 340
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n404_Hand",
           "tfId": "1511567979",
           "goId": "1511567978",
           "name": "Hand",
           "active": true,
           "anchoredPos": {
            "x": -408,
            "y": -25.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n405_Next_button_2",
         "tfId": "173604951",
         "goId": "173604950",
         "name": "Next button (2)",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": -475.99997
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [
            {
             "target": "243223522",
             "method": "SetActive",
             "mode": 6,
             "arg": false
            },
            {
             "target": "1021480051",
             "method": "SetActive",
             "mode": 6,
             "arg": true
            }
           ],
           "targetGraphic": "173604953",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n406_Message_bar",
     "tfId": "2139893231",
     "goId": "2139893230",
     "name": "Message bar",
     "active": true,
     "anchoredPos": {
      "x": -14,
      "y": -121
     },
     "sizeDelta": {
      "x": 1786,
      "y": 242
     },
     "anchorMin": {
      "x": 0.5,
      "y": 1
     },
     "anchorMax": {
      "x": 0.5,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Group_578.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1786,
         "h": 242
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n407_Text_TMP",
       "tfId": "268397554",
       "goId": "268397553",
       "name": "Text (TMP)",
       "active": true,
       "anchoredPos": {
        "x": -24.5,
        "y": 13
       },
       "sizeDelta": {
        "x": 1501,
        "y": 54
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "tmp": {
         "text": "Tap the box.",
         "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
         "fontSize": 48,
         "autoSize": false,
         "sizeMin": 18,
         "sizeMax": 72,
         "alignH": 1,
         "alignV": 512,
         "charSpacing": 0,
         "lineSpacing": 0,
         "wordSpacing": 0,
         "style": 0,
         "color": {
          "r": 0.58431375,
          "g": 0.28627452,
          "b": 0.11764706,
          "a": 1
         },
         "enabled": true,
         "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
        }
       }
      }
     ]
    },
    {
     "id": "n408_Image",
     "tfId": "1287883350",
     "goId": "1287883349",
     "name": "Image",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5031.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    },
    {
     "id": "n409_Image_1",
     "tfId": "1764061855",
     "goId": "1764061854",
     "name": "Image (1)",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5026.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    }
   ]
  },
  {
   "id": "n410_Level_4",
   "tfId": "1021480052",
   "goId": "1021480051",
   "name": "Level 4",
   "active": false,
   "anchoredPos": {
    "x": 0,
    "y": 0
   },
   "sizeDelta": {
    "x": 0,
    "y": 0
   },
   "anchorMin": {
    "x": 0,
    "y": 0
   },
   "anchorMax": {
    "x": 1,
    "y": 1
   },
   "pivot": {
    "x": 0.5,
    "y": 0.5
   },
   "scale": {
    "x": 1,
    "y": 1
   },
   "rotZ": 0,
   "components": {
    "_gm": "1021480053",
    "canvasGroup": {
     "alpha": 1,
     "interactable": true,
     "blocksRaycasts": true
    },
    "image": {
     "sprite": {
      "path": "assets/img/Slide_16_9_-_184.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 1920,
       "h": 1080
      }
     },
     "type": 0,
     "fillMethod": 4,
     "fillOrigin": 0,
     "fillAmount": 1,
     "fillClockwise": true,
     "preserveAspect": false,
     "color": {
      "r": 1,
      "g": 1,
      "b": 1,
      "a": 1
     },
     "raycast": true,
     "enabled": true,
     "maskable": true
    }
   },
   "children": [
    {
     "id": "n411_Part_1",
     "tfId": "1520008365",
     "goId": "1520008362",
     "name": "Part 1",
     "active": true,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_192.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n412_box_iteams",
       "tfId": "806202485",
       "goId": "806202484",
       "name": "box iteams",
       "active": true,
       "anchoredPos": {
        "x": -31.039,
        "y": 101.88
       },
       "sizeDelta": {
        "x": 577.935,
        "y": 876.24
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n413_box_02",
         "tfId": "1561645068",
         "goId": "1561645067",
         "name": "box 02",
         "active": true,
         "anchoredPos": {
          "x": 31,
          "y": 17.9
         },
         "sizeDelta": {
          "x": 684,
          "y": 843
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_540-1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 684,
             "h": 843
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n414_highlight",
         "tfId": "1314888942",
         "goId": "1314888941",
         "name": "highlight",
         "active": true,
         "anchoredPos": {
          "x": 31.039,
          "y": -94
         },
         "sizeDelta": {
          "x": 1920,
          "y": 1080
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Glow.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 1920,
             "h": 1080
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.8666667
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n415_Image",
           "tfId": "568388340",
           "goId": "568388339",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": -23,
            "y": -104
           },
           "sizeDelta": {
            "x": 1882,
            "y": 1080
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Vector__6_.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 1882,
               "h": 1080
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n416_box_open",
         "tfId": "1254400641",
         "goId": "1254400640",
         "name": "box open",
         "active": true,
         "anchoredPos": {
          "x": 39.00003,
          "y": -79.100006
         },
         "sizeDelta": {
          "x": 684,
          "y": 649
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/000011.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 684,
             "h": 649
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1254400643",
           "transition": 1
          }
         }
        },
        {
         "id": "n417_box_top",
         "tfId": "1297396663",
         "goId": "1297396662",
         "name": "box top",
         "active": true,
         "anchoredPos": {
          "x": 39,
          "y": 116
         },
         "sizeDelta": {
          "x": 649,
          "y": 301
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1297396665",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__14__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 649,
             "h": 301
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n418_Lantern",
         "tfId": "2081976370",
         "goId": "2081976369",
         "name": " Lantern",
         "active": false,
         "anchoredPos": {
          "x": 27.839039,
          "y": 65.99945
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.99999994,
          "y": -5.2154064e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n419_object",
           "tfId": "1309816299",
           "goId": "1309816298",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 170,
            "y": 197
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/flowers.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 170,
               "h": 197
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n420_Feather",
         "tfId": "1753480572",
         "goId": "1753480571",
         "name": " Feather ",
         "active": false,
         "anchoredPos": {
          "x": 33.538876,
          "y": 65.9996
         },
         "sizeDelta": {
          "x": 241,
          "y": 270
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 2.0489097e-8,
          "y": -1.6763806e-8
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n421_object",
           "tfId": "892373414",
           "goId": "892373413",
           "name": "object",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 170,
            "y": 197
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/vase.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 170,
               "h": 197
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        }
       ]
      },
      {
       "id": "n422_roy",
       "tfId": "1583953452",
       "goId": "1583953451",
       "name": "roy",
       "active": true,
       "anchoredPos": {
        "x": 647,
        "y": -63
       },
       "sizeDelta": {
        "x": 468,
        "y": 777
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_May_4__2026__11_23_34_AM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 468,
           "h": 777
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n423_hand",
       "tfId": "86292095",
       "goId": "P86292094_820586250070207530",
       "name": "hand",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -86.23999
       },
       "sizeDelta": {
        "x": 500,
        "y": 500
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 0.19999999,
        "y": 0.19999999
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/frame_00_delay-0.02s.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 0,
           "h": 0
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": true,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": false,
         "enabled": true,
         "maskable": true
        },
        "animator": {
         "present": true
        }
       }
      }
     ]
    },
    {
     "id": "n424_Part_2",
     "tfId": "510554977",
     "goId": "510554974",
     "name": "Part 2",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Rectangle_100.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n425_item_01",
       "tfId": "1154126050",
       "goId": "1154126049",
       "name": "item 01",
       "active": true,
       "anchoredPos": {
        "x": -225,
        "y": 29
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n426_Lantern",
         "tfId": "415997719",
         "goId": "415997718",
         "name": "Lantern",
         "active": true,
         "anchoredPos": {
          "x": 0.000002861023,
          "y": -0.0000038146973
         },
         "sizeDelta": {
          "x": 214,
          "y": 256
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.2,
          "y": 1.2
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__26__7.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 214,
             "h": 256
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n427_item_02",
       "tfId": "633429146",
       "goId": "633429145",
       "name": "item 02",
       "active": true,
       "anchoredPos": {
        "x": 197,
        "y": 26
       },
       "sizeDelta": {
        "x": 407,
        "y": 455
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 407,
           "h": 455
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n428_Feather",
         "tfId": "1768130321",
         "goId": "1768130320",
         "name": "Feather",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 331,
          "y": 291
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__26__9.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 331,
             "h": 291
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      },
      {
       "id": "n429_Next_button",
       "tfId": "1332101364",
       "goId": "1332101360",
       "name": "Next button",
       "active": false,
       "anchoredPos": {
        "x": 0,
        "y": -476
       },
       "sizeDelta": {
        "x": 559,
        "y": 94
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "button": {
         "interactable": true,
         "onClick": [],
         "targetGraphic": "1332101362",
         "transition": 1
        },
        "image": {
         "sprite": {
          "path": "assets/img/Button_Blue__5_.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 559,
           "h": 94
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       }
      },
      {
       "id": "n430_Lantern_text",
       "tfId": "642583774",
       "goId": "642583770",
       "name": "Lantern text",
       "active": false,
       "anchoredPos": {
        "x": -224,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n431_image_01",
         "tfId": "2031401264",
         "goId": "2031401263",
         "name": "image 01",
         "active": false,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n432_left",
         "tfId": "938563800",
         "goId": "938563799",
         "name": " left ",
         "active": false,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n433_right",
         "tfId": "1055805470",
         "goId": "1055805469",
         "name": "right",
         "active": false,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n434_Text_TMP",
         "tfId": "940904012",
         "goId": "940904011",
         "name": "Text (TMP) ",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 10.1
         },
         "sizeDelta": {
          "x": 300,
          "y": 48
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Flowers",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      },
      {
       "id": "n435_Feather_text",
       "tfId": "2023401071",
       "goId": "2023401067",
       "name": "Feather text ",
       "active": false,
       "anchoredPos": {
        "x": 188,
        "y": -261
       },
       "sizeDelta": {
        "x": 156,
        "y": 194
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/Group_574.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 156,
           "h": 194
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": false,
         "maskable": true
        }
       },
       "children": [
        {
         "id": "n436_image_01",
         "tfId": "2128541983",
         "goId": "2128541982",
         "name": "image 01",
         "active": true,
         "anchoredPos": {
          "x": 2.8,
          "y": -0.5
         },
         "sizeDelta": {
          "x": 225,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Group_577.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 225,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n437_left",
         "tfId": "1398453473",
         "goId": "1398453472",
         "name": " left ",
         "active": true,
         "anchoredPos": {
          "x": 100.5,
          "y": -1
         },
         "sizeDelta": {
          "x": 197,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n438_right",
         "tfId": "784732169",
         "goId": "784732168",
         "name": "right",
         "active": true,
         "anchoredPos": {
          "x": -94,
          "y": -1
         },
         "sizeDelta": {
          "x": 204,
          "y": 194
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/The_Royal_Bloom_Fest__30__1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 204,
             "h": 194
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n439_Text_TMP",
         "tfId": "1313001791",
         "goId": "1313001790",
         "name": "Text (TMP) ",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 9.3
         },
         "sizeDelta": {
          "x": 300,
          "y": 48
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "tmp": {
           "text": "Vase",
           "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
           "fontSize": 48,
           "autoSize": false,
           "sizeMin": 18,
           "sizeMax": 72,
           "alignH": 2,
           "alignV": 512,
           "charSpacing": 0,
           "lineSpacing": 0,
           "wordSpacing": 0,
           "style": 0,
           "color": {
            "r": 0.58431375,
            "g": 0.28627452,
            "b": 0.11764706,
            "a": 1
           },
           "enabled": true,
           "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n440_Part_3",
     "tfId": "837076083",
     "goId": "837076079",
     "name": "Part 3",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "wmg": {
       "scaleController": "542394487",
       "nextButton": "1838531583"
      },
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 0
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n441_controller",
       "tfId": "542394483",
       "goId": "542394482",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 27,
        "y": -95.2
       },
       "sizeDelta": {
        "x": 378,
        "y": 839
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "animator": {
         "present": true
        },
        "image": {
         "sprite": {
          "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
          "cropRect": {
           "x": 0,
           "y": 0,
           "w": 1,
           "h": 1
          },
          "border": {
           "l": 0,
           "b": 0,
           "r": 0,
           "t": 0
          },
          "native": {
           "w": 378,
           "h": 839
          }
         },
         "type": 0,
         "fillMethod": 4,
         "fillOrigin": 0,
         "fillAmount": 1,
         "fillClockwise": true,
         "preserveAspect": false,
         "color": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
         },
         "raycast": true,
         "enabled": true,
         "maskable": true
        },
        "scaleCtrl": {
         "animator": "542394484"
        }
       },
       "children": [
        {
         "id": "n442_plate",
         "tfId": "1346701075",
         "goId": "1346701074",
         "name": "plate",
         "active": true,
         "anchoredPos": {
          "x": -26,
          "y": 0.0000076294
         },
         "sizeDelta": {
          "x": 802,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/hands_bg.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 802,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n443_plate_1",
           "tfId": "847779106",
           "goId": "847779105",
           "name": "plate 1",
           "active": true,
           "anchoredPos": {
            "x": -241.6,
            "y": 22.2
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1.000031,
            "y": 1.000031
           },
           "rotZ": 4.89,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_579.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          },
          {
           "id": "n444_plate_2",
           "tfId": "1196228478",
           "goId": "1196228477",
           "name": "plate 2",
           "active": true,
           "anchoredPos": {
            "x": 237.60002,
            "y": 12.699983
           },
           "sizeDelta": {
            "x": 312,
            "y": 68
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1.0000309,
            "y": 1.0000309
           },
           "rotZ": -9.19,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_580.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 312,
               "h": 68
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n445_Support_base",
         "tfId": "1687382240",
         "goId": "1687382239",
         "name": "Support base",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": 0
         },
         "sizeDelta": {
          "x": 378,
          "y": 839
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_7__2026__04_11_11_PM_1.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 378,
             "h": 839
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n446_left",
         "tfId": "1007619598",
         "goId": "1007619597",
         "name": "left ",
         "active": true,
         "anchoredPos": {
          "x": -389,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n447_Basket",
           "tfId": "1858327645",
           "goId": "1858327644",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": -42,
            "y": 23
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n448_Image",
             "tfId": "1944645983",
             "goId": "1944645982",
             "name": "Image",
             "active": true,
             "anchoredPos": {
              "x": -3.423,
              "y": 56.848
             },
             "sizeDelta": {
              "x": 162,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": true,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "544146794",
               "gameManager": "1021480053",
               "allowedItem": "105314818"
              },
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n449_Book",
               "tfId": "544146791",
               "goId": "544146790",
               "name": "Book",
               "active": false,
               "anchoredPos": {
                "x": 1.808,
                "y": 36
               },
               "sizeDelta": {
                "x": 166,
                "y": 167
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "544146794",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/Untitled_design__21__8.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 166,
                   "h": 167
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n450_GameObject",
               "tfId": "272387191",
               "goId": "272387190",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 30
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1.0000306,
                "y": 1.0000306
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n451_Basket",
           "tfId": "1951713601",
           "goId": "1951713600",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": -42.000046,
            "y": 23.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": true,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n452_Right",
         "tfId": "1431903731",
         "goId": "1431903730",
         "name": "Right",
         "active": true,
         "anchoredPos": {
          "x": 386,
          "y": 18
         },
         "sizeDelta": {
          "x": 135,
          "y": 163
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Aru_and_pari__Balancing_Act_kjswkdgvj_6.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 163
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n453_Basket",
           "tfId": "1916025858",
           "goId": "1916025857",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 6,
            "y": 2
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n454_Image_1",
             "tfId": "1304634754",
             "goId": "1304634753",
             "name": "Image (1)",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 67.09
             },
             "sizeDelta": {
              "x": 167.898,
              "y": 77.304
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": false,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "2088479471",
               "gameManager": "1021480053",
               "allowedItem": "1323455665"
              },
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n455_Ball",
               "tfId": "2088479468",
               "goId": "2088479467",
               "name": "Ball",
               "active": false,
               "anchoredPos": {
                "x": 1.051,
                "y": 0
               },
               "sizeDelta": {
                "x": 170,
                "y": 197
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "button": {
                 "interactable": true,
                 "onClick": [],
                 "targetGraphic": "2088479471",
                 "transition": 1
                },
                "canvasGroup": {
                 "alpha": 1,
                 "interactable": true,
                 "blocksRaycasts": true
                },
                "image": {
                 "sprite": {
                  "path": "assets/img/normal_bell.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 170,
                   "h": 197
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              },
              {
               "id": "n456_GameObject",
               "tfId": "663647553",
               "goId": "663647552",
               "name": "GameObject",
               "active": false,
               "anchoredPos": {
                "x": 0,
                "y": 30.000004
               },
               "sizeDelta": {
                "x": 100,
                "y": 100
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1.0000306,
                "y": 1.0000306
               },
               "rotZ": 0,
               "components": {}
              }
             ]
            }
           ]
          },
          {
           "id": "n457_Basket",
           "tfId": "543225153",
           "goId": "543225152",
           "name": "Basket ",
           "active": true,
           "anchoredPos": {
            "x": 6.0000095,
            "y": 4.000004
           },
           "sizeDelta": {
            "x": 226,
            "y": 64
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/Group_6.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 226,
               "h": 64
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n458_hand",
         "tfId": "1669864988",
         "goId": "P1669864987_820586250070207530",
         "name": "hand",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 400,
          "y": 400
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 0.5,
          "y": 0.5
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/frame_00_delay-0.02s.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 0,
             "h": 0
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": true,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": true
          },
          "animator": {
           "present": true
          }
         }
        },
        {
         "id": "n459_items",
         "tfId": "1167018225",
         "goId": "1167018224",
         "name": "items ",
         "active": true,
         "anchoredPos": {
          "x": 1,
          "y": -167
         },
         "sizeDelta": {
          "x": 1920,
          "y": 249.36
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": false,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n460_Item_2",
           "tfId": "1963113683",
           "goId": "1963113682",
           "name": "Item 2",
           "active": true,
           "anchoredPos": {
            "x": -685,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n461_Book",
             "tfId": "105314813",
             "goId": "105314812",
             "name": "Book",
             "active": true,
             "anchoredPos": {
              "x": -0.000032425,
              "y": 0
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__7.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 214,
                 "h": 256
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "105314816",
               "transition": 1
              },
              "draggable": {
               "itemData": {
                "name": "Flowers",
                "weight": 0.5,
                "itemSprite": {
                 "path": "assets/img/flowers.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 170,
                  "h": 197
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/flowers.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 170,
                  "h": 197
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "105314816",
               "dragLayer": null,
               "leftBalance": "1951713601",
               "rightBalance": "543225153"
              }
             }
            },
            {
             "id": "n462_Hint_hand",
             "tfId": "1285326895",
             "goId": "1285326894",
             "name": "Hint hand",
             "active": false,
             "anchoredPos": {
              "x": 642.36993,
              "y": 244.39003
             },
             "sizeDelta": {
              "x": 1702.233,
              "y": 584.781
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n463_Image",
               "tfId": "2139889691",
               "goId": "2139889690",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -662,
                "y": -27
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n464_Hand",
               "tfId": "1632974591",
               "goId": "1632974590",
               "name": "Hand",
               "active": false,
               "anchoredPos": {
                "x": -643,
                "y": -263
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n465_Item_1",
           "tfId": "1448871489",
           "goId": "1448871488",
           "name": "Item 1",
           "active": true,
           "anchoredPos": {
            "x": 629,
            "y": -39
           },
           "sizeDelta": {
            "x": 277,
            "y": 310
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 407,
               "h": 455
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           },
           "children": [
            {
             "id": "n466_Ball",
             "tfId": "1323455660",
             "goId": "1323455659",
             "name": "Ball",
             "active": true,
             "anchoredPos": {
              "x": 0,
              "y": 0
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1.2,
              "y": 1.2
             },
             "rotZ": 0,
             "components": {
              "canvasGroup": {
               "alpha": 1,
               "interactable": true,
               "blocksRaycasts": true
              },
              "image": {
               "sprite": {
                "path": "assets/img/vase.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              },
              "button": {
               "interactable": true,
               "onClick": [],
               "targetGraphic": "1323455663",
               "transition": 1
              },
              "draggable": {
               "itemData": {
                "name": "Vase",
                "weight": 1,
                "itemSprite": {
                 "path": "assets/img/vase.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 170,
                  "h": 197
                 }
                },
                "droppedSprite": {
                 "path": "assets/img/vase.webp",
                 "cropRect": {
                  "x": 0,
                  "y": 0,
                  "w": 1,
                  "h": 1
                 },
                 "border": {
                  "l": 0,
                  "b": 0,
                  "r": 0,
                  "t": 0
                 },
                 "native": {
                  "w": 170,
                  "h": 197
                 }
                }
               },
               "dropRadius": 40,
               "itemImage": "1323455663",
               "dragLayer": null,
               "leftBalance": "1951713601",
               "rightBalance": "543225153"
              }
             }
            },
            {
             "id": "n467_Hint_hand_1",
             "tfId": "2125016132",
             "goId": "2125016131",
             "name": "Hint hand (1)",
             "active": false,
             "anchoredPos": {
              "x": 31.338,
              "y": 244.39003
             },
             "sizeDelta": {
              "x": 466.297,
              "y": 584.781
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": null,
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 0
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             },
             "children": [
              {
               "id": "n468_Image",
               "tfId": "1614503087",
               "goId": "1614503086",
               "name": "Image",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -25
               },
               "sizeDelta": {
                "x": 337,
                "y": 493
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 0.9
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": null,
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 337,
                   "h": 493
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              },
              {
               "id": "n469_Hand",
               "tfId": "672230805",
               "goId": "672230804",
               "name": "Hand",
               "active": false,
               "anchoredPos": {
                "x": -0.000061035,
                "y": -234
               },
               "sizeDelta": {
                "x": 129,
                "y": 155
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/drag-hand.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 135,
                   "h": 135
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": false,
                 "enabled": true,
                 "maskable": false
                }
               }
              }
             ]
            }
           ]
          },
          {
           "id": "n470_Arrows",
           "tfId": "1601654719",
           "goId": "1601654718",
           "name": "Arrows",
           "active": true,
           "anchoredPos": {
            "x": -28,
            "y": 262.2
           },
           "sizeDelta": {
            "x": 100,
            "y": 100
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {},
           "children": [
            {
             "id": "n471_Heavy",
             "tfId": "1665201469",
             "goId": "1665201468",
             "name": "Heavy",
             "active": false,
             "anchoredPos": {
              "x": 655,
              "y": -56
             },
             "sizeDelta": {
              "x": 228,
              "y": 209
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_566.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 228,
                 "h": 209
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             },
             "children": [
              {
               "id": "n472_Image",
               "tfId": "465898690",
               "goId": "465898689",
               "name": "Image",
               "active": true,
               "anchoredPos": {
                "x": 0,
                "y": 0
               },
               "sizeDelta": {
                "x": 228,
                "y": 209
               },
               "anchorMin": {
                "x": 0.5,
                "y": 0.5
               },
               "anchorMax": {
                "x": 0.5,
                "y": 0.5
               },
               "pivot": {
                "x": 0.5,
                "y": 0.5
               },
               "scale": {
                "x": 1,
                "y": 1
               },
               "rotZ": 0,
               "components": {
                "image": {
                 "sprite": {
                  "path": "assets/img/Group_566.webp",
                  "cropRect": {
                   "x": 0,
                   "y": 0,
                   "w": 1,
                   "h": 1
                  },
                  "border": {
                   "l": 0,
                   "b": 0,
                   "r": 0,
                   "t": 0
                  },
                  "native": {
                   "w": 228,
                   "h": 209
                  }
                 },
                 "type": 0,
                 "fillMethod": 4,
                 "fillOrigin": 0,
                 "fillAmount": 1,
                 "fillClockwise": true,
                 "preserveAspect": false,
                 "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                 },
                 "raycast": true,
                 "enabled": true,
                 "maskable": true
                }
               }
              }
             ]
            },
            {
             "id": "n473_Heavy_1",
             "tfId": "1693402388",
             "goId": "1693402387",
             "name": "Heavy (1)",
             "active": false,
             "anchoredPos": {
              "x": -596,
              "y": 128
             },
             "sizeDelta": {
              "x": 282,
              "y": 216
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Group_565.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 282,
                 "h": 216
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          }
         ]
        },
        {
         "id": "n474_Next_button_1",
         "tfId": "1838531584",
         "goId": "1838531583",
         "name": "Next button (1)",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "1838531585",
           "transition": 1
          }
         }
        },
        {
         "id": "n475_Try_Again_button",
         "tfId": "443175108",
         "goId": "443175107",
         "name": "Try Again button ",
         "active": false,
         "anchoredPos": {
          "x": -27,
          "y": -380.8
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__6_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          },
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "443175109",
           "transition": 1
          }
         }
        },
        {
         "id": "n476_Hint_Hand",
         "tfId": "786951280",
         "goId": "786951279",
         "name": "Hint Hand",
         "active": false,
         "anchoredPos": {
          "x": 389,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n477_Hint_Hand_1",
         "tfId": "2027508019",
         "goId": "2027508018",
         "name": "Hint Hand (1)",
         "active": false,
         "anchoredPos": {
          "x": -441,
          "y": 132
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "canvasGroup": {
           "alpha": 1,
           "interactable": true,
           "blocksRaycasts": true
          },
          "image": {
           "sprite": {
            "path": null,
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 129,
             "h": 155
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n478_item",
         "tfId": "1853783015",
         "goId": "1853783012",
         "name": "item",
         "active": false,
         "anchoredPos": {
          "x": -581,
          "y": -205.99997
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.0000306,
          "y": 1.0000306
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/drag-hand.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 135
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        },
        {
         "id": "n479_Ghost",
         "tfId": "1755949883",
         "goId": "1755949882",
         "name": "Ghost",
         "active": false,
         "anchoredPos": {
          "x": -581,
          "y": -205.99997
         },
         "sizeDelta": {
          "x": 129,
          "y": 155
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1.0000306,
          "y": 1.0000306
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/drag-hand.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 135,
             "h": 135
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n480_Part_4",
     "tfId": "550207015",
     "goId": "550207014",
     "name": "Part 4",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_184.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n481_controller",
       "tfId": "1807971623",
       "goId": "1807971622",
       "name": "controller",
       "active": true,
       "anchoredPos": {
        "x": 0,
        "y": 0
       },
       "sizeDelta": {
        "x": 0,
        "y": 0
       },
       "anchorMin": {
        "x": 0,
        "y": 0
       },
       "anchorMax": {
        "x": 1,
        "y": 1
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {},
       "children": [
        {
         "id": "n482_Trolly",
         "tfId": "996876382",
         "goId": "996876381",
         "name": "Trolly",
         "active": true,
         "anchoredPos": {
          "x": 650,
          "y": -242
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n483_Trolly",
           "tfId": "1071128725",
           "goId": "1071128724",
           "name": "Trolly",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n484_Lantern",
             "tfId": "984493502",
             "goId": "984493501",
             "name": "Lantern",
             "active": true,
             "anchoredPos": {
              "x": 142,
              "y": 61
             },
             "sizeDelta": {
              "x": 166,
              "y": 167
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__21__8.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 166,
                 "h": 167
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n485_Bell",
             "tfId": "447306285",
             "goId": "447306284",
             "name": "Bell",
             "active": true,
             "anchoredPos": {
              "x": 46.41,
              "y": 49.05
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/normal_bell.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n486_Bell_1",
             "tfId": "173448679",
             "goId": "173448678",
             "name": "Bell (1)",
             "active": true,
             "anchoredPos": {
              "x": 28.6,
              "y": 49.05
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/normal_bell.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n487_Crown",
             "tfId": "489894035",
             "goId": "489894034",
             "name": "Crown",
             "active": true,
             "anchoredPos": {
              "x": -72.4,
              "y": 61
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/crown.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n488_Vase",
             "tfId": "1534837014",
             "goId": "1534837013",
             "name": "Vase",
             "active": true,
             "anchoredPos": {
              "x": -185,
              "y": 46
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": false,
               "acceptDistance": 200,
               "basketImage": "1534837017",
               "gameManager": "1021480053",
               "allowedItem": null
              },
              "image": {
               "sprite": {
                "path": "assets/img/vase.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          },
          {
           "id": "n489_Trolly",
           "tfId": "2080078728",
           "goId": "2080078727",
           "name": "Trolly ",
           "active": true,
           "anchoredPos": {
            "x": 0,
            "y": 0
           },
           "sizeDelta": {
            "x": 772,
            "y": 515
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/ChatGPT_Image_Feb_19__2026__04_53_16_PM_1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 772,
               "h": 515
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n490_Basket",
         "tfId": "1471808765",
         "goId": "1471808764",
         "name": "Basket",
         "active": true,
         "anchoredPos": {
          "x": -737,
          "y": -294
         },
         "sizeDelta": {
          "x": 772,
          "y": 515
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0
           },
           "raycast": false,
           "enabled": true,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n491_Basket",
           "tfId": "841909261",
           "goId": "841909260",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 101,
            "y": 257
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           },
           "children": [
            {
             "id": "n492_Feather",
             "tfId": "1519338985",
             "goId": "1519338984",
             "name": "Feather",
             "active": true,
             "anchoredPos": {
              "x": -187.5,
              "y": -231
             },
             "sizeDelta": {
              "x": 169,
              "y": 166
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/Untitled_design__33__7.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 169,
                 "h": 166
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": false,
               "enabled": true,
               "maskable": false
              }
             }
            },
            {
             "id": "n493_Ribbon",
             "tfId": "1697196165",
             "goId": "1697196164",
             "name": "Ribbon",
             "active": true,
             "anchoredPos": {
              "x": -96,
              "y": -231
             },
             "sizeDelta": {
              "x": 152,
              "y": 140
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 152,
                 "h": 140
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n494_Ribbon_1",
             "tfId": "347297484",
             "goId": "347297483",
             "name": "Ribbon (1)",
             "active": true,
             "anchoredPos": {
              "x": -57.80002,
              "y": -231
             },
             "sizeDelta": {
              "x": 152,
              "y": 140
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 152,
                 "h": 140
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n495_Paper_fan",
             "tfId": "978052931",
             "goId": "978052930",
             "name": "Paper fan",
             "active": true,
             "anchoredPos": {
              "x": 32.3,
              "y": -202.5
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "image": {
               "sprite": {
                "path": "assets/img/paper_fan.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            },
            {
             "id": "n496_Flowers",
             "tfId": "160420074",
             "goId": "160420073",
             "name": "Flowers",
             "active": true,
             "anchoredPos": {
              "x": 115,
              "y": -215.5
             },
             "sizeDelta": {
              "x": 170,
              "y": 197
             },
             "anchorMin": {
              "x": 0.5,
              "y": 0.5
             },
             "anchorMax": {
              "x": 0.5,
              "y": 0.5
             },
             "pivot": {
              "x": 0.5,
              "y": 0.5
             },
             "scale": {
              "x": 1,
              "y": 1
             },
             "rotZ": 0,
             "components": {
              "basket": {
               "isLeftBasket": false,
               "isPart4": true,
               "isBasket": true,
               "acceptDistance": 200,
               "basketImage": "160420077",
               "gameManager": "1021480053",
               "allowedItem": null
              },
              "image": {
               "sprite": {
                "path": "assets/img/flowers.webp",
                "cropRect": {
                 "x": 0,
                 "y": 0,
                 "w": 1,
                 "h": 1
                },
                "border": {
                 "l": 0,
                 "b": 0,
                 "r": 0,
                 "t": 0
                },
                "native": {
                 "w": 170,
                 "h": 197
                }
               },
               "type": 0,
               "fillMethod": 4,
               "fillOrigin": 0,
               "fillAmount": 1,
               "fillClockwise": true,
               "preserveAspect": false,
               "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
               },
               "raycast": true,
               "enabled": true,
               "maskable": true
              }
             }
            }
           ]
          },
          {
           "id": "n497_Basket",
           "tfId": "1622835313",
           "goId": "1622835312",
           "name": "Basket",
           "active": true,
           "anchoredPos": {
            "x": 100.999954,
            "y": 256.99997
           },
           "sizeDelta": {
            "x": 647,
            "y": 979
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__28__1.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 647,
               "h": 979
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n498_image",
         "tfId": "935082653",
         "goId": "935082652",
         "name": "image",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        },
        {
         "id": "n499_Item_02",
         "tfId": "1062854622",
         "goId": "1062854621",
         "name": "Item 02",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n500_Image",
           "tfId": "777576607",
           "goId": "777576606",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": -0.0000038146973,
            "y": -17
           },
           "sizeDelta": {
            "x": 331,
            "y": 291
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "draggable": {
             "itemData": {
              "name": "ball",
              "weight": 1,
              "itemSprite": {
               "path": "assets/img/The_Royal_Bloom_Fest__26__9.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 331,
                "h": 291
               }
              },
              "droppedSprite": {
               "path": "assets/img/vase.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 170,
                "h": 197
               }
              }
             },
             "dropRadius": 40,
             "itemImage": "777576610",
             "dragLayer": "1089971019",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            },
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__26__9.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 331,
               "h": 291
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n501_Item_01",
         "tfId": "557764071",
         "goId": "557764070",
         "name": "Item 01",
         "active": false,
         "anchoredPos": {
          "x": -166,
          "y": 77
         },
         "sizeDelta": {
          "x": 407,
          "y": 455
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": {
            "path": "assets/img/ChatGPT_Image_Jan_23__2026__03_13_50_PM_2.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 407,
             "h": 455
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         },
         "children": [
          {
           "id": "n502_Image",
           "tfId": "760522534",
           "goId": "760522533",
           "name": "Image",
           "active": true,
           "anchoredPos": {
            "x": -4.7683716e-7,
            "y": -0.0000047683716
           },
           "sizeDelta": {
            "x": 214,
            "y": 256
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "draggable": {
             "itemData": {
              "name": "book",
              "weight": 0.5,
              "itemSprite": {
               "path": "assets/img/The_Royal_Bloom_Fest__26__7.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 214,
                "h": 256
               }
              },
              "droppedSprite": {
               "path": "assets/img/flowers.webp",
               "cropRect": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
               },
               "border": {
                "l": 0,
                "b": 0,
                "r": 0,
                "t": 0
               },
               "native": {
                "w": 170,
                "h": 197
               }
              }
             },
             "dropRadius": 40,
             "itemImage": "760522537",
             "dragLayer": "1089971019",
             "leftBalance": null,
             "rightBalance": null
            },
            "canvasGroup": {
             "alpha": 1,
             "interactable": true,
             "blocksRaycasts": true
            },
            "image": {
             "sprite": {
              "path": "assets/img/The_Royal_Bloom_Fest__26__7.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 214,
               "h": 256
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": true,
             "enabled": true,
             "maskable": true
            }
           }
          }
         ]
        },
        {
         "id": "n503_GameObject",
         "tfId": "1089971019",
         "goId": "1089971018",
         "name": "GameObject",
         "active": true,
         "anchoredPos": {
          "x": 0,
          "y": 0
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {}
        },
        {
         "id": "n504_hint_hand",
         "tfId": "415312435",
         "goId": "415312434",
         "name": "hint hand ",
         "active": false,
         "anchoredPos": {
          "x": -165.99998,
          "y": 76.99999
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n505_Image",
           "tfId": "1177102352",
           "goId": "1177102351",
           "name": "Image",
           "active": false,
           "anchoredPos": {
            "x": 637,
            "y": -123
           },
           "sizeDelta": {
            "x": 456,
            "y": 290
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 456,
               "h": 290
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n506_Hand",
           "tfId": "1084852705",
           "goId": "1084852704",
           "name": "Hand",
           "active": false,
           "anchoredPos": {
            "x": 416,
            "y": -17.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n507_hint_hand_1",
         "tfId": "479540914",
         "goId": "479540913",
         "name": "hint hand  (1)",
         "active": false,
         "anchoredPos": {
          "x": 248,
          "y": 85
         },
         "sizeDelta": {
          "x": 100,
          "y": 100
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "image": {
           "sprite": null,
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": false,
           "enabled": false,
           "maskable": false
          }
         },
         "children": [
          {
           "id": "n508_Image",
           "tfId": "1590697157",
           "goId": "1590697156",
           "name": "Image",
           "active": false,
           "anchoredPos": {
            "x": -642,
            "y": -103.00001
           },
           "sizeDelta": {
            "x": 456,
            "y": 290
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": -4,
           "components": {
            "image": {
             "sprite": {
              "path": null,
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 456,
               "h": 290
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          },
          {
           "id": "n509_Hand",
           "tfId": "1656526662",
           "goId": "1656526661",
           "name": "Hand",
           "active": false,
           "anchoredPos": {
            "x": -408,
            "y": -25.5
           },
           "sizeDelta": {
            "x": 135,
            "y": 135
           },
           "anchorMin": {
            "x": 0.5,
            "y": 0.5
           },
           "anchorMax": {
            "x": 0.5,
            "y": 0.5
           },
           "pivot": {
            "x": 0.5,
            "y": 0.5
           },
           "scale": {
            "x": 1,
            "y": 1
           },
           "rotZ": 0,
           "components": {
            "image": {
             "sprite": {
              "path": "assets/img/drag-hand.webp",
              "cropRect": {
               "x": 0,
               "y": 0,
               "w": 1,
               "h": 1
              },
              "border": {
               "l": 0,
               "b": 0,
               "r": 0,
               "t": 0
              },
              "native": {
               "w": 135,
               "h": 135
              }
             },
             "type": 0,
             "fillMethod": 4,
             "fillOrigin": 0,
             "fillAmount": 1,
             "fillClockwise": true,
             "preserveAspect": false,
             "color": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
             },
             "raycast": false,
             "enabled": true,
             "maskable": false
            }
           }
          }
         ]
        },
        {
         "id": "n510_Next_button_2",
         "tfId": "2042930336",
         "goId": "2042930335",
         "name": "Next button (2)",
         "active": false,
         "anchoredPos": {
          "x": 0,
          "y": -475.99997
         },
         "sizeDelta": {
          "x": 559,
          "y": 94
         },
         "anchorMin": {
          "x": 0.5,
          "y": 0.5
         },
         "anchorMax": {
          "x": 0.5,
          "y": 0.5
         },
         "pivot": {
          "x": 0.5,
          "y": 0.5
         },
         "scale": {
          "x": 1,
          "y": 1
         },
         "rotZ": 0,
         "components": {
          "button": {
           "interactable": true,
           "onClick": [],
           "targetGraphic": "2042930338",
           "transition": 1
          },
          "image": {
           "sprite": {
            "path": "assets/img/Button_Blue__5_.webp",
            "cropRect": {
             "x": 0,
             "y": 0,
             "w": 1,
             "h": 1
            },
            "border": {
             "l": 0,
             "b": 0,
             "r": 0,
             "t": 0
            },
            "native": {
             "w": 559,
             "h": 94
            }
           },
           "type": 0,
           "fillMethod": 4,
           "fillOrigin": 0,
           "fillAmount": 1,
           "fillClockwise": true,
           "preserveAspect": false,
           "color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
           },
           "raycast": true,
           "enabled": true,
           "maskable": true
          }
         }
        }
       ]
      }
     ]
    },
    {
     "id": "n511_Message_bar",
     "tfId": "1500737162",
     "goId": "1500737161",
     "name": "Message bar",
     "active": true,
     "anchoredPos": {
      "x": -14,
      "y": -121
     },
     "sizeDelta": {
      "x": 1786,
      "y": 242
     },
     "anchorMin": {
      "x": 0.5,
      "y": 1
     },
     "anchorMax": {
      "x": 0.5,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Group_578.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1786,
         "h": 242
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     },
     "children": [
      {
       "id": "n512_Text_TMP",
       "tfId": "2057887490",
       "goId": "2057887489",
       "name": "Text (TMP)",
       "active": true,
       "anchoredPos": {
        "x": -24.5,
        "y": 13
       },
       "sizeDelta": {
        "x": 1501,
        "y": 54
       },
       "anchorMin": {
        "x": 0.5,
        "y": 0.5
       },
       "anchorMax": {
        "x": 0.5,
        "y": 0.5
       },
       "pivot": {
        "x": 0.5,
        "y": 0.5
       },
       "scale": {
        "x": 1,
        "y": 1
       },
       "rotZ": 0,
       "components": {
        "tmp": {
         "text": "Tap the box.",
         "fontGuid": "73f1a7e3c535c684dbe849fbd7f0b0e9",
         "fontSize": 48,
         "autoSize": false,
         "sizeMin": 18,
         "sizeMax": 72,
         "alignH": 1,
         "alignV": 512,
         "charSpacing": 0,
         "lineSpacing": 0,
         "wordSpacing": 0,
         "style": 0,
         "color": {
          "r": 0.58431375,
          "g": 0.28627452,
          "b": 0.11764706,
          "a": 1
         },
         "enabled": true,
         "fontPath": "assets/fonts/LilitaOne-Regular.ttf"
        }
       }
      }
     ]
    },
    {
     "id": "n513_Image",
     "tfId": "1322952494",
     "goId": "1322952493",
     "name": "Image",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5027.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    },
    {
     "id": "n514_Image_1",
     "tfId": "1923073786",
     "goId": "1923073785",
     "name": "Image (1)",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 1,
      "y": 1
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/IMG_5032.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    },
    {
     "id": "n515_Final_screen",
     "tfId": "1585868559",
     "goId": "1585868558",
     "name": "Final screen",
     "active": false,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 1920,
      "y": 1080
     },
     "anchorMin": {
      "x": 0.5,
      "y": 0.5
     },
     "anchorMax": {
      "x": 0.5,
      "y": 0.5
     },
     "pivot": {
      "x": 0.5,
      "y": 0.5
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "image": {
       "sprite": {
        "path": "assets/img/Slide_16_9_-_194.webp",
        "cropRect": {
         "x": 0,
         "y": 0,
         "w": 1,
         "h": 1
        },
        "border": {
         "l": 0,
         "b": 0,
         "r": 0,
         "t": 0
        },
        "native": {
         "w": 1920,
         "h": 1080
        }
       },
       "type": 0,
       "fillMethod": 4,
       "fillOrigin": 0,
       "fillAmount": 1,
       "fillClockwise": true,
       "preserveAspect": false,
       "color": {
        "r": 1,
        "g": 1,
        "b": 1,
        "a": 1
       },
       "raycast": true,
       "enabled": true,
       "maskable": true
      }
     }
    }
   ]
  },
  {
   "id": "n516_ConfettiBlast",
   "tfId": "655119007",
   "goId": "P496609566_5798539967110598939",
   "name": "ConfettiBlast",
   "active": false,
   "anchoredPos": {
    "x": 0,
    "y": 0
   },
   "sizeDelta": {
    "x": 0,
    "y": 0
   },
   "anchorMin": {
    "x": 0,
    "y": 0
   },
   "anchorMax": {
    "x": 0,
    "y": 0
   },
   "pivot": {
    "x": 0,
    "y": 0
   },
   "scale": {
    "x": 250,
    "y": 250
   },
   "rotZ": 0,
   "components": {
    "particles": {
     "kind": "confetti"
    }
   },
   "children": [
    {
     "id": "n517_SmallGlow",
     "tfId": "P496609566_5751487847434861004",
     "goId": "P496609566_7809919986099652209",
     "name": "SmallGlow",
     "active": true,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 0,
      "y": 0
     },
     "pivot": {
      "x": 0,
      "y": 0
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "particles": {
       "kind": "confetti"
      }
     }
    },
    {
     "id": "n518_BrakeDown",
     "tfId": "P496609566_5806848637278835358",
     "goId": "P496609566_6273870505818435593",
     "name": "BrakeDown",
     "active": true,
     "anchoredPos": {
      "x": 0,
      "y": 0
     },
     "sizeDelta": {
      "x": 0,
      "y": 0
     },
     "anchorMin": {
      "x": 0,
      "y": 0
     },
     "anchorMax": {
      "x": 0,
      "y": 0
     },
     "pivot": {
      "x": 0,
      "y": 0
     },
     "scale": {
      "x": 1,
      "y": 1
     },
     "rotZ": 0,
     "components": {
      "particles": {
       "kind": "confetti"
      }
     }
    }
   ]
  },
  {
   "id": "n519_hand",
   "tfId": "2106564258",
   "goId": "P2106564257_820586250070207530",
   "name": "hand",
   "active": false,
   "anchoredPos": {
    "x": 0,
    "y": 0
   },
   "sizeDelta": {
    "x": 400,
    "y": 400
   },
   "anchorMin": {
    "x": 0.5,
    "y": 0.5
   },
   "anchorMax": {
    "x": 0.5,
    "y": 0.5
   },
   "pivot": {
    "x": 0.5,
    "y": 0.5
   },
   "scale": {
    "x": 0.7,
    "y": 0.7
   },
   "rotZ": 0,
   "components": {
    "image": {
     "sprite": {
      "path": "assets/img/frame_00_delay-0.02s.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 0,
       "h": 0
      }
     },
     "type": 0,
     "fillMethod": 4,
     "fillOrigin": 0,
     "fillAmount": 1,
     "fillClockwise": true,
     "preserveAspect": true,
     "color": {
      "r": 1,
      "g": 1,
      "b": 1,
      "a": 1
     },
     "raycast": false,
     "enabled": true,
     "maskable": true
    },
    "animator": {
     "present": true
    }
   }
  }
 ]
};
window.CONFIG = {
 "colorSpace": 1,
 "canvasScaler": {
  "mode": 1,
  "refW": 1920,
  "refH": 1080,
  "matchMode": 0,
  "match": 0.5
 },
 "gameManagers": [
  {
   "host": "n307_Level_3",
   "level": "Level 3",
   "fields": {
    "messageBar": {
     "node": "n406_Message_bar"
    },
    "instructionText": {
     "node": "n407_Text_TMP"
    },
    "typingSpeed": 0.05,
    "instruction1": "Tap the box.",
    "instruction2": "Let us find which is heavier and which is lighter.",
    "instruction3": "Drag the ribbon.",
    "instruction4": "Drag the crown.",
    "instruction5": "Tap the heavier item.",
    "instruction6": "Oops! Try again.",
    "instruction7": "Well done!",
    "instruction8": "Drag the heavier item to the wagon and lighter item to the basket.",
    "audioSource": {
     "nodeUnresolved": "601362590"
    },
    "instruction1Audio": {
     "audio": "assets/audio/Tap_the_box.mp3"
    },
    "instruction2Audio": {
     "audio": "assets/audio/Let_us_find_which_is_heavier_and_which_is_lighter.mp3"
    },
    "instruction3Audio": {
     "audio": "assets/audio/Drag_the_ribbon.mp3"
    },
    "instruction4Audio": {
     "audio": "assets/audio/Drag_the_crown.mp3"
    },
    "instruction5Audio": {
     "audio": "assets/audio/Tap_the_heavier_item.mp3"
    },
    "instruction6Audio": {
     "audio": "assets/audio/Oops_Try_Again.mp3"
    },
    "instruction7Audio": {
     "audio": "assets/audio/Well_done.mp3"
    },
    "instruction8Audio": {
     "audio": "assets/audio/Drag_the_heavier_item_to_the_wagon_and_lighter_item_to.mp3"
    },
    "part2AudioSource": {
     "nodeUnresolved": "601362590"
    },
    "featherLanternAudio": {
     "audio": "assets/audio/A_crown_and_a_ribbon.mp3"
    },
    "wrongSFX": {
     "audio": "assets/audio/incorrect_error.mp3"
    },
    "wrongSFXSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxButton": {
     "node": "n313_box_open"
    },
    "boxImage": {
     "node": "n313_box_open"
    },
    "boxOpenSprite": {
     "sprite": {
      "path": "assets/img/0055.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 654,
       "h": 649
      }
     }
    },
    "boxOpenSFX": {
     "audio": "assets/audio/magical.mp3"
    },
    "sfxSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxTop": {
     "node": "n314_box_top"
    },
    "moveUpDistance": 500,
    "item1": {
     "node": "n315_Lantern"
    },
    "item2": {
     "node": "n317_Feather"
    },
    "highlightImage": {
     "node": "n311_highlight"
    },
    "hintHand": {
     "node": "n320_hand"
    },
    "hintHandScale": 0.5,
    "part1Object": {
     "node": "n308_Part_1"
    },
    "part2Object": {
     "node": "n321_Part_2"
    },
    "part3Object": {
     "node": "n337_Part_3"
    },
    "item3": {
     "node": "n322_item_01"
    },
    "item4": {
     "node": "n324_item_02"
    },
    "lanternTextObject": {
     "node": "n327_Crown_text"
    },
    "lanternAnimator": {
     "node": "n327_Crown_text"
    },
    "featherTextObject": {
     "node": "n332_Ribbon_text"
    },
    "featherAnimator": {
     "node": "n332_Ribbon_text"
    },
    "nextButtonPart2": {
     "node": "n326_Next_button"
    },
    "bookDraggable": {
     "node": "n358_Crown"
    },
    "ballDraggable": {
     "node": "n363_Ribbon"
    },
    "scaleController": {
     "node": "n338_controller"
    },
    "bookAnswerButton": {
     "node": "n358_Crown"
    },
    "ballAnswerButton": {
     "node": "n363_Ribbon"
    },
    "tryAgainButton": {
     "node": "n372_Try_Again_button"
    },
    "nextButtonPart3": {
     "node": "n371_Next_button_1"
    },
    "item5": {
     "node": "n357_Item_2"
    },
    "item6": {
     "node": "n362_Item_1"
    },
    "bookImage": {
     "node": "n358_Crown"
    },
    "ballImage": {
     "node": "n363_Ribbon"
    },
    "bookCorrectSprite": {
     "sprite": {
      "path": "assets/img/green_crown.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "bookWrongSprite": {
     "sprite": {
      "path": "assets/img/red_crown.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballCorrectSprite": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 152,
       "h": 140
      }
     }
    },
    "ballWrongSprite": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__26__4.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 235,
       "h": 223
      }
     }
    },
    "hintHand1": {
     "node": "n364_Hint_hand_1"
    },
    "hintHand2": {
     "node": "n359_Hint_hand"
    },
    "dragHintDelay": 5,
    "isFirstLevel": 0,
    "arrow1": {
     "node": "n368_Heavy"
    },
    "arrow2": {
     "node": "n370_Heavy_1"
    },
    "arrow1LeftCorrectPos": {
     "x": -630,
     "y": -56
    },
    "arrow2LeftCorrectPos": {
     "x": 600,
     "y": 70
    },
    "arrow1RightCorrectPos": {
     "x": 630,
     "y": -56
    },
    "arrow2RightCorrectPos": {
     "x": -600,
     "y": 70
    },
    "part3AnswerHint": {
     "node": "n355_hand"
    },
    "part3AnswerHintDelay": 5,
    "part3HintScale": 0.7,
    "part3HintOffset": {
     "x": 0,
     "y": -10
    },
    "isLastLevel": 0,
    "ghostHand": {
     "node": "n376_Ghost"
    },
    "ghostItem": {
     "node": "n375_item"
    },
    "ghostItemImage": {
     "node": "n375_item"
    },
    "ghostAlpha": 0.75,
    "bookStartPoint": {
     "node": "n358_Crown"
    },
    "ballStartPoint": {
     "node": "n363_Ribbon"
    },
    "leftDropPoint": {
     "node": "n347_GameObject"
    },
    "rightDropPoint": {
     "node": "n353_GameObject"
    },
    "hintLayer": {
     "node": "n307_Level_3"
    },
    "ghostDelayPart3": 5,
    "ghostMoveDuration": 1.2,
    "finalScreen": null,
    "finalScreenAudio": null,
    "finalParticleEffect": null,
    "part4CompleteEffect": {
     "node": "n516_ConfettiBlast"
    },
    "answerMode": 1,
    "part4Object": {
     "node": "n377_Part_4"
    },
    "nextButtonPart4": {
     "node": "n405_Next_button_2"
    },
    "basket": {
     "node": "n386_Basket"
    },
    "trolley": {
     "node": "n379_Trolly"
    },
    "base3": {
     "node": "n394_Item_02"
    },
    "base4": {
     "node": "n396_Item_01"
    },
    "bookDraggablePart4": {
     "node": "n395_Image"
    },
    "ballDraggablePart4": {
     "node": "n397_Image"
    },
    "wrongImagePart4_1": {
     "node": "n408_Image"
    },
    "wrongImagePart4_2": {
     "node": "n409_Image_1"
    },
    "bookStartPointPart4": {
     "node": "n395_Image"
    },
    "ballStartPointPart4": {
     "node": "n397_Image"
    },
    "basketDropPoint": {
     "node": "n391_Ribbon"
    },
    "trolleyDropPoint": {
     "node": "n384_Crown"
    },
    "ghostDelayPart4": 6,
    "bookGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/crown.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 152,
       "h": 140
      }
     }
    },
    "bookGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 152,
       "h": 140
      }
     }
    },
    "ballGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/crown.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "part4HintHand1": {
     "node": "n399_hint_hand"
    },
    "part4HintHand2": {
     "node": "n402_hint_hand_1"
    },
    "part4HintDelay": 12,
    "nextButtonHintHand": {
     "node": "n519_hand"
    },
    "nextButtonHintDelay": 12
   }
  },
  {
   "host": "n410_Level_4",
   "level": "Level 4",
   "fields": {
    "messageBar": {
     "node": "n511_Message_bar"
    },
    "instructionText": {
     "node": "n512_Text_TMP"
    },
    "typingSpeed": 0.05,
    "instruction1": "Tap the box.",
    "instruction2": "Let us find which is heavier and which is lighter.",
    "instruction3": "Drag the vase.",
    "instruction4": "Drag the flowers.",
    "instruction5": "Tap the heavier item.",
    "instruction6": "Oops! Try again.",
    "instruction7": "Well done!",
    "instruction8": "Drag the heavier item to the wagon and lighter item to the basket.",
    "audioSource": {
     "nodeUnresolved": "601362590"
    },
    "instruction1Audio": {
     "audio": "assets/audio/Tap_the_box.mp3"
    },
    "instruction2Audio": {
     "audio": "assets/audio/Let_us_find_which_is_heavier_and_which_is_lighter.mp3"
    },
    "instruction3Audio": {
     "audio": "assets/audio/Drag_the_vase_.mp3"
    },
    "instruction4Audio": {
     "audio": "assets/audio/Drag_the_flowers_.mp3"
    },
    "instruction5Audio": {
     "audio": "assets/audio/Tap_the_heavier_item.mp3"
    },
    "instruction6Audio": {
     "audio": "assets/audio/Oops_Try_Again.mp3"
    },
    "instruction7Audio": {
     "audio": "assets/audio/Well_done.mp3"
    },
    "instruction8Audio": {
     "audio": "assets/audio/Drag_the_heavier_item_to_the_wagon_and_lighter_item_to.mp3"
    },
    "part2AudioSource": {
     "nodeUnresolved": "601362590"
    },
    "featherLanternAudio": {
     "audio": "assets/audio/flowers__and__A_vase.mp3"
    },
    "wrongSFX": {
     "audio": "assets/audio/incorrect_error.mp3"
    },
    "wrongSFXSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxButton": {
     "node": "n416_box_open"
    },
    "boxImage": {
     "node": "n416_box_open"
    },
    "boxOpenSprite": {
     "sprite": {
      "path": "assets/img/0001.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 684,
       "h": 649
      }
     }
    },
    "boxOpenSFX": {
     "audio": "assets/audio/magical.mp3"
    },
    "sfxSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxTop": {
     "node": "n417_box_top"
    },
    "moveUpDistance": 500,
    "item1": {
     "node": "n418_Lantern"
    },
    "item2": {
     "node": "n420_Feather"
    },
    "highlightImage": {
     "node": "n414_highlight"
    },
    "hintHand": {
     "node": "n423_hand"
    },
    "hintHandScale": 0.5,
    "part1Object": {
     "node": "n411_Part_1"
    },
    "part2Object": {
     "node": "n424_Part_2"
    },
    "part3Object": {
     "node": "n440_Part_3"
    },
    "item3": {
     "node": "n425_item_01"
    },
    "item4": {
     "node": "n427_item_02"
    },
    "lanternTextObject": {
     "node": "n430_Lantern_text"
    },
    "lanternAnimator": {
     "node": "n430_Lantern_text"
    },
    "featherTextObject": {
     "node": "n435_Feather_text"
    },
    "featherAnimator": {
     "node": "n435_Feather_text"
    },
    "nextButtonPart2": {
     "node": "n429_Next_button"
    },
    "bookDraggable": {
     "node": "n461_Book"
    },
    "ballDraggable": {
     "node": "n466_Ball"
    },
    "scaleController": {
     "node": "n441_controller"
    },
    "bookAnswerButton": {
     "node": "n461_Book"
    },
    "ballAnswerButton": {
     "node": "n466_Ball"
    },
    "tryAgainButton": {
     "node": "n475_Try_Again_button"
    },
    "nextButtonPart3": {
     "node": "n474_Next_button_1"
    },
    "item5": {
     "node": "n460_Item_2"
    },
    "item6": {
     "node": "n465_Item_1"
    },
    "bookImage": {
     "node": "n461_Book"
    },
    "ballImage": {
     "node": "n466_Ball"
    },
    "bookCorrectSprite": {
     "sprite": {
      "path": "assets/img/green_flowers.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "bookWrongSprite": {
     "sprite": {
      "path": "assets/img/red_flowers.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballCorrectSprite": {
     "sprite": {
      "path": "assets/img/green_vase.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballWrongSprite": {
     "sprite": {
      "path": "assets/img/red_vase.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "hintHand1": {
     "node": "n467_Hint_hand_1"
    },
    "hintHand2": {
     "node": "n462_Hint_hand"
    },
    "dragHintDelay": 5,
    "isFirstLevel": 0,
    "arrow1": {
     "node": "n471_Heavy"
    },
    "arrow2": {
     "node": "n473_Heavy_1"
    },
    "arrow1LeftCorrectPos": {
     "x": -630,
     "y": -56
    },
    "arrow2LeftCorrectPos": {
     "x": 600,
     "y": 70
    },
    "arrow1RightCorrectPos": {
     "x": 630,
     "y": -56
    },
    "arrow2RightCorrectPos": {
     "x": -600,
     "y": 70
    },
    "part3AnswerHint": {
     "node": "n458_hand"
    },
    "part3AnswerHintDelay": 5,
    "part3HintScale": 0.7,
    "part3HintOffset": {
     "x": 0,
     "y": -10
    },
    "isLastLevel": 1,
    "ghostHand": {
     "node": "n479_Ghost"
    },
    "ghostItem": {
     "node": "n478_item"
    },
    "ghostItemImage": {
     "node": "n478_item"
    },
    "ghostAlpha": 0.75,
    "bookStartPoint": {
     "node": "n461_Book"
    },
    "ballStartPoint": {
     "node": "n466_Ball"
    },
    "leftDropPoint": {
     "node": "n450_GameObject"
    },
    "rightDropPoint": {
     "node": "n456_GameObject"
    },
    "hintLayer": {
     "node": "n410_Level_4"
    },
    "ghostDelayPart3": 5,
    "ghostMoveDuration": 1.2,
    "finalScreen": {
     "node": "n515_Final_screen"
    },
    "finalScreenAudio": {
     "audio": "assets/audio/yey_path_cleared_.mp3"
    },
    "finalParticleEffect": {
     "node": "n516_ConfettiBlast"
    },
    "part4CompleteEffect": {
     "node": "n516_ConfettiBlast"
    },
    "answerMode": 1,
    "part4Object": {
     "node": "n480_Part_4"
    },
    "nextButtonPart4": {
     "node": "n510_Next_button_2"
    },
    "basket": {
     "node": "n490_Basket"
    },
    "trolley": {
     "node": "n482_Trolly"
    },
    "base3": {
     "node": "n499_Item_02"
    },
    "base4": {
     "node": "n501_Item_01"
    },
    "bookDraggablePart4": {
     "node": "n502_Image"
    },
    "ballDraggablePart4": {
     "node": "n500_Image"
    },
    "wrongImagePart4_1": {
     "node": "n513_Image"
    },
    "wrongImagePart4_2": {
     "node": "n514_Image_1"
    },
    "bookStartPointPart4": {
     "node": "n502_Image"
    },
    "ballStartPointPart4": {
     "node": "n500_Image"
    },
    "basketDropPoint": {
     "node": "n496_Flowers"
    },
    "trolleyDropPoint": {
     "node": "n488_Vase"
    },
    "ghostDelayPart4": 6,
    "bookGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/flowers.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/vase.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "bookGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/flowers.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/vase.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "part4HintHand1": {
     "node": "n507_hint_hand_1"
    },
    "part4HintHand2": {
     "node": "n504_hint_hand"
    },
    "part4HintDelay": 12,
    "nextButtonHintHand": {
     "node": "n519_hand"
    },
    "nextButtonHintDelay": 12
   }
  },
  {
   "host": "n5_Tutorial",
   "level": "Tutorial",
   "fields": {
    "messageBar": {
     "node": "n101_Message_bar"
    },
    "instructionText": {
     "node": "n102_Text_TMP"
    },
    "typingSpeed": 0.05,
    "instruction1": "Tap the box.",
    "instruction2": "Let us find which is heavier and which is lighter.",
    "instruction3": "Drag the feather.",
    "instruction4": "Drag the lantern.",
    "instruction5": "Tap the lighter item.",
    "instruction6": "Oops! Try again.",
    "instruction7": "Well done!",
    "instruction8": "Drag the heavier item to the wagon and lighter item to the basket.",
    "audioSource": {
     "nodeUnresolved": "601362590"
    },
    "instruction1Audio": {
     "audio": "assets/audio/Tap_the_box.mp3"
    },
    "instruction2Audio": {
     "audio": "assets/audio/Let_us_find_which_is_heavier_and_which_is_lighter.mp3"
    },
    "instruction3Audio": {
     "audio": "assets/audio/Drag_the_feather.mp3"
    },
    "instruction4Audio": {
     "audio": "assets/audio/Drag_the_lantern.mp3"
    },
    "instruction5Audio": {
     "audio": "assets/audio/Tap_the_lighter_item.mp3"
    },
    "instruction6Audio": {
     "audio": "assets/audio/Oops_Try_Again.mp3"
    },
    "instruction7Audio": {
     "audio": "assets/audio/Well_done.mp3"
    },
    "instruction8Audio": {
     "audio": "assets/audio/Drag_the_heavier_item_to_the_wagon_and_lighter_item_to.mp3"
    },
    "part2AudioSource": {
     "nodeUnresolved": "601362590"
    },
    "featherLanternAudio": {
     "audio": "assets/audio/A_lantern_and_a_feather.mp3"
    },
    "wrongSFX": {
     "audio": "assets/audio/incorrect_error.mp3"
    },
    "wrongSFXSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxButton": {
     "node": "n11_box_open"
    },
    "boxImage": {
     "node": "n11_box_open"
    },
    "boxOpenSprite": {
     "sprite": {
      "path": "assets/img/0001.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 684,
       "h": 649
      }
     }
    },
    "boxOpenSFX": {
     "audio": "assets/audio/magical.mp3"
    },
    "sfxSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxTop": {
     "node": "n12_box_top"
    },
    "moveUpDistance": 500,
    "item1": {
     "node": "n13_Lantern"
    },
    "item2": {
     "node": "n15_Feather"
    },
    "highlightImage": {
     "node": "n9_highlight"
    },
    "hintHand": {
     "node": "n18_hand"
    },
    "hintHandScale": 0.5,
    "part1Object": {
     "node": "n6_Part_1"
    },
    "part2Object": {
     "node": "n19_Part_2"
    },
    "part3Object": {
     "node": "n35_Part_3"
    },
    "item3": {
     "node": "n20_item_01"
    },
    "item4": {
     "node": "n22_item_02"
    },
    "lanternTextObject": {
     "node": "n25_Bell_text"
    },
    "lanternAnimator": {
     "node": "n25_Bell_text"
    },
    "featherTextObject": {
     "node": "n30_Paper_fan_text"
    },
    "featherAnimator": {
     "node": "n30_Paper_fan_text"
    },
    "nextButtonPart2": {
     "node": "n24_Next_button"
    },
    "bookDraggable": {
     "node": "n56_Bell"
    },
    "ballDraggable": {
     "node": "n61_paper_fan"
    },
    "scaleController": {
     "node": "n36_controller"
    },
    "bookAnswerButton": {
     "node": "n56_Bell"
    },
    "ballAnswerButton": {
     "node": "n61_paper_fan"
    },
    "tryAgainButton": {
     "node": "n70_Try_Again_button"
    },
    "nextButtonPart3": {
     "node": "n69_Next_button_1"
    },
    "item5": {
     "node": "n55_Item_2"
    },
    "item6": {
     "node": "n60_Item_1"
    },
    "bookImage": {
     "node": "n56_Bell"
    },
    "ballImage": {
     "node": "n61_paper_fan"
    },
    "bookCorrectSprite": {
     "sprite": {
      "path": "assets/img/Lantern_01.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 634,
       "h": 423
      }
     }
    },
    "bookWrongSprite": {
     "sprite": {
      "path": "assets/img/Lantern_02.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 634,
       "h": 423
      }
     }
    },
    "ballCorrectSprite": {
     "sprite": {
      "path": "assets/img/feather_01.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 634,
       "h": 423
      }
     }
    },
    "ballWrongSprite": {
     "sprite": {
      "path": "assets/img/feather_02.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 634,
       "h": 423
      }
     }
    },
    "hintHand1": {
     "node": "n62_Hint_hand_1"
    },
    "hintHand2": {
     "node": "n57_Hint_hand"
    },
    "dragHintDelay": 5,
    "isFirstLevel": 1,
    "arrow1": {
     "node": "n66_Heavy"
    },
    "arrow2": {
     "node": "n68_Heavy_1"
    },
    "arrow1LeftCorrectPos": {
     "x": 630,
     "y": -56
    },
    "arrow2LeftCorrectPos": {
     "x": -630,
     "y": 70
    },
    "arrow1RightCorrectPos": {
     "x": -630,
     "y": -56
    },
    "arrow2RightCorrectPos": {
     "x": 630,
     "y": 70
    },
    "part3AnswerHint": {
     "node": "n53_hand"
    },
    "part3AnswerHintDelay": 5,
    "part3HintScale": 0.7,
    "part3HintOffset": {
     "x": 0,
     "y": -10
    },
    "isLastLevel": 0,
    "ghostHand": {
     "node": "n74_Ghost"
    },
    "ghostItem": {
     "node": "n73_item"
    },
    "ghostItemImage": {
     "node": "n73_item"
    },
    "ghostAlpha": 0.75,
    "bookStartPoint": {
     "node": "n56_Bell"
    },
    "ballStartPoint": {
     "node": "n61_paper_fan"
    },
    "leftDropPoint": {
     "node": "n45_GameObject"
    },
    "rightDropPoint": {
     "node": "n51_GameObject"
    },
    "hintLayer": {
     "node": "n1_Canvas"
    },
    "ghostDelayPart3": 5,
    "ghostMoveDuration": 1.2,
    "finalScreen": null,
    "finalScreenAudio": null,
    "finalParticleEffect": null,
    "part4CompleteEffect": {
     "node": "n98_ConfettiBlast"
    },
    "answerMode": 0,
    "part4Object": {
     "node": "n75_Part_4"
    },
    "nextButtonPart4": {
     "node": "n97_Next_button_2"
    },
    "basket": {
     "node": "n81_Basket"
    },
    "trolley": {
     "node": "n77_Trolly"
    },
    "base3": {
     "node": "n88_Item_02"
    },
    "base4": {
     "node": "n86_Item_01"
    },
    "bookDraggablePart4": {
     "node": "n89_Image"
    },
    "ballDraggablePart4": {
     "node": "n87_Image"
    },
    "wrongImagePart4_1": {
     "node": "n103_Image"
    },
    "wrongImagePart4_2": {
     "node": "n104_Image_1"
    },
    "bookStartPointPart4": {
     "node": "n89_Image"
    },
    "ballStartPointPart4": {
     "node": "n87_Image"
    },
    "basketDropPoint": {
     "node": "n83_Feather"
    },
    "trolleyDropPoint": {
     "node": "n79_Lantern"
    },
    "ghostDelayPart4": 1,
    "bookGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/Untitled_design__21__7.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 191,
       "h": 192
      }
     }
    },
    "ballGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/Untitled_design__33__6.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 193,
       "h": 190
      }
     }
    },
    "bookGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/Untitled_design__33__6.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 193,
       "h": 190
      }
     }
    },
    "ballGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/Untitled_design__21__7.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 191,
       "h": 192
      }
     }
    },
    "part4HintHand1": {
     "node": "n91_hint_hand"
    },
    "part4HintHand2": {
     "node": "n94_hint_hand_1"
    },
    "part4HintDelay": 12,
    "nextButtonHintHand": {
     "node": "n519_hand"
    },
    "nextButtonHintDelay": 12
   }
  },
  {
   "host": "n206_Level_2",
   "level": "Level 2",
   "fields": {
    "messageBar": {
     "node": "n303_Message_bar"
    },
    "instructionText": {
     "node": "n304_Text_TMP"
    },
    "typingSpeed": 0.05,
    "instruction1": "Tap the box.",
    "instruction2": "Let us find which is heavier and which is lighter.",
    "instruction3": "Drag the paper fan.",
    "instruction4": "Drag the bell.",
    "instruction5": "Tap the lighter item.",
    "instruction6": "Oops! Try again.",
    "instruction7": "Well done!",
    "instruction8": "Drag the heavier item to the wagon and lighter item to the basket.",
    "audioSource": {
     "nodeUnresolved": "601362590"
    },
    "instruction1Audio": {
     "audio": "assets/audio/Tap_the_box.mp3"
    },
    "instruction2Audio": {
     "audio": "assets/audio/Let_us_find_which_is_heavier_and_which_is_lighter.mp3"
    },
    "instruction3Audio": {
     "audio": "assets/audio/Drag_the_paper_fan_.mp3"
    },
    "instruction4Audio": {
     "audio": "assets/audio/Drag_the_bell.mp3"
    },
    "instruction5Audio": {
     "audio": "assets/audio/Tap_the_lighter_item.mp3"
    },
    "instruction6Audio": {
     "audio": "assets/audio/Oops_Try_Again.mp3"
    },
    "instruction7Audio": {
     "audio": "assets/audio/Well_done.mp3"
    },
    "instruction8Audio": {
     "audio": "assets/audio/Drag_the_heavier_item_to_the_wagon_and_lighter_item_to.mp3"
    },
    "part2AudioSource": {
     "nodeUnresolved": "601362590"
    },
    "featherLanternAudio": {
     "audio": "assets/audio/a_bell_and_a_paper_fan.mp3"
    },
    "wrongSFX": {
     "audio": "assets/audio/incorrect_error.mp3"
    },
    "wrongSFXSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxButton": {
     "node": "n212_box_open"
    },
    "boxImage": {
     "node": "n212_box_open"
    },
    "boxOpenSprite": {
     "sprite": {
      "path": "assets/img/0044.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 684,
       "h": 649
      }
     }
    },
    "boxOpenSFX": {
     "audio": "assets/audio/magical.mp3"
    },
    "sfxSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxTop": {
     "node": "n213_box_top"
    },
    "moveUpDistance": 500,
    "item1": {
     "node": "n214_Lantern"
    },
    "item2": {
     "node": "n216_Feather"
    },
    "highlightImage": {
     "node": "n210_highlight"
    },
    "hintHand": {
     "node": "n219_hand"
    },
    "hintHandScale": 0.5,
    "part1Object": {
     "node": "n207_Part_1"
    },
    "part2Object": {
     "node": "n220_Part_2"
    },
    "part3Object": {
     "node": "n236_Part_3"
    },
    "item3": {
     "node": "n221_item_01"
    },
    "item4": {
     "node": "n223_item_02"
    },
    "lanternTextObject": {
     "node": "n226_Bell_text"
    },
    "lanternAnimator": {
     "node": "n226_Bell_text"
    },
    "featherTextObject": {
     "node": "n231_Paper_fan_text"
    },
    "featherAnimator": {
     "node": "n231_Paper_fan_text"
    },
    "nextButtonPart2": {
     "node": "n225_Next_button"
    },
    "bookDraggable": {
     "node": "n257_Bell"
    },
    "ballDraggable": {
     "node": "n262_paper_fan"
    },
    "scaleController": {
     "node": "n237_controller"
    },
    "bookAnswerButton": {
     "node": "n257_Bell"
    },
    "ballAnswerButton": {
     "node": "n262_paper_fan"
    },
    "tryAgainButton": {
     "node": "n271_Try_Again_button"
    },
    "nextButtonPart3": {
     "node": "n270_Next_button_1"
    },
    "item5": {
     "node": "n256_Item_2"
    },
    "item6": {
     "node": "n261_Item_1"
    },
    "bookImage": {
     "node": "n257_Bell"
    },
    "ballImage": {
     "node": "n262_paper_fan"
    },
    "bookCorrectSprite": {
     "sprite": {
      "path": "assets/img/green_bell.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "bookWrongSprite": {
     "sprite": {
      "path": "assets/img/red_bell.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballCorrectSprite": {
     "sprite": {
      "path": "assets/img/green_paper_fan.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballWrongSprite": {
     "sprite": {
      "path": "assets/img/red_paper_fan.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "hintHand1": {
     "node": "n263_Hint_hand_1"
    },
    "hintHand2": {
     "node": "n258_Hint_hand"
    },
    "dragHintDelay": 5,
    "isFirstLevel": 0,
    "arrow1": {
     "node": "n267_Heavy"
    },
    "arrow2": {
     "node": "n269_Heavy_1"
    },
    "arrow1LeftCorrectPos": {
     "x": 630,
     "y": -56
    },
    "arrow2LeftCorrectPos": {
     "x": -630,
     "y": 70
    },
    "arrow1RightCorrectPos": {
     "x": -630,
     "y": -56
    },
    "arrow2RightCorrectPos": {
     "x": 630,
     "y": 70
    },
    "part3AnswerHint": {
     "node": "n254_hand"
    },
    "part3AnswerHintDelay": 5,
    "part3HintScale": 0.7,
    "part3HintOffset": {
     "x": 0,
     "y": -10
    },
    "isLastLevel": 0,
    "ghostHand": {
     "node": "n275_Ghost"
    },
    "ghostItem": {
     "node": "n274_item"
    },
    "ghostItemImage": {
     "node": "n274_item"
    },
    "ghostAlpha": 0.75,
    "bookStartPoint": {
     "node": "n257_Bell"
    },
    "ballStartPoint": {
     "node": "n262_paper_fan"
    },
    "leftDropPoint": {
     "node": "n246_GameObject"
    },
    "rightDropPoint": {
     "node": "n252_GameObject"
    },
    "hintLayer": {
     "node": "n1_Canvas"
    },
    "ghostDelayPart3": 5,
    "ghostMoveDuration": 1.2,
    "finalScreen": null,
    "finalScreenAudio": null,
    "finalParticleEffect": null,
    "part4CompleteEffect": {
     "node": "n516_ConfettiBlast"
    },
    "answerMode": 0,
    "part4Object": {
     "node": "n276_Part_4"
    },
    "nextButtonPart4": {
     "node": "n302_Next_button_2"
    },
    "basket": {
     "node": "n284_Basket"
    },
    "trolley": {
     "node": "n278_Trolly"
    },
    "base3": {
     "node": "n293_Item_02"
    },
    "base4": {
     "node": "n291_Item_01"
    },
    "bookDraggablePart4": {
     "node": "n294_Image"
    },
    "ballDraggablePart4": {
     "node": "n292_Image"
    },
    "wrongImagePart4_1": {
     "node": "n305_Image"
    },
    "wrongImagePart4_2": {
     "node": "n306_Image_1"
    },
    "bookStartPointPart4": {
     "node": "n294_Image"
    },
    "ballStartPointPart4": {
     "node": "n292_Image"
    },
    "basketDropPoint": {
     "node": "n288_paper_fan"
    },
    "trolleyDropPoint": {
     "node": "n282_Bell"
    },
    "ghostDelayPart4": 6,
    "bookGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/normal_bell.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/paper_fan.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "bookGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/paper_fan.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/normal_bell.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "part4HintHand1": {
     "node": "n296_hint_hand"
    },
    "part4HintHand2": {
     "node": "n299_hint_hand_1"
    },
    "part4HintDelay": 12,
    "nextButtonHintHand": {
     "node": "n519_hand"
    },
    "nextButtonHintDelay": 12
   }
  },
  {
   "host": "n105_Level_1",
   "level": "Level 1",
   "fields": {
    "messageBar": {
     "node": "n202_Message_bar"
    },
    "instructionText": {
     "node": "n203_Text_TMP"
    },
    "typingSpeed": 0.05,
    "instruction1": "Tap the box.",
    "instruction2": "Let us find which is heavier and which is lighter.",
    "instruction3": "Drag the bell.",
    "instruction4": "Drag the ribbon.",
    "instruction5": "Tap the heavier item.",
    "instruction6": "Oops! Try again.",
    "instruction7": "Well done!",
    "instruction8": "Drag the heavier item to the wagon and lighter item to the basket.",
    "audioSource": {
     "nodeUnresolved": "601362590"
    },
    "instruction1Audio": {
     "audio": "assets/audio/Tap_the_box.mp3"
    },
    "instruction2Audio": {
     "audio": "assets/audio/Let_us_find_which_is_heavier_and_which_is_lighter.mp3"
    },
    "instruction3Audio": {
     "audio": "assets/audio/Drag_the_bell.mp3"
    },
    "instruction4Audio": {
     "audio": "assets/audio/Drag_the_ribbon.mp3"
    },
    "instruction5Audio": {
     "audio": "assets/audio/Tap_the_heavier_item.mp3"
    },
    "instruction6Audio": {
     "audio": "assets/audio/Oops_Try_Again.mp3"
    },
    "instruction7Audio": {
     "audio": "assets/audio/Well_done.mp3"
    },
    "instruction8Audio": {
     "audio": "assets/audio/Drag_the_heavier_item_to_the_wagon_and_lighter_item_to.mp3"
    },
    "part2AudioSource": {
     "nodeUnresolved": "601362590"
    },
    "featherLanternAudio": {
     "audio": "assets/audio/a_ribbon_and_a_bell.mp3"
    },
    "wrongSFX": {
     "audio": "assets/audio/incorrect_error.mp3"
    },
    "wrongSFXSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxButton": {
     "node": "n111_box_open"
    },
    "boxImage": {
     "node": "n111_box_open"
    },
    "boxOpenSprite": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__13__1.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 671,
       "h": 598
      }
     }
    },
    "boxOpenSFX": {
     "audio": "assets/audio/magical.mp3"
    },
    "sfxSource": {
     "nodeUnresolved": "1112590232"
    },
    "boxTop": {
     "node": "n112_box_top"
    },
    "moveUpDistance": 500,
    "item1": {
     "node": "n113_Lantern"
    },
    "item2": {
     "node": "n115_Feather"
    },
    "highlightImage": {
     "node": "n109_highlight"
    },
    "hintHand": {
     "node": "n118_hand"
    },
    "hintHandScale": 0.5,
    "part1Object": {
     "node": "n106_Part_1"
    },
    "part2Object": {
     "node": "n119_Part_2"
    },
    "part3Object": {
     "node": "n135_Part_3"
    },
    "item3": {
     "node": "n120_item_01"
    },
    "item4": {
     "node": "n122_item_02"
    },
    "lanternTextObject": {
     "node": "n125_Lantern_text"
    },
    "lanternAnimator": {
     "node": "n125_Lantern_text"
    },
    "featherTextObject": {
     "node": "n130_Feather_text"
    },
    "featherAnimator": {
     "node": "n130_Feather_text"
    },
    "nextButtonPart2": {
     "node": "n124_Next_button"
    },
    "bookDraggable": {
     "node": "n156_Book"
    },
    "ballDraggable": {
     "node": "n162_Ball"
    },
    "scaleController": {
     "node": "n136_controller"
    },
    "bookAnswerButton": {
     "node": "n156_Book"
    },
    "ballAnswerButton": {
     "node": "n162_Ball"
    },
    "tryAgainButton": {
     "node": "n172_Try_Again_button"
    },
    "nextButtonPart3": {
     "node": "n171_Next_button_1"
    },
    "item5": {
     "node": "n155_Item_2"
    },
    "item6": {
     "node": "n161_Item_1"
    },
    "bookImage": {
     "node": "n156_Book"
    },
    "ballImage": {
     "node": "n162_Ball"
    },
    "bookCorrectSprite": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 152,
       "h": 140
      }
     }
    },
    "bookWrongSprite": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__26__4.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 235,
       "h": 223
      }
     }
    },
    "ballCorrectSprite": {
     "sprite": {
      "path": "assets/img/green_bell.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "ballWrongSprite": {
     "sprite": {
      "path": "assets/img/red_bell.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 170,
       "h": 197
      }
     }
    },
    "hintHand1": {
     "node": "n163_Hint_hand_1"
    },
    "hintHand2": {
     "node": "n157_Hint_hand"
    },
    "dragHintDelay": 5,
    "isFirstLevel": 0,
    "arrow1": {
     "node": "n168_Heavy"
    },
    "arrow2": {
     "node": "n170_Heavy_1"
    },
    "arrow1LeftCorrectPos": {
     "x": -630,
     "y": -56
    },
    "arrow2LeftCorrectPos": {
     "x": 630,
     "y": 70
    },
    "arrow1RightCorrectPos": {
     "x": 630,
     "y": -56
    },
    "arrow2RightCorrectPos": {
     "x": -630,
     "y": 70
    },
    "part3AnswerHint": {
     "node": "n153_hand"
    },
    "part3AnswerHintDelay": 5,
    "part3HintScale": 0.7,
    "part3HintOffset": {
     "x": 0,
     "y": -10
    },
    "isLastLevel": 0,
    "ghostHand": {
     "node": "n176_Ghost"
    },
    "ghostItem": {
     "node": "n175_item"
    },
    "ghostItemImage": {
     "node": "n175_item"
    },
    "ghostAlpha": 0.75,
    "bookStartPoint": {
     "node": "n156_Book"
    },
    "ballStartPoint": {
     "node": "n162_Ball"
    },
    "leftDropPoint": {
     "node": "n145_GameObject"
    },
    "rightDropPoint": {
     "node": "n151_GameObject"
    },
    "hintLayer": {
     "node": "n105_Level_1"
    },
    "ghostDelayPart3": 5,
    "ghostMoveDuration": 1.2,
    "finalScreen": null,
    "finalScreenAudio": null,
    "finalParticleEffect": null,
    "part4CompleteEffect": {
     "node": "n516_ConfettiBlast"
    },
    "answerMode": 1,
    "part4Object": {
     "node": "n177_Part_4"
    },
    "nextButtonPart4": {
     "node": "n201_Next_button_2"
    },
    "basket": {
     "node": "n184_Basket"
    },
    "trolley": {
     "node": "n179_Trolly"
    },
    "base3": {
     "node": "n192_Item_02"
    },
    "base4": {
     "node": "n190_Item_01"
    },
    "bookDraggablePart4": {
     "node": "n191_Image"
    },
    "ballDraggablePart4": {
     "node": "n193_Image"
    },
    "wrongImagePart4_1": {
     "node": "n204_Image"
    },
    "wrongImagePart4_2": {
     "node": "n205_Image_1"
    },
    "bookStartPointPart4": {
     "node": "n191_Image"
    },
    "ballStartPointPart4": {
     "node": "n193_Image"
    },
    "basketDropPoint": {
     "node": "n187_Ribbon"
    },
    "trolleyDropPoint": {
     "node": "n182_Bell"
    },
    "ghostDelayPart4": 12,
    "bookGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 152,
       "h": 140
      }
     }
    },
    "ballGhostSpritePart3": {
     "sprite": {
      "path": "assets/img/Untitled_design__34__2.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 146,
       "h": 197
      }
     }
    },
    "bookGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 152,
       "h": 140
      }
     }
    },
    "ballGhostSpritePart4": {
     "sprite": {
      "path": "assets/img/Untitled_design__34__2.webp",
      "cropRect": {
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 1
      },
      "border": {
       "l": 0,
       "b": 0,
       "r": 0,
       "t": 0
      },
      "native": {
       "w": 146,
       "h": 197
      }
     }
    },
    "part4HintHand1": {
     "node": "n198_hint_hand_1"
    },
    "part4HintHand2": {
     "node": "n195_hint_hand"
    },
    "part4HintDelay": 12,
    "nextButtonHintHand": {
     "node": "n519_hand"
    },
    "nextButtonHintDelay": 12
   }
  }
 ],
 "buttons": [
  {
   "node": "n2_Intro_1",
   "calls": [
    {
     "targetNode": "n2_Intro_1",
     "method": "Play",
     "mode": 1,
     "arg": null
    }
   ]
  },
  {
   "node": "n3_LetsGo_Btn",
   "calls": [
    {
     "targetNode": "n2_Intro_1",
     "method": "Stop",
     "mode": 1,
     "arg": null
    },
    {
     "targetNode": "n1_Canvas",
     "method": "Play",
     "mode": 1,
     "arg": null
    }
   ]
  },
  {
   "node": "n97_Next_button_2",
   "calls": [
    {
     "targetNode": "n5_Tutorial",
     "method": "SetActive",
     "mode": 6,
     "arg": false
    },
    {
     "targetNode": "n105_Level_1",
     "method": "SetActive",
     "mode": 6,
     "arg": true
    }
   ]
  },
  {
   "node": "n201_Next_button_2",
   "calls": [
    {
     "targetNode": "n105_Level_1",
     "method": "SetActive",
     "mode": 6,
     "arg": false
    },
    {
     "targetNode": "n206_Level_2",
     "method": "SetActive",
     "mode": 6,
     "arg": true
    }
   ]
  },
  {
   "node": "n302_Next_button_2",
   "calls": [
    {
     "targetNode": "n206_Level_2",
     "method": "SetActive",
     "mode": 6,
     "arg": false
    },
    {
     "targetNode": "n307_Level_3",
     "method": "SetActive",
     "mode": 6,
     "arg": true
    }
   ]
  },
  {
   "node": "n405_Next_button_2",
   "calls": [
    {
     "targetNode": "n307_Level_3",
     "method": "SetActive",
     "mode": 6,
     "arg": false
    },
    {
     "targetNode": "n410_Level_4",
     "method": "SetActive",
     "mode": 6,
     "arg": true
    }
   ]
  }
 ],
 "draggables": {
  "n56_Bell": {
   "itemData": {
    "name": "Bell",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/Untitled_design__21__7.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 191,
      "h": 192
     }
    },
    "droppedSprite": {
     "path": "assets/img/Untitled_design__21__7.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 191,
      "h": 192
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n56_Bell"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n46_Basket"
   },
   "rightBalance": {
    "node": "n52_Basket"
   }
  },
  "n61_paper_fan": {
   "itemData": {
    "name": "Paper fan",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/Untitled_design__33__6.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 193,
      "h": 190
     }
    },
    "droppedSprite": {
     "path": "assets/img/Untitled_design__33__6.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 193,
      "h": 190
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n61_paper_fan"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n46_Basket"
   },
   "rightBalance": {
    "node": "n52_Basket"
   }
  },
  "n87_Image": {
   "itemData": {
    "name": "book",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/Untitled_design__21__7__1_.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 279,
      "h": 262
     }
    },
    "droppedSprite": {
     "path": "assets/img/Untitled_design__21__7.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 191,
      "h": 192
     }
    }
   },
   "dropRadius": 30,
   "itemImage": {
    "node": "n87_Image"
   },
   "dragLayer": {
    "node": "n90_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n89_Image": {
   "itemData": {
    "name": "ball",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/Untitled_design__33__6__1_.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 285,
      "h": 280
     }
    },
    "droppedSprite": {
     "path": "assets/img/Untitled_design__33__6.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 193,
      "h": 190
     }
    }
   },
   "dropRadius": 30,
   "itemImage": {
    "node": "n89_Image"
   },
   "dragLayer": {
    "node": "n90_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n156_Book": {
   "itemData": {
    "name": "Ribbon",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 152,
      "h": 140
     }
    },
    "droppedSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 152,
      "h": 140
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n156_Book"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n146_Basket"
   },
   "rightBalance": {
    "node": "n152_Basket"
   }
  },
  "n162_Ball": {
   "itemData": {
    "name": "Bell",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/Untitled_design__34__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 146,
      "h": 197
     }
    },
    "droppedSprite": {
     "path": "assets/img/Untitled_design__34__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 146,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n162_Ball"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n146_Basket"
   },
   "rightBalance": {
    "node": "n152_Basket"
   }
  },
  "n191_Image": {
   "itemData": {
    "name": "book",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__3.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 257,
      "h": 237
     }
    },
    "droppedSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 152,
      "h": 140
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n191_Image"
   },
   "dragLayer": {
    "node": "n194_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n193_Image": {
   "itemData": {
    "name": "ball",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/Untitled_design__34__3_1.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 254,
      "h": 295
     }
    },
    "droppedSprite": {
     "path": "assets/img/Untitled_design__34__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 146,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n193_Image"
   },
   "dragLayer": {
    "node": "n194_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n257_Bell": {
   "itemData": {
    "name": "Bell",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/Untitled_design__34__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 146,
      "h": 197
     }
    },
    "droppedSprite": {
     "path": "assets/img/Untitled_design__34__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 146,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n257_Bell"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n247_Basket"
   },
   "rightBalance": {
    "node": "n253_Basket"
   }
  },
  "n262_paper_fan": {
   "itemData": {
    "name": "Paper fan",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/paper_fan.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    },
    "droppedSprite": {
     "path": "assets/img/paper_fan.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n262_paper_fan"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n247_Basket"
   },
   "rightBalance": {
    "node": "n253_Basket"
   }
  },
  "n292_Image": {
   "itemData": {
    "name": "book",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/Untitled_design__34__3_1.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 254,
      "h": 295
     }
    },
    "droppedSprite": {
     "path": "assets/img/Untitled_design__34__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 146,
      "h": 197
     }
    }
   },
   "dropRadius": 30,
   "itemImage": {
    "node": "n292_Image"
   },
   "dragLayer": {
    "node": "n295_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n294_Image": {
   "itemData": {
    "name": "ball",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__4_1.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 212,
      "h": 247
     }
    },
    "droppedSprite": {
     "path": "assets/img/paper_fan.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    }
   },
   "dropRadius": 30,
   "itemImage": {
    "node": "n294_Image"
   },
   "dragLayer": {
    "node": "n295_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n358_Crown": {
   "itemData": {
    "name": "Crown",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/crown.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    },
    "droppedSprite": {
     "path": "assets/img/crown.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n358_Crown"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n348_Basket"
   },
   "rightBalance": {
    "node": "n354_Basket"
   }
  },
  "n363_Ribbon": {
   "itemData": {
    "name": "Ribbon",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 152,
      "h": 140
     }
    },
    "droppedSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 152,
      "h": 140
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n363_Ribbon"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n348_Basket"
   },
   "rightBalance": {
    "node": "n354_Basket"
   }
  },
  "n395_Image": {
   "itemData": {
    "name": "ball",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__3.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 257,
      "h": 237
     }
    },
    "droppedSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__2.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 152,
      "h": 140
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n395_Image"
   },
   "dragLayer": {
    "node": "n398_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n397_Image": {
   "itemData": {
    "name": "book",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__4-1.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 235,
      "h": 262
     }
    },
    "droppedSprite": {
     "path": "assets/img/crown.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n397_Image"
   },
   "dragLayer": {
    "node": "n398_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n461_Book": {
   "itemData": {
    "name": "Flowers",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/flowers.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    },
    "droppedSprite": {
     "path": "assets/img/flowers.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n461_Book"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n451_Basket"
   },
   "rightBalance": {
    "node": "n457_Basket"
   }
  },
  "n466_Ball": {
   "itemData": {
    "name": "Vase",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/vase.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    },
    "droppedSprite": {
     "path": "assets/img/vase.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n466_Ball"
   },
   "dragLayer": null,
   "leftBalance": {
    "node": "n451_Basket"
   },
   "rightBalance": {
    "node": "n457_Basket"
   }
  },
  "n500_Image": {
   "itemData": {
    "name": "ball",
    "weight": 1,
    "itemSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__9.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 331,
      "h": 291
     }
    },
    "droppedSprite": {
     "path": "assets/img/vase.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n500_Image"
   },
   "dragLayer": {
    "node": "n503_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  },
  "n502_Image": {
   "itemData": {
    "name": "book",
    "weight": 0.5,
    "itemSprite": {
     "path": "assets/img/The_Royal_Bloom_Fest__26__7.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 214,
      "h": 256
     }
    },
    "droppedSprite": {
     "path": "assets/img/flowers.webp",
     "cropRect": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
     },
     "border": {
      "l": 0,
      "b": 0,
      "r": 0,
      "t": 0
     },
     "native": {
      "w": 170,
      "h": 197
     }
    }
   },
   "dropRadius": 40,
   "itemImage": {
    "node": "n502_Image"
   },
   "dragLayer": {
    "node": "n503_GameObject"
   },
   "leftBalance": null,
   "rightBalance": null
  }
 },
 "baskets": {
  "n43_Image": {
   "isLeftBasket": true,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n44_Book"
   },
   "gameManager": {
    "node": "n5_Tutorial"
   },
   "allowedItem": {
    "node": "n56_Bell"
   }
  },
  "n49_Image_1": {
   "isLeftBasket": false,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n50_Ball"
   },
   "gameManager": {
    "node": "n5_Tutorial"
   },
   "allowedItem": {
    "node": "n61_paper_fan"
   }
  },
  "n79_Lantern": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n79_Lantern"
   },
   "gameManager": {
    "node": "n5_Tutorial"
   },
   "allowedItem": {
    "node": "n87_Image"
   }
  },
  "n83_Feather": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": true,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n83_Feather"
   },
   "gameManager": {
    "node": "n5_Tutorial"
   },
   "allowedItem": {
    "node": "n89_Image"
   }
  },
  "n143_Image": {
   "isLeftBasket": true,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 100,
   "basketImage": {
    "node": "n144_Book"
   },
   "gameManager": {
    "node": "n105_Level_1"
   },
   "allowedItem": {
    "node": "n156_Book"
   }
  },
  "n149_Image_1": {
   "isLeftBasket": false,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 100,
   "basketImage": {
    "node": "n150_Ball"
   },
   "gameManager": {
    "node": "n105_Level_1"
   },
   "allowedItem": {
    "node": "n162_Ball"
   }
  },
  "n182_Bell": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": false,
   "acceptDistance": 100,
   "basketImage": {
    "node": "n182_Bell"
   },
   "gameManager": {
    "node": "n105_Level_1"
   },
   "allowedItem": null
  },
  "n187_Ribbon": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": true,
   "acceptDistance": 100,
   "basketImage": {
    "node": "n187_Ribbon"
   },
   "gameManager": {
    "node": "n105_Level_1"
   },
   "allowedItem": null
  },
  "n244_Image": {
   "isLeftBasket": true,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n245_Book"
   },
   "gameManager": {
    "node": "n206_Level_2"
   },
   "allowedItem": {
    "node": "n257_Bell"
   }
  },
  "n250_Image_1": {
   "isLeftBasket": false,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n251_Ball"
   },
   "gameManager": {
    "node": "n206_Level_2"
   },
   "allowedItem": {
    "node": "n262_paper_fan"
   }
  },
  "n282_Bell": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n282_Bell"
   },
   "gameManager": {
    "node": "n206_Level_2"
   },
   "allowedItem": null
  },
  "n288_paper_fan": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": true,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n288_paper_fan"
   },
   "gameManager": {
    "node": "n206_Level_2"
   },
   "allowedItem": null
  },
  "n345_Image": {
   "isLeftBasket": true,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n346_Book"
   },
   "gameManager": {
    "node": "n307_Level_3"
   },
   "allowedItem": {
    "node": "n358_Crown"
   }
  },
  "n351_Image_1": {
   "isLeftBasket": false,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n352_Ball"
   },
   "gameManager": {
    "node": "n307_Level_3"
   },
   "allowedItem": {
    "node": "n363_Ribbon"
   }
  },
  "n384_Crown": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n384_Crown"
   },
   "gameManager": {
    "node": "n307_Level_3"
   },
   "allowedItem": null
  },
  "n391_Ribbon": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": true,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n391_Ribbon"
   },
   "gameManager": {
    "node": "n307_Level_3"
   },
   "allowedItem": null
  },
  "n448_Image": {
   "isLeftBasket": true,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n449_Book"
   },
   "gameManager": {
    "node": "n410_Level_4"
   },
   "allowedItem": {
    "node": "n461_Book"
   }
  },
  "n454_Image_1": {
   "isLeftBasket": false,
   "isPart4": false,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n455_Ball"
   },
   "gameManager": {
    "node": "n410_Level_4"
   },
   "allowedItem": {
    "node": "n466_Ball"
   }
  },
  "n488_Vase": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": false,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n488_Vase"
   },
   "gameManager": {
    "node": "n410_Level_4"
   },
   "allowedItem": null
  },
  "n496_Flowers": {
   "isLeftBasket": false,
   "isPart4": true,
   "isBasket": true,
   "acceptDistance": 200,
   "basketImage": {
    "node": "n496_Flowers"
   },
   "gameManager": {
    "node": "n410_Level_4"
   },
   "allowedItem": null
  }
 },
 "scaleControllers": {
  "n36_controller": {
   "animator": {
    "node": "n36_controller"
   }
  },
  "n136_controller": {
   "animator": {
    "node": "n136_controller"
   }
  },
  "n237_controller": {
   "animator": {
    "node": "n237_controller"
   }
  },
  "n338_controller": {
   "animator": {
    "node": "n338_controller"
   }
  },
  "n441_controller": {
   "animator": {
    "node": "n441_controller"
   }
  }
 },
 "cursor": {},
 "btnAnim": {
  "n3_LetsGo_Btn": {
   "goButton": {
    "node": "n3_LetsGo_Btn"
   },
   "gameplayPanel": {
    "node": "n5_Tutorial"
   },
   "delay": 0.3,
   "clip": null
  }
 },
 "wmg": {
  "n35_Part_3": {
   "scaleController": {
    "node": "n36_controller"
   },
   "nextButton": {
    "node": "n69_Next_button_1"
   }
  },
  "n135_Part_3": {
   "scaleController": {
    "node": "n136_controller"
   },
   "nextButton": {
    "node": "n171_Next_button_1"
   }
  },
  "n236_Part_3": {
   "scaleController": {
    "node": "n237_controller"
   },
   "nextButton": {
    "node": "n270_Next_button_1"
   }
  },
  "n337_Part_3": {
   "scaleController": {
    "node": "n338_controller"
   },
   "nextButton": {
    "node": "n371_Next_button_1"
   }
  },
  "n440_Part_3": {
   "scaleController": {
    "node": "n441_controller"
   },
   "nextButton": {
    "node": "n474_Next_button_1"
   }
  }
 }
};
