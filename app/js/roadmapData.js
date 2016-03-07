window.roadmapData = {
    "name": "NETWORK",
    "header": 20,
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    "children": [
        {
            "name": "VAULT",
            "color": "blue-2",
            "desc": "Vault node",
            "target": [
                "CLIENT"
            ],
            "section": 1,
            "status": 1,
            "startDate": "2016-1-1",
            "endDate": "2016-1-11",
            "children": [
                {
                    "name": "EXTERNAL",
                    "id": "VAULT_CONFIG_1" ,
                    "color": "indigo-1",
                    "desc": "Vault Config 1",
                    "target": [
                        "VAULT_IN_MOBILE"
                    ]
                },
                {
                    "name": "EXTERNAL",
                    "id": "VAULT_CONFIG_2" ,
                    "color": "turquoise-1",
                    "desc": "Vault Config 2",
                    "target": [
                        "VAULT_IN_MOBILE"
                    ]
                },
                {
                    "name": "EXTERNAL",
                    "id": "VAULT_CONFIG_3",
                    "color": "pink-3",
                    "desc": "Vault Config 3",
                    "target": [
                        "PUBLIC_IDENTITY"
                    ]
                },
                {
                    "name": "VAULT_CONFIG",
                    "target": [
                        "VAULT_IN_MOBILE"
                    ],
                    "section": 1,
                    "status": 1,
                    "color": "blue-3",
                    "startDate": "2016-1-1",
                    "endDate": "2016-1-11"
                },
                {
                    "name": "VAULT_IN_MOBILE",
                    "target": [
                        "PUBLIC_IDENTITY"
                    ],
                    "section": 2,
                    "status": 1,
                    "color": "blue-3",
                    "startDate": "2016-1-13",
                    "endDate": "2016-1-23"
                },
                {
                    "name": "PUBLIC_IDENTITY",
                    "target": [
                        "PAY_THE_PRODUCER"
                    ],
                    "section": 4,
                    "status": 0,
                    "color": "blue-3",
                    "startDate": "2016-1-26",
                    "endDate": "2016-2-5"
                },
                {
                    "name": "VAULT_SAMPLE",
                    "target": [
                        "PUBLIC_IDENTITY"
                    ],
                    "section": 5,
                    "status": 0,
                    "color": "blue-3",
                    "startDate": "2016-1-12",
                    "endDate": "2016-1-22"
                },
                {
                    "name": "VAULT_NEXT",
                    "target": [
                        "PUBLIC_IDENTITY"
                    ],
                    "section": 6,
                    "status": 0,
                    "color": "blue-3",
                    "startDate": "2016-1-13",
                    "endDate": "2016-1-23"
                }
            ]
        },
        {
            "name": "CLIENT",
            "desc": "Client node",
            "target": [
                "END"
            ],
            "header": 30,
            "section": 2,
            "status": 0,
            "color": "coral-2",
            "status": 0,
            "startDate": "2016-1-13",
            "endDate": "2016-1-23",
            "children" : [
              {
                "name": "CLIENT_1",
                "target": [
                    "CLIENT_2"
                ],
                "section": 1,
                "status": 0,
                "color": "coral-3",
                "startDate": "2016-1-1",
                "endDate": "2016-1-11"
              },
              {
                  "name": "CLIENT_2",
                  "target": [
                      "CLIENT_3"
                  ],
                  "section": 2,
                  "status": 0,
                  "color": "coral-3",
                  "startDate": "2016-1-14",
                  "endDate": "2016-1-24"
              },
              {
                  "name": "CLIENT_3",
                  "target": [
                      "END"
                  ],
                  "section": 3,
                  "status": 0,
                  "color": "coral-3",
                  "startDate": "2016-1-27",
                  "endDate": "2016-2-6"
              }
            ]
        }
    ]
};
