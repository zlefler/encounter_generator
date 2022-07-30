function Environment({ onEnvironmentChange }) {
  let environmentOptions = {
    0: 'warm rivers or swamps',
    1: 'null',
    2: 'forest or underground',
    3: 'Temperate aquatic',
    4: 'the Abyss',
    5: 'warm jungles or forests',
    6: 'temperate or tropical forests, oceans, and rivers',
    7: 'temperate forests and underground',
    8: 'temperate hills, mountains and plains',
    9: 'temperate deserts, hills, or mountains',
    10: 'any (Limbo)',
    11: 'tropical forests',
    12: 'lower planes (usually Nine Hells)',
    13: 'any (Plane of Air or Plane of Fire)',
    14: 'any warm saltwater',
    15: 'temperate or warm islands',
    16: 'cold or temperate mountains',
    17: 'warm coasts',
    18: 'temperate plains, rocky hills, and underground',
    19: 'any sky (Plane of Air)',
    20: 'any forest or jungle (Prime Material Plane)',
    21: 'cold plains, hills, or desert',
    22: 'temperate or warm marshes and aquatic',
    23: 'cold mountains or forests',
    24: 'any (Elemental Plane of Air)',
    25: 'temperate forest, mountains and plains',
    26: 'temperate forests or underground',
    27: 'any (Elemental Plane of Fire)',
    28: 'temperate and warm land',
    29: 'any (Plane of Fire)',
    30: 'temperate forests and urban',
    31: 'cold plains or mountains',
    32: 'Any aquatic',
    33: 'tropical coasts and rivers',
    34: 'any (Ivory Labyrinth)',
    35: 'temperate marshes or underground',
    36: 'temperate lakes or rivers',
    37: 'temperate or warm swamps',
    38: 'temperate or cold hills',
    39: 'temperate and warm water, and underground',
    40: 'any',
    41: 'any aquatic',
    42: 'any (Elemental Plane of Earth, Elemental Plane of Fire, Plane of Molten Skies)',
    43: 'temperate marshes, hills, or coasts',
    44: 'any air (Nirvana)',
    45: 'warm hills and mountains',
    46: 'any temperate, warm, or urban',
    47: 'temperate and warm marshes',
    48: 'any temperate or warm land',
    49: 'any (Ethereal Plane)',
    50: 'any (graveyards, mausoleums, cemeteries)',
    51: 'tropical swamps',
    52: 'warm marshes or rivers',
    53: 'temperate forest',
    54: 'warm rivers',
    55: 'temperate hills and plains',
    56: 'any (Kurnugia)',
    57: 'temperate forests and plains',
    58: 'any (lower planes)',
    59: 'temperate or warm forests',
    60: 'Abyss, Gehenna, Hades, Nine Hells, or Tarterus',
    61: 'temperate mountains or hills',
    62: 'temperate forest or plains',
    63: 'any liquid-based outer or inner plane',
    64: 'any forests or swamps',
    65: 'cold ruins',
    66: 'warm desert and hills',
    67: 'any (Elemental Plane of Earth)',
    68: 'temperate or warm deserts or forests',
    69: 'cold marshes and underground',
    70: 'any swamps or underground',
    71: 'any land and underground, lower planes',
    72: 'any (primal land of fey)',
    73: 'cold lakes and swamps',
    74: 'temperate forest or marshes',
    75: 'any (Hell)',
    76: 'any (usually tombs)',
    77: 'Sea of Fire (Plane of Fire and Plane of Molten Skies) Sea of Fire (Plane of Fire and Plane of Molten Skies)',
    78: 'temperate and warm coastlines and underground',
    79: 'any mountains',
    80: 'warm oceans',
    81: 'temperate mountain valleys',
    82: 'temperate or warm land, aquatic, and underground',
    83: 'warm or temperate deserts, forests, plains, or underground',
    84: 'any temperate or warm forest or plains, or urban',
    85: 'warm marshes',
    86: 'Any',
    87: 'cold forests and mountains',
    88: 'warm forests, oceans, or rivers',
    89: 'Quasi-Plane of Lightning',
    90: 'Temperate or warm aquatic',
    91: 'warm jungles and forests',
    92: 'any warm land',
    93: 'any swamps or woodlands',
    94: 'any water (Nirvana)',
    95: 'any oceans or coastlines',
    96: 'warm forests',
    97: 'warm deserts and hills',
    98: 'Plane of Molten Skies',
    99: 'any land or water (Plane of Water)',
    100: 'any cold land',
    101: 'cold hills and underground',
    102: 'any forests, plains, and swamps',
    103: 'Quasi-Plane of Acid',
    104: 'temperate or warm forests and underground',
    105: 'temperate and warm forest',
    106: 'temperate ruins',
    107: 'temperate or tropical forests or ruins',
    108: 'any lawful evil-aligned plane',
    109: 'any (Hell or Infernus)',
    110: 'any lake or river',
    111: 'temperate plains and forests and underground',
    112: 'any hills or plains',
    113: 'temperate or tropical forests',
    114: 'temperate ruins or underground',
    115: 'temperate plains, hills, or forests',
    116: 'temperate forests or fresh water',
    117: 'cold plains, forests, and marshes',
    118: 'any underground or urban',
    119: 'cold or temperate hills or mountains',
    120: 'temperate forests and marshes',
    121: 'warm or temperate forests',
    122: 'any cold',
    123: 'temperate forests, hills, mountains, or plains',
    124: 'Astral Plane',
    125: 'any (lawful plane)',
    126: 'warm forests or marshes',
    127: 'any (Plane of Air, Plane of Fire, or Plane of Smoke)',
    128: 'any hills',
    129: 'any coastal',
    130: 'warm ruins',
    131: 'temperate and warm plains',
    132: 'warm lakes and rivers',
    133: 'cold mountains or any',
    134: 'cold or temperate forests and plains',
    135: 'any (Nirvana)',
    136: 'any (Purgatory)',
    137: 'any (Positive Energy Plane)',
    138: 'Plane of Fire',
    139: 'temperate mountains and underground',
    140: 'any (Spellscar Desert)',
    141: 'any urban or plains',
    142: 'any land (Plane of Earth)',
    143: 'temperate or warm coastlines or forests',
    144: 'warm lakes, rivers, or swamps',
    145: 'any warm or hot',
    146: 'warm forests or hills',
    147: 'warm hills or mountains',
    148: 'warm forest and mountains',
    149: 'any evil-aligned plane',
    150: 'Elemental Plane of Air',
    151: 'warm plains and forests',
    152: 'temperate marshes or plains',
    153: 'any forests',
    154: 'any rivers',
    155: 'Northlands forests and plains',
    156: 'ocean',
    157: 'temperate mountains',
    158: 'any aquatic (Plane of Water)',
    159: 'cold plains and underground',
    160: 'any (Elysium)',
    161: 'temperate forests or mountains',
    162: 'any warm land and underground',
    163: 'temperate or warm marshes',
    164: 'outer space or cold forest',
    165: 'any good-aligned plane',
    166: 'any underground',
    167: 'any underground (Plane of Earth)',
    168: 'warm plains or deserts (the Mana Wastes)',
    169: 'temperate forest and hills',
    170: 'temperate hills or mountains',
    171: 'any except true neutral',
    172: 'temperate or warm hills or mountains',
    173: 'warm and temperate fresh water and swamps',
    174: 'temperate or warm water',
    175: 'any land (Plane of Shadow)',
    176: 'temperate or tropical hills',
    177: 'temperate deserts',
    178: 'any (Aucturn)',
    179: 'temperate hills, mountains, or underground',
    180: 'any coastlines',
    181: 'cold lands',
    182: 'temperate forest, swamp, or underground',
    183: 'any (Shadow Plane)',
    184: 'any freshwater',
    185: 'temperate and warm mountains',
    186: 'warm rivers (Garund)',
    187: 'any (Plane of Shadow)',
    188: 'underground and temperate marshes',
    189: 'any coastlines or water',
    190: 'any temperate and warm and underground',
    191: 'any mountains or underground (Plane of Fire)',
    192: 'temperate freshwater',
    193: 'Positive Energy Plane',
    194: 'any oceans (Abyss)',
    195: 'temperate hills or plains',
    196: 'swamp or underground',
    197: 'any (Quantium)',
    198: 'temperate or cold aquatic',
    199: 'warm mountains or deserts',
    200: 'temperate forests',
    201: 'warm coastal regions',
    202: 'marshes',
    203: 'warm or temperate land or underground',
    204: 'any land (Elysium)',
    205: 'temperate coastlines',
    206: 'temperate and warm deserts',
    207: 'cold forests or mountains',
    208: 'any temperate or warm',
    209: 'astral plane',
    210: 'any (Elemental Plane of Air or Quasi- Elemental Plane of Lightning)',
    211: 'any (Castrovel)',
    212: 'any (the Abyss)',
    213: 'any (Plane of Air)',
    214: 'warm or temperate oceans',
    215: 'Sea of Fire (Elemental Plane of Fire or Plane of Molten Skies)',
    216: 'any (Hell or Ethereal Plane)',
    217: 'temperate and warm forests and underground',
    218: 'cold or temperate hills',
    219: 'any land (Field of Maidens)',
    220: 'Aballon',
    221: 'any (Nex)',
    222: 'temperate hills, plains, or forests',
    223: 'cold forests or plains',
    224: 'cold plains, hills and mountains',
    225: 'warm deserts or underground',
    226: 'temperate plains',
    227: 'any ruins',
    228: 'urban',
    229: 'temperate plains or forests',
    230: 'warm hills',
    231: 'any hills or forests',
    232: 'tropical hills and mountains',
    233: 'cold aquatic or underground',
    234: 'temperate or cold forests',
    235: 'warm forests or plains',
    236: 'temperate and warm forests and aquatic',
    237: 'cold oceans',
    238: 'temperate forests, hills, or mountains',
    239: 'tropical jungles',
    240: 'underground',
    241: 'warm deserts or mountains',
    242: 'warm or temperate water or coastlines',
    243: 'any (Nine Hells)',
    244: 'temperate and warm forests and marshes',
    245: 'temperate or warm hills',
    246: 'warm land',
    247: 'any swamps',
    248: 'temperate plains or hills',
    249: 'temperate or warm oceans or coastlines',
    250: 'cold lakes, plains, or oceans',
    251: 'cold forest and plains',
    252: 'temperate forests and hills',
    253: 'temperate swamps or underground',
    254: 'warm jungles and swamps',
    255: 'temperate coast or forest',
    256: 'temperate or cold forests and marshes',
    257: 'warm plains or coastlines',
    258: 'Quasi-Elemental Plane of Lightning',
    259: 'cold forests',
    260: 'warm forests, hills, mountains, and plains',
    261: 'cold or temperate coasts, hills, or marshes',
    262: 'any temperate',
    263: 'warm and temperate plains',
    264: 'warm deserts, plains, or hills',
    265: 'temperate rivers or streams',
    266: "any (R'lyeh)",
    267: 'any oceans',
    268: 'any (Tarterus)',
    269: 'temperate skies, hills, and mountains',
    270: 'warm aquatic',
    271: 'warm forests and plains or underground',
    272: 'warm deserts',
    273: 'cold plains and hills',
    274: 'temperate and warm forests and swamps',
    275: 'any plains or forests',
    276: 'Hades',
    277: 'Inner and Outer planes',
    278: 'underground or temperate and warm swamps',
    279: 'warm plains and underground',
    280: 'any water',
    281: 'temperate hills and underground',
    282: 'temperate forests, hills, and mountains',
    283: 'temperate and warm marshes and underground',
    284: 'temperate hills and ruins',
    285: 'cold or temperate water (waterfalls)',
    286: 'temperate and warm aquatic',
    287: 'temperate or warm aquatic',
    288: 'temperate or warm ocean or coastline',
    289: 'any oceans (during storms)',
    290: 'temperate and warm lands and underground',
    291: 'warm hills or plains',
    292: 'temperate and warm marshes and rivers',
    293: 'River Styx',
    294: 'warm forests or swamps',
    295: 'any land (lawful plane)',
    296: 'any land (usually jungles or underground)',
    297: 'any Outer Plane (Abaddon)',
    298: 'warm forests and marshes',
    299: 'cold and temperate forests, hills and plains',
    300: 'warm aquatic and plains',
    301: 'Hell',
    302: 'any land',
    303: 'cold coastlines and plains',
    304: 'temperate and warm hills and mountains',
    305: 'temperate and warm forests, underground, and urban',
    306: 'any urban or ruins',
    307: 'any forests or plains',
    308: 'warm plains (Nuat)',
    309: 'any warm',
    310: 'Elemental Plane of Fire',
    311: 'any hills or mountains',
    312: 'temperate or warm forests or plains',
    313: 'Nine Hells',
    314: 'warm plains and shorelines',
    315: 'temperate or warm plains',
    316: 'cold deserts and glaciers',
    317: 'any (extraplanar)',
    318: 'warm hills and deserts',
    319: 'temperate and warm forest and underground',
    320: 'cold hills and moutains',
    321: 'Gehenna, Hades, or Tarterus',
    322: 'temperate or warm forests or coasts',
    323: 'temperate and warm forests',
    324: 'temperate or warm deserts or plains',
    325: 'any marsh',
    326: 'temperate and warm forest, hill, marsh, and plains',
    327: "warm jungles (Yoha's Graveyard)",
    328: 'any deserts or oceans',
    329: 'cold mountains',
    330: 'cold rivers',
    331: 'any (Heaven)',
    332: 'any mountains or underground',
    333: 'any forest or plain (Elysium)',
    334: 'warm or temperate aquatic',
    335: 'temperate forests and plains or underground',
    336: 'warm desert',
    337: 'warm marshes and aquatic',
    338: 'temperate plains and underground',
    339: 'any underground (beneath Kaer Maga)',
    340: 'warm forests and swamps',
    341: 'temperate or warm swamps or underground',
    342: 'Plane of Molten Skies, Elemental Plane of Fire',
    343: 'any rivers or marshes',
    344: 'any (Worldwound)',
    345: 'temperate desert',
    346: 'temperate islands',
    347: 'any (Astral Plane)',
    348: 'warm jungle',
    349: 'warm coastline, swamps, or plains',
    350: 'any temperate land',
    351: 'any underground (except water)',
    352: 'any (Vista)',
    353: 'temperate or warm forest or underground',
    354: 'any (Korvosa)',
    355: 'any water or coastlines',
    356: 'temperate forests and mountains',
    357: 'any blighted land',
    358: 'any ruins or underground',
    359: 'any tropical (First World)',
    360: 'Outer Planes',
    361: 'any (Quasi-Elemental Plane of Lightning)',
    362: 'Limbo',
    363: 'any (Plane of Air or Plane of Water)',
    364: 'any saltwater',
    365: 'any aquatic or land',
    366: 'warm forests or underground',
    367: 'any (usually Gehenna, Hades, or Tarterus)',
    368: 'warm jungles (Mwangi Expanse)',
    369: 'elemental plane of fire',
    370: 'cold and temperate aquatic',
    371: 'temperate or tropical forests or hills',
    372: 'any wastelands',
    373: 'any land (Irrisen)',
    374: 'Plane of Air',
    375: 'temperate or cold ocean',
    376: 'any (Abyss; volcanic regions)',
    377: 'tropical forests (Mediogalti Island)',
    378: 'any land, aquatic, and underground',
    379: 'any non-cold',
    380: 'cold deserts or mountains',
    381: 'temperate hills or underground',
    382: 'any waters (Nirvana)',
    383: 'temperate plains and forests',
    384: 'any ocean',
    385: 'any land or underground near cities',
    386: 'any forest and hills',
    387: 'warm coastline',
    388: 'temperate swamps',
    389: 'temperate underground or marshes',
    390: 'any land (Nirvana)',
    391: 'any land (extraplanar)',
    392: 'outer planes',
    393: 'temperate oceans',
    394: 'warm forests (Abyss)',
    395: 'any (Abaddon)',
    396: 'volcanic underground',
    397: 'warm swamps',
    398: 'warm plains or hills',
    399: 'Elemental Plane of Earth',
    400: 'temperate forests, hills, or plains (pumpkin patches)',
    401: 'temperate lakes, rivers, or swamps',
    402: 'cold or temperate water or underground',
    403: 'temperate mountains and coastal islands',
    404: 'Para-Elemental Plane of Heat',
    405: 'warm rivers or marshes',
    406: 'temperate underground or deep forest',
    407: 'any (Darklands)',
    408: 'cold volcanic mountains',
    409: 'Plane of Time',
    410: 'Elemental Plane of Fire or Plane of Molten Skies',
    411: 'temperate forests or plains',
    412: 'temperate and warm deserts and mountains',
    413: 'temperate or warm ocean',
    414: 'Any forest, hills, plains, and mountains',
    415: 'any forest, hill, jungle, or plains',
    416: 'any (see text)',
    417: 'tropical rivers and lakes',
    418: 'any forests (primal land of fey)',
    419: 'any land or urban',
    420: 'any terrestrial vacuum',
    421: 'forests or jungle',
    422: 'any (Negative Energy Plane)',
    423: 'warm hills and marshes',
    424: 'any swamp',
    425: 'warm islands',
    426: 'temperate and cold forests',
    427: 'Quasi-Plane of Obsidian',
    428: 'warm lakes',
    429: 'warm forests and mountains',
    430: 'warm forests and hills',
    431: 'temperate marshes',
    432: 'temperate or warm rivers',
    433: 'any oceans and underground',
    434: 'temperate water',
    435: 'any temperate and warm land',
    436: 'any cold (Abyss)',
    437: 'any (Material Plane only)',
    438: 'Plane of Earth',
    439: 'any aboveground natural area',
    440: 'warm forests, hills, or mountains',
    441: 'any (Outer Planes)',
    442: 'warm ocean or coastline',
    443: 'Plane of Slime',
    444: 'any land or water',
    445: 'temperate swamp',
    446: 'warm forests, hills, or plains',
    447: 'any (Plane of Molten Skies)',
    448: 'cold hills',
    449: 'cold hills and mountains',
    450: 'any (underground)',
    451: 'any forest',
    452: 'warm forest and aquatic',
    453: 'any cold or temperate land',
    454: 'cold hills, mountains, or plains',
    455: 'any volcano or underground',
    456: 'temperate forests, marshes, and urban',
    457: 'temperate hills',
    458: 'see text',
    459: 'temperate and hot plains or urban',
    460: 'temperate or warm oceans',
    461: 'any (Casmaron)',
    462: 'warm deserts or hills',
    463: 'any temperate and warm',
    464: 'temperate lakes or swamps',
    465: 'warm coastline or forest',
    466: 'any land or underground (Plane of Shadow)',
    467: 'warm water',
    468: 'warm rivers and marshes',
    469: 'any land (Plane of Fire)',
    470: 'aquatic',
    471: 'any plains or swamps',
    472: 'any (Infernus)',
    473: 'any mountain',
    474: 'Negative Energy Plane',
    475: 'temperate forests or jungles',
    476: 'cold swamps or coastlines',
    477: 'warm coasts and oceans',
    478: 'temperate or warm forests or swamps',
    479: 'warm plains or desert',
    480: 'warm mountains',
    481: 'Elysium',
    482: 'Plane of Shadow',
    483: 'cold and temperate forests, marshes and plains',
    484: 'underground or temperate forest',
    485: 'warm forests, swamps, and fresh water',
    486: 'warm deserts or urban',
    487: 'warm deserts or islands',
    488: 'temperate hills and mountains',
    489: 'cold forest or mountains',
    490: 'temperate coasts',
    491: 'cold coastlines',
    492: 'temperate rivers or lakes',
    493: 'Plane of Water',
    494: 'any underground (Darklands)',
    495: 'any (the Boneyard)',
    496: 'cold forests and plains',
    497: 'Temperate Forests',
    498: 'Elemental Plane of Time',
    499: 'warm plains',
    500: 'any urban or underground',
    501: 'cold coastlines, hills, or plains',
    502: 'temperate forest or swamp',
    503: 'temperate marshes and underground',
    504: 'any (Abyss; battlefields and graveyards)',
    505: 'any land (evil Outer Plane)',
    506: 'temperate or warm forests, hills, or underground',
    507: 'any forests or mountains (Nirvana)',
    508: 'cold hills or glaciers',
    509: 'temperate aquatic',
    510: 'temperate land',
    511: 'any land (Hell)',
    512: 'temperate and warm swamps',
    513: 'cold mountains or underground',
    514: 'any (usually underground)',
    515: 'any relatively flat and dry terrain',
    516: 'any freshwater aquatic',
    517: 'temperate and warm oceans',
    518: 'any lakes',
    519: 'underground (the Bloodways)',
    520: 'temperate mountains or urban',
    521: 'warm deserts, hills, or plains',
    522: 'temperate and hot forests and deserts',
    523: 'Quasi-Plane of Vapor',
    524: 'temperate forests or hills',
    525: 'temperate or cold aquatic or underground',
    526: 'cold mountainous coastlines',
    527: 'warm forest and plains',
    528: 'any marshes or underground',
    529: 'cold or temperate plains',
    530: 'any battle',
    531: 'temperate or warm forest',
    532: 'cold and temperate forests and plains',
    533: 'any temperate or warm aquatic',
    534: 'warm or temperate plains',
    535: 'tropical oceans',
    536: 'any sky',
    537: 'temperate or tropical swamps',
    538: 'warm forest',
    539: 'any swamp or underground',
    540: 'vacuum',
    541: 'temperate forests (The Hollow Mountain)',
    542: 'warm mountains or underground',
    543: 'any swamp (Abyss)',
    544: 'warm subterranean lakes and rivers',
    545: 'any (evil planes)',
    546: 'temperate or warm jungles',
    547: 'any tropical',
    548: 'any (usually Gehenna, Tarterus, or Hades)',
    549: 'any underground or swamps',
    550: 'temperate forests or urban',
    551: 'any (Abaddon or Astral Plane)',
    552: 'temperate and warm plains or desert',
    553: 'temperate or warm water or shore',
    554: 'any land and underground',
    555: 'any (Plane of Earth)',
    556: 'any forests or hills',
    557: 'cold plains',
    558: 'any mountains (Dimension of Dreams)',
    559: 'temperate or cold hills or underground',
    560: 'cold or temperate forests and mountains',
    561: 'cold forests, hills, mountains and plains',
    562: 'any ocean or coastline',
    563: 'cold and temperate oceans',
    564: 'any evil-aligned planes',
    565: 'any temperate or underground',
    566: 'warm mountains and underground',
    567: 'cold or temperate forest and plains',
    568: 'warm coasts or forests',
    569: 'temperate forest and plains (usually coastal regions)',
    570: 'any forest or hill',
    571: 'any underground (the Abyss)',
    572: 'The Abyss',
    573: 'temperate ocean',
    574: 'temperate or warm land',
    575: 'cold swamps',
    576: 'any land (Abaddon)',
    577: 'temperate marsh',
    578: 'warm plains and deserts',
    579: 'any land (graveyards and cemeteries)',
    580: 'any temperate and warm land and underground',
    581: 'warm forest, plains, or hills',
    582: 'temperate or warm marshes or underground',
    583: 'any (graveyards or the Boneyard)',
    584: 'warm fresh water',
    585: 'Plane of Molten Skies or Elemental Plane of Fire',
    586: 'any water (Plane of Water)',
    587: 'temperate forests, plains, or swamps',
    588: 'cold and temperate forests',
    589: 'tropical jungles (Mediogalti Island)',
    590: 'warm forests or mountains',
    591: 'Plane of Gravity',
    592: 'warm forests and plains',
    593: 'any (the Worldwound)',
    594: 'temperate or warm forests or underground',
    595: 'any temperate or tropical',
    596: 'warm deserts or plains',
    597: 'any (haunted sites or ruins)',
    598: 'cold plains, hills, or mountains',
    599: 'gas giants or vacuum',
    600: 'any (River Styx)',
    601: 'warm oceans or coastlines',
    602: 'any land or sky (lightning storms)',
    603: 'any (Sekatar-Seraktis)',
    604: 'warm rivers, lakes, and swamps',
    605: 'temperate or warm forests and marshes',
    606: 'any land or underground',
    607: 'tropical forests and jungles',
    608: 'temperate forest and mountain',
    609: 'any (Ghahazi, Abyss)',
    610: 'any volcanoes or underground',
    611: 'temperate forests or marshes',
    612: 'cold marshes',
    613: 'tropical lakes and rivers',
    614: 'temperate forests, mountains, or underground',
    615: 'any non-cold underground',
    616: 'any marsh or underground',
    617: 'any air',
    618: 'any urban',
    619: 'temperate or warm mountains',
    620: 'any (Abyss)',
    621: 'warm coastlines',
    622: 'any water (coastal)',
    623: 'warm ocean',
    624: 'urban (Abyss)',
    625: 'temperate swamp or underground',
    626: 'any (elemental planes)',
    627: 'any (Plane of Water)',
    628: 'any near ghouls',
    629: 'tropical deserts',
    630: 'any land or water (Plane of Earth)',
    631: 'tropical or temperate forests',
    632: 'cold or temperate forests',
    633: 'temperate forests, lakes, or rivers',
    634: 'warm jungles',
    635: 'cold hills or mountains',
    636: 'any land (Abyss)',
    637: 'temperate mountains (Arcadia)',
  };

  return (
    <div>
      <label htmlFor="">Environment</label>
      <input
        type="text"
        name="environment"
        onChange={(e) => onEnvironmentChange(e)}
      />
    </div>
  );
}

export default Environment;