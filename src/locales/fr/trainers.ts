import {SimpleTranslationEntries} from "#app/plugins/i18n";

// Titles of special trainers like gym leaders, elite four, and the champion
export const titles: SimpleTranslationEntries = {
  "elite_four": "Conseil 4",
  "gym_leader": "Champion d’Arène",
  "gym_leader_female": "Championne d’Arène",
  "gym_leader_double": "Gym Leader Duo",
  "champion": "Maitre·esse", //Written in gender-inclusive language in wait of a potential split of the entry
  "champion_double": "Champion Duo",
  "rival": "Rival·e", //Written in gender-inclusive language in wait of a potential split of the entry
  "professor": "Professeur·e", //Written in gender-inclusive language in wait of a potential split of the entry
  "frontier_brain": "Meneur·euse de Zone", //Written in gender-inclusive language in wait of a potential split of the entry
  "timespace_double": "Timespace Duo",
  "sibling_double": "Sibling Duo",
  "ninja_double": "Ninja Duo",
  // Maybe if we add the evil teams we can add "Team Rocket" and "Team Aqua" etc. here as well as "Team Rocket Boss" and "Team Aqua Admin" etc.
} as const;

// Titles of trainers like "Youngster" or "Lass"
export const trainerClasses: SimpleTranslationEntries = {
  "ace_trainer": "Topdresseur",
  "ace_trainer_female": "Topdresseuse",
  "ace_duo": "Topdresseurs",
  "artist": "Artiste",
  "artist_female": "Artiste",
  "backers": "Pompom Girls",
  "backpacker": "Randonneur",
  "backpacker_female": "Randonneuse",
  "backpackers": "Randonneurs",
  "baker": "Boulangère",
  "battle_girl": "Combattante",
  "beauty": "Canon",
  "beginners": "Beginners",
  "biker": "Motard",
  "black_belt": "Karatéka",
  "breeder": "Éleveur",
  "breeder_female": "Éleveuse",
  "breeders": "Éleveurs",
  "clerk": "Employé",
  "clerk_female": "Employée",
  "colleagues": "Collègues de Bureau",
  "crush_kin": "Duo Baston",
  "cyclist": "Cycliste",
  "cyclist_female": "Cycliste",
  "cyclists": "Cyclistes",
  "dancer": "Danseur",
  "dancer_female": "Danseuse",
  "depot_agent": "Cheminot",
  "doctor": "Docteur",
  "doctor_female": "Docteure",
  "fisherman": "Pêcheur",
  "fisherman_female": "Pêcheuse",
  "gentleman": "Gentleman",
  "guitarist": "Guitariste",
  "guitarist_female": "Guitariste",
  "harlequin": "Clown",
  "hiker": "Montagnard",
  "hooligans": "Loubards",
  "hoopster": "Basketteur",
  "infielder": "Baseballeur",
  "janitor": "Nettoyeur",
  "lady": "Mademoiselle",
  "lass": "Fillette",
  "linebacker": "Quaterback",
  "maid": "Gouvernante",
  "madame": "Mondaine",
  "medical_team": "Médecins",
  "musician": "Musicien",
  "hex_maniac": "Mystimaniac",
  "nurse": "Infirmière",
  "nursery_aide": "Institutrice",
  "officer": "Policier",
  "parasol_lady": "Sœur Parasol",
  "pilot": "Pilote",
  "pokéfan": "Poké Fan",
  "pokéfan_female": "Poké Fan",
  "pokéfan_family": "Couple de Pokéfans",
  "preschooler": "Petit",
  "preschooler_female": "Petite",
  "preschoolers": "Petits",
  "psychic": "Kinésiste",
  "psychic_female": "Kinésiste",
  "psychics": "Kinésistes",
  "pokémon_ranger": "Pokémon Ranger",
  "pokémon_ranger_female": "Pokémon Ranger",
  "pokémon_rangers": "Pokémon Rangers",
  "ranger": "Ranger",
  "restaurant_staff": "Serveurs",
  "rich": "Rich",
  "rich_female": "Mondaine",
  "rich_boy": "Gentleman",
  "rich_couple": "Couple de Bourgeois",
  "rich_kid": "Richard",
  "rich_kid_female": "Mademoiselle",
  "rich_kids": "Richards",
  "roughneck": "Loubard",
  "scientist": "Scientifique",
  "scientist_female": "Scientifique",
  "scientists": "Scientifiques",
  "smasher": "Tenniswoman",
  "snow_worker": "Ouvrier Alpin",
  "snow_worker_female": "Ouvrière Alpine",
  "striker": "Footballeur",
  "school_kid": "Élève",
  "school_kid_female": "Élève",
  "school_kids": "Élèves",
  "swimmer": "Nageur",
  "swimmer_female": "Nageuse",
  "swimmers": "Nageurs",
  "twins": "Jumelles",
  "veteran": "Vénérable",
  "veteran_female": "Vénérable",
  "veteran_duo": "Vénérables",
  "waiter": "Serveur",
  "waitress": "Serveuse",
  "worker": "Ouvrier",
  "worker_female": "Ouvrière",
  "workers": "Ouvriers",
  "youngster": "Gamin"
} as const;

// Names of special trainers like gym leaders, elite four, and the champion
export const trainerNames: SimpleTranslationEntries = {
  "brock": "Pierre",
  "misty": "Ondine",
  "lt_surge": "Major Bob",
  "erika": "Erika",
  "janine": "Jeannine",
  "sabrina": "Morgane",
  "blaine": "Auguste",
  "giovanni": "Giovanni",
  "falkner": "Albert",
  "bugsy": "Hector",
  "whitney": "Blanche",
  "morty": "Mortimer",
  "chuck": "Chuck",
  "jasmine": "Jasmine",
  "pryce": "Frédo",
  "clair": "Sandra",
  "roxanne": "Roxanne",
  "brawly": "Bastien",
  "wattson": "Voltère",
  "flannery": "Adriane",
  "norman": "Norman",
  "winona": "Alizée",
  "tate": "Lévy",
  "liza": "Tatia",
  "juan": "Juan",
  "roark": "Pierrick",
  "gardenia": "Flo",
  "maylene": "Mélina",
  "crasher_wake": "Lovis",
  "fantina": "Kiméra",
  "byron": "Charles",
  "candice": "Gladys",
  "volkner": "Tanguy",
  "cilan": "Rachid",
  "chili": "Armando",
  "cress": "Noa",
  "cheren": "Tcheren",
  "lenora": "Aloé",
  "roxie": "Strykna",
  "burgh": "Artie",
  "elesa": "Inezia",
  "clay": "Bardane",
  "skyla": "Carolina",
  "brycen": "Zhu",
  "drayden": "Watson",
  "marlon": "Amana",
  "viola": "Violette",
  "grant": "Lino",
  "korrina": "Cornélia",
  "ramos": "Amaro",
  "clemont": "Lem",
  "valerie": "Valériane",
  "olympia": "Astera",
  "wulfric": "Urup",
  "milo": "Percy",
  "nessa": "Donna",
  "kabu": "Kabu",
  "bea": "Faïza",
  "allister": "Alistair",
  "opal": "Sally",
  "bede": "Travis",
  "gordie": "Chaz",
  "melony": "Lona",
  "piers": "Peterson",
  "marnie": "Rosemary",
  "raihan": "Roy",
  "katy": "Éra",
  "brassius": "Colza",
  "iono": "Mashynn",
  "kofu": "Kombu",
  "larry": "Okuba",
  "ryme": "Laïm",
  "tulip": "Tully",
  "grusha": "Grusha",
  "lorelei": "Olga",
  "bruno": "Aldo",
  "agatha": "Agatha",
  "lance": "Peter",
  "will": "Clément",
  "koga": "Koga",
  "karen": "Marion",
  "sidney": "Damien",
  "phoebe": "Spectra",
  "glacia": "Glacia",
  "drake": "Aragon",
  "aaron": "Aaron",
  "bertha": "Terry",
  "flint": "Adrien",
  "lucian": "Lucio",
  "shauntal": "Anis",
  "marshal": "Kunz",
  "grimsley": "Pieris",
  "caitlin": "Percila",
  "malva": "Malva",
  "siebold": "Narcisse",
  "wikstrom": "Tileo",
  "drasna": "Dracéna",
  "hala": "Pectorius",
  "molayne": "Molène",
  "olivia": "Alyxia",
  "acerola": "Margie",
  "kahili": "Kahili",
  "rika": "Cayenn",
  "poppy": "Popi",
  "hassel": "Hassa",
  "crispin": "Rubépin",
  "amarys": "Nérine",
  "lacey": "Taro",
  "drayton": "Irido",
  "blue": "Blue",
  "red": "Red",
  "steven": "Pierre Rochard",
  "wallace": "Marc",
  "cynthia": "Cynthia",
  "alder": "Goyah",
  "iris": "Iris",
  "diantha": "Dianthéa",
  "hau": "Tili",
  "geeta": "Alisma",
  "nemona": "Menzi",
  "kieran": "Kass",
  "leon": "Tarak",
  "rival": "Gwenaël", //Male breton name, a celtic language spoken in  Brittany (France) and related to the word for "white" (gwenn). Finn meaning is also "white" in irish/goidelic which are also celtic languages.
  "rival_female": "Papina", //Litteral translation of ivy, also used as Female name in a North-American indigenous language


  // Double Names
  "blue_red_double": "Blue & Red",
  "red_blue_double": "Red & Blue",
  "tate_liza_double": "Tate & Liza",
  "liza_tate_double": "Liza & Tate",
  "steven_wallace_double": "Steven & Wallace",
  "wallace_steven_double": "Wallace & Steven",
  "alder_iris_double": "Alder & Iris",
  "iris_alder_double": "Iris & Alder",
  "marnie_piers_double": "Marnie & Piers",
  "piers_marnie_double": "Piers & Marnie",
  "volo_cynthia_double": "Volo & Cynthia",
  "cynthia_volo_double": "Cynthia & Volo",
  "hop_leon_double": "Hop & Leon",
  "leon_hop_double": "Leon & Hop",
  "opal_bede_double": "Opal & Bede",
  "bede_opal_double": "Bede & Opal",
  "nemona_geeta_double": "Nemona & Geeta",
  "geeta_nemona_double": "Geeta & Nemona",
  "janine_koga_double": "Janine & Koga",
  "koga_janine_double": "Koga & Janine",
} as const;
