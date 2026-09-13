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
];

export default questions;

