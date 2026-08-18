// Marvel Cinematic Universe — Complete Multiverse Interactive Archive Engine (Phases 1 — 6)

const MCU_MOVIES = [
  // --- PHASE 1 (The Infinity Saga) ---
  {
    id: 'ironman1',
    title: 'Iron Man',
    releaseYear: 2008,
    releaseDate: 'May 2, 2008',
    chronoYear: '2010',
    chronoIndex: 3,
    releaseIndex: 1,
    phase: 'Phase 1',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Jon Favreau',
    runtime: '126 min',
    boxOffice: '$585.8M',
    poster: 'assets/images/posters/mcu_ironman1.jpg',
    heroes: ['Tony Stark (Iron Man)', 'James Rhodes', 'Pepper Potts'],
    villains: ['Obadiah Stane (Iron Monger)', 'Ten Rings'],
    teams: ['Stark Industries'],
    synopsis: 'After being captured by terrorists in Afghanistan, billionaire genius inventor Tony Stark builds an armored powered suit with a miniaturized Arc Reactor to escape. Returning home, he perfects the red-and-gold armor to fight global injustice as Iron Man.',
    connections: 'The foundational birth of the MCU. Introduced Tony Stark, Jarvis, and the iconic post-credits scene where Nick Fury invites Stark to the Avengers Initiative.'
  },
  {
    id: 'hulk',
    title: 'The Incredible Hulk',
    releaseYear: 2008,
    releaseDate: 'June 13, 2008',
    chronoYear: '2011',
    chronoIndex: 5,
    releaseIndex: 2,
    phase: 'Phase 1',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Louis Leterrier',
    runtime: '112 min',
    boxOffice: '$264.8M',
    poster: 'assets/images/posters/mcu_hulk.jpg',
    heroes: ['Bruce Banner (The Hulk)', 'Betty Ross'],
    villains: ['Emil Blonsky (Abomination)', 'General Thaddeus Ross'],
    teams: ['US Armed Forces'],
    synopsis: 'Scientist Bruce Banner scours the globe for an antidote to the gamma radiation that unleashes a raging green behemoth within him when provoked. General Ross hunts him relentlessly to weaponize the creature.',
    connections: 'Introduced General Thaddeus Ross (future Secretary of State / Red Hulk). Tony Stark makes a cameo to discuss putting a team together.'
  },
  {
    id: 'ironman2',
    title: 'Iron Man 2',
    releaseYear: 2010,
    releaseDate: 'May 7, 2010',
    chronoYear: '2011',
    chronoIndex: 4,
    releaseIndex: 3,
    phase: 'Phase 1',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Jon Favreau',
    runtime: '124 min',
    boxOffice: '$623.9M',
    poster: 'assets/images/posters/mcu_ironman2.jpg',
    heroes: ['Tony Stark', 'Natasha Romanoff (Black Widow)', 'James Rhodes (War Machine)'],
    villains: ['Ivan Vanko (Whiplash)', 'Justin Hammer'],
    teams: ['S.H.I.E.L.D.', 'Hammer Advanced Robotics'],
    synopsis: 'With the world now aware of his double life, Tony Stark faces declining health from palladium poisoning, government pressure to share his weaponized suit tech, and vengeful physicist Ivan Vanko.',
    connections: 'First MCU appearance of Natasha Romanoff (Black Widow) and War Machine. Previews Mjolnir in New Mexico.'
  },
  {
    id: 'thor1',
    title: 'Thor',
    releaseYear: 2011,
    releaseDate: 'May 6, 2011',
    chronoYear: '2011',
    chronoIndex: 6,
    releaseIndex: 4,
    phase: 'Phase 1',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Kenneth Branagh',
    runtime: '115 min',
    boxOffice: '$449.3M',
    poster: 'assets/images/posters/mcu_thor1.jpg',
    heroes: ['Thor Odinson', 'Jane Foster', 'Heimdall', 'Odin'],
    villains: ['Loki', 'Laufey', 'The Destroyer'],
    teams: ['Asgardian Royal Court', 'Warriors Three'],
    synopsis: 'The arrogant god of thunder Thor is stripped of his divine powers and banished from Asgard to Earth by King Odin. Thor must prove himself worthy to lift his enchanted hammer Mjolnir while his trickster brother Loki usurps the throne.',
    connections: 'Introduced Asgard, the Nine Realms, cosmic mythology, Loki, and Clint Barton (Hawkeye).'
  },
  {
    id: 'cap1',
    title: 'Captain America: The First Avenger',
    releaseYear: 2011,
    releaseDate: 'July 22, 2011',
    chronoYear: '1942 — 1945',
    chronoIndex: 1,
    releaseIndex: 5,
    phase: 'Phase 1',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Joe Johnston',
    runtime: '124 min',
    boxOffice: '$370.6M',
    poster: 'assets/images/posters/mcu_cap1.jpg',
    heroes: ['Steve Rogers (Captain America)', 'Bucky Barnes', 'Peggy Carter'],
    villains: ['Red Skull (Johann Schmidt)', 'HYDRA'],
    teams: ['Howling Commandos', 'SSR'],
    synopsis: 'During World War II, frail recruit Steve Rogers is transformed into the super-soldier Captain America. Armed with an indestructible Vibranium shield, he battles the Nazi science division HYDRA led by the power-mad Red Skull.',
    connections: 'First chronological appearance of an Infinity Stone: The Tesseract (Space Stone) and the origin of Howard Stark and SSR (future S.H.I.E.L.D.).'
  },
  {
    id: 'avengers1',
    title: 'The Avengers',
    releaseYear: 2012,
    releaseDate: 'May 4, 2012',
    chronoYear: '2012',
    chronoIndex: 7,
    releaseIndex: 6,
    phase: 'Phase 1',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Joss Whedon',
    runtime: '143 min',
    boxOffice: '$1.518B',
    poster: 'assets/images/posters/mcu_avengers1.jpg',
    heroes: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'],
    villains: ['Loki', 'Chitauri Army'],
    teams: ['The Avengers', 'S.H.I.E.L.D.'],
    synopsis: 'When Loki steals the Tesseract and leads an alien Chitauri invasion against New York City, Nick Fury brings together six extraordinary individuals to form Earth\'s Mightiest Heroes.',
    connections: 'Culmination of Phase 1. Features the Space Stone (Tesseract) and Mind Stone (Loki\'s Scepter). Post-credits scene reveals Thanos for the first time.'
  },

  // --- PHASE 2 (The Infinity Saga) ---
  {
    id: 'ironman3',
    title: 'Iron Man 3',
    releaseYear: 2013,
    releaseDate: 'May 3, 2013',
    chronoYear: '2012',
    chronoIndex: 8,
    releaseIndex: 7,
    phase: 'Phase 2',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Shane Black',
    runtime: '130 min',
    boxOffice: '$1.215B',
    poster: 'assets/images/posters/mcu_ironman3.jpg',
    heroes: ['Tony Stark', 'Pepper Potts', 'James Rhodes (Iron Patriot)'],
    villains: ['Aldrich Killian (A.I.M.)', 'Trevor Slattery (The Mandarin Actor)'],
    teams: ['A.I.M.', 'Stark Industries'],
    synopsis: 'Plagued by PTSD following the Battle of New York, Tony Stark faces a mysterious terrorist known as the Mandarin who demolishes Stark\'s Malibu mansion and targets the US President with Extremis biotechnology.',
    connections: 'Explores Tony\'s psychological trauma and sets up his obsession with artificial intelligence and global planetary defense systems.'
  },
  {
    id: 'thor2',
    title: 'Thor: The Dark World',
    releaseYear: 2013,
    releaseDate: 'November 8, 2013',
    chronoYear: '2013',
    chronoIndex: 9,
    releaseIndex: 8,
    phase: 'Phase 2',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Alan Taylor',
    runtime: '112 min',
    boxOffice: '$644.8M',
    poster: 'assets/images/posters/mcu_thor2.jpg',
    heroes: ['Thor', 'Loki', 'Jane Foster', 'Frigga'],
    villains: ['Malekith', 'Dark Elves'],
    teams: ['Asgardian Guard'],
    synopsis: 'When an ancient primordial weapon known as the Aether bonds with astrophysicist Jane Foster, Thor forms an uneasy alliance with the imprisoned Loki to prevent Dark Elf Malekith from plunging the cosmos into eternal darkness.',
    connections: 'Introduced the Reality Stone (The Aether). Post-credits scene introduces The Collector (Taneleer Tivan) and explicitly names the "Infinity Stones".'
  },
  {
    id: 'cap2',
    title: 'Captain America: The Winter Soldier',
    releaseYear: 2014,
    releaseDate: 'April 4, 2014',
    chronoYear: '2014',
    chronoIndex: 10,
    releaseIndex: 9,
    phase: 'Phase 2',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Anthony and Joe Russo',
    runtime: '136 min',
    boxOffice: '$714.4M',
    poster: 'assets/images/posters/mcu_cap2.jpg',
    heroes: ['Steve Rogers', 'Natasha Romanoff', 'Sam Wilson (Falcon)', 'Nick Fury'],
    villains: ['Alexander Pierce', 'Bucky Barnes (Winter Soldier)', 'Brock Rumlow (Crossbones)'],
    teams: ['S.H.I.E.L.D.', 'HYDRA', 'STRIKE'],
    synopsis: 'Living in modern Washington D.C., Steve Rogers uncovers a colossal conspiracy: HYDRA has secretly infiltrated S.H.I.E.L.D. from within for decades. Steve, Natasha, and Sam Wilson are hunted by a legendary cybernetic assassin: Bucky Barnes.',
    connections: 'Destruction of S.H.I.E.L.D. First appearance of Sam Wilson (Falcon). Post-credits scene introduces Wanda and Pietro Maximoff.'
  },
  {
    id: 'gotg1',
    title: 'Guardians of the Galaxy',
    releaseYear: 2014,
    releaseDate: 'August 1, 2014',
    chronoYear: '2014',
    chronoIndex: 11,
    releaseIndex: 10,
    phase: 'Phase 2',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'James Gunn',
    runtime: '121 min',
    boxOffice: '$773.3M',
    poster: 'assets/images/posters/mcu_gotg1.jpg',
    heroes: ['Peter Quill (Star-Lord)', 'Gamora', 'Drax the Destroyer', 'Rocket Raccoon', 'Groot'],
    villains: ['Ronan the Accuser', 'Nebula', 'Thanos'],
    teams: ['Guardians of the Galaxy', 'Nova Corps', 'Ravagers'],
    synopsis: 'Brash space outlaw Peter Quill finds himself the target of a relentless manhunt after stealing an orb containing an Infinity Stone. To save the galaxy from Kree warlord Ronan, Quill unites a ragtag team of cosmic misfits.',
    connections: 'Introduced the Power Stone (The Orb), the cosmic realm, Knowhere, Celestials lore, and established Thanos as Gamora & Nebula\'s father.'
  },
  {
    id: 'avengers2',
    title: 'Avengers: Age of Ultron',
    releaseYear: 2015,
    releaseDate: 'May 1, 2015',
    chronoYear: '2015',
    chronoIndex: 13,
    releaseIndex: 11,
    phase: 'Phase 2',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Joss Whedon',
    runtime: '141 min',
    boxOffice: '$1.405B',
    poster: 'assets/images/posters/mcu_avengers2.jpg',
    heroes: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Wanda Maximoff', 'Vision'],
    villains: ['Ultron', 'Pietro Maximoff (initially)'],
    teams: ['The Avengers'],
    synopsis: 'Tony Stark jumpstarts a dormant planetary peacekeeping program named Ultron, which immediately turns rogue and concludes human extinction is the only path to global peace. The Avengers assemble to stop Sokovia from falling.',
    connections: 'Birth of Vision wielding the Mind Stone. Introduced Wanda Maximoff (Scarlet Witch). The destruction of Sokovia triggers the Sokovia Accords.'
  },
  {
    id: 'antman1',
    title: 'Ant-Man',
    releaseYear: 2015,
    releaseDate: 'July 17, 2015',
    chronoYear: '2015',
    chronoIndex: 14,
    releaseIndex: 12,
    phase: 'Phase 2',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Peyton Reed',
    runtime: '117 min',
    boxOffice: '$519.3M',
    poster: 'assets/images/posters/mcu_antman1.jpg',
    heroes: ['Scott Lang (Ant-Man)', 'Hank Pym', 'Hope van Dyne'],
    villains: ['Darren Cross (Yellowjacket)'],
    teams: ['Pym Technologies'],
    synopsis: 'Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang embraces his inner hero and helps his mentor Dr. Hank Pym protect the secret of the Pym Particle.',
    connections: 'First introduction of the Quantum Realm — the scientific cornerstone used for the Time Heist in *Avengers: Endgame*.'
  },

  // --- PHASE 3 (The Infinity Saga) ---
  {
    id: 'cap3',
    title: 'Captain America: Civil War',
    releaseYear: 2016,
    releaseDate: 'May 6, 2016',
    chronoYear: '2016',
    chronoIndex: 15,
    releaseIndex: 13,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Anthony and Joe Russo',
    runtime: '147 min',
    boxOffice: '$1.155B',
    poster: 'assets/images/posters/mcu_cap3.jpg',
    heroes: ['Captain America', 'Iron Man', 'Black Widow', 'Winter Soldier', 'Falcon', 'Spider-Man', 'Black Panther'],
    villains: ['Helmut Zemo'],
    teams: ['Team Cap', 'Team Iron Man'],
    synopsis: 'Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo fractures the team into two opposing factions led by Steve Rogers and Tony Stark.',
    connections: 'Introduced Peter Parker (Spider-Man) and T\'Challa (Black Panther) into the MCU. Shatters the Avengers, leaving Earth vulnerable to Thanos.'
  },
  {
    id: 'docstrange1',
    title: 'Doctor Strange',
    releaseYear: 2016,
    releaseDate: 'November 4, 2016',
    chronoYear: '2016 — 2017',
    chronoIndex: 18,
    releaseIndex: 14,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Scott Derrickson',
    runtime: '115 min',
    boxOffice: '$677.8M',
    poster: 'assets/images/posters/mcu_docstrange1.jpg',
    heroes: ['Dr. Stephen Strange', 'The Ancient One', 'Wong', 'Karl Mordo'],
    villains: ['Kaecilius', 'Dormammu'],
    teams: ['Masters of the Mystic Arts', 'Kamar-Taj'],
    synopsis: 'After a horrific car crash shatters his hands and destroys his surgical career, brilliant but arrogant neurosurgeon Stephen Strange travels to Nepal, where the Ancient One teaches him the secret arts of mystical dimensions.',
    connections: 'Introduced the Time Stone (The Eye of Agamotto), the Mirror Dimension, the Dark Dimension, and the Multiverse concept.'
  },
  {
    id: 'gotg2',
    title: 'Guardians of the Galaxy Vol. 2',
    releaseYear: 2017,
    releaseDate: 'May 5, 2017',
    chronoYear: '2014',
    chronoIndex: 12,
    releaseIndex: 15,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'James Gunn',
    runtime: '136 min',
    boxOffice: '$863.8M',
    poster: 'assets/images/posters/mcu_gotg2.jpg',
    heroes: ['Star-Lord', 'Gamora', 'Drax', 'Rocket', 'Baby Groot', 'Yondu Udonta', 'Mantis'],
    villains: ['Ego the Living Planet', 'Ayesha (Sovereign)'],
    teams: ['Guardians of the Galaxy', 'Ravagers'],
    synopsis: 'The Guardians travel across the cosmos while struggling to keep their newfound family together as they unravel the mystery of Peter Quill\'s true parentage: a living Celestial planet named Ego.',
    connections: 'Introduced Mantis, Yondu\'s emotional redemption, Celestial godhood biology, and teased Adam Warlock.'
  },
  {
    id: 'spiderman1',
    title: 'Spider-Man: Homecoming',
    releaseYear: 2017,
    releaseDate: 'July 7, 2017',
    chronoYear: '2016',
    chronoIndex: 17,
    releaseIndex: 16,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Jon Watts',
    runtime: '133 min',
    boxOffice: '$880.2M',
    poster: 'assets/images/posters/mcu_spiderman1.jpg',
    heroes: ['Peter Parker (Spider-Man)', 'Tony Stark', 'Ned Leeds', 'Happy Hogan'],
    villains: ['Adrian Toomes (Vulture)', 'Shocker'],
    teams: ['Midtown High Academic Decathlon'],
    synopsis: 'Peter Parker balances his high school student life in Queens with his superhero alter-ego Spider-Man under the watchful eye of his mentor Tony Stark, discovering an illegal Chitauri alien weapons ring operated by the Vulture.',
    connections: 'Solidifies Spider-Man\'s arc from street-level hero to Avenger. Deepens the Tony Stark-Peter Parker father-son bond.'
  },
  {
    id: 'thor3',
    title: 'Thor: Ragnarok',
    releaseYear: 2017,
    releaseDate: 'November 3, 2017',
    chronoYear: '2017',
    chronoIndex: 20,
    releaseIndex: 17,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Taika Waititi',
    runtime: '130 min',
    boxOffice: '$855.3M',
    poster: 'assets/images/posters/mcu_thor3.jpg',
    heroes: ['Thor', 'Loki', 'Bruce Banner (Hulk)', 'Valkyrie (Brunnhilde)'],
    villains: ['Hela (Goddess of Death)', 'Grandmaster', 'Surtur'],
    teams: ['The Revengers', 'Sakaar Gladiators'],
    synopsis: 'Imprisoned on the colorful garbage planet Sakaar without his hammer Mjolnir, Thor must survive a deadly gladiatorial duel against his former ally the Hulk and race back to Asgard to stop his ruthless sister Hela from unleashing Ragnarok.',
    connections: 'Destruction of Asgard. Directly leads into the opening scene of *Avengers: Infinity War* with Thanos intercepting the Asgardian refugee ship.'
  },
  {
    id: 'blackpanther1',
    title: 'Black Panther',
    releaseYear: 2018,
    releaseDate: 'February 16, 2018',
    chronoYear: '2016',
    chronoIndex: 19,
    releaseIndex: 18,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Ryan Coogler',
    runtime: '134 min',
    boxOffice: '$1.347B',
    poster: 'assets/images/posters/mcu_blackpanther1.jpg',
    heroes: ['T\'Challa (Black Panther)', 'Shuri', 'Okoye', 'Nakia', 'M\'Baku'],
    villains: ['Erik Killmonger (N\'Jadaka)', 'Ulysses Klaue'],
    teams: ['Dora Milaje', 'Jabari Tribe', 'Wakandan Golden Tribe'],
    synopsis: 'T\'Challa returns home to the isolated, technologically advanced African nation of Wakanda to take his rightful place as King. However, when a powerful adversary named Killmonger appears, T\'Challa\'s mettle is tested.',
    connections: 'Reveals Wakanda\'s global Vibranium supremacy and establishes Wakanda as the front-line battleground for *Avengers: Infinity War*.'
  },
  {
    id: 'infinitywar',
    title: 'Avengers: Infinity War',
    releaseYear: 2018,
    releaseDate: 'April 27, 2018',
    chronoYear: '2018',
    chronoIndex: 21,
    releaseIndex: 19,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Anthony and Joe Russo',
    runtime: '149 min',
    boxOffice: '$2.048B',
    poster: 'assets/images/posters/mcu_infinitywar.jpg',
    heroes: ['Iron Man', 'Thor', 'Captain America', 'Doctor Strange', 'Spider-Man', 'Black Panther', 'Guardians'],
    villains: ['Thanos', 'The Black Order (Children of Thanos)'],
    teams: ['The Avengers', 'Wakandan Army', 'Guardians of the Galaxy'],
    synopsis: 'The mad Titan Thanos embarks on a devastating quest across the universe to gather all six Infinity Stones. The fractured Avengers and the Guardians of the Galaxy wage war on Titan and Wakanda to stop the catastrophic Snap.',
    connections: 'Thanos collects all 6 Infinity Stones (Power, Space, Reality, Soul, Time, Mind) and eliminates 50% of all universal life.'
  },
  {
    id: 'antman2',
    title: 'Ant-Man and the Wasp',
    releaseYear: 2018,
    releaseDate: 'July 6, 2018',
    chronoYear: '2018',
    chronoIndex: 22,
    releaseIndex: 20,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Peyton Reed',
    runtime: '118 min',
    boxOffice: '$622.7M',
    poster: 'assets/images/posters/mcu_antman2.jpg',
    heroes: ['Scott Lang', 'Hope van Dyne (The Wasp)', 'Hank Pym', 'Janet van Dyne'],
    villains: ['Ava Starr (Ghost)', 'Sonny Burch'],
    teams: ['Pym Technologies'],
    synopsis: 'Under house arrest after Civil War, Scott Lang teams up with Hope van Dyne and Dr. Hank Pym on an urgent mission to construct a quantum tunnel and rescue Janet van Dyne from the subatomic Quantum Realm.',
    connections: 'Post-credits scene shows Hank, Janet, and Hope dusted by Thanos\'s Snap, trapping Scott Lang in the Quantum Realm until *Endgame*.'
  },
  {
    id: 'capmarv',
    title: 'Captain Marvel',
    releaseYear: 2019,
    releaseDate: 'March 8, 2019',
    chronoYear: '1995',
    chronoIndex: 2,
    releaseIndex: 21,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Anna Boden, Ryan Fleck',
    runtime: '123 min',
    boxOffice: '$1.131B',
    poster: 'assets/images/posters/mcu_capmarv.jpg',
    heroes: ['Carol Danvers (Captain Marvel)', 'Nick Fury', 'Talos'],
    villains: ['Yon-Rogg', 'Supreme Intelligence', 'Starforce'],
    teams: ['Starforce', 'Kree Empire', 'Skrulls'],
    synopsis: 'In 1995, extraterrestrial Kree warrior Vers crash-lands on Earth. Teaming with young S.H.I.E.L.D. agent Nick Fury, she uncovers suppressed memories of her human identity as US Air Force pilot Carol Danvers and discovers cosmic photon powers.',
    connections: 'Explains how Nick Fury lost his eye, how S.H.I.E.L.D. gained the Tesseract, and why Fury conceived "The Avengers Initiative".'
  },
  {
    id: 'endgame',
    title: 'Avengers: Endgame',
    releaseYear: 2019,
    releaseDate: 'April 26, 2019',
    chronoYear: '2018 — 2023',
    chronoIndex: 23,
    releaseIndex: 22,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Anthony and Joe Russo',
    runtime: '181 min',
    boxOffice: '$2.798B',
    poster: 'assets/images/posters/mcu_endgame.jpg',
    heroes: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Ant-Man', 'Every MCU Hero'],
    villains: ['Thanos (2014 Variant)', 'Chitauri & Outriders'],
    teams: ['The Avengers', 'Allied MCU Army'],
    synopsis: 'Five years after the Snap, the remaining Avengers execute a perilous "Time Heist" through the Quantum Realm to retrieve the Infinity Stones from the past, restore the fallen universe, and confront 2014 Thanos in the ultimate battle.',
    connections: 'Grand finale of the 23-film Infinity Saga. Tony Stark and Natasha Romanoff sacrifice their lives; Steve Rogers passes the shield to Sam Wilson.'
  },
  {
    id: 'spiderman2',
    title: 'Spider-Man: Far From Home',
    releaseYear: 2019,
    releaseDate: 'July 2, 2019',
    chronoYear: '2024',
    chronoIndex: 24,
    releaseIndex: 23,
    phase: 'Phase 3',
    saga: 'The Infinity Saga',
    status: 'Released',
    director: 'Jon Watts',
    runtime: '129 min',
    boxOffice: '$1.132B',
    poster: 'assets/images/posters/mcu_spiderman2.jpg',
    heroes: ['Peter Parker', 'Nick Fury (Talos)', 'Maria Hill (Soren)', 'Happy Hogan'],
    villains: ['Quentin Beck (Mysterio)'],
    teams: ['Stark E.D.I.T.H. Defense'],
    synopsis: 'Grieving Tony Stark\'s death during a European school trip, Peter Parker is recruited by Nick Fury to battle elemental creatures alongside Quentin Beck (Mysterio), discovering Beck is a disgruntled ex-Stark employee staging holographic illusions.',
    connections: 'Epilogue to the Infinity Saga. Post-credits reveals Peter Parker\'s secret identity to the entire world and frames him for murder.'
  },

  // --- PHASE 4 (The Multiverse Saga) ---
  {
    id: 'blackwidow',
    title: 'Black Widow',
    releaseYear: 2021,
    releaseDate: 'July 9, 2021',
    chronoYear: '2016',
    chronoIndex: 16,
    releaseIndex: 24,
    phase: 'Phase 4',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Cate Shortland',
    runtime: '134 min',
    boxOffice: '$379.8M',
    poster: 'assets/images/posters/mcu_blackwidow.jpg',
    heroes: ['Natasha Romanoff', 'Yelena Belova', 'Alexei Shostakov (Red Guardian)', 'Melina Vostokoff'],
    villains: ['General Dreykov', 'Taskmaster (Antonia Dreykov)'],
    teams: ['Red Room Widows'],
    synopsis: 'Following the events of Civil War, fugitive Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past emerges, reuniting with her surrogate Russian spy family.',
    connections: 'Introduced Yelena Belova and Red Guardian (key members of the upcoming *Thunderbolts** team).'
  },
  {
    id: 'shangchi',
    title: 'Shang-Chi and the Legend of the Ten Rings',
    releaseYear: 2021,
    releaseDate: 'September 3, 2021',
    chronoYear: '2024',
    chronoIndex: 25,
    releaseIndex: 25,
    phase: 'Phase 4',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Destin Daniel Cretton',
    runtime: '132 min',
    boxOffice: '$432.2M',
    poster: 'assets/images/posters/mcu_shangchi.jpg',
    heroes: ['Shang-Chi', 'Katy Chen', 'Xu Xialing', 'Ying Nan'],
    villains: ['Xu Wenwu (The Real Mandarin)', 'Dweller-in-Darkness'],
    teams: ['Ten Rings Army', 'Ta Lo Defenders'],
    synopsis: 'Shang-Chi is drawn into the clandestine Ten Rings organization founded by his immortal father Xu Wenwu. Shang-Chi must embrace his heritage and master the ancient mystical village of Ta Lo.',
    connections: 'Introduced the immortal Ten Rings (ancient cosmic technology beaming a signal across dimensions) and Ta Lo realm.'
  },
  {
    id: 'eternals',
    title: 'Eternals',
    releaseYear: 2021,
    releaseDate: 'November 5, 2021',
    chronoYear: '2024 (Span 5000 BC — 2024)',
    chronoIndex: 26,
    releaseIndex: 26,
    phase: 'Phase 4',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Chloé Zhao',
    runtime: '156 min',
    boxOffice: '$402.1M',
    poster: 'assets/images/posters/mcu_eternals.jpg',
    heroes: ['Sersi', 'Ikaris', 'Thena', 'Ajak', 'King', 'Druig', 'Makkari', 'Phastos'],
    villains: ['Kro (Deviant)', 'Arishem the Judge'],
    teams: ['The Eternals', 'Celestials'],
    synopsis: 'An immortal synthetic alien race created by Celestial Prime Arishem emerges from hiding after 7,000 years to protect humanity from mutated predators known as Deviants, discovering their true mission is to sacrifice Earth for a Celestial birth.',
    connections: 'Introduced Celestial creation cosmology, Tiamut the marbleized Celestial in the Indian Ocean, and Eros (Starfox).'
  },
  {
    id: 'spiderman3',
    title: 'Spider-Man: No Way Home',
    releaseYear: 2021,
    releaseDate: 'December 17, 2021',
    chronoYear: '2024',
    chronoIndex: 27,
    releaseIndex: 27,
    phase: 'Phase 4',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Jon Watts',
    runtime: '148 min',
    boxOffice: '$1.922B',
    poster: 'assets/images/posters/mcu_spiderman3.jpg',
    heroes: ['Peter Parker (Tom Holland)', 'Peter Parker (Tobey Maguire)', 'Peter Parker (Andrew Garfield)', 'Doctor Strange'],
    villains: ['Green Goblin (Norman Osborn)', 'Doc Ock', 'Electro', 'Sandman', 'Lizard'],
    teams: ['Spider-Men Trio'],
    synopsis: 'With his identity unmasked, Peter asks Doctor Strange to cast a memory spell. When the spell goes awry, the multiverse fractures, pulling iconic villains and alternate Spider-Men from other universes into the MCU.',
    connections: 'First major live-action Multiverse crossover uniting three generations of Spider-Man. Peter sacrifices his identity so the world forgets who he is.'
  },
  {
    id: 'docstrange2',
    title: 'Doctor Strange in the Multiverse of Madness',
    releaseYear: 2022,
    releaseDate: 'May 6, 2022',
    chronoYear: '2024 — 2025',
    chronoIndex: 28,
    releaseIndex: 28,
    phase: 'Phase 4',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Sam Raimi',
    runtime: '126 min',
    boxOffice: '$955.8M',
    poster: 'assets/images/posters/mcu_docstrange2.jpg',
    heroes: ['Doctor Strange', 'America Chavez', 'Wong'],
    villains: ['Wanda Maximoff (The Scarlet Witch)'],
    teams: ['Illuminati of Earth-838', 'Masters of Mystic Arts'],
    synopsis: 'Doctor Strange protects teenager America Chavez, who possesses the unique ability to punch star-shaped portals across the Multiverse, as a grief-corrupted Scarlet Witch uses the dark Darkhold grimoire to hunt her.',
    connections: 'Introduced Multiverse Incursions, Earth-838 Illuminati (Professor X, Reed Richards, Captain Carter), and Clea.'
  },
  {
    id: 'thor4',
    title: 'Thor: Love and Thunder',
    releaseYear: 2022,
    releaseDate: 'July 8, 2022',
    chronoYear: '2025',
    chronoIndex: 29,
    releaseIndex: 29,
    phase: 'Phase 4',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Taika Waititi',
    runtime: '119 min',
    boxOffice: '$760.9M',
    poster: 'assets/images/posters/mcu_thor4.jpg',
    heroes: ['Thor Odinson', 'Jane Foster (Mighty Thor)', 'King Valkyrie', 'Korg'],
    villains: ['Gorr the God Butcher'],
    teams: ['New Asgard', 'Omnipotence City Gods'],
    synopsis: 'Thor enlists the help of Valkyrie, Korg, and ex-girlfriend Jane Foster (who now mysteriously wields Mjolnir as the Mighty Thor) to fight Gorr the God Butcher, a galactic killer seeking the extinction of all deities at Eternity\'s altar.',
    connections: 'Introduced the cosmic entity Eternity, Hercules, and Jane Foster\'s ascension to Valhalla.'
  },
  {
    id: 'blackpanther2',
    title: 'Black Panther: Wakanda Forever',
    releaseYear: 2022,
    releaseDate: 'November 11, 2022',
    chronoYear: '2025',
    chronoIndex: 30,
    releaseIndex: 30,
    phase: 'Phase 4',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Ryan Coogler',
    runtime: '161 min',
    boxOffice: '$859.2M',
    poster: 'assets/images/posters/mcu_blackpanther2.jpg',
    heroes: ['Shuri (Black Panther)', 'Queen Ramonda', 'Okoye', 'Riri Williams (Ironheart)', 'Namor (later)'],
    villains: ['Namor (K\'uk\'ulkan / Talokanil King)'],
    teams: ['Wakandan Armed Forces', 'Talokan Empire'],
    synopsis: 'Grieving the loss of King T\'Challa, Queen Ramonda, Shuri, and the Dora Milaje fight to protect their nation from intervening world powers and the hidden underwater kingdom of Talokan led by mutant Namor.',
    connections: 'Introduced Riri Williams (Ironheart), Namor and the Talokan underwater civilization, and concludes Phase 4.'
  },

  // --- PHASE 5 (The Multiverse Saga) ---
  {
    id: 'antman3',
    title: 'Ant-Man and the Wasp: Quantumania',
    releaseYear: 2023,
    releaseDate: 'February 17, 2023',
    chronoYear: '2026',
    chronoIndex: 31,
    releaseIndex: 31,
    phase: 'Phase 5',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Peyton Reed',
    runtime: '124 min',
    boxOffice: '$476.1M',
    poster: 'assets/images/posters/mcu_antman3.jpg',
    heroes: ['Scott Lang', 'Hope van Dyne', 'Cassie Lang', 'Hank Pym', 'Janet van Dyne'],
    villains: ['Kang the Conqueror', 'MODOK (Darren Cross)'],
    teams: ['Quantum Realm Freedom Fighters'],
    synopsis: 'Scott Lang and his family are accidentally sucked deep into the Quantum Realm, exploring bizarre alien civilizations and facing Kang the Conqueror, a time-traveling warlord trapped in the subatomic dimension.',
    connections: 'Kicks off Phase 5. First theatrical appearance of Kang the Conqueror and introduces the Council of Kangs.'
  },
  {
    id: 'gotg3',
    title: 'Guardians of the Galaxy Vol. 3',
    releaseYear: 2023,
    releaseDate: 'May 5, 2023',
    chronoYear: '2026',
    chronoIndex: 32,
    releaseIndex: 32,
    phase: 'Phase 5',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'James Gunn',
    runtime: '150 min',
    boxOffice: '$845.6M',
    poster: 'assets/images/posters/mcu_gotg3.jpg',
    heroes: ['Star-Lord', 'Rocket Raccoon', 'Gamora (2014)', 'Drax', 'Groot', 'Nebula', 'Mantis', 'Adam Warlock'],
    villains: ['The High Evolutionary'],
    teams: ['Guardians of the Galaxy', 'Orgocorp'],
    synopsis: 'Settled on Knowhere, the Guardians are attacked by Adam Warlock, leaving Rocket critically injured. To save Rocket\'s life, the team embarks on a dangerous mission to confront his sadistic creator: The High Evolutionary.',
    connections: 'Emotional conclusion to James Gunn\'s Guardians trilogy. Rocket becomes captain of the new Guardians; Peter Quill returns to Earth.'
  },
  {
    id: 'themarvels',
    title: 'The Marvels',
    releaseYear: 2023,
    releaseDate: 'November 10, 2023',
    chronoYear: '2026',
    chronoIndex: 33,
    releaseIndex: 33,
    phase: 'Phase 5',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Nia DaCosta',
    runtime: '105 min',
    boxOffice: '$206.1M',
    poster: 'assets/images/posters/mcu_themarvels.jpg',
    heroes: ['Carol Danvers', 'Monica Rambeau', 'Kamala Khan (Ms. Marvel)', 'Nick Fury'],
    villains: ['Dar-Benn (Kree Supremor)'],
    teams: ['The Marvels', 'S.A.B.E.R.'],
    synopsis: 'Carol Danvers, Captain Monica Rambeau, and Kamala Khan find their light-based powers quantum-entangled, causing them to swap physical locations every time they use their abilities while combating Kree leader Dar-Benn.',
    connections: 'Introduced Quantum Bands connection. Post-credits shows Monica trapped in an alternate universe featuring the X-Men (Beast / Hank McCoy).'
  },
  {
    id: 'deadpool3',
    title: 'Deadpool & Wolverine',
    releaseYear: 2024,
    releaseDate: 'July 26, 2024',
    chronoYear: '2024 (TVA / Void Timeline)',
    chronoIndex: 34,
    releaseIndex: 34,
    phase: 'Phase 5',
    saga: 'The Multiverse Saga',
    status: 'Released',
    director: 'Shawn Levy',
    runtime: '128 min',
    boxOffice: '$1.338B',
    poster: 'assets/images/posters/mcu_deadpool3.jpg',
    heroes: ['Wade Wilson (Deadpool)', 'Logan (Wolverine)', 'Blade', 'Elektra', 'Gambit', 'X-23 (Laura)'],
    villains: ['Cassandra Nova', 'Mr. Paradox (TVA)'],
    teams: ['The Resistance (The Void)', 'TVA'],
    synopsis: 'A listless Wade Wilson is pulled into the Time Variance Authority by rogue agent Paradox. To prevent the destruction of his home universe, Deadpool travels the multiverse to find a Wolverine variant to help save his world.',
    connections: 'Integrates the Fox 20th Century Marvel universe into the MCU Canon. Direct connections to TVA, The Void, and the Multiverse timeline anchors.'
  },
  {
    id: 'cap4',
    title: 'Captain America: Brave New World',
    releaseYear: 2025,
    releaseDate: 'February 14, 2025',
    chronoYear: '2026+',
    chronoIndex: 35,
    releaseIndex: 35,
    phase: 'Phase 5',
    saga: 'The Multiverse Saga',
    status: 'Official Release Date Announced',
    director: 'Julius Onah',
    runtime: '118 min',
    boxOffice: 'Theatrical Release: Feb 14, 2025',
    poster: 'assets/images/posters/mcu_cap4.jpg',
    heroes: ['Sam Wilson (Captain America)', 'Joaquin Torres (Falcon)', 'Isaiah Bradley'],
    villains: ['President Thaddeus Ross (Red Hulk)', 'Samuel Sterns (The Leader)'],
    teams: ['US Government', 'New Avengers Initiative'],
    synopsis: 'Sam Wilson steps into the spotlight as Captain America, finding himself in the middle of an international incident involving US President Thaddeus "Thunderbolt" Ross, global Adamantium discoveries from Tiamut\'s corpse, and the Red Hulk.',
    connections: 'Explores Adamantium global trade and sets up the geopolitical conflict leading into *Thunderbolts** and *Avengers: Doomsday*.'
  },
  {
    id: 'thunderbolts',
    title: 'Thunderbolts*',
    releaseYear: 2025,
    releaseDate: 'May 2, 2025',
    chronoYear: '2026+',
    chronoIndex: 36,
    releaseIndex: 36,
    phase: 'Phase 5',
    saga: 'The Multiverse Saga',
    status: 'Official Release Date Announced',
    director: 'Jake Schreier',
    runtime: 'TBD',
    boxOffice: 'Theatrical Release: May 2, 2025',
    poster: 'assets/images/posters/mcu_thunderbolts.jpg',
    heroes: ['Yelena Belova', 'Bucky Barnes', 'John Walker (U.S. Agent)', 'Red Guardian', 'Taskmaster', 'Ghost', 'Sentry (Bob Reynolds)'],
    villains: ['Valentina Allegra de Fontaine', 'The Void'],
    teams: ['The Thunderbolts* (Government Black Ops)'],
    synopsis: 'An irreverent team of reformed antiheroes and assassins are sent on dangerous covert missions by CIA Director Valentina Allegra de Fontaine, confronting the god-like entity Sentry / The Void.',
    connections: 'Brings together government operatives from Black Widow, Falcon & Winter Soldier, and Ant-Man 2.'
  },

  // --- PHASE 6 (The Multiverse Saga: 2025 — 2027) ---
  {
    id: 'fantasticfour',
    title: 'The Fantastic Four: First Steps',
    releaseYear: 2025,
    releaseDate: 'July 25, 2025',
    chronoYear: '1960s (Retro-Futuristic Multiverse)',
    chronoIndex: 37,
    releaseIndex: 37,
    phase: 'Phase 6',
    saga: 'The Multiverse Saga',
    status: 'Official Release Date Announced',
    director: 'Matt Shakman',
    runtime: 'TBD',
    boxOffice: 'Theatrical Release: July 25, 2025',
    poster: 'assets/images/posters/mcu_fantasticfour.jpg',
    heroes: ['Reed Richards (Mister Fantastic)', 'Sue Storm (Invisible Woman)', 'Johnny Storm (Human Torch)', 'Ben Grimm (The Thing)'],
    villains: ['Galactus (World Eater)', 'Silver Surfer (Shalla-Bal)'],
    teams: ['The Fantastic Four (Marvel\'s First Family)'],
    synopsis: 'Set in a vibrant 1960s retro-futuristic alternate universe, Marvel\'s First Family balances cosmic family dynamics while defending Earth from the colossal planet-devouring cosmic entity Galactus and his enigmatic herald.',
    connections: 'Opens Phase 6. The Fantastic Four will cross through the Multiverse into the prime MCU timeline for *Avengers: Doomsday* and *Avengers: Secret Wars*.'
  },
  {
    id: 'spiderman4',
    title: 'Spider-Man: Brand New Day',
    releaseYear: 2026,
    releaseDate: 'July 29, 2026',
    chronoYear: '2026',
    chronoIndex: 38,
    releaseIndex: 38,
    phase: 'Phase 6',
    saga: 'The Multiverse Saga',
    status: 'Official Release Date Announced',
    director: 'Destin Daniel Cretton',
    runtime: 'TBD',
    boxOffice: 'Theatrical Release: July 29, 2026',
    poster: 'assets/images/posters/mcu_spiderman4.jpg',
    heroes: ['Peter Parker (Spider-Man - Tom Holland)', 'Daredevil (Matt Murdock)'],
    villains: ['Kingpin (Wilson Fisk)', 'Venom Symbiote'],
    teams: ['Street-Level Heroes of NYC'],
    synopsis: 'Living in total anonymity following Doctor Strange\'s memory spell, Peter Parker navigates a brand-new street-level chapter in New York City with a classic cloth suit, defending the boroughs from Kingpin and subterranean crime syndicates.',
    connections: 'Directed by Destin Daniel Cretton (*Shang-Chi*), bridging the street-level consequences into the multiversal incursion crisis of *Avengers: Doomsday*.'
  },
  {
    id: 'avengersdoomsday',
    title: 'Avengers: Doomsday',
    releaseYear: 2026,
    releaseDate: 'December 18, 2026',
    chronoYear: '2026 — 2027 (Multiverse Crisis)',
    chronoIndex: 39,
    releaseIndex: 39,
    phase: 'Phase 6',
    saga: 'The Multiverse Saga',
    status: 'Official Release Date Announced',
    director: 'Anthony and Joe Russo',
    runtime: 'TBD',
    boxOffice: 'Theatrical Release: Dec 18, 2026',
    poster: 'assets/images/posters/mcu_avengersdoomsday.jpg',
    heroes: ['Doctor Strange', 'Spider-Man', 'The Fantastic Four', 'Sam Wilson (Cap)', 'Thor', 'Thunderbolts'],
    villains: ['Victor von Doom (Doctor Doom - Robert Downey Jr.)'],
    teams: ['The Avengers', 'The Fantastic Four', 'Multiverse Alliance'],
    synopsis: 'Directed by the Russo Brothers, Earth\'s Mightiest Heroes and the Fantastic Four collide with supreme Latverian monarch Victor von Doom (Robert Downey Jr.), whose mastery of cosmic science and dark magic threatens absolute multiversal annihilation.',
    connections: 'Direct prelude to *Avengers: Secret Wars*. Features Robert Downey Jr.\'s historic return as Doctor Doom.'
  },
  {
    id: 'avengerssecretwars',
    title: 'Avengers: Secret Wars',
    releaseYear: 2027,
    releaseDate: 'December 17, 2027',
    chronoYear: 'The End of Time (Battleworld)',
    chronoIndex: 40,
    releaseIndex: 40,
    phase: 'Phase 6',
    saga: 'The Multiverse Saga',
    status: 'Official Release Date Announced',
    director: 'Anthony and Joe Russo',
    runtime: 'TBD',
    boxOffice: 'Theatrical Release: Dec 17, 2027',
    poster: 'assets/images/posters/mcu_avengerssecretwars.jpg',
    heroes: ['All MCU & Multiverse Legacy Heroes (Avengers, X-Men, Fantastic Four, Spider-Men, Tobey, Hugh Jackman)'],
    villains: ['God Emperor Doom / The Beyonders'],
    teams: ['Battleworld Survivors'],
    synopsis: 'The climactic culmination of the Multiverse Saga. Incursions collapse the entire Marvel multiverse into a singular patchwork realm known as Battleworld, where legendary heroes from every Marvel reality unite for the ultimate battle to rebirth existence.',
    connections: 'The definitive finale of the Multiverse Saga (Phases 4–6), resetting the MCU timeline.'
  }
];

// Current State
let currentOrderMode = 'release'; // 'release' or 'chronological'
let currentHeroFilter = 'all';
let currentPhaseFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initCosmicParticleCanvas();
  initTimelineToggles();
  initHeroFilters();
  initPhaseFilters();
  initSearchInput();
  renderMovieGrid();
  initDossierModal();
});

// 1. Cosmic & Quantum Realm Particle Canvas Engine (60fps)
function initCosmicParticleCanvas() {
  const canvas = document.getElementById('marvelCosmicCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: width / 2, y: height / 2, radius: 120 };
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const colors = ['#00e5ff', '#e62429', '#f5d061', '#a855f7', '#38bdf8'];
  const particleCount = 75;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse repulsion/attraction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        p.x -= (dx / dist) * 1.5;
        p.y -= (dy / dist) * 1.5;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// 2. Timeline Sorting Engine
function initTimelineToggles() {
  const toggleBtns = document.querySelectorAll('.timeline-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active', 'chronological'));
      btn.classList.add('active');

      currentOrderMode = btn.getAttribute('data-order');
      if (currentOrderMode === 'chronological') {
        btn.classList.add('chronological');
      }

      const orderLabel = document.getElementById('currentOrderLabel');
      if (orderLabel) {
        orderLabel.textContent = currentOrderMode === 'release' 
          ? 'THEATRICAL RELEASE ORDER (2008 — 2027)' 
          : 'MCU CHRONOLOGICAL TIMELINE (1942 — BATTLEWORLD)';
      }

      renderMovieGrid();
    });
  });
}

// 3. Hero Journey Filter Matrix
function initHeroFilters() {
  const heroBtns = document.querySelectorAll('.hero-pill-btn');
  heroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      heroBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentHeroFilter = btn.getAttribute('data-hero');
      renderMovieGrid();
    });
  });
}

// 4. Phase Filter Buttons
function initPhaseFilters() {
  const phaseBtns = document.querySelectorAll('.phase-filter-pill');
  phaseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      phaseBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPhaseFilter = btn.getAttribute('data-phase');
      renderMovieGrid();
    });
  });
}

// 5. Search Engine
function initSearchInput() {
  const searchInput = document.getElementById('mcuSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderMovieGrid();
  });
}

// 6. Render Movie Cards with 3D Holographic Tilt Physics
function renderMovieGrid() {
  const container = document.getElementById('movieCardsGrid');
  if (!container) return;

  // Filter dataset
  let list = MCU_MOVIES.filter(m => {
    // Hero filter
    if (currentHeroFilter !== 'all') {
      const allText = (m.heroes.join(' ') + ' ' + m.title).toLowerCase();
      if (!allText.includes(currentHeroFilter.toLowerCase())) return false;
    }
    // Phase filter
    if (currentPhaseFilter !== 'all') {
      if (currentPhaseFilter === 'infinity' && m.saga !== 'The Infinity Saga') return false;
      if (currentPhaseFilter === 'multiverse' && m.saga !== 'The Multiverse Saga') return false;
      if (currentPhaseFilter.startsWith('phase') && m.phase.toLowerCase().replace(' ', '') !== currentPhaseFilter) return false;
    }
    // Search query
    if (searchQuery) {
      const searchBlob = `${m.title} ${m.director} ${m.heroes.join(' ')} ${m.villains.join(' ')} ${m.phase} ${m.releaseYear} ${m.releaseDate}`.toLowerCase();
      if (!searchBlob.includes(searchQuery)) return false;
    }
    return true;
  });

  // Sort according to currentOrderMode
  if (currentOrderMode === 'chronological') {
    list.sort((a, b) => a.chronoIndex - b.chronoIndex);
  } else {
    list.sort((a, b) => a.releaseIndex - b.releaseIndex);
  }

  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--m-text-secondary);">
        <div style="font-size: 36px; margin-bottom: 12px;">🛰️</div>
        <h3 style="font-family: var(--font-syne); font-size: 20px; color: #fff; margin-bottom: 8px;">No Movies Found</h3>
        <p style="font-size: 13px;">Adjust your search keyword, hero filter, or phase selection.</p>
      </div>
    `;
    return;
  }

  list.forEach(m => {
    const card = document.createElement('article');
    card.className = 'movie-poster-card';
    card.setAttribute('data-id', m.id);

    const badgeTop = currentOrderMode === 'chronological' 
      ? `<span class="card-chrono-year">⏱️ ${m.chronoYear}</span>` 
      : `<span class="card-chrono-year">📅 ${m.releaseYear}</span>`;

    const isUpcoming = m.status && m.status !== 'Released';
    const statusPill = isUpcoming ? `<span style="position: absolute; bottom: 8px; left: 8px; background: rgba(0, 229, 255, 0.85); color: #04070d; font-size: 9px; font-weight: 700; padding: 2px 6px; border-radius: 4px; z-index: 5;">${m.releaseDate.split(',')[0]}</span>` : '';

    card.innerHTML = `
      <div class="card-poster-thumb">
        <img src="${m.poster}" alt="${m.title} Official Poster" loading="lazy">
        <div class="card-holographic-glare"></div>
        <span class="card-phase-badge">${m.phase}</span>
        ${badgeTop}
        ${statusPill}
      </div>
      <div class="card-content-bar">
        <h3 class="card-movie-title" title="${m.title}">${m.title}</h3>
        <div class="card-meta-row">
          <span>${m.releaseDate}</span>
          <span style="color: var(--m-cyan-arc); font-family: var(--font-mono); font-size: 10px;">${m.boxOffice}</span>
        </div>
      </div>
    `;

    // 3D Tilt Physics Event Listeners
    attach3DTilt(card);

    // Open Modal Dossier on Click
    card.addEventListener('click', () => openMovieDossier(m.id));

    container.appendChild(card);
  });
}

// 7. 3D Perspective Card Tilt Physics
function attach3DTilt(card) {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

    const glare = card.querySelector('.card-holographic-glare');
    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, rgba(0,229,255,0.15) 35%, transparent 70%)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
}

// 8. Film Dossier Modal / Drawer System (Stark HUD)
let currentDossierId = null;

function initDossierModal() {
  const modal = document.getElementById('marvelDossierModal');
  const closeBtn = document.getElementById('closeDossierBtn');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function openMovieDossier(movieId) {
  const movie = MCU_MOVIES.find(m => m.id === movieId);
  if (!movie) return;
  currentDossierId = movieId;

  const modal = document.getElementById('marvelDossierModal');
  if (!modal) return;

  document.getElementById('dossierPosterImg').src = movie.poster;
  document.getElementById('dossierPhasePill').textContent = `${movie.phase} • ${movie.saga}`;
  document.getElementById('dossierChronoPill').textContent = `In-Universe: ${movie.chronoYear}`;
  document.getElementById('dossierRuntimePill').textContent = `${movie.runtime} • ${movie.releaseDate}`;
  document.getElementById('dossierTitle').textContent = movie.title;
  document.getElementById('dossierDirector').textContent = movie.director;
  document.getElementById('dossierBoxOffice').textContent = movie.boxOffice;
  document.getElementById('dossierSynopsis').textContent = movie.synopsis;
  document.getElementById('dossierHeroes').textContent = movie.heroes.join(', ');
  document.getElementById('dossierVillains').textContent = movie.villains.join(', ');
  document.getElementById('dossierConnections').textContent = movie.connections;

  // Previous & Next navigation
  const currentIndex = MCU_MOVIES.findIndex(m => m.id === movieId);
  const prevBtn = document.getElementById('dossierPrevBtn');
  const nextBtn = document.getElementById('dossierNextBtn');

  if (prevBtn) {
    if (currentIndex > 0) {
      prevBtn.style.visibility = 'visible';
      prevBtn.onclick = () => openMovieDossier(MCU_MOVIES[currentIndex - 1].id);
    } else {
      prevBtn.style.visibility = 'hidden';
    }
  }

  if (nextBtn) {
    if (currentIndex < MCU_MOVIES.length - 1) {
      nextBtn.style.visibility = 'visible';
      nextBtn.onclick = () => openMovieDossier(MCU_MOVIES[currentIndex + 1].id);
    } else {
      nextBtn.style.visibility = 'hidden';
    }
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
