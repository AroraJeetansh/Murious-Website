import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage1,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,
  benefitImage8,
  benefitImage9,
  benefitImage10,
  benefitImage11,
  benefitImage12,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  dominos,
  twitter,
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#muriousLink",
  },
  {
    id: "1",
    title: "Events",
    url: "#events",
  },
  {
    id: "2",
    title: "Sponsors",
    url: "#sponsors",
  },
  {
    id: "3",
    title: "Contact",
    url: "#roadmap",
  },
  {
    id: "6",
    title: "Team",
    url: "#pricing",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [dominos, dominos, dominos, dominos, dominos];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const studentEvents = [
  {
    id: "0",
    title: "Click-O-Mania",
    text: "Step into the enchanting world of photography, where every click turns moments into art! Freeze emotions, capture breathtaking scenes, and find beauty in the ordinary.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Logo Remix Design",
    text: "Get ready to make your mark in the Logo Remix Design event! This is your chance to craft a bold, innovative logo that stands Jut out from the crowd.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage1,
    light: true,
  },
  {
    id: "2",
    title: "Digital Scavenger Hunt",
    text: "Embark on an exciting adventure where you solve intricate tech puzzles to discover hidden QR codes Scattered across the campus.",    
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Code Cleanse",
    text: "Unleash your inner code detective and embark on a quest to uncover hidden errors lurking within lines of Code.",    
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "4",
    title: "Innovation Derby",
    text: "Step into Innovation Derby and bring your creative solutions to real-world challenges. Collaborate with others and pitch your ideas to a panel of judges.",    
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage12,
  },
  {
    id: "5",
    title: "Reel Rumble",
    text: "Create a compelling reel around a surprise theme. Use visuals, music, and effects to engage and captivate your audience.",    
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage11,
  },
  {
    id: "6",
    title: "Guess The Game",
    text: "A fun challenge where players try to identify a video game based on a series of clues. Each clue reveals something about the game's story, characters, or gameplay mechanics. The goal is guess the game before time runs out!",    
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage5,
  },
  {
    id: "7",
    title: "Blind Coding",
    text: "An exciting challenge where participants test their programming skills by writing code without seeing their screen.",    
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage6,
  },
  {
    id: "8",
    title: "Make It Print",
    text: "Unleash your creativity at Make It Print, the ultimate competition for designing trendy T-shirts and hoodies.",    
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage7,
  },
  {
    id: "9",
    title: "Quize",
    text: "Dive into the world of innovation with QuizE, a thrilling quiz event exploring Space, Al, and Tech.",    
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage8,
  },
];

export const facultyEvents=[
  {
    id: "10",
    title: "Soaring Skies",
    text: "This Exhilarating event invites participants to unleash their inner aviators as they compete in the ultimate paper airplane challenge.",    
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage9,
  },
  {
    id: "11",
    title: "Tambola",
    text: "'TAMBOLA' - Where luck meets excitement in a game of chance and anticipation! friends for an evening of fun and thrills as your play this beloved game, also known as Housie or Bingo.",    
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage10,
  },
]
export const socials = [
  {
    id: "0",
    title: "Youtube",
    iconUrl: discordBlack,
    url: "https://www.youtube.com/@JYCPhotographyClub",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/JycJuit/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/murious.juit/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/jyc.juit/",
  },
];
