var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.016960504589446757,
        "pitch": 0.10455148634740041,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.032445330600044286,
          "pitch": 0.5620079234532511,
          "rotation": 0,
          "target": "4-foyer-hall"
        },
        {
          "yaw": 1.057941763865415,
          "pitch": 0.5788659701636476,
          "rotation": 0.7853981633974483,
          "target": "1-flex-room"
        },
        {
          "yaw": -0.832169375128478,
          "pitch": 0.7570462113283991,
          "rotation": 5.497787143782138,
          "target": "3-bedroom-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-flex-room",
      "name": "Flex Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.2899931680236758,
        "pitch": 0.21786305506510928,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.4439499650183443,
          "pitch": 0.8508557098879113,
          "rotation": 0,
          "target": "2-flex-room-railing"
        },
        {
          "yaw": -1.712323833548453,
          "pitch": 0.6040764940898775,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-flex-room-railing",
      "name": "Flex Room Railing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.6095226772349349,
        "pitch": 0.7362880689713904,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 2.695048615481218,
          "pitch": 0.8046589637165695,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.4649554102441797,
          "pitch": 0.565749276400453,
          "rotation": 0.7853981633974483,
          "target": "0-foyer"
        },
        {
          "yaw": -0.6681917194291049,
          "pitch": 0.6237721097698454,
          "rotation": 0,
          "target": "4-foyer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 1.4301407503189942,
        "pitch": 0.12091802328126988,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 1.6356279999417005,
          "pitch": 0.582868270750641,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-foyer-hall",
      "name": "Foyer Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 1.7527756614405297,
        "pitch": 0.4204141154273806,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -2.9540301913566314,
          "pitch": 0.48547859587408126,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.12153436255370131,
          "pitch": 0.42358514940169023,
          "rotation": 0,
          "target": "5-great-room"
        },
        {
          "yaw": 1.259934716899334,
          "pitch": 0.27166351808932987,
          "rotation": 0.7853981633974483,
          "target": "8-stair-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-great-room",
      "name": "Great Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -2.3368018884914026,
        "pitch": 0.06327589884746665,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -2.7425438758619958,
          "pitch": 0.4518300099753798,
          "rotation": 5.497787143782138,
          "target": "4-foyer-hall"
        },
        {
          "yaw": -1.0920353492784098,
          "pitch": 0.4395377201271735,
          "rotation": 0,
          "target": "6-sun-roomkitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sun-roomkitchen",
      "name": "Sun Room/Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.6704885732800943,
        "pitch": 0.3249200191439243,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.6831101312442396,
          "pitch": 0.5349161394550741,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": 1.9841838848434197,
          "pitch": 0.4623974220877489,
          "rotation": 0,
          "target": "5-great-room"
        },
        {
          "yaw": 2.7251307556971955,
          "pitch": 0.30619808424469674,
          "rotation": 0.7853981633974483,
          "target": "4-foyer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 2.151663310497689,
        "pitch": 0.22349082994963965,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 1.5515375735076926,
          "pitch": 0.4729211373284059,
          "rotation": 0,
          "target": "6-sun-roomkitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-stair-landing",
      "name": "Stair Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.0756430616017045,
        "pitch": 0.5280661760112686,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.1245630798654158,
          "pitch": 1.0257921835981847,
          "rotation": 5.497787143782138,
          "target": "4-foyer-hall"
        },
        {
          "yaw": -1.9434424857284753,
          "pitch": 0.5596183604244285,
          "rotation": 0,
          "target": "9-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upstairs",
      "name": "Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.891290319583673,
        "pitch": 0.5890091177362251,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 1.6345416161005613,
          "pitch": 0.9699670739391522,
          "rotation": 0,
          "target": "8-stair-landing"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "213 Birchwood Point",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
