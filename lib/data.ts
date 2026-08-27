import profileImg from "@/app/personalImage/divyeshh.jpg";
export const personalInfo = {
  name: "Divyesh Senjaliya",
  role: "React Native Developer",
  location: "Surat, India",
  email: "divyeshsenjaliy@gmail.com",
  phone: "+91 9574620727",
  bio: "Passionate developer with a strong focus on mobile technologies. I enjoy turning complex problems into simple, beautiful, and intuitive designs. My job is to build functional and user-friendly and at the same time attractive interfaces.",
  profileImage: profileImg,
  socials: {
    github: "https://github.com/DivyeshSenjaliya",
    linkedin: "https://linkedin.com",
    email: "mailto:divyeshsenjaliy@gmail.com",
  },
  languages: ["English", "Hindi", "Gujarati"],
};

export const experiences = [
  {
    title: "React Native Developer",
    company: "Freelancer",
    period: "May 2026 - Present",
    description:
      "Delivering end-to-end mobile app development for global startups and clients. Specializing in high-performance React Native apps, custom UI/UX architectures, third-party SDK integrations, and App Store / Google Play deployments.",
  },
  {
    title: "React Native Developer",
    company: "Madvise Infotech",
    period: "Nov 2023 - May 2026",
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
    period: "2022 - 2025",
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
    id: "epik",
    title: "Epik",
    subtitle: "Electronics Try & Buy Platform",
    tech: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Payment Gateway",
      "Location Services",
    ],
    description:
      "Engineered high-performance cross-platform mobile apps for India's first try-and-buy electronics store. Developed 60-minute doorstep demo scheduling, live product comparison matrix, secure payment gateway integration, and real-time delivery rider tracking.",
    gradient: "from-blue-600 to-indigo-600",
    icon: "EP",
    image: "/assets/projects/epik/icon.webp",
    fallbackImage:
      "https://getepik.in/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fprim_logo.jpg&w=256&q=75",
    screenshots: [
      "/assets/projects/epik/screenshots/epik1.webp",
      "/assets/projects/epik/screenshots/epik2.webp",
      "/assets/projects/epik/screenshots/epik3.webp",
      "/assets/projects/epik/screenshots/epik4.webp",
      "/assets/projects/epik/screenshots/epik5.webp",
      "/assets/projects/epik/screenshots/epik6.webp",
    ],
    links: {
      web: "https://getepik.in/",
      android:
        "https://play.google.com/store/apps/details?id=com.epik.app",
      ios: "https://apps.apple.com/us/app/epik-try-and-buy-everything/id6756187208",
    },
  },
  {
    id: "et-app",
    title: "ET App",
    subtitle: "Financial & Stock Market News",
    tech: [
      "React Native",
      "TypeScript",
      "Live Feeds",
      "Push Notifications",
      "Offline Storage",
      "REST APIs",
    ],
    description:
      "Architected and enhanced core mobile features for India’s premier business daily. Built live BSE/NSE market tracking widgets, stock watchlists, offline reading cache, deep linking, and low-latency push notifications for breaking financial news.",
    gradient: "from-purple-500 to-blue-500",
    icon: "ET",
    image: "/assets/projects/et-app/icon.webp",
    fallbackImage:
      "https://play-lh.googleusercontent.com/qPlCh-FOFw5IF-s-XfhlDojzbpVVzUqrNeVcnlrykL2EpOLpdmcJBpTePhKgh8LwAQ",
    screenshots: [
      "/assets/projects/et-app/screenshots/et1.webp",
      "/assets/projects/et-app/screenshots/et2.webp",
      "/assets/projects/et-app/screenshots/et3.webp",
      "/assets/projects/et-app/screenshots/et4.webp",
    ],
    links: {
      ios: "https://apps.apple.com/in/app/the-economic-times/id474766725",
      android:
        "https://play.google.com/store/apps/details?id=com.et.reader.activities",
    },
  },
  {
    id: "greenfi",
    title: "GreenFi",
    subtitle: "ESG AI & Sustainable Finance",
    tech: [
      "Next.js",
      "TypeScript",
      "AI Analytics",
      "REST APIs",
      "Tailwind CSS",
      "Data Visualization",
    ],
    description:
      "Architected and developed intelligent web platform modules for AI-powered ESG risk management and sustainable finance. Built interactive sustainability metrics dashboards, automated due diligence workflows, and supply chain analytics.",
    gradient: "from-emerald-500 to-teal-700",
    icon: "GF",
    image: "/assets/projects/greenfi/icon.webp",
    fallbackImage:
      "https://greenfi.ai/wp-content/uploads/2023/09/favicon.png",
    screenshots: [
      "/assets/projects/greenfi/screenshots/greenfi1.webp",
      "/assets/projects/greenfi/screenshots/greenfi2.webp",
      "/assets/projects/greenfi/screenshots/greenfi3.webp",
      "/assets/projects/greenfi/screenshots/greenfi4.webp",
      "/assets/projects/greenfi/screenshots/greenfi5.webp",
    ],
    galleryOrientation: "vertical" as const,
    links: {
      web: "https://greenfi.ai/",
    },
  },
  {
    id: "pathconnect",
    title: "Pathconnect",
    subtitle: "Phlebotomist Field Operations",
    tech: [
      "React Native",
      "TypeScript",
      "Google Maps API",
      "Barcode Scanner",
      "Offline Sync",
      "REST APIs",
    ],
    description:
      "Developed a mission-critical field operations app for diagnostic phlebotomists. Implemented route optimization with Google Maps, automated barcode/QR scanning for specimen vials, patient KYC verification, digital signatures, and resilient offline-first data sync.",
    gradient: "from-blue-500 to-cyan-500",
    icon: "PC",
    image: "/assets/projects/pathconnect/icon.webp",
    fallbackImage:
      "https://play-lh.googleusercontent.com/r_zU6zV-3yv6_zK1b203c-jJ41D20g9i5R6c20E0eD2D52F7e9-74d32a0d1e3C0fQ",
    screenshots: [
      "/assets/projects/pathconnect/screenshots/phlebo1.webp",
      "/assets/projects/pathconnect/screenshots/phlebo2.webp",
      "/assets/projects/pathconnect/screenshots/phlebo3.webp",
      "/assets/projects/pathconnect/screenshots/phlebo4.webp",
      "/assets/projects/pathconnect/screenshots/phlebo5.webp",
    ],
    links: {
      ios: "https://apps.apple.com/in/app/pathoconnect-phlebo/id6670427392",
      android:
        "https://play.google.com/store/apps/details?id=com.observancegroup.phlebotomist",
    },
  },
  {
    id: "ticc-lite",
    title: "TICC Lite",
    subtitle: "Gamified Kids Learning Platform",
    tech: [
      "React Native",
      "TypeScript",
      "Reanimated",
      "Video Streaming",
      "Interactive UI",
      "REST APIs",
    ],
    description:
      "Created an engaging, gesture-driven educational mobile app for children. Developed interactive workshop modules, 60fps fluid UI animations, video lesson streaming, gamified reward badges, and kid-friendly intuitive touch flows.",
    gradient: "from-green-500 to-emerald-500",
    icon: "IC",
    image: "/assets/projects/ticc-lite/icon.webp",
    fallbackImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/30/1e/04/301e0413-ebdd-2dce-a2e6-a241071d0e52/source/512x512bb.jpg",
    screenshots: [
      "/assets/projects/ticc-lite/screenshots/ticc1.webp",
      "/assets/projects/ticc-lite/screenshots/ticc2.webp",
      "/assets/projects/ticc-lite/screenshots/ticc3.webp",
      "/assets/projects/ticc-lite/screenshots/ticc4.webp",
      "/assets/projects/ticc-lite/screenshots/ticc5.webp",
      "/assets/projects/ticc-lite/screenshots/ticc6.webp",
    ],
    links: {
      ios: "https://apps.apple.com/us/app/the-innovation-champions-club/id6447499219",
      android: "https://play.google.com/store/apps/details?id=com.itcelearning",
    },
  },
  {
    id: "pawzy",
    title: "Pawzy",
    subtitle: "Pet Health & Care Companion",
    tech: [
      "React Native",
      "TypeScript",
      "Firebase Suite",
      "Push & Local Notifications",
      "Zustand",
      "REST APIs",
    ],
    description:
      "Designed and built an all-in-one pet health management app. Integrated pet profile records, automated vaccination and medication reminder schedules, veterinary appointment booking, and slick custom UI components with dark mode support.",
    gradient: "from-orange-300 to-pink-400",
    icon: "PZ",
    image: "/assets/projects/pawzy/icon.webp",
    fallbackImage: "",
    screenshots: [
      "/assets/projects/pawzy/screenshots/pawzy1.webp",
      "/assets/projects/pawzy/screenshots/pawzy2.webp",
      "/assets/projects/pawzy/screenshots/pawzy3.webp",
      "/assets/projects/pawzy/screenshots/pawzy4.webp",
    ],
    links: {
      ios: "https://apps.apple.com/us/app/pawzy/id6743706680",
      android: "https://play.google.com/store/apps/details?id=com.pawzy_mobile"
    },
  },
  // {
  //   id: "nayomi",
  //   title: "Nayomi",
  //   subtitle: "E-Commerce App",
  //   tech: ["E-commerce", "Payment Gateway", "UX/UI"],
  //   description:
  //     "Developed an e-commerce app for nightwear, lingerie, and loungewear. Implemented seamless shopping experiences and multiple payment options.",
  //   gradient: "from-pink-500 to-rose-500",
  //   icon: "NY",
  //   image: "/assets/projects/nayomi/icon.png",
  //   fallbackImage: "https://logo.clearbit.com/nayomi.com",
  //   screenshots: [
  //     "/assets/projects/nayomi/screenshots/screen1.jpg",
  //     "/assets/projects/nayomi/screenshots/screen2.jpg",
  //   ],
  //   links: {
  //     ios: "https://apps.apple.com/ae/app/nayomi-%D9%86%D8%B9%D9%88%D9%85%D9%8A/id1453406248",
  //     android: "https://play.google.com/store/apps/details?id=com.nayomi",
  //   },
  // },
  // {
  //   id: "mihyar",
  //   title: "Mihyar",
  //   subtitle: "Fashion Shopping",
  //   tech: ["Fashion", "Search", "Notifications"],
  //   description:
  //     "Created a fashion e-commerce app with advanced search and filtering options. Integrated push notifications for exclusive offers.",
  //   gradient: "from-amber-500 to-orange-500",
  //   icon: "MY",
  //   image: "/assets/projects/mihyar/icon.png",
  //   fallbackImage: "https://logo.clearbit.com/mihyar.com",
  //   screenshots: [
  //     "/assets/projects/mihyar/screenshots/screen1.jpg",
  //     "/assets/projects/mihyar/screenshots/screen2.jpg",
  //   ],
  //   links: {
  //     ios: "https://apps.apple.com/ae/app/mihyar-%D9%85%D9%87%D9%8A%D8%A7%D8%B1/id1463375811",
  //     android: "https://play.google.com/store/apps/details?id=com.mihyar",
  //   },
  // },
  // {
  //   id: "body-shop",
  //   title: "Body Shop",
  //   subtitle: "UAE & Jeddah",
  //   tech: ["Beauty", "Checkout", "Discovery"],
  //   description:
  //     "Developed an app for beauty and skincare products with an intuitive UI. Enabled easy navigation and seamless checkout.",
  //   gradient: "from-teal-500 to-green-500",
  //   icon: "BS",
  //   image: "/assets/projects/body-shop/icon.png",
  //   fallbackImage: "https://logo.clearbit.com/thebodyshop.ae",
  //   screenshots: [
  //     "/assets/projects/body-shop/screenshots/screen1.jpg",
  //     "/assets/projects/body-shop/screenshots/screen2.jpg",
  //   ],
  //   links: {
  //     ios: "https://apps.apple.com/ae/app/the-body-shop-uae/id1524317070",
  //     android:
  //       "https://play.google.com/store/apps/details?id=com.thebodyshop.uae",
  //   },
  // },
  // {
  //   id: "lego",
  //   title: "LEGO",
  //   subtitle: "Saudi Arabia",
  //   tech: ["Shopping", "Gamification", "Video"],
  //   description:
  //     "Designed an engaging shopping experience for LEGO® products. Implemented product showcases, interactive games, and video content.",
  //   gradient: "from-yellow-400 to-orange-500",
  //   icon: "LG",
  //   image: "/assets/projects/lego/icon.png",
  //   fallbackImage: "https://logo.clearbit.com/lego.com",
  //   screenshots: [
  //     "/assets/projects/lego/screenshots/screen1.jpg",
  //     "/assets/projects/lego/screenshots/screen2.jpg",
  //   ],
  //   links: {
  //     ios: "https://apps.apple.com/sa/app/lego-saudi-arabia/id1571217081",
  //   },
  // },
];
