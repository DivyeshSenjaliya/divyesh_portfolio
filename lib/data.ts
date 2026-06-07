import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Database,
  Layout,
  Code,
  Server,
  Globe,
  Book,
  Coffee,
} from "lucide-react";

import profileImg from "@/app/personalImage/divyeshh.jpg";

export const personalInfo = {
  name: "Divyesh Senjaliya",
  role: "React Native Developer",
  location: "Surat, India",
  email: "divyeshsenjaliya@gmail.com",
  phone: "+91 9574520727",
  bio: "Passionate developer with a strong focus on mobile technologies. I enjoy turning complex problems into simple, beautiful, and intuitive designs. My job is to build functional and user-friendly and at the same time attractive interfaces.",
  profileImage: profileImg,
  socials: {
    github: "https://github.com/DivyeshSenjaliya",
    linkedin: "https://linkedin.com",
    email: "mailto:divyeshsenjaliya@gmail.com",
  },
  languages: ["English", "Hindi", "Gujarati"],
};

export const experiences = [
  {
    title: "React Native Developer",
    company: "Madvise Infotech",
    period: "Nov 2023 - Present",
    description:
      "Developing and maintaining cross-platform mobile applications. Implementing RESTful APIs, optimizing app performance, and ensuring seamless user experiences.",
  },
  {
    title: "React Native Intern",
    company: "Madvise Infotech",
    period: "May 2023 - Nov 2023",
    description:
      "Assisted in building mobile apps using React Native. Collaborated with senior developers on state management and UI implementation.",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Veer Narmad South Gujarat University",
    period: "2022 - Present",
  },
  {
    degree: "Higher Secondary Education",
    institution: "GSEB",
    period: "2021 - 2022",
  },
];

export const skills = {
  technical: [
    { title: "React Native", desc: "Cross-platform mobile app development" },
    { title: "TypeScript", desc: "Type-safe JavaScript development" },
    { title: "Firebase", desc: "Backend-as-a-Service integration" },
    { title: "Redux / Zustand", desc: "State management solutions" },
    { title: "REST APIs", desc: "Integration with backend services" },
    {
      title: "UI/UX Design",
      desc: "Creating responsive and intuitive interfaces",
    },
  ],
  categories: [
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "REST API Integration", level: 88 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Firebase & Realtime Database", level: 80 },
        { name: "SQL & SQLite", level: 75 },
        { name: "Payment Gateway Integration", level: 82 },
      ],
    },
    {
      title: "Leadership & Design",
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Responsive UI Design", level: 88 },
        { name: "Animation & Gesture Handling", level: 80 },
      ],
    },
  ],
};

export const projects = [
  {
    title: "ET App",
    subtitle: "Economic Times App",
    tech: ["React Native", "Firebase", "REST API"],
    description:
      "Developed features to provide real-time business and stock market news updates. Integrated widgets, push notifications, and offline reading capabilities.",
    gradient: "from-purple-500 to-blue-500",
    icon: "ET",
    image: "https://play-lh.googleusercontent.com/qPlCh-FOFw5IF-s-XfhlDojzbpVVzUqrNeVcnlrykL2EpOLpdmcJBpTePhKgh8LwAQ",
    links: {
      ios: "https://apps.apple.com/in/app/the-economic-times/id403513333",
      android:
        "https://play.google.com/store/apps/details?id=com.et.reader.activities",
    },
  },
  {
    title: "Pathconnect",
    subtitle: "Phlebo App",
    tech: ["React Native", "Barcode Scanning", "Maps"],
    description:
      "Designed and developed an app for phlebotomists to manage and accept assigned orders. Implemented barcode scanning and photo verification.",
    gradient: "from-blue-500 to-cyan-500",
    icon: "PC",
    image: "https://play-lh.googleusercontent.com/r_zU6zV-3yv6_zK1b203c-jJ41D20g9i5R6c20E0eD2D52F7e9-74d32a0d1e3C0fQ",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.pathoconnect.phlebo",
    },
  },
  {
    title: "TICC Lite",
    subtitle: "Innovation Champions' Club",
    tech: ["Education", "Interactive", "Multimedia"],
    description:
      "Created a lite version of the app to provide virtual workshops for children. Developed modules for interactive challenges and brainstorming.",
    gradient: "from-green-500 to-emerald-500",
    icon: "IC",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/30/1e/04/301e0413-ebdd-2dce-a2e6-a241071d0e52/source/512x512bb.jpg",
    links: {
      ios: "https://apps.apple.com/us/app/innovation-champions-club/id1571404179",
    },
  },
  {
    title: "Nayomi",
    subtitle: "E-Commerce App",
    tech: ["E-commerce", "Payment Gateway", "UX/UI"],
    description:
      "Developed an e-commerce app for nightwear, lingerie, and loungewear. Implemented seamless shopping experiences and multiple payment options.",
    gradient: "from-pink-500 to-rose-500",
    icon: "NY",
    image: "https://logo.clearbit.com/nayomi.com",
    links: {
      ios: "https://apps.apple.com/ae/app/nayomi-%D9%86%D8%B9%D9%88%D9%85%D9%8A/id1453406248",
      android: "https://play.google.com/store/apps/details?id=com.nayomi",
    },
  },
  {
    title: "Mihyar",
    subtitle: "Fashion Shopping",
    tech: ["Fashion", "Search", "Notifications"],
    description:
      "Created a fashion e-commerce app with advanced search and filtering options. Integrated push notifications for exclusive offers.",
    gradient: "from-amber-500 to-orange-500",
    icon: "MY",
    image: "https://logo.clearbit.com/mihyar.com",
    links: {
      ios: "https://apps.apple.com/ae/app/mihyar-%D9%85%D9%87%D9%8A%D8%A7%D8%B1/id1463375811",
      android: "https://play.google.com/store/apps/details?id=com.mihyar",
    },
  },
  {
    title: "Body Shop",
    subtitle: "UAE & Jeddah",
    tech: ["Beauty", "Checkout", "Discovery"],
    description:
      "Developed an app for beauty and skincare products with an intuitive UI. Enabled easy navigation and seamless checkout.",
    gradient: "from-teal-500 to-green-500",
    icon: "BS",
    image: "https://logo.clearbit.com/thebodyshop.ae",
    links: {
      ios: "https://apps.apple.com/ae/app/the-body-shop-uae/id1524317070",
      android:
        "https://play.google.com/store/apps/details?id=com.thebodyshop.uae",
    },
  },
  {
    title: "LEGO",
    subtitle: "Saudi Arabia",
    tech: ["Shopping", "Gamification", "Video"],
    description:
      "Designed an engaging shopping experience for LEGO® products. Implemented product showcases, interactive games, and video content.",
    gradient: "from-yellow-400 to-orange-500",
    icon: "LG",
    image: "https://logo.clearbit.com/lego.com",
    links: {
      ios: "https://apps.apple.com/sa/app/lego-saudi-arabia/id1571217081",
    },
  },
];
