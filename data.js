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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.009120816353259897,
          "pitch": 0.550353070317934,
          "rotation": 0,
          "target": "2-foyer-hall"
        },
        {
          "yaw": 0.8064272930957728,
          "pitch": 0.6619824653694213,
          "rotation": 0.7853981633974483,
          "target": "1-flex-room"
        },
        {
          "yaw": -0.7914723818712464,
          "pitch": 0.7368642453674887,
          "rotation": 5.497787143782138,
          "target": "7-bedroom-4"
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
        "yaw": -0.5668525874955463,
        "pitch": -0.007621186397086532,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": -1.6402132161598608,
          "pitch": 0.7705777490225483,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-foyer-hall",
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
        "yaw": 0.9187345399579332,
        "pitch": 0.07508354577085363,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": -3.0462031223538943,
          "pitch": 0.5027902280193537,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.12307045171874265,
          "pitch": 0.4493331375525891,
          "rotation": 0,
          "target": "3-great-room"
        },
        {
          "yaw": 1.2172259038381963,
          "pitch": 0.5699993997534172,
          "rotation": 0,
          "target": "5-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-great-room",
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
        "yaw": 1.6441587572542913,
        "pitch": 0.058166982363838216,
        "fov": 1.56894440641555
      },
      "linkHotspots": [
        {
          "yaw": -2.7210465487991584,
          "pitch": 0.4626378084094611,
          "rotation": 11.780972450961727,
          "target": "2-foyer-hall"
        },
        {
          "yaw": -1.2604278585951008,
          "pitch": 0.43867261531860535,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
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
        "yaw": 1.8666115768713922,
        "pitch": 0.1502852794240077,
        "fov": 1.56894440641555
      },
      "linkHotspots": [
        {
          "yaw": 1.4789639243075179,
          "pitch": 0.4488273432737344,
          "rotation": 0,
          "target": "3-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-landing",
      "name": "Landing",
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
        "yaw": -1.2014717413705895,
        "pitch": 0.20504922172206008,
        "fov": 1.56894440641555
      },
      "linkHotspots": [
        {
          "yaw": -1.3728551157053115,
          "pitch": 0.744224184268031,
          "rotation": 0,
          "target": "2-foyer-hall"
        },
        {
          "yaw": -1.9218966050577642,
          "pitch": 0.4049451765725962,
          "rotation": 0,
          "target": "6-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upstairs",
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
        "yaw": 0.9505426760238755,
        "pitch": 0.44689954026989476,
        "fov": 1.56894440641555
      },
      "linkHotspots": [
        {
          "yaw": 1.5138907835895576,
          "pitch": 0.8782155878907254,
          "rotation": 0,
          "target": "5-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-4",
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
        "yaw": 1.1443964081404037,
        "pitch": 0.06737905308884429,
        "fov": 1.56894440641555
      },
      "linkHotspots": [
        {
          "yaw": 1.4859036218160462,
          "pitch": 0.6613232080953573,
          "rotation": 0,
          "target": "0-foyer"
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
