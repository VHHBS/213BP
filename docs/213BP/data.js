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
        "yaw": -1.3446128733535403,
        "pitch": -0.01016158186278382,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": -1.456146320980043,
          "pitch": 0.5045456942706004,
          "rotation": 0,
          "target": "1-foyer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer-hall",
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
        "yaw": -0.33009488026849354,
        "pitch": 0.1270197732847933,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": 1.787331397946934,
          "pitch": 0.49382509856192236,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.2972016384815817,
          "pitch": 0.40234446134227575,
          "rotation": 0,
          "target": "2-great-room"
        },
        {
          "yaw": -1.8724628209933094,
          "pitch": 0.28603412412057594,
          "rotation": 5.497787143782138,
          "target": "3-kitchen-sun-room"
        },
        {
          "yaw": -0.23590316629619323,
          "pitch": 0.02748270142914855,
          "rotation": 0.7853981633974483,
          "target": "5-stair-landing"
        },
        {
          "yaw": 2.9988240682340432,
          "pitch": 0.6732020061155986,
          "rotation": 0,
          "target": "8-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-great-room",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": 1.958601775790365,
          "pitch": 0.38419327748466614,
          "rotation": 5.497787143782138,
          "target": "1-foyer-hall"
        },
        {
          "yaw": -2.4824663490368835,
          "pitch": 0.4013725638828305,
          "rotation": 0,
          "target": "3-kitchen-sun-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-sun-room",
      "name": "Kitchen-Sun Room",
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
        "yaw": -1.5157982124781277,
        "pitch": 0.2101690816758257,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": 2.9806141617135467,
          "pitch": 0.5218855682052812,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.4597080301553724,
          "pitch": 0.4337522393339288,
          "rotation": 0,
          "target": "2-great-room"
        },
        {
          "yaw": 1.16208665165696,
          "pitch": 0.31859297339353354,
          "rotation": 0.7853981633974483,
          "target": "1-foyer-hall"
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
        "yaw": 0.5759589378942565,
        "pitch": 0.08891384129934643,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": -0.02537992684457535,
          "pitch": 0.4591367819908534,
          "rotation": 0,
          "target": "3-kitchen-sun-room"
        },
        {
          "yaw": 1.1496377605810153,
          "pitch": 0.5836002252438988,
          "rotation": 11.780972450961727,
          "target": "8-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stair-landing",
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
        "yaw": -0.1639091819264138,
        "pitch": 0.022863559191259597,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": -0.6453214310281847,
          "pitch": 0.7671773351585003,
          "rotation": 5.497787143782138,
          "target": "1-foyer-hall"
        },
        {
          "yaw": -1.334503447141877,
          "pitch": 0.7488224684371687,
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
        "yaw": 1.7232118151223883,
        "pitch": 0.42148454862409146,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": -2.652316681279064,
          "pitch": 0.9006852553771427,
          "rotation": 11.780972450961727,
          "target": "5-stair-landing"
        },
        {
          "yaw": -0.0438108642483197,
          "pitch": 0.7340398762353644,
          "rotation": 0,
          "target": "7-owners-bath"
        },
        {
          "yaw": -2.1005157277560116,
          "pitch": 0.802756101190603,
          "rotation": 0.7853981633974483,
          "target": "9-main-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-owners-bath",
      "name": "Owner's Bath",
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
        "yaw": -1.4652487475240896,
        "pitch": 0.2007064419195217,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": 1.8963098525240163,
          "pitch": 0.6070413525065472,
          "rotation": 0,
          "target": "6-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-laundry",
      "name": "Laundry",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.8488532803386069
      },
      "linkHotspots": [
        {
          "yaw": -0.7728038143306257,
          "pitch": 0.5061126667718874,
          "rotation": 5.497787143782138,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.5423429688683754,
          "pitch": 0.545290900828622,
          "rotation": 7.0685834705770345,
          "target": "1-foyer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-main-bath",
      "name": "Main Bath",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.9129177856688417
      },
      "linkHotspots": [
        {
          "yaw": 1.7250575640350032,
          "pitch": 0.3834222334957893,
          "rotation": 0,
          "target": "6-upstairs"
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
    "viewControlButtons": false
  }
};
