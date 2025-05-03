export const SKILLS_ARR = [
  {
    id: "skill-5001",
    percentage: "95%",
    skill: "Next Js/ React Js",
  },
  {
    id: "skill-5002",
    percentage: "90%",
    skill: "Javascript/ Typescript",
  },
  {
    id: "skill-5003",
    percentage: "85%",
    skill: "HTML/ CSS",
  },
  {
    id: "skill-5004",
    percentage: "90%",
    skill: "GraphQL/Rest API",
  },
  {
    id: "skill-5005",
    percentage: "95%",
    skill: "Redux",
  },
  {
    id: "skill-5006",
    percentage: "80%",
    skill: "My SQL",
  },
  {
    id: "skill-5007",
    percentage: "80%",
    skill: "Node Js/ Express",
  },
];

export const EDUCATION_ARR = [
  {
    id: "education 6051",
    duration: "July, 2016 - July, 2020",
    degree: "Bachelor of Technology",
    college: "Ajay Kumar Garg Engineering Collage, Ghaziabad",
    logoURL:
      "https://images.prismic.io/portfollio/ZfG7d0mNsf2sHjWB_akgecLogo.png?auto=format,compress",
    alt: "AKGECLogo",
  },
  {
    id: "education 6052",
    duration: "April, 2013 - Mar, 2015",
    degree: "Intermediate",
    college: "Sun Flower Public School, Ballia",
    logoURL:
      "https://images.prismic.io/portfollio/ZfG7ckmNsf2sHjV3_sunFlowerLogo.png?auto=format,compress",
    alt: "SunFlowerLogo",
  },
  {
    id: "education 6053",
    duration: "April, 2011 - Mar, 2013",
    degree: "High School",
    college: "DALIMSS Rohania, Varanasi",
    logoURL:
      "https://images.prismic.io/portfollio/ZfG7dUmNsf2sHjV8_dalimsslogo.png?auto=format,compress",
    alt: "DALIMSSLogo",
  },
];

export const EXPERIENCE_ARR = [
  {
    id: "exp-204",
    backgroundColor: "bg-violet-600",
    borderColor: "border-violet-600",
    companyName: "QSS Technosoft Inc.",
    designation: "Senior Software Engineer (Frontend Developer)",
    companyLogo:
      "https://images.prismic.io/portfollio/ZfG7c0mNsf2sHjV4_qss.png?auto=format,compress",
    imageAlt: "Qss Logo",
    duration: "March, 2025 - Present",
    projects: [
      {
        projectId: "p-105",
        projectName: "1. Contilio",
        description:
          "Aimed at streamlining construction data management by enhancing team configuration workflows and improving the performance and scalability of progress monitoring pages.",
        link: "",
        feature: [
          "Led the <strong>refactoring of the Progress page</strong> to improve code maintainability, reduce redundancy, and enhance performance, ensuring a smoother user experience and easier future scalability.",
          "Developing a robust <strong>Team Configuration module</strong> to allow admins and users to <strong>add, edit, disable, or manage teams</strong> on a per-project basis, providing greater flexibility and control over project collaboration.",
          "Implemented reusable components and optimized state management patterns to support dynamic team operations and maintain consistency across different user roles.",
        ],
      },
    ],
  },
  {
    id: "exp-205",
    backgroundColor: "bg-yellow-600",
    borderColor: "border-yellow-600",
    companyLogo:
      "https://images.prismic.io/portfollio/ZfG7c0mNsf2sHjV4_qss.png?auto=format,compress",
    imageAlt: "Qss Logo",
    duration: "December, 2024 - Feb 2025",
    projects: [
      {
        projectId: "p-104",
        projectName: "2. Block Star",
        description:
          "Aimed at efficiently managing property listings, client interactions, transactions, and real estate data visualization to enhance the user experience and support informed property decisions.",
        link: "",
        feature: [
          "Developed and maintained <strong>protected and public routes</strong> to manage user navigation flow based on authentication status, ensuring a secure and intuitive experience across the property platform.",
          "Implemented <strong>access and refresh token handling</strong> to manage session persistence securely, enhancing user login reliability and protecting sensitive data.",
          "Built and optimized a <strong>Wallet system</strong> to display and manage multiple transaction types using dynamic data received from backend APIs, ensuring accurate real-time financial tracking.",
          "Created the <strong>Property Detail page</strong> with integrated <strong>Google Maps API</strong> to display nearby landmarks and key locations, helping users make better-informed property decisions.",
          "Designed and integrated <strong>interactive charts</strong> to visualize estimated <strong>property value growth</strong> over a five-year span, enabling users and investors to assess long-term value prospects.",
        ],
      },
    ],
  },
  {
    id: "exp-201",
    backgroundColor: "bg-red-600",
    borderColor: "border-red-600",
    companyLogo:
      "https://images.prismic.io/portfollio/ZfG7c0mNsf2sHjV4_qss.png?auto=format,compress",
    imageAlt: "Qss Logo",
    duration: "August, 2022 - November, 2024",
    projects: [
      {
        projectId: "p-101",
        projectName: "3. Elder Connect",
        description:
          "Our mission is to enhance the lives of seniors worldwide by fostering meaningful connections through captivating virtual classes, events, and content. Our aim is to create unparalleled emotional bonds and alleviate the pain of social isolation",
        link: "https://members.theloopvillage.com",
        feature: [
          "Developed <strong>User Interface</strong> using cutting-edge technologies such as Next.js, React.js, SCSS, and TypeScript.",
          "Drive the project's development independently, ensuring seamless configuration of platforms including Auth0, Vercel, Hasura, Stripe, Cloudflare, Zoom, Mailgun, and Twilio. etc",
          "Developed an <strong>automated system, leveraging the Zoom API</strong> to retrieve upcoming <strong>meeting lists</strong>, integrating seamlessly with Hasura database. Scheduled to trigger every five minutes, ensuring real-time updates and efficient management of meeting data.",
          "Developed an <strong>automated system, leveraging the Zoom API</strong> to retrieve upcoming <strong>recording lists</strong>, integrating seamlessly with the Hasura database. Additionally, orchestrated the upload of videos to Cloudflare using the <strong>Cloudflare API</strong>. Scheduled to trigger daily",
          "Successfully integrated the <strong>ZoomSDK</strong> to enable seamless event hosting within our portal.",
          "<strong>Cloudflare Video Stream Management:</strong> Efficiently manage a substantial volume of live video streams through Cloudflare, maintaining optimal performance across our user interface services.",
          "Implemented <strong>multi-language support</strong> throughout the project to enhance accessibility and usability for diverse global audiences.",
          "Developed a comprehensive system for <strong>managing event notifications</strong> seamlessly.",
          "Meticulously implemented <strong>Stripe payment gateway</strong> integration, encompassing features such as creation of checkout sessions, robust handling of <strong>payment failures, membership cancellations, and reactivations.</strong>",
          "Implemented <strong>Shimmer components</strong> throughout the project, enhancing the overall user experience.",
          "Devised and implemented a <strong>Share Account feature</strong>, empowering users to share their accounts with designated individuals for enhanced accessibility and collaboration.",
          "<strong>Prismic Integration:</strong> Created and managed numerous pages and content components using Prismic, a headless CMS, to streamline content management and delivery.",
          "<strong>Upstash Integration for Scheduled Jobs:</strong> Leveraged Upstash to trigger and manage numerous scheduled jobs, optimizing task scheduling and execution within a serverless architecture.",
          "Implemented robust <strong>Change Password and Reset Password</strong> features to enhance user account security and accessibility.",
          "Developed a system utilizing the Google Sheets API to push real-time data from the portal, capturing user login, signup, event participation, and feedback submissions. ",
        ],
      },
    ],
  },
  {
    id: "exp-203",
    backgroundColor: "bg-green-600",
    borderColor: "border-green-600",
    // companyName: "QSS Technosoft Inc.",
    // designation: "Senior Software Engineer (FullStack Developer)",
    companyLogo:
      "https://images.prismic.io/portfollio/ZfG7c0mNsf2sHjV4_qss.png?auto=format,compress",
    imageAlt: "Qss Logo",
    duration: "April, 2022 - July, 2022",
    projects: [
      {
        projectId: "p-102",
        projectName: "4. GPS",
        description:
          " Aimed at efficiently managing employees, clients, contractors, and the hiring process, as well as handling sensitive HR details for the company.",
        link: "",
        feature: [
          "Engaged in daily standup meetings and collaborated closely with business analysts to gain a deep understanding of project objectives and client requirements, ensuring alignment with business logic and strategic goals.",
          "Implemented code <strong>optimization</strong> and <strong>refactoring</strong> strategies to enhance system performance, focusing on re-evaluating component structures and streamlining processes to improve response times.",
          "Designed and implemented an <strong>autonomous system capable of capturing comprehensive commit histories</strong> for projects managed by clients. Leveraged APIs provided by platforms such as GitHub, GitLab, Azure, and Bitbucket to extract user activity data. Utilized advanced JavaScript functionalities, including Promises, async, and await, to ensure efficient and reliable data retrieval processes.",
        ],
      },
    ],
  },
  {
    id: "exp-202",
    backgroundColor: "bg-sky-600",
    borderColor: "border-sky-600",
    companyName: "Infosys",
    designation: "System Engineer (Frontend Developer)",
    companyLogo:
      "https://images.prismic.io/portfollio/ZfG7dEmNsf2sHjV6_infosysLogo.webp?auto=format,compress",
    imageAlt: "Infosys Logo",
    duration: "Nov, 2020 - Mar, 2022",
    projects: [
      {
        projectId: "p-103",
        projectName: "1. AT&T",
        description:
          "Our goal is to fortify our network, enabling a wide range of advancements, from smarter homes and cities to high-quality remote healthcare, augmented and virtual reality experiences.",
        link: "https://att.com",
        feature: [
          "As part of my role, I actively engaged with business analysts (project owners) to thoroughly grasp the business logic and client require- ments, facilitating seamless project development and successful out- comes.",
          "Developed or Modified the UI using React JS, Typescript etc tech. to attract more customers.",
        ],
      },
    ],
  },
];

export const MINI_PROJECTS_ARR = [
  {
    id: "mp-301",
    videoAlt: "Calender video",
    videoSrc:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG700mNsf2sHjW8_Calender.mp4",
    title: "Calender",
    gitLink: "https://github.com/amriteshverma129/calendar",
  },
  {
    id: "mp-302",
    videoAlt: "Carousel video",
    videoSrc:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7z0mNsf2sHjW6_Carousel.mp4",
    title: "Carousel",
    gitLink: "https://github.com/amriteshverma129/carousel",
  },
  {
    id: "mp-303",
    videoAlt: "Email video",
    videoSrc:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7zUmNsf2sHjW5_Email.mp4",
    title: "Email",
    gitLink: "https://github.com/amriteshverma129/email",
  },
  {
    id: "mp-304",
    videoAlt: "Giphy video",
    videoSrc:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7zEmNsf2sHjW4_Giphy.mp4",
    title: "Giphy",
    gitLink: "https://github.com/amriteshverma129/giphy",
  },
  {
    id: "mp-305",
    videoAlt: "Sprint video",
    videoSrc:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7xUmNsf2sHjW2_Sprint.mp4",
    title: "Sprint",
    gitLink: "https://github.com/amriteshverma129/sprintv2",
  },
  {
    id: "mp-306",
    videoAlt: "Tic Tac Toe video",
    videoSrc:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7xEmNsf2sHjW1_TicTacToe.mp4",
    title: "Tic Tac Toe",
    gitLink: "https://github.com/amriteshverma129/TicTacToe",
  },
  {
    id: "mp-307",
    videoAlt: "To do video",
    videoSrc:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7w0mNsf2sHjW0_ToDo.mp4",
    title: "To Do",
    gitLink: "https://github.com/amriteshverma129/todo",
  },
];

export const PROJECT_ARR = [
  {
    id: "p-401",
    projectName: "Youtube GPT",
    projectURL:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7v0mNsf2sHjWx_youtubeGPT.mp4",
    projectAlt: "Youtube GPT",
    projectFeature: [
      "Developed a basic YouTube project using the latest React framework.",
      "Utilized react-redux and @reduxjs/toolkit for state management within the application.",
      "Styled components using tailwindcss to achieve a clean and modern user interface.",
      "Implemented client-side routing using react-router-dom for seamless navigation between different views.",
      "Utilized the <strong>YouTube Data API</strong> to fetch and render a list of videos in the VideoContainer component.",
      "Engineered a sophisticated header component featuring a search box with autocomplete suggestions, powered by debouncing functionality and optimized response caching for improved performance and user satisfaction.",
      "Developed a separate page to stream individual YouTube videos using iframes, with the video ID passed as a parameter in the URL.",
      "Implemented Live Chat using API Polling",
    ],
    gitLink:
      "https://github.com/amriteshverma129/youtube-Basic-/tree/master/youtube-basic",
  },
  {
    id: "p-402",
    projectName: "Netflix GPT",
    projectURL:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7yUmNsf2sHjW3_NetflixGPT.mp4",
    projectAlt: "Netflix GPT",
    projectFeature: [
      "Developed a basic Netflix project using the latest React framework.",
      "Utilized react-redux and @reduxjs/toolkit for state management within the application.",
      "Styled components using tailwindcss to achieve a clean and modern user interface.",
      "Introduced a multilingual feature to ensure inclusivity and accessibility for global audiences.",
      "Utilized the <strong>TMDB API</strong> to dynamically retrieve and display a diverse array of movies across various categories.",
      "Developed a robust search functionality empowered by the <strong>OpenAI API</strong>, enabling users to explore movies tailored to their preferences. Leveraged intelligent caching mechanisms to optimize search performance.",
      "Implemented secure authentication mechanisms through seamless integration with Firebase, ensuring user data privacy.",
    ],
    gitLink: "https://github.com/amriteshverma129/NetflixGPT",
  },
  {
    id: "p-403",
    projectName: "Flipkart",
    projectURL:
      "https://portfollio.cdn.prismic.io/portfollio/ZfG7wkmNsf2sHjWz_flipkart.mp4",
    projectAlt: "Flipkart",
    projectFeature: [
      "Developed a basic flipkart project using the latest React framework.",
      "Utilized react-redux and @reduxjs/toolkit for state management within the application.",
      "Styled components using tailwindcss to achieve a clean and modern user interface.",
      "Implemented a comprehensive Cart module, allowing users to conveniently view and manage selected items across the platform.",
      "Users can adjust item quantities or remove items directly from the cart, facilitating seamless checkout experiences. Leveraged useMemo for optimization to enhance performance and responsiveness.",
    ],
    gitLink: "https://github.com/amriteshverma129/flipkart",
  },
];
