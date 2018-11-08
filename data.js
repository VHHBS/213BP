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
        "yaw": 0.004741495799914119,
        "pitch": 0,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": 0.866149590347046,
          "pitch": 0.8661236248606912,
          "rotation": 0.7853981633974483,
          "target": "1-flex-room"
        },
        {
          "yaw": -1.003652349635347,
          "pitch": 0.6730004970211638,
          "rotation": 5.497787143782138,
          "target": "2-bedroom-4"
        },
        {
          "yaw": 0.08373591033979544,
          "pitch": 0.4511069019376137,
          "rotation": 0,
          "target": "3-foyer-hall"
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
        "yaw": -1.2745113856959929,
        "pitch": 0.03919281915371542,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": -1.7238516531083903,
          "pitch": 0.6126396492250272,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-4",
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
        "yaw": 1.3455818125034256,
        "pitch": 0.033230117063890674,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": 1.587360005778951,
          "pitch": 0.6045019897916877,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-foyer-hall",
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
        "yaw": 0.40045918919916446,
        "pitch": 0.06837049170277432,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": 0.04854465303519184,
          "pitch": 0.5129073395006056,
          "rotation": 0,
          "target": "4-great-room"
        },
        {
          "yaw": 1.2343036014295876,
          "pitch": 0.3725334066289001,
          "rotation": 0.7853981633974483,
          "target": "7-stair-landing"
        },
        {
          "yaw": -2.9482057161597215,
          "pitch": 0.5324017882158216,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-great-room",
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
        "yaw": -2.4372281831646987,
        "pitch": 0.03254074548970465,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": -1.0656781331807608,
          "pitch": 0.4587035649761244,
          "rotation": 0,
          "target": "5-kitchensun-room"
        },
        {
          "yaw": -2.692668128308883,
          "pitch": 0.45407726804138093,
          "rotation": 5.497787143782138,
          "target": "3-foyer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchensun-room",
      "name": "Kitchen/Sun Room",
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
        "yaw": -2.360670283018294,
        "pitch": 0.2402813085816362,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": -1.666800426194218,
          "pitch": 0.5411202582153507,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": 1.9017369238276043,
          "pitch": 0.5505808709606672,
          "rotation": 0,
          "target": "4-great-room"
        },
        {
          "yaw": 2.7005167065579805,
          "pitch": 0.38169863207633625,
          "rotation": 0.7853981633974483,
          "target": "3-foyer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
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
        "yaw": 2.053022342320096,
        "pitch": 0.10471383331972994,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": 1.5600638104251452,
          "pitch": 0.5750392978161596,
          "rotation": 0,
          "target": "5-kitchensun-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-stair-landing",
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
        "yaw": -1.0280540471679949,
        "pitch": 0.11449836238680788,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": -2.034040489131563,
          "pitch": 0.6858453278895738,
          "rotation": 0,
          "target": "8-upstairs"
        },
        {
          "yaw": -1.0293242934003928,
          "pitch": 1.0886156398487312,
          "rotation": 5.497787143782138,
          "target": "3-foyer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upstairs",
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
        "yaw": 1.0300094544927632,
        "pitch": 0.567317502411008,
        "fov": 1.7450421757111296
      },
      "linkHotspots": [
        {
          "yaw": 1.608548032517458,
          "pitch": 1.0646447229155775,
          "rotation": 0,
          "target": "7-stair-landing"
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
