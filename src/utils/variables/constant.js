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
    id: "exp-201",
    backgroundColor: "bg-red-600",
    borderColor: "border-red-600",
    companyName: "QSS Technosoft Inc.",
    designation: "Senior Software Engineer (FullStack Developer)",
    companyLogo:
      "https://images.prismic.io/portfollio/ZfG7c0mNsf2sHjV4_qss.png?auto=format,compress",
    imageAlt: "Qss Logo",
    duration: "April, 2022 - Present",
    projects: [
      {
        projectId: "p-101",
        projectName: "1. Elder Connect",
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
      {
        projectId: "p-102",
        projectName: "2. GPS",
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
      "As part of my role, I actively engaged with business analysts (project owners) to thoroughly grasp the business logic and client require- ments, facilitating seamless project development and successful out- comes.",
      "Developed or Modified the UI using React JS, Typescript etc tech. to attract more customers.",
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
      "As part of my role, I actively engaged with business analysts (project owners) to thoroughly grasp the business logic and client require- ments, facilitating seamless project development and successful out- comes.",
      "Developed or Modified the UI using React JS, Typescript etc tech. to attract more customers.",
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
      "As part of my role, I actively engaged with business analysts (project owners) to thoroughly grasp the business logic and client require- ments, facilitating seamless project development and successful out- comes.",
      "Developed or Modified the UI using React JS, Typescript etc tech. to attract more customers.",
    ],
    gitLink: "https://github.com/amriteshverma129/flipkart",
  },
];
