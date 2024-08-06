import {SimpleTranslationEntries} from "#app/interfaces/locales";

// Titles of special trainers like gym leaders, elite four, and the champion
export const titles: SimpleTranslationEntries = {
  "elite_four": "사천왕",
  "elite_four_female": "사천왕",
  "gym_leader": "체육관 관장",
  "gym_leader_female": "체육관 관장",
  "gym_leader_double": "체육관 관장 듀오",
  "champion": "챔피언",
  "champion_female": "챔피언",
  "champion_double": "챔피언 듀오",
  "rival": "라이벌",
  "professor": "박사",
  "frontier_brain": "프런티어 브레인",
  "rocket_boss": "로켓단 보스",
  "magma_boss": "마그마단 보스",
  "aqua_boss": "아쿠아단 보스",
  "galactic_boss": "갤럭시단 보스",
  "plasma_boss": "플라스마단 보스",
  "flare_boss": "플레어단 보스",

  "rocket_admin": "로켓단 간부",
  "rocket_admin_female": "로켓단 간부",
  "magma_admin": "마그마단 간부",
  "magma_admin_female": "마그마단 간부",
  "aqua_admin": "아쿠아단 간부",
  "aqua_admin_female": "아쿠아단 간부",
  "galactic_commander": "갤럭시단 간부",
  "galactic_commander_female": "갤럭시단 간부",
  "plasma_sage": "플라스마단 현인",
  "plasma_admin": "Team Plasma Admin",
  "flare_admin": "플레어단 간부",
  "flare_admin_female": "플레어단 간부",
  // Maybe if we add the evil teams we can add "Team Rocket" and "Team Aqua" etc. here as well as "Team Rocket Boss" and "Team Aqua Admin" etc.
} as const;

// Titles of trainers like "Youngster" or "Lass"
export const trainerClasses: SimpleTranslationEntries = {
  "ace_trainer": "엘리트 트레이너",
  "ace_trainer_female": "엘리트 트레이너",
  "ace_duo": "엘리트 콤비",
  "artist": "예술가",
  "artist_female": "예술가",
  "backers": "팬클럽",
  "backpacker": "백팩커",
  "backpacker_female": "백팩커",
  "backpackers": "백팩커",
  "baker": "제빵사",
  "battle_girl": "배틀걸",
  "beauty": "아가씨",
  "beginners": "반바지 꼬마 & 짧은 치마", // 확인 필요
  "biker": "폭주족",
  "black_belt": "태권왕",
  "breeder": "포켓몬 브리더",
  "breeder_female": "포켓몬 브리더",
  "breeders": "포켓몬 브리더",
  "clerk": "비즈니스맨",
  "clerk_female": "여사원",
  "colleagues": "비즈니스 파트너",
  "crush_kin": "배틀 커플", // 임의번역
  "cyclist": "사이클링",
  "cyclist_female": "사이클링",
  "cyclists": "사이클링",
  "dancer": "댄서",
  "dancer_female": "댄서",
  "depot_agent": "역무원",
  "doctor": "의사",
  "doctor_female": "간호사", // doctor_f.png 파일이 간호사
  "firebreather": "불놀이꾼",
  "fisherman": "낚시꾼",
  "fisherman_female": "낚시꾼",
  "gentleman": "신사",
  "guitarist": "기타리스트",
  "guitarist_female": "기타리스트",
  "harlequin": "어릿광대",
  "hiker": "등산가",
  "hooligans": "폭주족 & 빡빡이", // 확인 필요
  "hoopster": "농구선수",
  "infielder": "야구선수",
  "janitor": "청소부",
  "lady": "아기씨",
  "lass": "짧은 치마",
  "linebacker": "미식축구선수",
  "maid": "메이드",
  "madame": "마담",
  "medical_team": "의료팀",
  "musician": "뮤지션",
  "hex_maniac": "오컬트마니아",
  "nurse": "간호사",
  "nursery_aide": "보육사",
  "officer": "경찰관",
  "parasol_lady": "파라솔 아가씨",
  "pilot": "파일럿",
  "pokéfan": "애호가클럽",
  "pokéfan_female": "애호가클럽",
  "pokéfan_family": "애호가부부",
  "preschooler": "보육원아",
  "preschooler_female": "보육원아",
  "preschoolers": "보육원아",
  "psychic": "초능력자",
  "psychic_female": "초능력자",
  "psychics": "초능력자",
  "pokémon_ranger": "포켓몬 레인저",
  "pokémon_ranger_female": "포켓몬 레인저",
  "pokémon_rangers": "포켓몬 레인저",
  "ranger": "포켓몬 레인저",
  "restaurant_staff": "요리사", // 혹은 오너로 추정
  "rich": "신사",
  "rich_female": "마담",
  "rich_boy": "도련님",
  "rich_couple": "신사 & 마담", // 확인 필요
  "rich_kid": "도련님",
  "rich_kid_female": "아가씨",
  "rich_kids": "도련님 & 아가씨", // 확인 필요
  "roughneck": "빡빡이",
  "scientist": "연구원",
  "scientist_female": "연구원",
  "scientists": "연구원",
  "smasher": "테니스선수",
  "snow_worker": "작업원",
  "snow_worker_female": "작업원",
  "sailor": "선원",
  "striker": "축구선수",
  "school_kid": "학원끝난 아이",
  "school_kid_female": "학원끝난 아이",
  "school_kids": "학원끝난 아이",
  "swimmer": "수영팬티 소년",
  "swimmer_female": "비키니 아가씨",
  "swimmers": "수영팬티 소년 & 비키니 아가씨", // 확인 필요
  "twins": "쌍둥이",
  "veteran": "베테랑 트레이너",
  "veteran_female": "베테랑 트레이너",
  "veteran_duo": "베테랑 콤비",
  "waiter": "웨이터",
  "waitress": "웨이트리스",
  "worker": "작업원",
  "worker_female": "작업원",
  "workers": "작업원",
  "youngster": "반바지 꼬마",
  "rocket_grunt": "로켓단 조무래기",
  "rocket_grunt_female": "로켓단 조무래기",
  "rocket_grunts": "로켓단 조무래기들",
  "magma_grunt": "마그마단 조무래기",
  "magma_grunt_female": "마그마단 조무래기",
  "magma_grunts": "마그마단 조무래기들",
  "aqua_grunt": "아쿠아단 조무래기",
  "aqua_grunt_female": "아쿠아단 조무래기",
  "aqua_grunts": "아쿠아단 조무래기들",
  "galactic_grunt": "갤럭시단 조무래기",
  "galactic_grunt_female": "갤럭시단 조무래기",
  "galactic_grunts": "갤럭시단 조무래기들",
  "plasma_grunt": "플라스마단 조무래기",
  "plasma_grunt_female": "플라스마단 조무래기",
  "plasma_grunts": "플라스마단 조무래기들",
  "flare_grunt": "플레어단 조무래기",
  "flare_grunt_female": "플레어단 조무래기",
  "flare_grunts": "플레어단 조무래기들",

} as const;

// Names of special trainers like gym leaders, elite four, and the champion
export const trainerNames: SimpleTranslationEntries = {
  "brock": "웅",
  "misty": "이슬",
  "lt_surge": "마티스",
  "erika": "민화",
  "janine": "도희",
  "sabrina": "초련",
  "blaine": "강연",
  "giovanni": "비주기",
  "falkner": "비상",
  "bugsy": "호일",
  "whitney": "꼭두",
  "morty": "유빈",
  "chuck": "사도",
  "jasmine": "규리",
  "pryce": "류옹",
  "clair": "이향",
  "roxanne": "원규",
  "brawly": "철구",
  "wattson": "암페어",
  "flannery": "민지",
  "norman": "종길",
  "winona": "은송",
  "tate": "풍",
  "liza": "란",
  "juan": "아단",
  "roark": "강석",
  "gardenia": "유채",
  "maylene": "자두",
  "crasher_wake": "맥실러",
  "fantina": "멜리사",
  "byron": "동관",
  "candice": "무청",
  "volkner": "전진",
  "cilan": "덴트",
  "chili": "팟",
  "cress": "콘",
  "cheren": "체렌",
  "lenora": "알로에",
  "roxie": "보미카",
  "burgh": "아티",
  "elesa": "카밀레",
  "clay": "야콘",
  "skyla": "풍란",
  "brycen": "담죽",
  "drayden": "사간",
  "marlon": "시즈",
  "viola": "비올라",
  "grant": "자크로",
  "korrina": "코르니",
  "ramos": "후쿠지",
  "clemont": "시트론",
  "valerie": "마슈",
  "olympia": "고지카",
  "wulfric": "우르프",
  "milo": "아킬",
  "nessa": "야청",
  "kabu": "순무",
  "bea": "채두",
  "allister": "어니언",
  "opal": "포플러",
  "bede": "비트",
  "gordie": "마쿠와",
  "melony": "멜론",
  "piers": "두송",
  "marnie": "마리",
  "raihan": "금랑",
  "katy": "단풍",
  "brassius": "콜사",
  "iono": "모야모",
  "kofu": "곤포",
  "larry": "청목",
  "ryme": "라임",
  "tulip": "리파",
  "grusha": "그루샤",
  "lorelei": "칸나",
  "bruno": "시바",
  "agatha": "국화",
  "lance": "목호",
  "will": "일목",
  "koga": "독수",
  "karen": "카렌",
  "sidney": "혁진",
  "phoebe": "회연",
  "glacia": "미혜",
  "drake": "권수",
  "aaron": "충호",
  "bertha": "들국화",
  "flint": "대엽",
  "lucian": "오엽",
  "shauntal": "망초",
  "marshal": "연무",
  "grimsley": "블래리",
  "caitlin": "카틀레야",
  "malva": "파키라",
  "siebold": "즈미",
  "wikstrom": "간피",
  "drasna": "드라세나",
  "hala": "할라",
  "molayne": "멀레인",
  "olivia": "라이치",
  "acerola": "아세로라",
  "kahili": "카일리",
  "rika": "칠리",
  "poppy": "뽀삐",
  "hassel": "팔자크",
  "crispin": "하솔",
  "amarys": "네리네",
  "lacey": "타로",
  "drayton": "제빈",
  "blue": "그린",
  "red": "레드",
  "steven": "성호",
  "wallace": "윤진",
  "cynthia": "난천",
  "alder": "노간주",
  "iris": "아이리스",
  "diantha": "카르네",
  "hau": "하우",
  "geeta": "테사",
  "nemona": "네모",
  "kieran": "카지",
  "leon": "단델",
  "rival": "핀",
  "rival_female": "아이비",

  // Evil Team Admins
  "archer": "Archer",
  "ariana": "Ariana",
  "proton": "Proton",
  "petrel": "Petrel",
  "tabitha": "Tabitha",
  "courtney": "Courtney",
  "shelly": "Shelly",
  "matt": "Matt",
  "mars": "Mars",
  "jupiter": "Jupiter",
  "saturn": "Saturn",
  "zinzolin": "Zinzolin",
  "rood": "Rood",
  "colress": "Colress",
  "xerosic": "Xerosic",
  "bryony": "Bryony",


  "maxie": "마적",
  "archie": "아강",
  "cyrus": "태홍",
  "ghetsis": "게치스",
  "lysandre": "플라드리",

  // Double Names
  "blue_red_double": "그린 & 레드",
  "red_blue_double": "레드 & 그린",
  "tate_liza_double": "풍 & 란",
  "liza_tate_double": "란 & 풍",
  "steven_wallace_double": "성호 & 윤진",
  "wallace_steven_double": "윤진 & 성호",
  "alder_iris_double": "노간주 & 아이리스",
  "iris_alder_double": "아이리스 & 노간주",
  "marnie_piers_double": "마리 & 두송",
  "piers_marnie_double": "두송 & 마리",
} as const;
