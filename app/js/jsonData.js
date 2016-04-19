/*jshint quotmark: double */
var jsonData = {
  "name": "SAFE Network",
  "id": "SAFE_NETWORK",
  "color": "grey-1",
  "desc": "SAFE Network desc",
  "daysCompleted": 100,
  "inProgress": 0,
  "planned": 0,
  "target": [
    "END"
  ],
  "order": 1,
  "section": 1,
  "status": 0,
  "startDate": "2016-1-1",
  "children": [
    {
      "name": "Network",
      "id": "NETWORK",
      "color": "grey-2",
      "desc": "Network desc",
      "daysCompleted": 100,
      "inProgress": 0,
      "planned": 0,
      "target": [
        "END"
      ],
      "order": 1,
      "section": 1,
      "status": 0,
      "startDate": "2016-1-1",
      "children": [
        {
          "name": "Core Network",
          "id": "CORE_NETWORK",
          "color": "pink-2",
          "desc": "Network Functionallity desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "MVP"
          ],
          "order": 2,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": [
              {
                "name": "TCP & uTP with UDP hole punching",
                "id": "TCP_AND_UTP_WITH_UDP_HOLE_PUNCHING",
                "color": "pink-3",
                "desc": "TCP & uTP with UDP hole punching desc",
                "daysCompleted": 100,
                "inProgress": 0,
                "planned": 0,
                "target": [
                  "SELF_AUTHENTICATION"
                ],
                "order": 1,
                "section": 1,
                "status": 1,
                "startDate": "2016-1-1",
                "children": []
              },
              {
                "name": "Self Authentication",
                "id": "SELF_AUTHENTICATION",
                "color": "pink-3",
                "desc": "Self Authentication desc",
                "daysCompleted": 100,
                "inProgress": 0,
                "planned": 0,
                "target": [
                  "NFS_STORAGE"
                ],
                "order": 2,
                "section": 2,
                "status": 1,
                "startDate": "2016-1-1",
                "children": []
              },
              {
                "name": "NFS - Storage",
                "id": "NFS_STORAGE",
                "color": "pink-3",
                "desc": "NFS - Storage desc",
                "daysCompleted": 100,
                "inProgress": 0,
                "planned": 0,
                "target": [
                  "DNS_CREATE_MANAGE"
                ],
                "order": 3,
                "section": 3,
                "status": 1,
                "startDate": "2016-1-1",
                "children": []
              },
              {
                "name": "DNS - Create/Manage DNS Records and Services",
                "id": "DNS_CREATE_MANAGE",
                "color": "pink-3",
                "desc": "NFS - Storage desc",
                "daysCompleted": 100,
                "inProgress": 0,
                "planned": 0,
                "target": [
                  "END"
                ],
                "order": 4,
                "section": 4,
                "status": 1,
                "startDate": "2016-1-1",
                "children": []
              }
          ]
        },
        {
          "name": "Public Identity",
          "id": "PUBLIC_IDENTITY",
          "color": "purple-2",
          "desc": "Public identity desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "MVP"
          ],
          "order": 3,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Public data",
          "id": "PUBLIC_OPEN_DATA",
          "color": "navy-2",
          "desc": "Public identity desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "MVP"
          ],
          "order": 4,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Vault Config",
          "id": "VAULT_CONFIG",
          "color": "blue-2",
          "desc": "User configuration options for vaults",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "MVP"
          ],
          "order": 5,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Max Capacity",
              "id": "MAX_CAPACITY",
              "color": "blue-3",
              "desc": "",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 1,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            }, {
              "name": "Wallet Address",
              "id": "WALLET_ADDRESS",
              "color": "blue-3",
              "desc": "",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Desktop Installers",
          "id": "INSTALLERS",
          "color": "cyan-2",
          "desc": "Installers desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "MVP"
          ],
          "order": 6,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "OS X",
              "id": "OSX",
              "color": "cyan-3",
              "desc": "",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 1,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            }, {
              "name": "Windows",
              "id": "WINDOWS",
              "color": "cyan-3",
              "desc": "",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            }, {
              "name": "Linux",
              "id": "LINUX",
              "color": "cyan-3",
              "desc": "",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 3,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Test remote network",
          "id": "TEST_MINIMUM_NETWORK_SIZE_OF",
          "color": "teal-2",
          "desc": "Test remote network desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "MVP"
          ],
          "order": 7,
          "section": 1,
          "status": 0,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Network Alpha",
          "id": "MVP",
          "color": "tangerine-3",
          "desc": "",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "END"
          ],
          "order": 4,
          "section": 2,
          "status": 1,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Contact Management",
          "id": "NETWORK_CONTACT_MANAGEMENT",
          "color": "green-2",
          "desc": "Public identity desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 2,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Messaging",
          "id": "MESSAGING",
          "color": "tangerine-2",
          "desc": "Messaging desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 3,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "RFC",
              "id": "RFC",
              "color": "tangerine-3",
              "desc": "RFC desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "SYSTEM_LEVEL_MESSAGING_FOR_SAFECOIN"
              ],
              "order": 1,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "System Level Messaging for Safecoin",
              "id": "SYSTEM_LEVEL_MESSAGING_FOR_SAFECOIN",
              "color": "tangerine-3",
              "desc": "System Level Messaging for Safecoin desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 2,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Safecoin",
          "id": "SAFECOIN",
          "color": "orange-2",
          "desc": "Safecoin desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 4,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "DOWN_STREAM",
              "id": "DW_SAFECOIN_WALLET_ADDRESS_VAULT_SAFECOIN_CONFIG",
              "source": "SAFECOIN_WALLET_ADDRESS",
              "color": "orange-3",
              "desc": "Safecoin wallet address",
              "order": 999,
              "section": 1,
              "target": [
                "VAULT_SAFECOIN_CONFIG"
              ],
              "startDate": "2016-1-1"
            },
            {
              "name": "DOWN_STREAM",
              "id": "DW_SAFECOIN_WALLET_ADDRESS",
              "source": "SAFECOIN_WALLET_ADDRESS",
              "color": "orange-3",
              "desc": "Safecoin wallet address",
              "order": 999,
              "section": 1,
              "target": [
                "FARMING"
              ],
              "startDate": "2016-1-1"
            },
            {
              "name": "Vault - Safecoin Config",
              "id": "VAULT_SAFECOIN_CONFIG",
              "color": "orange-3",
              "desc": "Vault - Safecoin Config desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "FARMING"
              ],
              "order": 1,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Farming",
              "id": "FARMING",
              "color": "orange-3",
              "desc": "Farming desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "USAGE_SIMPLE_SEND_RECIEVE_TO_CONTACTS"
              ],
              "order": 2,
              "section": 2,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Usage - Simple Send/Recieve to Contacts",
              "id": "USAGE_SIMPLE_SEND_RECIEVE_TO_CONTACTS",
              "color": "orange-3",
              "desc": "Usage - Simple Send/Recieve to Contacts desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "TRADING"
              ],
              "order": 3,
              "section": 3,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Trading",
              "id": "TRADING",
              "color": "orange-3",
              "desc": "Trading desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "END"
              ],
              "order": 4,
              "section": 4,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Data Management",
          "id": "DATA_SHARING",
          "color": "brown-2",
          "desc": "Data Sharing desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 5,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Private Data",
              "id": "PRIVATE_SHARES",
              "color": "brown-3",
              "desc": "Private Shares desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "PUBLIC_SHARES"
              ],
              "order": 1,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Public Data",
              "id": "PUBLIC_SHARES",
              "color": "brown-3",
              "desc": "Public Shares desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 2,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Pay the Producer",
          "id": "PAY_THE_PRODUCT",
          "color": "charcoal-2",
          "desc": "Pay the Producer desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "END"
          ],
          "order": 6,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Smart Contracts",
          "id": "SMART_CONTRACT",
          "color": "grey-2",
          "desc": "Smart Contracts desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 7,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Vault - ARM Devices",
          "id": "VAULT_SUPPORT_EMBEDDED",
          "color": "red-2",
          "desc": "Vault support embedded desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 8,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Vault - Mobile",
          "id": "VAULT_IN_MOBILE",
          "color": "pink-3",
          "desc": "Vault in mobile desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 9,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Autonomous Updates",
          "id": "AUTONOMOUS_UPDATES",
          "color": "cyan-3",
          "desc": "System Update Management desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 10,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Computation Handling",
          "id": "COMPUTATION_HANDLING_IN_NETWORK",
          "color": "navy-3",
          "desc": "Computation Handling in Network desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 11,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        }
      ]
    },
    {
      "name": "Client",
      "id": "APP",
      "color": "grey-2",
      "desc": "App desc",
      "daysCompleted": 100,
      "inProgress": 0,
      "planned": 0,
      "target": [
        "END"
      ],
      "order": 2,
      "section": 1,
      "status": 0,
      "startDate": "2016-1-1",
      "children": [
        {
          "name": "Self Authentication",
          "id": "SELF_AUTH",
          "color": "pink-2",
          "desc": "Launcher desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "MVP_2"
          ],
          "order": 2,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Dev API",
          "id": "DEV_API",
          "color": "purple-2",
          "desc": "Launcher desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "MVP_2"
          ],
          "order": 3,
          "section": 1,
          "status": 0,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Authorisation",
              "id": "AUTH_API",
              "color": "purple-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "NFS"
              ],
              "order": 1,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "NFS",
              "id": "NFS",
              "color": "purple-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "DNS"
              ],
              "order": 2,
              "section": 2,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "DNS",
              "id": "DNS",
              "color": "purple-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 3,
              "section": 3,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Messaging",
              "id": "MSG",
              "color": "purple-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 4,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Low Level",
              "id": "LOW_LEVEL",
              "color": "purple-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 3,
              "section": 4,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "App Management",
          "id": "APP_MGT",
          "color": "navy-2",
          "desc": "Launcher desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "MVP_2"
          ],
          "order": 4,
          "section": 1,
          "status": 0,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Authorisation Approval",
              "id": "AUTH_API",
              "color": "navy-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "MNG_APP"
              ],
              "order": 1,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Manage Applications",
              "id": "MNG_APP",
              "color": "navy-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 2,
              "status": 0,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Web Proxy",
          "id": "WEB_PROX",
          "color": "blue-2",
          "desc": "Launcher desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "MVP_2"
          ],
          "order": 5,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Route .safenet TLD",
              "id": "AUTH_API",
              "color": "blue-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "HDL_API"
              ],
              "order": 1,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Handle API Requests",
              "id": "HDL_API",
              "color": "blue-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 2,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Launcher UI",
          "id": "LCH_UI",
          "color": "cyan-2",
          "desc": "Launcher desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "MVP_2"
          ],
          "order": 6,
          "section": 1,
          "status": 0,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Register/Login",
              "id": "REG",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "APP_AUTH"
              ],
              "order": 1,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Authorise Application",
              "id": "APP_AUTH",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "MNG_APPS"
              ],
              "order": 2,
              "section": 2,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Manage Connected Apps",
              "id": "MNG_APPS",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "MNG_PX"
              ],
              "order": 3,
              "section": 3,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Manage Proxy",
              "id": "MNG_PX",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 4,
              "section": 4,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "App Analytics UI",
              "id": "APP_AN_UI",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 1,
              "section": 5,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Vault Analytics",
              "id": "VLT_AN_UI",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 5,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Vault Management",
              "id": "VLT_MG_UI",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 3,
              "section": 5,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Farming Rate History",
              "id": "FM_HS_UI",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 4,
              "section": 5,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "App Suggestions",
              "id": "APP_SUG",
              "color": "cyan-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 5,
              "section": 5,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Client Alpha",
          "id": "MVP_2",
          "color": "moss-2",
          "desc": "Launcher desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 4,
          "section": 2,
          "status": 0,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Desktop Binaries",
          "id": "DSK_BIN",
          "color": "teal-2",
          "desc": "Firefox Browser Addon desc",
          "daysCompleted": 100,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "END"
          ],
          "order": 6,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Windows 64 bit",
              "id": "WIN",
              "color": "teal-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 1,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "OS X 64 bit",
              "id": "OSX",
              "color": "teal-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Linux 64 bit",
              "id": "LINUX",
              "color": "teal-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 3,
              "section": 1,
              "status": 1,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Desktop Installers",
          "id": "DSK_INS",
          "color": "green-2",
          "desc": "Firefox Browser Addon desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 2,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Windows 64 bit",
              "id": "WIN",
              "color": "green-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 1,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "OS X 64 bit",
              "id": "OSX",
              "color": "green-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 2,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Linux 64 bit",
              "id": "LINUX",
              "color": "green-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 3,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Drive VFS App",
          "id": "DRIVE_VFS_APP",
          "color": "tangerine-2",
          "desc": "Firefox Browser Addon desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 3,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Private Data",
              "id": "PRD",
              "color": "tangerine-3",
              "desc": "Launcher Api Access (restricted to anonymous actions) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "PUBD"
              ],
              "order": 1,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Public Data",
              "id": "PUBD",
              "color": "tangerine-3",
              "desc": "FFI Binding to SAFE core Modules (Unrestricted actions with basic authentication) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "VERD"
              ],
              "order": 2,
              "section": 2,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Versioned Data",
              "id": "VERD",
              "color": "tangerine-3",
              "desc": "Launcher API Access (Unrestricted Access) desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "VIEW_PUBLIC_STATES"
              ],
              "order": 3,
              "section": 3,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Streaming Files",
              "id": "VIEW_PUBLIC_STATES",
              "color": "tangerine-3",
              "desc": "View Public States desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 4,
              "section": 4,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Messaging",
          "id": "APP_MESSAGING",
          "color": "orange-2",
          "desc": "Messaging desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 4,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Public Identity Mangement",
              "id": "PUBLIC_IDENTITY_MANGEMENT",
              "color": "orange-3",
              "desc": "Public Identity Mangement desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "CONTACT_MANAGEMENT"
              ],
              "order": 1,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Contact Management",
              "id": "CONTACT_MANAGEMENT",
              "color": "orange-3",
              "desc": "Contact Management desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "TEXT_MESSAGING"
              ],
              "order": 2,
              "section": 2,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Text Messaging",
              "id": "TEXT_MESSAGING",
              "color": "orange-3",
              "desc": "Text Messaging desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "VOICE_MESSAGING"
              ],
              "order": 3,
              "section": 3,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Voice Messaging",
              "id": "VOICE_MESSAGING",
              "color": "orange-3",
              "desc": "Voice Messaging desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "VIDEO_MESSAGING"
              ],
              "order": 4,
              "section": 4,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Video Messaging",
              "id": "VIDEO_MESSAGING",
              "color": "orange-3",
              "desc": "Video Messaging desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "SEND_OR_RECEIVE_NETWORK_FILES"
              ],
              "order": 5,
              "section": 5,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Send/receive Network Files",
              "id": "SEND_OR_RECEIVE_NETWORK_FILES",
              "color": "orange-3",
              "desc": "Send/receive Network Files desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "MESSAGING_SEND_OR_RECEIVE_SAFECOIN"
              ],
              "order": 6,
              "section": 6,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Send/Receive Safecoin",
              "id": "MESSAGING_SEND_OR_RECEIVE_SAFECOIN",
              "color": "orange-3",
              "desc": "Send/Receive Safecoin desc",
              "daysCompleted": 100,
              "inProgress": 0,
              "planned": 0,
              "target": [
                "END"
              ],
              "order": 7,
              "section": 7,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Safecoin Wallet",
          "id": "SAFECOIN_WALLET",
          "color": "brown-2",
          "desc": "Safecoin Wallet desc",
          "daysCompleted": 100,
          "inProgress": 0,
          "planned": 0,
          "target": [
            "END"
          ],
          "order": 5,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Safecoin Balance",
              "id": "SAFECOIN_BALANCE",
              "color": "brown-3",
              "desc": "Safecoin Balance desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "TRANSACTION_HISTORY"
              ],
              "order": 1,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Transaction History",
              "id": "TRANSACTION_HISTORY",
              "color": "brown-3",
              "desc": "Transaction History desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "SAFECOIN_WALLET_SEND_OR_RECEIVE_SAFECOIN"
              ],
              "order": 2,
              "section": 2,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Send/Receive Safecoin",
              "id": "SAFECOIN_WALLET_SEND_OR_RECEIVE_SAFECOIN",
              "color": "brown-3",
              "desc": "Send/Receive Safecoin desc",
              "daysCompleted": 100,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "SAFECOIN_WALLET_FARMING_RATE_HISTORY"
              ],
              "order": 3,
              "section": 3,
              "status": 2,
              "startDate": "2016-1-1",
              "children": [
                {
                  "name": "Contacts",
                  "id": "SAFECOIN_CONTACTS",
                  "color": "brown-4",
                  "desc": "Contacts desc",
                  "daysCompleted": 42,
                  "inProgress": 33,
                  "planned": 25,
                  "target": [
                    "SAFECOIN_TO_PUBLIC_IDENTITIES"
                  ],
                  "order": 1,
                  "section": 1,
                  "status": 2,
                  "startDate": "2016-1-1",
                  "children": []
                },
                {
                  "name": "To public identities",
                  "id": "SAFECOIN_TO_PUBLIC_IDENTITIES",
                  "color": "brown-4",
                  "desc": "To public identities desc",
                  "daysCompleted": 42,
                  "inProgress": 33,
                  "planned": 25,
                  "target": [
                    "END"
                  ],
                  "order": 2,
                  "section": 2,
                  "status": 2,
                  "startDate": "2016-1-1",
                  "children": []
                }
              ]
            },
            {
              "name": "Farming Rate History",
              "id": "SAFECOIN_WALLET_FARMING_RATE_HISTORY",
              "color": "brown-3",
              "desc": "Farming Rate History desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "END"
              ],
              "order": 4,
              "section": 4,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            }
          ]
        },
        {
          "name": "Safecoin Exchange",
          "id": "SAFECOIN_EXCHANGE",
          "color": "charcoal-2",
          "desc": "Safecoin Exchange desc",
          "daysCompleted": 100,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "END"
          ],
          "order": 6,
          "section": 3,
          "status": 2,
          "startDate": "2016-1-1",
          "children": [
            {
              "name": "Recent buyers/sellers",
              "id": "RECENT_BUYERS_OR_SELLERS",
              "color": "charcoal-3",
              "desc": "Recent buyers/sellers desc",
              "daysCompleted": 42,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "EXCHANGE_VIA_BTC"
              ],
              "order": 1,
              "section": 1,
              "status": 2,
              "startDate": "2016-1-1",
              "children": []
            },
            {
              "name": "Exchange via BTC",
              "id": "EXCHANGE_VIA_BTC",
              "color": "charcoal-3",
              "desc": "Exchange via BTC desc",
              "daysCompleted": 100,
              "inProgress": 33,
              "planned": 25,
              "target": [
                "SAFECOIN_EXCHANGE_SMART_CONTRACTS"
              ],
              "order": 2,
              "section": 2,
              "status": 2,
              "startDate": "2016-1-1",
              "children": [
                {
                  "name": "Buy Safecoin",
                  "id": "BUY_SAFECOIN",
                  "color": "charcoal-4",
                  "desc": "Buy Safecoin desc",
                  "daysCompleted": 42,
                  "inProgress": 33,
                  "planned": 25,
                  "target": [
                    "SELL_SAFECOIN"
                  ],
                  "order": 1,
                  "section": 1,
                  "status": 1,
                  "startDate": "2016-1-1",
                  "children": []
                },
                {
                  "name": "Sell Safecoin",
                  "id": "SELL_SAFECOIN",
                  "color": "charcoal-4",
                  "desc": "Sell Safecoin desc",
                  "daysCompleted": 42,
                  "inProgress": 33,
                  "planned": 25,
                  "target": [
                    "END"
                  ],
                  "order": 2,
                  "section": 2,
                  "status": 1,
                  "startDate": "2016-1-1",
                  "children": []
                }
              ]
            },
            {
            "name": "Smart Contracts",
            "id": "SAFECOIN_EXCHANGE_SMART_CONTRACTS",
            "color": "charcoal-3",
            "desc": "Smart Contracts desc",
            "daysCompleted": 42,
            "inProgress": 33,
            "planned": 25,
            "target": [
              "END"
            ],
            "order": 3,
            "section": 3,
            "status": 2,
            "startDate": "2016-1-1",
            "children": []
          }
        ]
      },
      {
        "name": "Examples",
        "id": "CMS",
        "color": "grey-2",
        "desc": "CMS desc",
        "daysCompleted": 42,
        "inProgress": 33,
        "planned": 25,
        "target": [
          "MVP_2"
        ],
        "order": 7,
        "section": 1,
        "status": 0,
        "startDate": "2016-1-1",
        "children": [
        {
          "name": "Standalone App",
          "id": "STANDALONE_APP",
          "color": "grey-3",
          "desc": "Standalone App desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "NET_STORE"
          ],
          "order": 1,
          "section": 1,
          "status": 1,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Manage Network Storage",
          "id": "NET_STORE",
          "color": "grey-3",
          "desc": "Browser Integrated desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "CREATE_STATIC_WEBSITES"
          ],
          "order": 2,
          "section": 2,
          "status": 1,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Create Static Websites",
          "id": "CREATE_STATIC_WEBSITES",
          "color": "grey-3",
          "desc": "Create Static Websites desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "END"
          ],
          "order": 3,
          "section": 3,
          "status": 1,
          "startDate": "2016-1-1",
          "children": []
        },
        {
          "name": "Messaging",
          "id": "MSG",
          "color": "grey-3",
          "desc": "Manage Network Storage desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "END"
          ],
          "order": 2,
          "section": 4,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        },
         {
          "name": "Collaborative App",
          "id": "CROSS_MODULE_FEATURES",
          "color": "grey-3",
          "desc": "Cross module Features desc",
          "daysCompleted": 42,
          "inProgress": 33,
          "planned": 25,
          "target": [
            "END"
          ],
          "order": 3,
          "section": 4,
          "status": 2,
          "startDate": "2016-1-1",
          "children": []
        }]
      }]
    }
  ]
};

/**
 *
 */
