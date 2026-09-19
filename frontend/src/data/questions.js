const questions = [
  {
    id: 1,
    subject: "History",
    chapter: "Modern Indian History",
    question: "Who founded the Maurya Empire?",
    options: [
      "Ashoka",
      "Chandragupta Maurya",
      "Bindusara",
      "Bimbisara"
    ],
    correctOption: 1,
    explanation:
      "Chandragupta Maurya founded the Maurya Empire in 322 BCE."
  },

  {
    id: 2,
    subject: "Geography",
    chapter: "Indian Geography",
    question: "Which is the longest river in India?",
    options: [
      "Godavari",
      "Yamuna",
      "Ganga",
      "Krishna"
    ],
    correctOption: 2,
    explanation:
      "The Ganga is the longest river in India."
  },

  {
    id: 3,
    subject: "Polity",
    chapter: "Constitution Of India",
    question: "Who is known as the Father of the Indian Constitution?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Dr. B. R. Ambedkar",
      "Sardar Patel"
    ],
    correctOption: 2,
    explanation:
      "Dr. B. R. Ambedkar was the Chairman of the Drafting Committee."
  },

  {
    id: 4,
    subject: "General Science",
    chapter: "Physics",
    question: "What is the SI unit of Force?",
    options: [
      "Joule",
      "Pascal",
      "Newton",
      "Watt"
    ],
    correctOption: 2,
    explanation:
      "The SI unit of force is Newton."
  },

  {
    id: 5,
    subject: "Economy",
    chapter: "Money, Banking, & Monetary Policy",
    question: "Which institution issues currency notes in India?",
    options: [
      "SEBI",
      "NABARD",
      "Reserve Bank of India",
      "Finance Ministry"
    ],
    correctOption: 2,
    explanation:
      "The Reserve Bank of India issues currency notes except the ₹1 note."
  },

  {
    id: 6,
    subject: "Current Affairs",
    chapter: "",
    question: "According to the RBI's June 2026 policy projections, CPI inflation for FY2026-27 is expected to be:",
    options: [
      "4.5%",
      "4.8%",
      "5.1%",
      "5.5%"
    ],
    correctOption: 2,
    explanation:
      ""
  },

    {
    id: 7,
    subject: "Current Affairs",
    chapter: "",
    question: "The Indian Air Force commemorated the 25th anniversary of the first flight of which indigenous fighter aircraft in January 2026?",
    options: [
      "AMCA",
      "Tejas Light Combat Aircraft",
      "Sukhoi Su-30 MKI",
      "Mirage 2000"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 8,
    subject: "Current Affairs",
    chapter: "",
    question: "What is the total expenditure estimated in Budget Estimates (BE) 2026-27?",
    options: [
      "Rs. 49.6 lakh crore",
      "Rs. 52.1 lakh crore",
      "Rs. 53.5 lakh crore",
      "Rs. 55.6 lakh crore"
    ],
    correctOption: 2,
    explanation:
      "In 2025-26, it was Rs. 49.6 lakh crore"
  },

  {
    id: 9,
    subject: "Current Affairs",
    chapter: "",
    question: "The International Day for Mine Awareness and Assistance in Mine Action is observed annually on which date, and what was its theme for 2026?",
    options: [
      "April 2 - Safer World for All",
      "April 3 - Peace and Protection",
      "April 4 - Invest in Peace; Invest in Mine Action",
      "April 5 - End Conflict Globally"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 10,
    subject: "Current Affairs",
    chapter: "",
    question: "Which virus caused the Ebola disease outbreak declared as a Public Health Emergency of International Concern (PHEIC) by WHO in may 2026?",
    options: [
      "Marburg virus",
      "Sudan virus",
      "Bundibugyo virus",
      "Zaire virus"
    ],
    correctOption: 2,
    explanation:
      "Sudan virus: late 2022, Zaire (DR Congo) virus: 2014-2016, Bundibugyo (Uganda): 2026 May"
  },

  {
    id: 11,
    subject: "Current Affairs",
    chapter: "",
    question: "Who was re-elected as the Chairman of the Commonwealth Chess Association (CCA) for the 2026-2030 term in May 2026?",
    options: [
      "G. Luxman Wijesuriya",
      "Bharat Singh Chauhan",
      "Vicky magu",
      "Akhramsyah Muammar Ubaidsh Sanusi"
    ],
    correctOption: 1,
    explanation:
      "The election took place during the Annual General body Meeting held at Wasakaduwa, Sri lanka in May 2026"
  },

  {
    id: 12,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the visit of Narendra Modi to Sikkim in April 2026? \n1. The visit was related to the 50th year of Sikkim's statehood celebrations. \n2.Projects worth over ₹4000 crore were inaugrated/launched during the visit. \n3.An Indoor Cricket Academy was inaugrated at Rangpo in Sikkim. \n4. The visit was solely focused on defence-related projects.",
    options: [
      "1,2 and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id: 13,
    subject: "Current Affairs",
    chapter: "",
    question: "In Fifa 2026, who was honoured with the FIFA Young Player Award?",
    options: [
      "Lamine yamal",
      "Jude Bellingham",
      "Pau Cubarsi",
      "Warren Zaire-Emery"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 14,
    subject: "Current Affairs",
    chapter: "",
    question: "India and Indonesia signed an agreement in July 2026 for the joint development of which strategically important port?",
    options: [
      "Chittagong Port",
      "Sabang Port",
      "Tanjung Priok Port",
      "Colombo port"
    ],
    correctOption: 1,
    explanation:
      "Located in the Aceh province of Indonesia"
  },

  {
    id: 15,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct rearding the India-New Zealand Free Trade Agreement signed in April 2026? \n1. The Agreement was signed by Piyush Goyal and Todd McClay in New Delhi. \n2. India recieved 100% duty-free access on all 8,284 tariff lines in New Zealand. \n3. New Zealand committed USD 20 billiuon investment over 15 years. \n4. The agreement completely excludes services sector cooperation.",
    options: [
      "1,2 and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id: 16,
    subject: "Current Affairs",
    chapter: "",
    question: "How many total medals did India win at the Asian Rifle/Pistol Championship 2026?",
    options: [
      "94",
      "90",
      "84",
      "101"
    ],
    correctOption: 0,
    explanation:
      "51 gold, 23 silver, 20 bronze"
  },

  {
    id: 17,
    subject: "Current Affairs",
    chapter: "",
    question: "ISRO conducteed the eighth hot test of the Semi-Cryogenic Engine Power Head Test Article at which facility on 24 June 2026?",
    options: [
      "Satish Dhawan Space Centre, Sriharikota",
      "Vikram Sarabhai Space Centre, Thiruvananthapuram",
      "ISRO Propulsion Complex, Mahendragiri",
      "UR Rao Satellite Centre, Bengaluru"
    ],
    correctOption: 2,
    explanation:
      "Mahendragiri is in Tamil Nadu"
  },

  {
    id: 18,
    subject: "Current Affairs",
    chapter: "",
    question: "NITI Aayog's reports \"Ease of Doing Research & Development in india\" (April 2026) focus on which of the following key pillars? \n1. Funding \n2. Governance \n3.Regulatory frameworks \n4.Research translation ",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1,2 and 3 only",
      "1,2,3 and4"
    ],
    correctOption: 3,
    explanation:
      ""
  },

  {
    id: 19,
    subject: "Current Affairs",
    chapter: "",
    question: "What is the official theme of the World Economic Forum Annual Meeting 2026?",
    options: [
      "Shaping the Global Future",
      "Rebuilding Trust",
      "A spirit of Dialogue",
      "Inclusive Growth for All"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 20,
    subject: "Current Affairs",
    chapter: "",
    question: "How many Members of Parliament have been selected for the Sansad Ratna Awards 2026?",
    options: [
      "10",
      "12",
      "14",
      "16"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 21,
    subject: "Current Affairs",
    chapter: "",
    question: "The new national counter-terrorism policy released by the Ministry of Home Affairs (MHA) in February 2026 is titled:",
    options: [
      "SURAKSHA",
      "PRAHAR",
      "PRAHAAR",
      "RAKSHA"
    ],
    correctOption: 2,
    explanation:
      "The 7 Core Pillars of PRAHAAR (strike): \n1. Prevention of terrorist attacks \n2.Swift and proportionate response \n3.Aggregation of internal capacities for synergy \n4.Human Rights and Rule of Law-based processes \n5.Attenuation of conditions enabling terrorism \n6. Alignment with global counter-terrorism efforts \n7.Recovery and resilience through societal participations"
  },

  {
    id: 22,
    subject: "Current Affairs",
    chapter: "",
    question: "Who won the Wimbledon Men's Singles title in 2026?",
    options: [
      "Carlos Alcaraz",
      "Novak Djokovic",
      "Jannik Sinner",
      "Alexander Zverev"
    ],
    correctOption: 2,
    explanation:
      "Jannik Sinner is Italian. Linda Noskova won women's singles title"
  },

  {
    id: 23,
    subject: "Current Affairs",
    chapter: "",
    question: "According to the report \"Trends in International Arms Transfers 2025\" released by the Stockholm International Peace Research Institute in March 2026, india ranked at which position among the world's largest arms importers during 2021-2025?",
    options: [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    correctOption: 1,
    explanation:
      "Top 3 exporters: US, France, Russia"
  },

  {
    id: 24,
    subject: "Current Affairs",
    chapter: "",
    question: "According to the announcement in march 2026, India accounts for approximately what percentage of globally issued internationally Recognised Certificates of Compliance (IRCCs) under the Nagoya Protocol?",
    options: [
      "25%",
      "40%",
      "56%",
      "75%"
    ],
    correctOption: 2,
    explanation:
      "3561 IRCCs out of 6311 globally"
  },

  {
    id: 25,
    subject: "Current Affairs",
    chapter: "",
    question: "According to the WHO, which country became the first in the Americas to eliminate leprosy as a public health problem in March 2026",
    options: [
      "Brazil",
      "Chile",
      "Argentina",
      "Peru"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 26,
    subject: "Current Affairs",
    chapter: "",
    question: "What is the official theme for the International Day of Women and Girls in Science 2026?",
    options: [
      "Women in Science: At the forefront of the fight against COVID 2019",
      "Equity, Diversity, and inclusion: Water Unites Us",
      "Synergising AI, Social Science, STEM and Finance: Building Inclusive Futures for Women and Girls",
      "Investment in Women and Girls in Science for Inclusive Green Growth"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 27,
    subject: "Current Affairs",
    chapter: "",
    question: "Where was the 13th Indian Open Race-Walking Competition 2026 held?",
    options: [
      "Sukhna Lake, Chandigarh",
      "New Delhi",
      "Ranchi, Jharkhand",
      "Patiala, Punjab"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id: 28,
    subject: "Current Affairs",
    chapter: "",
    question: "On January 2026, Assam Petro-Chemicals Ltd (APL) signed a Memorandum of Understanding (MoU) with which Port Authority to establish a 150 Tonnes Per Day )TPD) e-Methanol plant?",
    options: [
      "Paradip Port",
      "Kandla Port",
      "Jawaharlal nehru port",
      "Chennai Port"
    ],
    correctOption: 1,
    explanation:
      "Kandla Port is in Gujarat"
  },

  {
    id: 29,
    subject: "Current Affairs",
    chapter: "",
    question: "Consider the4 following statements regarding the BHAVYA Scheme (BHARAT AUDYOGIK VIKAS YOJNA) approved in March 2026: \n1. The scheme aims to develop 100 plug-and-play industrial parks across India \n2.It will be implemented inder the National Industrial Corridor Development Programme (MICDP) framework in partnership with states and private sector players. \n3. The Government of India will provide up to ₹2crore per acre for infrastructure development. \n4. A maximum of 25% of the project cost is allocated for external infrastructure",
    options: [
      "1 and 2 only",
      "1,2 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 30,
    subject: "Current Affairs",
    chapter: "",
    question: "The Prime Minister Research Chair (PMRC) Scheme 2026 was launched by which ministry?",
    options: [
      "Ministry of Sciecne and Technology",
      "Ministry of Skill Development and Entrepreneurship",
      "Ministry of Education",
      "Ministry of Electronics and Information Technology"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 31,
    subject: "Current Affairs",
    chapter: "",
    question: "Consider the following statements: \n1. World Thalassaemia Day is observed on 8 May every year \n2. The 2026 theme of World Thalassaemia Day was \"Hidden No More: Finding the Undiagnosed. Supporting the inseen\" \n3. The first observance of the UN's Time of Remembrance and Reconcilliation was held in 2005. \n Which of the above statements is/are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1,2 and 3"
    ],
    correctOption: 3,
    explanation:
      ""
  },

  {
    id: 32,
    subject: "Current Affairs",
    chapter: "",
    question: "In March 2026, Union Minister H.D. Kumaraswamy inaugrated a 5 MW Ground Mounted Solar Power Plant and flagged off defence equipment at which organization's facility in Haridwar?",
    options: [
      "Hindustan Aeronautics Limited",
      "Bharat Heavy Electricals Limited",
      "Bharat Electronics Limited",
      "Mazagaon Dock Shipbuilders Limited"
    ],
    correctOption: 1,
    explanation:
      "A 30-ton Electric Arc Furnace (EAF) was launched and and upgraded Super Rapid Gun Mount was flagged off for the Indian Navy"
  },

  {
    id: 33,
    subject: "Current Affairs",
    chapter: "",
    question: "India signed a Memorandum of understanding (MoU) on 25 February 2026 to strengthen cooperation in forests, wildlife, environment, biodiversity conservation, and climate change with which country?",
    options: [
      "Bangladesh",
      "Nepal",
      "Bhutan",
      "Sri Lanka"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 34,
    subject: "Current Affairs",
    chapter: "",
    question: "In April 2026, PLR Systems delivered the first batch of NEGEV 7.62x51 Light Machine Guns (LMGs) to Indian as part of which initiative?",
    options: [
      "Digital india",
      "Make in india",
      "Skill India",
      "Startup india"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 35,
    subject: "Current Affairs",
    chapter: "",
    question: "According to the Ministry of MSME's notification issued in june 2026, all Central public Sector Enterprises (CPSEs) are required to settle MSME invoices through which RBI-authorised digital platform?",
    options: [
      "Government e-Marketplace (GeM)",
      "Open Network for Digital Commerce (ONDC)",
      "Trade Receivables Discounting System (TReDS)",
      "Unified Payments Interface (UPI)"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 36,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the Energy Transition Index (ETI) 2026 released by the World Economic Forum? \n1. India improved its ranking to 70th position in ETI 2026 \n2. Sweden topped the ETI 2026 rankings \n3. The ETI is published by the World Economic Forum in collaboration with Accenture. \n4. Finland and Denmark secured the second and third positions respectively",
    options: [
      "1 and 2 only",
      "2,3 and 4 only",
      "1,3 and 4 only",
      "1,2,3 and 4"
    ],
    correctOption: 3,
    explanation:
      ""
  },

  {
    id: 37,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding Prime Minister Sanae Takaichi's visit to India in July 2026? \n1. The visit took place from 1 to 3 July 2026 for the 16th India-Japan Annual Summit. \n2. During the summit, India and japan announced 16 key outcomes to expand cooperation in areas such as AI, clean energy, critical minerals, and biotechnology. \n3. The japan-India Joint Economic Forum witnessed the inaugration of Maruti Suzuki's fourth vehicle manufacturing facility at Kharkhoda, Haryana. \n4. Indian and japanese companies signed 129 Memorandums of Understanding (MoUs) worth ₹1 lakh crore",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1,3 and 4 only",
      "1,2,3 and 4"
    ],
    correctOption: 3,
    explanation:
      ""
  },

  {
    id: 38,
    subject: "Current Affairs",
    chapter: "",
    question: "The years 2026-2027 have been designated by India and Indonesia as:",
    options: [
      "India-Indonesia Friendship Year",
      "ASEAN-India Heritage Year",
      "Tagore-Dewantara Year",
      "Ramayana Cultural Year"
    ],
    correctOption: 2,
    explanation:
      "Honors Rabindranath Tagore and Ki Hajdar Dewantara"
  },

  {
    id: 39,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the biodiversity governance project launched in April 2026? \n1. The project was launched by the Ministry of Environment, Forest and CLimate Change and the National Biodiversity Authority. \n2. It will be implemented in Tamil Nadu and Meghalaya. \n3. The project is supported by the Global Environment Facility and United Nations Development Programme \n4. The project focuses only on wildlife tourism.",
    options: [
      "1,2 and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id: 40,
    subject: "Current Affairs",
    chapter: "",
    question: "Exercise Cyclone 2026 between India and Egypt, scheduled for April 2026, is being conducted at which of the following locations?",
    options: [
      "Mahajan Field Firing Ranges",
      "Umroi",
      "Anshas",
      "Gwalior"
    ],
    correctOption: 2,
    explanation:
      "Anshas is in Egypt"
  },

  {
    id: 41,
    subject: "Current Affairs",
    chapter: "",
    question: "The opening ceremony of the Glasgow 2026 Commonwealth Games will be held at:",
    options: [
      "Scotstoun Stadium",
      "OVO Hydro",
      "Tollcross International Swimming Centre",
      "Scottish Event Campus"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 42,
    subject: "Current Affairs",
    chapter: "",
    question: "In July 2026, the Paralympic Committee of india (PCI) signed an MoU with which organization to jointly bid for hosting the 2029 World Ability sport games?",
    options: [
      "Special olympics Bharat",
      "Sports Authority of india (SAI)",
      "Cerebral Palsy Sports Federation of India (CPSFI)",
      "Interantional Paralympic Committee (IPC)"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 43,
    subject: "Current Affairs",
    chapter: "",
    question: "Who among the following will be the Chief Guest(s) for the Republic Day Parade 2026?",
    options: [
      "The President of France",
      "The Prime Minister of Japan",
      "Antonio Costa and Ursula von der Leyen",
      "The President of the United States"
    ],
    correctOption: 2,
    explanation:
      "The President of the European Council, Antonio Costa and The President of the European Commission, Ursula von der Leyen. \nAt Kartavya Path, New Delhi"
  },

  {
    id: 44,
    subject: "Current Affairs",
    chapter: "",
    question: "During the 98th Foundation Day of the Indian Council of Agricultural Research (ICAR) in July 2026, Union Minister Shivraj Singh Chouhan unveiled the roadmap for:",
    options: [
      "Digital Krishi Mission",
      "Viksit Krishi and Samruddh Kisan",
      "National Agriculture Export Mission",
      "Atmanirbhar Kisan Abhiyan"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 45,
    subject: "Current Affairs",
    chapter: "",
    question: "As of January 19, 2026, approximately how many subscribers have enrolled in the Atal Pension Yojana?",
    options: [
      "5.50 crore",
      "10.2 crore",
      "8.66 crore",
      "6.45 crore"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 46,
    subject: "Current Affairs",
    chapter: "",
    question: "What is the central theme or focus area of the World Happiness Report 2026?",
    options: [
      "Happiness in the Green Economy",
      "Well Being in the Digital Age",
      "Mental health and Post-Pandemic Recovery",
      "Social Equality and happiness"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 47,
    subject: "Current Affairs",
    chapter: "",
    question: "In Which city were the Asian Boxing U-15 and U-17 Championships 2026 held?",
    options: [
      "Astana",
      "Tashkent",
      "Tbilisi",
      "Doha"
    ],
    correctOption: 1,
    explanation:
      "Tashkent is capital city of Uzbekistan"
  },

  {
    id: 48,
    subject: "Current Affairs",
    chapter: "",
    question: "In FIFA 2026, who won the Golden Glove award?",
    options: [
      "Unai Simon",
      "Rodri",
      "Emiliano Martinez",
      "Gianluigi Donnarumma"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id:49,
    subject: "Current Affairs",
    chapter: "",
    question: "What is the primary focus of the \"RISA Initiative\" highlighted during the Bharat Tribes Fest 2026?",
    options: [
      "Providing micro-loans to tribal farmers",
      "Connecting tribal textiles with global fashion through designer collaborations",
      "Digitizing tribal land records using Blockchain",
      "Establishing solar power grids in tribal villages"
    ],
    correctOption: 1,
    explanation:
      "Risa is traditionally a handwoven cloth used by the tribes of Tripura"
  },

  {
    id: 50,
    subject: "Current Affairs",
    chapter: "",
    question: "Who conferred the National Florence Nightingale Awards 2026?",
    options: [
      "Prime Minister Narendra Modi",
      "President Droupadi Murmu",
      "Health Minister J.P. Nadda",
      "Vice President Jagdeep Dhankar"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 51,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the MoU signed between ASSOCHAM and ACCI in June 2026? \n1. The MoU was signed between the Associated Chambers of Commerce and Industry of India and the Afghanistan Chamber of Commerce and Investment. \n2. The agreement aims to enhance the bilateral trade, investment, and business cooperation between India and Afghanistan. \n3. The MoU covers cooperation in sectors such as mining, food processing, pharmaceuticals, healthcare, oil and gas, and sugar manufacturing. \n4. The partners aim to facilitate a 15-20 member Indian business delegation to expand bilateral trade",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1,3 and 4 only",
      "1,2,3 and 4"
    ],
    correctOption: 3,
    explanation:
      ""
  },

  {
    id: 52,
    subject: "Current Affairs",
    chapter: "",
    question: "On January 4, 2026, the Department of Scientific and industrial Research (DISR) announced a major policy change to support deep-tech startups. What was the key reform announced?",
    options: [
      "Increase in financial assistance limit to ₹5 crore",
      "Removal of mandatory 3-year existence condition to avail DSIR funding",
      "Introduction of compulsory private equity participation",
      "Restriction of DSIR support only to MSMEs"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 53,
    subject: "Current Affairs",
    chapter: "",
    question: "Consider the following statements regarding the India-UK Critical Minerals Global Supply Chain Observatory (GSCO), launched in June 2026: \n1. The GSCO is a joint India–UK initiative aimed at strengthening cooperation in critical minerals for sectors such as clean energy, electric mobility, advanced manufacturing, and emerging technologies.  \n2. The Observatory is jointly led by the Technology Innovation in Exploration & Mining Foundation (TEXMiN) at IIT (ISM) Dhanbad and the University of Cambridge. \n3. TEXMiN functions as a Technology Translation Research Park (TTRP) under the Department of Science and Technology (DST).  \n4. One of the primary objectives of the GSCO is to promote exclusive dependence on a single source of critical minerals to ensure supply security.",
    options: [
      "1,2 and 3 only",
      "1 and 4 only",
      "2,3 and 4 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id: 54,
    subject: "Current Affairs",
    chapter: "",
    question: "The National Maritime Day 2026 is observed annually in india on which date?",
    options: [
      "April 2",
      "April 5",
      "March 29",
      "April 7"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 55,
    subject: "Current Affairs",
    chapter: "",
    question: "India has been invited to the G7 Summit 2026 in which capacity?",
    options: [
      "Observer Country",
      "Founding Member",
      "Outreach Partner Country",
      "Permanent Member"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 56,
    subject: "Current Affairs",
    chapter: "",
    question: "'Radio Sikkim Sundari' launched in April 2026, is associated with which organisation?",
    options: [
      "Border Roads Organisation",
      "Indian Army",
      "Ministry of Information and Broadcasting",
      "All India Radio"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 57,
    subject: "Current Affairs",
    chapter: "",
    question: "Laura Virginia Fernandez Delgado was sworn in as the president of which country in may 2026?",
    options: [
      "Peru",
      "Honduras",
      "Costa Rica",
      "Panama"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 58,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the AUKUS underwater drone programme launched in June 2026? \n1. The programme was launched jointly by Australia, United Kingdom, and United States. \n2. The initiative aims to develop advanced Uncrewed Undersea Vehicles (UUVs). \n3. AUKUS was established in 2021. \n4. The programme is focused only on civilian maritime tourism.",
    options: [
      "1,2, and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id: 59,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the Central Prahari Officer (CPO) Portal launched in May 2026? \n1. The portal was launched by NITI Aayog for strengthening real-time governance. \n2. The portal supports implementation monitoring under the Aspirational Districts Programme (ADP) and Aspirational Blocks Programme (ABP). \n3. CPOs can upload real-time field observations through mobile devices. \n4. The portal is designed only for defence administration.",
    options: [
      "1,2 and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id: 60,
    subject: "Current Affairs",
    chapter: "",
    question: "Who chaired the RBI Monetary Policy Committe meeting held in June 2026?",
    options: [
      "Shaktikanta Das",
      "Nirmala Sitharaman",
      "Sanjay Malhotra",
      "Poonam Gupta"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 61,
    subject: "Current Affairs",
    chapter: "",
    question: "Who assumed additional charge as the Chief Executive Officer (CEO) of the IndiaAI Mission in June 2026?",
    options: [
      "Abhishek Singh",
      "Sudeep Shrivastava",
      "Saurabh Vijay",
      "Rajesh Kumar"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 62,
    subject: "Current Affairs",
    chapter: "",
    question: "The 11th Quad Foreign Minister's Meeting (QFMM 2026) was held in which city of India?",
    options: [
      "Mumbai",
      "Bengaluru",
      "Chennai",
      "New Delhi"
    ],
    correctOption: 3,
    explanation:
      ""
  },

  {
    id: 63,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the exit of the United Arab Emirates (UAE) from OPEC in April 2026? \n1. UAE announced its withdrawal from the Organization of the Petroleum Exporting Countries and OPEC+ alliance. \n2. UAE was among the top oil producers within OPEC. \n3. The withdrawal was mainly due to restrictions imposed by production quotas. \n4. UAE joined OPEC in 2015.",
    options: [
      "1,2 and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      "UAE joined OPEC in 1967"
  },

  {
    id: 64,
    subject: "Current Affairs",
    chapter: "",
    question: "Who took charge as India's new Chief of Defence Staff (CDS) in May 2026?",
    options: [
      "General Anil Chauhan",
      "General NS Raja Subramani",
      "General Upendra Dwivedi",
      "Air Chief Marshal AP Singh"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 65,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the report “India Forward - Emerging Perspectives” released in May 2026? \n1. The report was jointly released by S&P Global and CRISIL Ratings Limited. \n2. India’s GDP growth forecast for FY27 was revised down to 6.6%. \n3. The report projected India’s retail inflation at 5.1% for FY27. \n4. The report stated that India’s Current Account Deficit (CAD) would decline to zero in FY27.",
    options: [
      "1,2, and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      "Report projected Current Account Deficit (CAD) to widen to 2.2%"
  },

  {
    id: 66,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the Memorandum of Understanding (MoU) signed between India and Israel in June 2026? \n1. The MoU was signed between the Comptroller and Auditor General of India and the Supreme Audit Institution (SAI) of Israel. \n2. The agreement aims to strengthen cooperation in public sector auditing. \n3. The MoU promotes the use of Artificial Intelligence (AI), data analytics, and digital audit tools in auditing. \n4. The agreement also focuses on enhancing performance auditing and compliance auditing.",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1,3 and 4 only",
      "1,2,3 and 4"
    ],
    correctOption: 3,
    explanation:
      ""
  },

  {
    id: 67,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the National Health Accounts (NHA) Estimates for FY23 released in May 2026? \n1. The report was released by the Ministry of Health and Family Welfare. \n2. Government Health Expenditure (GHE) increased to ₹3.85 lakh crore in FY23. \n3. The report is prepared using the System of Health Accounts (2011) framework. \n4. Total Health Expenditure (THE) in FY23 was estimated at less than 1% of GDP.",
    options: [
      "1,2 and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3 and 4"
    ],
    correctOption: 0,
    explanation:
      ""
  },

  {
    id: 68,
    subject: "Current Affairs",
    chapter: "",
    question: "NeSDA 2025 Portal, launched in May 2026, is related to the assessment of which of the following?",
    options: [
      "Defence manufacturing",
      "Digital governance service delivery",
      "Agricultural exports",
      "Space Research projects"
    ],
    correctOption: 1,
    explanation:
      "NeSDA: National e-governance Service Delivery Assessment"
  },

  {
    id: 69,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding Mission Senejohri launched in June 2026? \n1. The mission aims to promote Assam’s Muga silk as a globally competitive luxury textile brand. \n2. The initiative was launched by Jyotiraditya Scindia and Himanta Biswa Sarma. \n3. The mission seeks to enforce GI authentication and digital traceability for Muga silk. \n4. The programme is focused on cotton cultivation in Punjab.",
    options: [
      "1,2, and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3, and 4"
    ],
    correctOption: 0,
    explanation:
      "Mission focuses on Muga silk in Assam"
  },

  {
    id: 70,
    subject: "Current Affairs",
    chapter: "",
    question: "Which of the following statements is/are correct regarding the World Migration Report 2026? \n1. The report was released by the International Organization for Migration. \n2. India remained the world’s top remittance recipient country in 2024. \n3. India received more than USD 137 billion in remittances in 2024. \n4. Mexico was the largest remittance recipient country in the world.",
    options: [
      "1,2, and 3 only",
      "1 and 4 only",
      "2 and 3 only",
      "1,2,3, and 4"
    ],
    correctOption: 0,
    explanation:
      "Mexico ranked second"
  },

  {
    id: 71,
    subject: "Current Affairs",
    chapter: "",
    question: "Which expo did the Prime Minister inaugrate in January 2026, related to cultural heritage?",
    options: [
      "Indian Heritage & Craft Expo",
      "Grand international Exposition of Piprahwa Relics",
      "Kala Utsav Expo",
      "World Cultural Fest"
    ],
    correctOption: 1,
    explanation:
      "Piprahwa is a site historically associated with the ancient city of Kapilavastu and Lord Buddha"
  },

  {
    id: 72,
    subject: "Current Affairs",
    chapter: "",
    question: "The 'Mukhyamantri Gramotthan Yojana' (MGY), launched in January 2026, is associated with which state?",
    options: [
      "Rajasthan",
      "Madhya Pradesh",
      "Maharashtra",
      "Gujarat"
    ],
    correctOption: 3,
    explanation:
      "Launched by Gujarat CM Bhupendra Patel"
  },

  {
    id: 73,
    subject: "Current Affairs",
    chapter: "",
    question: "What is the theme of the 8th Poshan Pakhwada 2026?",
    options: [
      "Nutrition for All",
      "First 1000 Days Care",
      "Maximizing Brain Development in the First Six Years of Life",
      "Healthy Child, Healthy India"
    ],
    correctOption: 2,
    explanation:
      "Poshan Abhiyaan: First 1000 Days Care"
  },

  {
    id: 75,
    subject: "Current Affairs",
    chapter: "",
    question: "Who was sworn in as the president of Uganda for a seventh term in May 2026?",
    options: [
      "Paul Kagame",
      "Bobi Wine",
      "Yoweri Museveni",
      "William Ruto"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 76,
    subject: "Current Affairs",
    chapter: "",
    question: "The 'Namo Stall Scheme', launched in April 2026, is associated with which central government scheme?",
    options: [
      "PM FME Scheme",
      "PM SVANidhi Scheme",
      "Stand-up India Scheme",
      "Startup India Scheme"
    ],
    correctOption: 1,
    explanation:
      ""
  },

  {
    id: 77,
    subject: "Current Affairs",
    chapter: "",
    question: "Balwinder Singh Dhaliwal who passed away in June 2026, was associated with which athletics event?",
    options: [
      "Discus Throw",
      "Javelin Throw",
      "Shot Put",
      "Hammer Throw"
    ],
    correctOption: 2,
    explanation:
      ""
  },

  {
    id: 78,
    subject: "Current Affairs",
    chapter: "",
    question: "'North Star', launched in may 2026, is related to which sector in India?",
    options: [
      "Defence manufacturing",
      "Renewable Energy",
      "Space Technology",
      "Semiconductor production"
    ],
    correctOption: 1,
    explanation:
      ""
  },


];

export default questions;

