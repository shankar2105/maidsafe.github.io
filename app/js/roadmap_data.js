var jsonData = {
    "name": "Network",
    "id": "NETWORK",
    "header": 20,
    "daysCompleted": 10,
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    "startDate": "2016-1-1",
    "children": [
        {
            "name": "Vault",
            "id": "VAULT",
            "color": "blue-2",
            "desc": "Vault node",
            "daysCompleted": 10,
            "target": "CLIENT",
            "order": 1,
            "section": 1,
            "status": 1,
            "startDate": "2016-1-1",
            "children": [
                {
                    "name": "EXTERNAL",
                    "id": "VAULT_CONFIG_1" ,
                    "color": "indigo-2",
                    "desc": "Vault Config 1",
                    "target": "VAULT_IN_MOBILE"
                },
                {
                    "name": "EXTERNAL",
                    "id": "VAULT_CONFIG_2" ,
                    "color": "turquoise-2",
                    "desc": "Vault Config 2",
                    "target": "VAULT_IN_MOBILE"
                },
                {
                    "name": "EXTERNAL",
                    "id": "VAULT_CONFIG_3",
                    "color": "pink-3",
                    "desc": "Vault Config 3",
                    "target": "PUBLIC_IDENTITY"
                },
                {
                    "name": "EXTERNAL",
                    "id": "VAULT_CONFIG_4",
                    "color": "orange-1",
                    "desc": "Vault Config 3",
                    "target": "PUBLIC_IDENTITY"
                },
                {
                  "name": "DOWN_STREAM",
                  "id": "MPID",
                  "source": "VAULT_IN_MOBILE",
                  "desc": "MPID"
                },
                {
                    "name": "Vault Config",
                    "id": "VAULT_CONFIG",
                    "target": "VAULT_IN_MOBILE",
                    "order": 1,
                    "section": 1,
                    "status": 1,
                    "color": "blue-3",
                    "startDate": "2016-1-1"
                },
                {
                    "name": "Vault In Mobile",
                    "id": "VAULT_IN_MOBILE",
                    "target": "PUBLIC_IDENTITY",
                    "order": 2,
                    "section": 2,
                    "status": 1,
                    "color": "blue-3",
                    "startDate": "2016-1-13"
                },
                {
                    "name": "Public Identity",
                    "id": "PUBLIC_IDENTITY",
                    "target": "PAY_THE_PRODUCER",
                    "order": 3,
                    "section": 4,
                    "status": 0,
                    "color": "blue-3",
                    "startDate": "2016-1-28"
                },
                {
                    "name": "Vault Sample",
                    "id": "VAULT_SAMPLE",
                    "target": "PUBLIC_IDENTITY",
                    "order": 2,
                    "section": 7,
                    "offset": 3,
                    "status": 0,
                    "color": "blue-3",
                    "startDate": "2016-1-12"
                },
                {
                    "name": "Vault Next",
                    "id": "VAULT_NEXT",
                    "target": "PUBLIC_IDENTITY",
                    "order": 2,
                    "section": 6,
                    "offset": 3,
                    "status": 0,
                    "color": "blue-3",
                    "startDate": "2016-1-12"
                }
            ]
        },
        {
            "name": "Client",
            "id": "CLIENT",
            "desc": "Client node",
            "daysCompleted": 0,
            "target": "MPID",
            "header": 30,
            "order": 2,
            "section": 2,
            "status": 0,
            "color": "coral-2",
            "status": 0,
            "startDate": "2016-1-13",
            "children" : [
              {
                "name": "Client 1",
                "id": "CLIENT_1",
                "target": "CLIENT_2",
                "order": 1,
                "section": 1,
                "status": 0,
                "color": "coral-3",
                "startDate": "2016-1-1"
              },
              {
                  "name": "Client 2",
                  "id": "CLIENT_2",
                  "target": "CLIENT_3",
                  "order": 2,
                  "section": 2,
                  "status": 0,
                  "color": "coral-3",
                  "startDate": "2016-1-14"
              },
              {
                  "name": "Client 3",
                  "id": "CLIENT_3",
                  "target": "END",
                  "order": 3,
                  "section": 3,
                  "status": 0,
                  "color": "coral-3",
                  "startDate": "2016-1-27"
              }
            ]
        },
        {
          "name": "MPID",
          "id": "MPID",
          "desc": "MPID Messaging",
          "daysCompleted": 0,
          "target": "END",
          "header": 30,
          "order": 2,
          "section": 3,
          "status": 0,
          "color": "grey-2",
          "status": 0,
          "startDate": "2016-1-13"

        },
        {
          "name": "Vault Config 1",
          "id": "VAULT_CONFIG_1",
          "desc": "VAULT CONFIG 1",
          "daysCompleted": 0,
          "target": "MPID",
          "header": 30,
          "order": 2,
          "section": 5,
          "status": 0,
          "color": "indigo-2",
          "status": 0,
          "startDate": "2016-1-13"
        },
        {
          "name": "Vault Config 2",
          "id": "VAULT_CONFIG_2",
          "desc": "VAULT CONFIG 2",
          "daysCompleted": 0,
          "target": "MPID",
          "header": 30,
          "order": 2,
          "section": 4,
          "status": 0,
          "color": "turquoise-2",
          "status": 0,
          "startDate": "2016-1-13"
        }
    ]
};
