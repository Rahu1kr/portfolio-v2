import {
  ICombinedInformation,
  IDirectMessageItem,
  IInitialInformation,
  ITitledListItem,
} from "./Models";

class DynamicValues {
  static initialInformation: IInitialInformation = {
    name: "Rahul Kumar",
    occupation: "Software Engineer",
  };

  static directMessageItems: Array<IDirectMessageItem> = [
    {
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=9576830189",
    },
    
    {
      name: "Telegram",
      link: "https://t.me/rahu1_kr",
    },
  ];

  static about: Array<ITitledListItem> = [
    {
      text: "Information",
      shouldNotSort: true,
      arr: [
        {
          title: "Name",
          desc: "Rahul Kumar",
          logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
        },
        {
          title: "Work Experience",
          desc: "Fresher",
          logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png",
        },
        {
          title: "Languages",
          desc: "English, Hindi",
          logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png",
        },
        {
          title: "Nationality",
          desc: "Indian",
          logo: "https://img.icons8.com/?size=100&id=HgrhrvtEzvc1&format=png&color=000000",
        },
        {
          title: "Resume",
          desc: "Click the link icon to view/download",
          link: "https://drive.google.com/file/d/1atxq4o7qAp20NE4Pfr5J-0WafpcXuBna/view?usp=drive_link",
          logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png",
        },
      ],
    },
    {
      text: "Experiences",
      arr: [
        {
          title: "Salesqueen Software Solutions",
          desc: "Front End Developer (May-Aug)",
          logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAllBMVEVHcEzI3C/X5SvK3C6ezTr97yDp5yau0zWs1jfi6ii93TLslCTyiyPfgCnjoAAoLo+9UVLzWCL0ZSH1cyD1eyD4ZBsoLY4mJX8nJ4MYLZX2gx/3ix4fLZIqKocfGW0cFWYtMJEULJQlInwdF2kiH3YbFGQcFmf3dBobFGQfGm0iH3UbFGQrLIsbFGQbFGQbFGQuMZIhHnT8YME6AAAAMnRSTlMAPLaM///6ZLbCu5mbmiJwX/////9ykAz/6v//rP9Knf++6yD/cLxc//8z691ehc742nKfoC4AAAFoSURBVHgBXIa1AYAADATjnv3HRSu4V3hBYkRkEVEzdkQPhy+ZRBURdE1dx+FHz0w/7NkYfSAoDEJBAJ0D2Fs6ZCUQFiWu97/ckrEFto7d/xyQMAvEWa7W681mu9vtttvNZr3eHxAly4tVmJdVVVLs60ZEQOZtsdruRhDEZv/WNkdMorq8DYIgLBLmbdPpCTABBNHvyrGgr9sR2Ow5F+8ES/TjJnu4G5BPcCI4A9hvwxyoCawCA28JHELm4xzZDZhHAUEdHQuBdfwwWIIM05wJLqyzBEtEcQTWA5AEZySpCU6AsgQuBRmB1Q8gfgDixyUOBOMuFUHukoKGgMWGoE4KXn8TLj0HHiWBAGMIDlEBAQtCHMFHVEDw3NfldrEmBQQsYES6hCOY/OLa5W+YRgRgpp+7I+Ism/j0rwpJDgZ/ROGfybyGzoSG19p577RXg/e8ay0GBWVkZsII3ggvtYEW0jkzKCmdlxKfYBM77RC96kYAAAAASUVORK5CYII=",
        },
        {
          title: "TripFox",
          desc: "Full Stack Developer (Feb-Apr)",
          logo: "https://assets.travclan.com/unsafe/0x100/smart/https://s3.ap-south-1.amazonaws.com/com.travclan.b2b2c/logo/15410/1719062112.412017/0.6234276049652469/tripfox_logo.jpg",
        },
      ],
    },
  ];

  static skills: Array<ITitledListItem> = [
    {
      text: "Programming / Markup Languages",
      arr: [
        {
          title: "C++",
          logo: "https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png",
        },
        {
          title: "JavaScript",
          logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
        },
        {
          title: "HTML",
          logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
        },
        {
          title: "CSS",
          logo: "https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png",
        },
        {
          title: "TypeScript",
          logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
        },
      ],
    },
    {
      text: "Databases",
      arr: [
        {
          title: "MongoDB",
          logo: "https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png",
        },
        {
          title: "SQL",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/ffeb437f-0d63-40e5-9bc3-041d5715d67e",
        },
      ],
    },
    {
      text: "UI Component Libraries",
      arr: [
        {
          title: "Material-UI",
          logo: "https://mui.com/static/logo.png",
        },
        {
          title: "Shadcn",
          logo: "https://ui.shadcn.com/favicon.ico",
        },
        {
          title: "Tailwind CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042",
        },
        {
          title: "Bootstrap",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
        },
      ],
    },
    {
      text: "Libraries / Frameworks / Techs",
      arr: [
       
        {
          title: "NodeJS",
          logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
        },
        {
          title: "ExpressJS",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/f38ec9f9-a921-4c96-8fb3-f2a598c1d0b4",
        },
        {
          title: "ReactJS",
          logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        },
        {
          title: "Redux",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/77226ad4-1e3a-46ac-b287-e41ee5b5fec7",
        },
        {
          title: "React Native",
          logo: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
        },
        
        
        {
          title: "Mongoose",
          logo: "https://avatars.githubusercontent.com/u/7552965?s=200&v=4",
        },
        {
          title: "NextJS",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/1b988896-5ab2-42b4-a4f3-153d42c6488c",
        },
        
        {
          title: "Firebase",
          logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
       
        {
          title: "Docker",
          logo: "https://cdn.iconscout.com/icon/free/png-128/docker-226091.png",
        },
        {
          title: "Git",
          logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        },
        {
          title: "Expo",
          logo: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
        },
        
      ],
    },
    {
      text: "Others",
      arr: [
        
       
        {
          title: "VS Code",
          logo: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
        },
       
        {
          title: "AWS",
          logo: "https://cdn.iconscout.com/icon/free/png-128/aws-1869025-1583149.png",
        },
       
        {
          title: "Figma",
          logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        },
        
       
        {
          title: "npm",
          logo: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg",
        },
        
        
        {
          title: "Linux",
          logo: "https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png",
        },
        {
          title: "Adobe Photoshop",
          logo: "https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg",
        },
        {
          title: "Adobe Illustrator",
          logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator-40.svg",
        },
        {
          title: "Adobe After Effects",
          logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects.svg",
        },
        {
          title: "Adobe Premiere Pro",
          logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg",
        },

      ],
    },
  ];

  static projects: Array<ITitledListItem> = [
    {
      text: "Web Apps",
      arr: [
        
        {
          title: "Coders Book",
          link: "https://labbook-frontend.vercel.app/",
          logo: "./img/file.png",
          desc: "Coders Book is a platform where users can download books related to coding, making it easier for developers and learners to access valuable resources in one place. ",
        },
        {
          title: "Coders Book Admin",
          link: "https://labbook-admin.vercel.app/dashboard/home",
          logo: "./img/file.png",
          desc: "Coders Book Admin Section is a management interface where administrators can upload, categorize, and manage the coding books available on the platform.  ",
        },
        {
          title: "JobSeeker",
          link: "https://github.com/Rahu1kr/JobSeeker",
          logo: "./img/AdobeStock_562409058_Preview.png",
          desc: "JobSeeker is a platform which allows job seekers to browse and apply for jobs posted by employers.",
        },
        {
          title: "CRUD",
          link: "https://github.com/Rahu1kr/CRUD",
          logo: "./img/finance-and-business.png",
          desc: "CRUD Website is a platform that provides a user-friendly interface for managing data through Create, Read, Update, and Delete (CRUD) operations.",
        },
        {
          title: "Authentication",
          link: "https://auth-mauve-six.vercel.app",
          logo: "./img/user-authentication.png",
          desc: "Authentication Website is a dedicated platform that handles user authentication processes, including registration, login, password recovery, and user verification. ",
        },
        {
          title: "Todo",
          link: "https://github.com/Rahu1kr/TODO",
          logo: "./img/to-do-list.png",
          desc: "To-Do Website is a task management platform that helps users organize and track their daily tasks and to-dos.",
        },
        {
          title: "Blog",
          link: "https://github.com/Rahu1kr/Blog",
          logo: "./img/blogging.png",
          desc: "Blog Website is a site where users can write, publish, and manage their blog posts, engaging readers with their content.",
        },
        {
          title: "Portfolio",
          link: "https://github.com/Rahu1kr/Portfolio",
          logo: "./img/portfolio.png",
          desc: "Portfolio Website is a platform for showcasing and highlighting personal or professional work.",
        },
        {
          title: "CSS-Generator",
          link: "https://css-generator-six.vercel.app/",
          logo: "./img/navigation.png",
          desc: "Enables users to customize and preview box shadows by adjusting parameters such as color, blur, spread, Opacity, and position,providing real-time feedback on the generated CSS code.",
        },
        {
          title: "ShoppingCart-ReduxToolkit",
          link: "https://shopping-cart-redux-toolkit-sandy.vercel.app/",
          logo: "./img/shopping-cart.png",
          desc: "Shopping Cart Website is a platform that allowing users to add, view, and manage items in their cart.",
        },
        {
          title: "20-ReactJs_Projects ",
          link: "https://github.com/Rahu1kr/20-ReactJs_Projects",
          logo: "./img/react.png",
          desc: "20 React Projects - From Beginner to Advanced Level Welcome to my challenge where I built 20 React projects from beginner to advanced level.",
        },
        {
          title: "31_Projects-31_Days",
          link: "https://github.com/Rahu1kr/31_Projects-31_Days_January",
          logo: "./img/hard-work_12095034.png",
          desc: "31 Projects in 31 Days - Welcome to my challenge where I built 31 projects in 31 days using HTML, CSS, and JavaScript!",
        },
        
      ],
    },
    // {
    //   text: "iOS Apps",
    //   arr: [
    //     {
    //       title: "Adblock for YT",
    //       link: "https://apps.apple.com/au/app/adblock-for-youtube/id1592568016",
    //       logo: "https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/65/7e/a8/657ea8d9-c3aa-6951-38c8-948c05cd96c3/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/246x0w.webp",
    //       desc: "Removes ads from YT videos, embedded videos on third party websites and streams.",
    //     },
    //     {
    //       title: "Al Quran by Quran Touch",
    //       link: "https://apps.apple.com/gb/app/al-quran-by-quran-touch/id585240351",
    //       logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
    //       desc: "The most comprehensive Muslim App!",
    //     },
    //   ],
    // },
    // {
    //   text: "Android Apps",
    //   arr: [
    //     {
    //       title: "Al Quran by Quran Touch",
    //       link: "https://www.apkmonk.com/app/com.qurantouch.qurantouchhd.app/",
    //       logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
    //       desc: "The most comprehensive Muslim App!",
    //     },
    //     {
    //       title: "Thamao",
    //       logo: "https://cdn.apkmonk.com/logos/com.thamao_150x150.png",
    //       desc: "বাংলাদেশে স্মার্টফোনের চুরি এবার অসম্ভব",
    //       link: "https://www.apkmonk.com/app/com.thamao/",
    //     },
    //     {
    //       title: "Desplash",
    //       logo: "https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180",
    //       desc: "Automatic Free High Quality Wallpapers powered by Unsplash.com",
    //       link: "https://www.xda-developers.com/desplash-wallpaper-app-unsplash/",
    //     },
    //     {
    //       title: "The Great Postman",
    //       logo: "https://lh3.googleusercontent.com/ni-lk3b2nTMZyC7r1wYBW6cm9eYqGAN-t6fXV-kD0lSyw1lO3kenC1We71fZjSryvFII=s180",
    //       desc: "Powerful, Lightweight REST API client for Android",
    //       link: "https://apkcombo.com/es/rest-api-client-the-great-postman/p32929.greatpostman/",
    //     },
    //     {
    //       title: "Sleepy - Addiction Remover",
    //       logo: "https://user-images.githubusercontent.com/6418354/192146268-29e1bac2-e477-4010-ae03-96adecbf07e6.png",
    //       desc: "The one and only EFFECTIVE addiction remover on Google Play store",
    //       link: "https://apkcombo.com/es/sleepy-phone-addiction-controller/p32929.lazyphone/",
    //     },
    //     {
    //       title: "Best CGPA Calculator",
    //       logo: "https://user-images.githubusercontent.com/6418354/192146303-6e04c9ac-ffb2-4931-bb10-ef54ff7af382.png",
    //       desc: "A simple yet effective CGPA Calculator for University students",
    //       link: "https://apkcombo.com/es/cgpa-calculator-for-update-see-the-description/p32929.cgpa_calculator/",
    //     },
    //     {
    //       title: "Buy Sell BD",
    //       logo: "https://image.winudf.com/v2/image1/cDMyOTI5LmJ1eXNlbGxiZF9pY29uXzE1NTkyOTQ5NjVfMDYz/icon.png?w=170&fakeurl=1",
    //       desc: "A better & more reliable alternative for Bikroy.com - A marketplace app for buying-selling new/used goods",
    //       link: "https://apkcombo.com/es/buy-sell-bd-buy-sell-everything-easily-in-bd/p32929.buysellbd/",
    //     },
    //     {
    //       title: "ExIn",
    //       logo: "https://lh3.googleusercontent.com/X8mRJd7JajvDXoW7NaluKt2IvC3osH6czkTPoWeSYJ96U2LWLKT4xiFgvNouwf-UvEk=s180",
    //       desc: "A Simple & user friendly income-expense tracker ",
    //       link: "https://apkcombo.com/es/exin-discontinued/p32929.exin/",
    //     },
    //     {
    //       title: "I am free",
    //       logo: "https://image.winudf.com/v2/image1/cDMyOTI5LmltZnJlZV9pY29uXzE1NzY4ODAwNzVfMDU3/icon.png?w=170&fakeurl=1",
    //       desc: "বেকার মুক্ত বাংলাদেশ গড়ার লক্ষ্যে - I am FREE",
    //       link: "https://apkcombo.com/es/i-am-free/p32929.imfree/",
    //     },
    //     {
    //       title: "Awesome NCTB",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5uY3RiX2ljb25fMTU3NjU3MjcwNF8wMjI/icon.png?fakeurl=1",
    //       desc: "Download NCTB Books easily and Free",
    //       link: "https://apkcombo.com/es/awesome-nctb/org.richit.nctb/",
    //     },
    //     {
    //       title: "বৃক্ষ ( Brikkho )",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5icmlra2hvX2ljb25fMTU3MDEyMTU0Ml8wODA/icon.png?fakeurl=1",
    //       desc: "Learn about trees in your fingertips",
    //       link: "https://apkcombo.com/es/%E0%A6%AC%E0%A7%83%E0%A6%95%E0%A7%8D%E0%A6%B7-brikkho/org.richit.brikkho/",
    //     },
    //     {
    //       title: "IQQuiz",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5pcXF1aXphcHBfaWNvbl8xNTcxMDE0NzcxXzA2Mg/icon.png?fakeurl=1",
    //       desc: "A simple IQ game",
    //       link: "https://apkcombo.com/es/iqquiz/org.richit.iqquizapp/",
    //     },
    //     {
    //       title: "BirdsLover",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5iaXJkc2xvdmVyX2ljb25fMTU3MjAwNDIxNl8wOTE/icon.png?fakeurl=1",
    //       desc: "Learn about birds in your fingertips",
    //       link: "https://apkcombo.com/es/birdslover/org.richit.birdslover/",
    //     },
    //     {
    //       title: "Animal Lover",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5hbmltYWxfaWNvbl8xNTc3MjkyMzIzXzAyMw/icon.png?fakeurl=1",
    //       desc: "Learn about birds in your fingertips",
    //       link: "https://apkcombo.com/es/animal-lover/org.richit.animal/",
    //     },
    //     {
    //       title: "Jibanananda Recitation (Abritti)",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5qaWJvbmFuZG9rb2JpdGFzb21vZ3JvX2ljb25fMTU3MDEwNDExNF8wNDc/icon.png?fakeurl=1",
    //       desc: "50+ poems of Jibanananda Das with audio recitation",
    //       link: "https://apkcombo.com/es/jibanananda-recitation-abritti/org.richit.jibonandokobitasomogro/",
    //     },
    //     {
    //       title: "MathLover (Simple, Infinite, Math game)",
    //       logo: "https://lh3.googleusercontent.com/GaisH_-MeK2c_ct4kp5qbqxbJPE-q4isTdZswR4CocgB8sLNCFk4beXdlmaaFuveKUwd",
    //       desc: "MathLover is a simple, infinite mathematical problem solving game for everyone.",
    //       link: "https://apkcombo.com/es/mathlover-simple-infinite-math-game/org.richit.mathblitz/",
    //     },
    //     {
    //       title: "Hospitals BD",
    //       logo: "https://lh3.googleusercontent.com/MMfY8vG1YfAFh1w6iHEp8NXCwl-NSCUDmfPkUAWmqhSGfO3JR7vBvw_XZzV8JxrDag",
    //       desc: "Get nearest Hospital Information in Bangladesh in your fingertips",
    //       link: "https://apkcombo.com/es/hospitals-bd/org.richit.contacthospitals/",
    //     },
    //     {
    //       title: "BirthdayBot",
    //       logo: `https://cdn.iconscout.com/icon/premium/png-256-thumb/gift-2990371-2484427.png`,
    //       desc: "Birthday wishing apps, made for individual people...",
    //       link: "https://github.com/p32929/my_android_apps/releases/tag/all",
    //     },
    //   ],
    // },
    // {
    //   text: "Desktop Apps",
    //   arr: [
    //     {
    //       title: "PotatoTimer",
    //       logo: "https://raw.githubusercontent.com/p32929/PotatoTimer/master/resources/icon.ico",
    //       desc: "A pomotodo app that forces you to take a break - created using ElectronJS",
    //       link: "https://github.com/p32929/Electron-Pomotodo",
    //     },
    //     {
    //       title: "Pomota",
    //       logo: "https://github.com/p32929/pomota/blob/master/src-tauri/icons/128x128.png?raw=true",
    //       desc: "A simple user-friendly cross-platform tauri based pomodoro timer app that forces you to take a break",
    //       link: "https://github.com/p32929/pomota",
    //     },
    //     {
    //       title: "google calender widget",
    //       logo: "https://duckduckgo.com/i/e2d8001c.png",
    //       desc: "An unofficial google calendar desktop widget for Windows, Mac and Linux ",
    //       link: "https://github.com/p32929/google-calender-widget",
    //     },
    //     {
    //       title: "MacJuiceMonitor",
    //       logo: "https://github.com/user-attachments/assets/21b4d0ac-1734-4d42-9da4-e873628a022a",
    //       desc: "Your essential tool for keeping track of all your Bluetooth-connected devices' battery levels, conveniently located in the macOS menu bar",
    //       link: "https://github.com/p32929/mac-juice-monitor",
    //     },
    //   ],
    // },
    // {
    //   text: "Command Line Interfaces ( CLIs )",
    //   arr: [
    //     {
    //       title: "Shortcut Virus Remover",
    //       logo: "https://cdn-icons-png.flaticon.com/128/3223/3223766.png",
    //       desc: "Shortcut virus remover script for Windows",
    //       link: "https://github.com/p32929/Shortcut-Virus-Remover",
    //     },
    //     {
    //       title: "Fay",
    //       logo: "https://crates.io/assets/cargo.png",
    //       desc: "A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands",
    //       link: "https://crates.io/crates/fay",
    //     },
    //     {
    //       title: "SIIN",
    //       logo: "https://crates.io/assets/cargo.png",
    //       desc: "A batch installer that downloads and installs a list of apps, written in Rust ( Kinda like Ninite )",
    //       link: "https://crates.io/crates/siin",
    //     },
    //   ],
    // },
    // {
    //   text: "Automations",
    //   arr: [
    //     {
    //       title: "Dingtone Bot",
    //       logo: "https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf",
    //       desc: "A bot made using Python and UIAutomator2 to automate watching ads on certain apps to get credits",
    //       link: "https://drive.google.com/file/d/159D_tco3qkpgh2a3CWz-f0ixPEpeUN8V/view?usp=sharing",
    //     },
    //     {
    //       title: "Indeed-Linkedin bot",
    //       logo: "https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf",
    //       desc: "An automation bot created using playwright to automate applying jobs on Indeed and Linkedin",
    //       link: "https://drive.google.com/file/d/10Xc4Y0Z5KXxKhb9StF3bQfivYHHeNZsa/view?usp=sharing",
    //     },
    //   ],
    // },
    // {
    //   text: "Libraries / Packages / Crates",
    //   arr: [
    //     {
    //       title: "AndroidEasySQL-Library",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "An Easier & Lazier approach to SQL database for Android",
    //       link: "https://github.com/p32929/AndroidEasySQL-Library",
    //     },
    //     {
    //       title: "AndroidAppLockscreen",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "An Easier & Lazier approach to getting runtime permission in Android ",
    //       link: "https://github.com/p32929/AndroidAppLockscreen",
    //     },
    //     {
    //       title: "Manufacturer Battery Optimization",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "Simple helper class for Android Battery Optimization ignoring in some devices",
    //       link: "https://gist.github.com/p32929/41e7af650f6a2c11e9306ab600fb9b03",
    //     },
    //     {
    //       title: "MyHouse Ads Android",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A library for cross promoting own apps within own apps - for Android",
    //       link: "https://github.com/p32929/MyHouseAdsAndroid",
    //     },
    //     {
    //       title: "House Ads 2",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A library ( V2 ) for cross promoting own apps within own apps - for Android",
    //       link: "https://github.com/p32929/HouseAds2",
    //     },
    //     {
    //       title: "Android App Updater",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple, Lightweight App Updater Library for Android",
    //       link: "https://github.com/p32929/AndroidAppUpdater",
    //     },
    //     {
    //       title: "Office About",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple about screen library for Android for a Team of people",
    //       link: "https://github.com/p32929/OfficeAbout",
    //     },
    //     {
    //       title: "Json Viewer Android",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple JSON Viewer for Android",
    //     },
    //     {
    //       title: "Android Receivers Library",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A library for simpler BroadcastReceiver implementations",
    //     },
    //     {
    //       title: "Fay",
    //       logo: "https://crates.io/assets/cargo.png",
    //       desc: "A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands",
    //       link: "https://crates.io/crates/fay",
    //     },
    //     {
    //       title: "fayfetch",
    //       logo: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    //       desc: "A simple wrapper for Fetch",
    //       link: "https://www.npmjs.com/package/fayfetch",
    //     },
    //     {
    //       title: "fjsondb",
    //       logo: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    //       desc: "A fast and simple JSON database for NodeJS",
    //       link: "https://www.npmjs.com/package/fjsondb",
    //     },
    //     {
    //       title: "str_template",
    //       logo: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    //       desc: "A fast and simple string templating library, written in TypeScript ( Supports both Client side and Server side JavaScript / TypeScript )",
    //       link: "https://www.npmjs.com/package/str-template-ts",
    //     },
    //     {
    //       title: "use-megamind",
    //       logo: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    //       desc: " A simple react hook for managing asynchronous function calls with ease on the client side ",
    //       link: "https://github.com/p32929/use-megamind",
    //     },
    //     {
    //       title: "EasiestDB",
    //       logo: `https://cdn.iconscout.com/icon/free/png-256/free-flutter-3521432-2944876.png`,
    //       desc: "The Easiest and the Laziest approach to Flutter SQL Database.",
    //       link: "https://pub.dev/packages/easiestdb",
    //     },
    //     {
    //       title: "Simply Wifi",
    //       logo: `https://cdn.iconscout.com/icon/free/png-256/free-flutter-3521432-2944876.png`,
    //       desc: "A simplified version of the wifi_iot package",
    //       link: "https://pub.dev/packages/simply_wifi",
    //     },
    //     {
    //       title: "audio_duration",
    //       logo: `https://cdn.iconscout.com/icon/free/png-256/free-flutter-3521432-2944876.png`,
    //       desc: "Just a simple flutter package to get the duration of any audio file ( like: mp3 ) in milliseconds",
    //       link: "https://pub.dev/packages/audio_duration",
    //     },
    //   ],
    // },
    // {
    //   text: "Extensions / Plugins / Addons",
    //   arr: [
    //     {
    //       title: "vscode nvim leave insertmode",
    //       logo: "https://code.visualstudio.com/assets/images/code-stable.png",
    //       desc: "This basic VSCode extension ensures that neovim is in normal mode switching between text editor panels.",
    //       link: "https://marketplace.visualstudio.com/items?itemName=p32929.vscode-nvim-leave-insertmode",
    //     },
    //     {
    //       title: "one console log",
    //       logo: "https://code.visualstudio.com/assets/images/code-stable.png",
    //       desc: "A modified version of the turbo-console-log that adds only one line of console instead of multiples.",
    //       link: "https://marketplace.visualstudio.com/items?itemName=p32929.one-console-log",
    //     },
    //     {
    //       title: "Home",
    //       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png",
    //       desc: "A Simple homepage extension created using Shadcn, React, TypeScript, usm-redux etc ",
    //       link: "https://github.com/p32929/Home",
    //     },
    //     {
    //       title: "obsidotion",
    //       logo: "https://obsidian.md/images/obsidian-logo-gradient.svg",
    //       desc: "Asimple obsidian plugin that syncs from/to obsidian/notion ",
    //       link: "https://github.com/p32929/obsidotion",
    //     },
    //   ],
    // },
  ];

  static contacts: Array<ITitledListItem> = [
    {
      text: "Contact me",
      arr: [
        {
          title: "WhatsApp ( Recommended )",
          logo: "https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png",
          link: "https://api.whatsapp.com/send?phone=9576830189",
          desc: "+919576830189",
        },
        {
          title: "Email",
          logo: "https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png",
          desc: "krahulr12345@gmail.com",
          link: "krahulr12345@gmail.com",
        },
        {
          title: "Telegram",
          logo: "https://cdn-icons-png.flaticon.com/128/2111/2111646.png",
          desc: "@rahu1_kr",
          link: "https://t.me/rahu1_kr",
        },
      ],
    },
    {
      text: "Others",
      arr: [
        
        {
          title: "GitHub",
          logo: "https://cdn-icons-png.flaticon.com/128/1051/1051275.png",
          link: "https://github.com/Rahu1kr",
        },
        {
          title: "LinkedIn",
          logo: "https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png",
          link: "https://www.linkedin.com/in/rahu1kr/",
        },
        
        {
          title: "Twitter",
          logo: "https://user-images.githubusercontent.com/6418354/155841031-532d5d6e-797a-4da1-8064-48d266b69ab2.png",
          link: "https://x.com/KumarRahul58739",
        },
      ],
    },
    {
      text: "Thank you for visiting my portfolio  ©Rahul Kumar",
      arr: [
        
      ],
    },
  ];
}

//
// Dont change anything below this line
//
export const combinedInformation: ICombinedInformation = {
  initialInformation: DynamicValues.initialInformation,
  directMessageItems: DynamicValues.directMessageItems,
  routes: [
    {
      name: "About",
      items: DynamicValues.about,
    },
    {
      name: "Skills",
      items: DynamicValues.skills,
    },
    {
      name: "Projects",
      items: DynamicValues.projects,
    },
    {
      name: "Contact",
      items: DynamicValues.contacts,
    },
  ],
};
