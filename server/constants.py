import os

route_num = 126             # Route Number
stop_id_ny = 20514          # Washington + 13th Street -> New York
stop_id_hoboken = 20515     # Washington + 12th Street -> Hoboken

show_all_busses = 'on'
hide_other_busses = 'off'
direction_ny = 'New York'
direction_hoboken = 'Hoboken/Jersey C'

wu_api_key = os.environ['WU_API_KEY']
wu_state = 'NJ'
wu_city = 'Hoboken'

alexa_app_id = os.environ['ALEXA_APP_ID']

stop_id_map_ny = [
    {
        'id': 20496,
        'name': 'Hoboken Terminal',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.735704,
        'longitude': -74.029009
    },
    {
        'id': 20508,
        'name': 'Washington & 1st',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.737670,
        'longitude': -74.030761
    },
    {
        'id': 20509,
        'name': 'Washington & 3rd',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.740346,
        'longitude': -74.029934
    },
    {
        'id': 20510,
        'name': 'Washington & 5th',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.742374,
        'longitude': -74.029308
    },
    {
        'id': 20511,
        'name': 'Washington & 7th',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.744964,
        'longitude': -74.028522
    },
    {
        'id': 20512,
        'name': 'Washington & 9th',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.747576,
        'longitude': -74.027773
    },
    {
        'id': 20513,
        'name': 'Washington & 11th',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.750116,
        'longitude': -74.026943
    },
    {
        'id': 20514,
        'name': 'Washington & 13th',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.752496,
        'longitude': -74.026192
    },
    {
        'id': 20490,
        'name': '14th & Bloomfield',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.753489,
        'longitude': -74.027306
    },
    {
        'id': 32084,
        'name': 'Willow & 15th',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.754709,
        'longitude': -74.029314
    },
    {
        'id': 21853,
        'name': 'Willow & 19th',
        'direction': direction_ny,
        'show_all': show_all_busses,
        'latitude': 40.759785,
        'longitude': -74.027727
    }
]

stop_id_map_hoboken = [
    {
        'id': 20520,
        'name': 'Washington & 2nd',
        'direction': direction_hoboken,
        'show_all': show_all_busses,
        'latitude': 40.738461,
        'longitude': -74.030686
    },
    {
        'id': 20519,
        'name': 'Washington & 4th',
        'direction': direction_hoboken,
        'show_all': show_all_busses,
        'latitude': 40.741100,
        'longitude': -74.029899
    },
    {
        'id': 20518,
        'name': 'Washington & 6th',
        'direction': direction_hoboken,
        'show_all': show_all_busses,
        'latitude': 40.743340,
        'longitude': -74.029218
    },
    {
        'id': 20517,
        'name': 'Washington & 8th',
        'direction': direction_hoboken,
        'show_all': show_all_busses,
        'latitude': 40.745725,
        'longitude': -74.028472
    },
    {
        'id': 20516,
        'name': 'Washington & 10th',
        'direction': direction_hoboken,
        'show_all': show_all_busses,
        'latitude': 40.748443,
        'longitude': -74.027662
    },
    {
        'id': 20515,
        'name': 'Washington & 12th',
        'direction': direction_hoboken,
        'show_all': show_all_busses,
        'latitude': 40.750974,
        'longitude': -74.026911
    },
    {
        'id': 20489,
        'name': 'Washington & 14th',
        'direction': direction_hoboken,
        'show_all': show_all_busses,
        'latitude': 40.753214,
        'longitude': -74.026246
    },
    {
        'id': 20523,
        'name': 'Willow & 15th',
        'direction': direction_hoboken,
        'show_all': hide_other_busses,
        'latitude': 40.755215,
        'longitude': -74.029325
    },
    {
        'id': 21854,
        'name': 'Willow & 19th',
        'direction': direction_hoboken,
        'show_all': hide_other_busses,
        'latitude': 40.760225,
        'longitude': -74.027782
    },
    {
        'id': 26229,
        'name': 'Port Authority',
        'direction': direction_hoboken,
        'show_all': hide_other_busses,
        'latitude': 40.757197,
        'longitude': -73.991678
    }
]
