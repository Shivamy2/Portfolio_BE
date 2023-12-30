import { ELiterals, ESkills, IMaster } from "./graphql/master/master.interface";

const myData: IMaster = {
  headerOptions: ["home", "about", "projects", "contact"],
  details: [
    {
      userCode: "2312",
      name: "Shivam Yadav",
      introduction: {
        values:
          "A Full-Stack focused Wed Developer proficient in both frontend and backend languages and frameworks, as well as in server, network and hosting environments",
      },
      dpUrl: "https://i.ibb.co/nrjdfGM/passport-Pic.jpg",
      home: {
        typewriterText: "hey, i'm shivam yadav",
        description: {
          values: `Hardworking and passionate job seeker with strong organizational skills eager to secure $1 position. Ready to help team achieve Fcompany goals. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet $2`,
          literals: [
            [ELiterals.BOLD, "Software Developer"],
            [ELiterals.ITALIC, "team goals"],
          ],
        },
        socialLinks: {
          github: "https://github.com/Shivamy2",
          linkedin: "https://www.linkedin.com/in/shivamy2/",
          instagram: "https://www.instagram.com/the_ssingstar",
        },
      },
      about: {
        title: "About Me",
        myIntroduction: {
          values:
            "Here you will find more information about me, what I do, and my current skills mostly in terms of $1",
          literals: [[ELiterals.ITALIC, "programming and technology"]],
        },
        knowMeDescription: {
          values:
            "I'm a Full Stack Developer working at Front-end and Back-end side of Web Applications that leads to the success of overall product. \n I have worked on many projects including $2, and many adhocs. I've worked with Team Leads, Project Managers to solve business logics and contribute in optimisation of system. \n I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to $1 me.",
          literals: [
            [ELiterals.BOLD, "contact"],
            [ELiterals.ITALIC, "Insurance, Banca, E-commerce"],
          ],
        },
        skills: [
          ESkills.HTML,
          ESkills.CSS,
          ESkills.STYLING,
          ESkills.JS,
          ESkills.TS,
          ESkills.REACT,
          ESkills.REACT_SIDEWAYS,
          ESkills.VALIDATIONS,
          ESkills.STORYBOOK,
          ESkills.SEO,
          ESkills.AWS,
          ESkills.BE,
          ESkills.GRAPHQL,
          ESkills.DB_NO_SQL,
          ESkills.DB_SQL,
          ESkills.AZURE,
          ESkills.HOST,
          ESkills.TERMINAL,
          ESkills.SPRINGBOOT,
          ESkills.MOBILE,
          ESkills.JAVA,
        ],
      },
      projects: {
        title: "Project",
        introduction: {
          values:
            "Here you will find some of the personal and clients projects that I created with each project containing its own case study",
        },
        personalProjectsDetails: [
          {
            title: "Dopefolio",
            overview: {
              values:
                "I made this website $1 such any person who need portfolio could dump data into db and can see whole $2. This website is totally configurable with heading and content, profile picture and header options.",
              literals: [
                [ELiterals.BOLD, "generic"],
                [ELiterals.ITALIC, "resume into portfolio"],
              ],
            },
            shortDescription: {
              values:
                "This page contains the case study of Dopefolio Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.",
            },
            stackUsed: [
              ESkills.HTML,
              ESkills.CSS,
              ESkills.TS,
              ESkills.JS,
              ESkills.REACT,
              ESkills.DB_NO_SQL,
              ESkills.STYLING,
              ESkills.GRAPHQL,
              ESkills.HOST,
              ESkills.BE,
            ],
            hostedUrl: "",
            imageUrl: "",
            pocUrl:
              "https://github.com/Shivamy2/Portfolio_FE|https://github.com/Shivamy2/Portfolio_BE",
            points: [
              {
                values:
                  "Dopefolio is a $1 with simple and clead multi-page $2 for Employees. I made this portfolio website generic such that people don't have to code from scratch, they just need to $3 and dopefolio is up and running for them",
                literals: [
                  [ELiterals.BOLD, "Single Page Application"],
                  [ELiterals.ITALIC, "portfolio website"],
                  [ELiterals.ITALIC, "dump their resume data into db"],
                ],
              },
              {
                values:
                  "Since I made this website, $1 have used my website to make their portfolio without any hassle.",
                literals: [
                  [ELiterals.BOLD, "more than twenty to thirty of my friends"],
                ],
              },
              {
                values:
                  "I made this website open-source, so if any of the developers have a great suggestion to add a section or any improvement, I am ready to take it. Feel free to checkout $1",
                literals: [
                  [
                    ELiterals.LINK,
                    "here",
                    "https://github.com/Shivamy2/Portfolio_FE|https://github.com/Shivamy2/Portfolio_BE",
                  ],
                ],
              },
            ],
          },
          {
            title: "Trainica",
            overview: {
              values:
                "This is a Training Management Project. I made this website after my $2. Ongoing with the training I observed my $1 in giving the assignments and checking it. Even he didn't have the records of the trainees.",
              literals: [
                [ELiterals.BOLD, "trainer have to do a lot of manual work"],
                [ELiterals.ITALIC, "training in React, Redux, Saga"],
              ],
            },
            shortDescription: {
              values:
                "This page contains the case study of Trainica Project which includes the Project Overview, Tools Used and Live Links to the official product.",
            },
            stackUsed: [
              ESkills.HTML,
              ESkills.CSS,
              ESkills.TS,
              ESkills.JS,
              ESkills.REACT,
              ESkills.REACT_SIDEWAYS,
              ESkills.VALIDATIONS,
              ESkills.STORYBOOK,
              ESkills.DB_SQL,
              ESkills.STYLING,
              ESkills.HOST,
              ESkills.SPRINGBOOT,
            ],
            hostedUrl: "",
            imageUrl: "",
            pocUrl:
              "https://github.com/Shivamy2/training-management|https://github.com/Shivamy2/Training-management-backend",
            points: [
              {
                values:
                  "This is a $1 where trainers can manage their trainee's data. They can $2 and also provide references, check assignments, etc.",
                literals: [
                  [ELiterals.BOLD, "training-management software"],
                  [ELiterals.ITALIC, "assign daily assignments"],
                ],
              },
              {
                values:
                  "I used ReactJS with Redux and Saga on Front-End for efficient page rendering and optimisation with global store. Spring Boot for Back-End and Postgres database for storing the user's data. JWT tokens are used on the server-side for security purposes.",
                literals: [[ELiterals.BOLD, "efficient page rendering"]],
              },
            ],
          },
          {
            title: "Time Bank",
            overview: {
              values:
                "This is Time Bank. I made this website for my $2. I observed people have to pay for learning skills. For me, $1, so this I used the concept of time bank to $3 for learning skills.",
              literals: [
                [ELiterals.BOLD, "time is money"],
                [ELiterals.ITALIC, "major-project in college"],
                [ELiterals.BOLD, "prioritize time over the money"],
              ],
            },
            shortDescription: {
              values:
                "This page contains the case study of Time Bank which includes the Project Overview, Tools Used and Live Links to the official product.",
            },
            stackUsed: [
              ESkills.HTML,
              ESkills.CSS,
              ESkills.TS,
              ESkills.JS,
              ESkills.REACT,
              ESkills.REACT_SIDEWAYS,
              ESkills.DB_SQL,
              ESkills.STYLING,
              ESkills.HOST,
            ],
            hostedUrl: "",
            imageUrl: "",
            pocUrl: "https://github.com/DevRyth",
            points: [
              {
                values:
                  "A platform where the $2 instead of money. Users can learn($1) a skill by enrolling in a course(skill) and $3 by teaching some skills",
                literals: [
                  [ELiterals.BOLD, "use time"],
                  [ELiterals.ITALIC, "transfer of time occurs"],
                  [ELiterals.BOLD, "earn time"],
                ],
              },
              {
                values:
                  "This was a $1 where I was a $2, responsible for the making BE, FE UI and functions, $3 wherever got stuck in the project.",
                literals: [
                  [ELiterals.BOLD, "team project"],
                  [ELiterals.BOLD, "team lead"],
                  [ELiterals.ITALIC, "LLD, workflow, and guiding team"],
                ],
              },
              {
                values:
                  "We used MERN Stack with Redux and Saga for $1. HTML and Tailwind CSS for designing, git for every new feature release, and Scrum meetings on every 3 days of work",
                literals: [
                  [
                    ELiterals.ITALIC,
                    "high performance and efficient page loading",
                  ],
                ],
              },
            ],
          },
        ],
        professionalProjectsDetails: [
          {
            title: "AFLI: Ageas Federal Life Insurance",
            overview: {
              values:
                "This is a client project which we started from $1. This is a $2 product which offers Insurance to the people who opt for home loans. \n $3",
              literals: [
                [ELiterals.BOLD, "Scratch"],
                [ELiterals.BOLD, "BANCA"],
                [ELiterals.ITALIC, "I was a shadow resource here."],
              ],
            },
            shortDescription: {
              values:
                "This page contains the case study of AFLI which includes the Project Overview, Tools Used and Live Links to the official product.",
            },
            stackUsed: [
              ESkills.AZURE,
              ESkills.BE,
              ESkills.HTML,
              ESkills.CSS,
              ESkills.STYLING,
              ESkills.TS,
              ESkills.JS,
              ESkills.REACT,
              ESkills.REACT_SIDEWAYS,
              ESkills.VALIDATIONS,
              ESkills.DB_SQL,
            ],
            hostedUrl: "https://creditlifeconnectuat.ageasfederal.com",
            imageUrl: "",
            pocUrl: "",
            longDescription: {
              values:
                "$1 is one of India's prominent life insurance companies that strives towards creating value for its stakeholders. We are a $2 based out of Europe and Federal Bank, one of India's leading private sector banks. $3",
              literals: [
                [ELiterals.BOLD, "Ageas Federal Life Insurance (AFLI)"],
                [
                  ELiterals.ITALIC,
                  "joint venture between Ageas, an international insurance giant",
                ],
                [ELiterals.BOLD, "I am a billing resource here"],
              ],
            },
            points: [
              {
                values:
                  "$4 We made this project(Front-end + Back-end) from $1. For efficiency in this $2 we used memoization, tanstack-query for $3 (on FE). Integrated SSO Login through $5.",
                literals: [
                  [ELiterals.BOLD, "Scratch"],
                  [ELiterals.ITALIC, "Single Page Application"],
                  [ELiterals.ITALIC, "optimising API calls"],
                  [ELiterals.BOLD, "Front-End:"],
                  [ELiterals.ITALIC, "Azure Authentication"],
                ],
              },
              {
                values:
                  "We are using $1 for theming and better access in writing CSS code without having massive load of chunks/bundle. Also using, $2 for accessing global reducer variables within the App.",
                literals: [
                  [ELiterals.BOLD, "Materal UI with TailwindCSS"],
                  [ELiterals.ITALIC, "Redux with Thunk"],
                ],
              },
              {
                values:
                  "$1 I'm also working with BE Team for making $2, filter & search functionality, debugging the code, etc.",
                literals: [
                  [ELiterals.BOLD, "Back-end:"],
                  [ELiterals.BOLD, "Master APIs"],
                ],
              },
            ],
          },
          {
            title: "TATA AIG",
            overview: {
              values:
                "This is a client project which is already deployed. An insurace website which has more than 20 products including $1, etc. \n $2",
              literals: [
                [
                  ELiterals.BOLD,
                  "health, travel, motor, marine, renewal of products",
                ],
                [ELiterals.ITALIC, "I was a shadow resource here."],
              ],
            },
            shortDescription: {
              values:
                "This page contains the case study of TATA AIG which includes the Project Overview, Tools Used and Live Links to the official product.",
            },
            stackUsed: [
              ESkills.AWS,
              ESkills.BE,
              ESkills.HTML,
              ESkills.CSS,
              ESkills.STYLING,
              ESkills.TS,
              ESkills.JS,
              ESkills.REACT,
              ESkills.REACT_SIDEWAYS,
              ESkills.VALIDATIONS,
              ESkills.DB_NO_SQL,
            ],
            hostedUrl: "https://www.tataaig.com/",
            imageUrl: "",
            pocUrl: "",
            longDescription: {
              values:
                "Tata AIG General Insurance Company Limited is a joint venture company between $1 (AIG). The server is based on $2 where each product is treated as a micro-service and $3. \n In this project I worked on both Back-end, Wrapper(Foyer), and Front-end for single product",
              literals: [
                [ELiterals.BOLD, "Tata Group and American International Group"],
                [ELiterals.BOLD, "micro-services"],
                [ELiterals.ITALIC, "each API is a lambda"],
              ],
            },
            points: [
              {
                values:
                  "$1 This is a wrapper for partners as well as new business portal. It $2(IPDS) and response back to the BE. API Gateway is integrated for $4. \n Here I coded some products from scratch eg: $3, etc. I was a shadow resource, working closely with my mentor and collegues.",
                literals: [
                  [ELiterals.BOLD, "FOYER:"],
                  [ELiterals.BOLD, "integrates 3rd party APIs"],
                  [ELiterals.ITALIC, "renewal, KYC"],
                  [ELiterals.ITALIC, "Cognito token(authorization)"],
                ],
              },
              {
                values:
                  "$1 This is the main BE for new business which is built on $2. It includes the database interaction efficiently with mongodb connection. I learnt using $3. SQS is usually used for messaging services which process the communication by the $4.",
                literals: [
                  [ELiterals.BOLD, "Tagic Server:"],
                  [ELiterals.ITALIC, "Serverless Architecture"],
                  [ELiterals.BOLD, "Serverless, AWS SQS"],
                  [ELiterals.ITALIC, "FIFO architecture in Queue"],
                ],
              },
              {
                values:
                  "$1 This is the Front-end side of the Project which is deployed on $2. Team is using $3 for global store and better variable access compatibility. I worked on $4, I was mainly responsible for making $5. UI was made using HTML5, Bootstrap, SCSS. Fetched an API and populated data on pre-quote, proposal, made flow for the same. I was a shadown resource here.",
                literals: [
                  [ELiterals.BOLD, "Tagic Partner:"],
                  [ELiterals.ITALIC, "AWS S3"],
                  [ELiterals.ITALIC, "Redux and Thunk middleware"],
                  [ELiterals.ITALIC, "GOTG product"],
                  [ELiterals.BOLD, "Pre-Quote, Quote, Proposal page"],
                ],
              },
            ],
          },
        ],
      },
      contact: {
        title: "Contact",
        introduction: {
          values:
            "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible, you can also schedule a meeting with me.",
        },
      },
      experience: {
        title: "Experience",
        introduction:
          "Here you will find the companies/employer I have worked with. Including Internships/Trainings/Full-Time",
        companies: [
          {
            overview: {
              values:
                "Gemini Solutions is a $1 which majorly focus on their client based products. Although, they also started making their own products such as MIS, Athena, Helpdesk, etc. They offer products, services, consulting, etc.",
              literals: [[ELiterals.BOLD, "service-based startup company"]],
            },
            employerName: "Gemini Solutions",
            employerLocation: "Gurugram",
            joiningDate: new Date("04/04/2022"),
            endingDate: "Present",
            position: "Software Development Engineer L1",
            techStackLearned: [
              ESkills.HTML,
              ESkills.CSS,
              ESkills.STYLING,
              ESkills.JS,
              ESkills.TS,
              ESkills.REACT,
              ESkills.REACT_SIDEWAYS,
              ESkills.VALIDATIONS,
              ESkills.AWS,
              ESkills.BE,
              ESkills.DB_NO_SQL,
              ESkills.DB_SQL,
              ESkills.AZURE,
              ESkills.HOST,
            ],
            points: [
              {
                values:
                  "I joined as a trainee into the Gemini Solutions. After 1.2 years of training and intership on a certain projects and assignment, I was promoted for Full-time employment. Worked with software development and testing team members to $1 to meet client requirements for $2",
                literals: [
                  [ELiterals.BOLD, "design and develop robust solutions"],
                  [
                    ELiterals.ITALIC,
                    "functionality, scalability, and performance",
                  ],
                ],
              },
              {
                values:
                  "I worked with Front-end as well as Back-end team for the products which were under development and made from scratch. I contributed in optimising code and server cost. I helped my colleagues and took help whenever required.",
              },
              {
                values:
                  "Mainly worked with Insurance and BANCA projects, and understood various conditional aspects, corner cases. Reviewed project specifications and designed technology solutions that met or exceeded performance expectations",
              },
            ],
          },
          {
            overview: {
              values:
                "Devslane is a fully service-based startup company which majorly rely on their client-based projects. They have $1 which mainly focuses on a quality products.",
              literals: [[ELiterals.BOLD, "US clients"]],
            },
            employerName: "Devslane",
            employerLocation: "Ghaziabad",
            joiningDate: new Date("01/06/2021"),
            endingDate: new Date("31/10/2021"),
            position: "Software Developer Intern",
            techStackLearned: [
              ESkills.HTML,
              ESkills.CSS,
              ESkills.STYLING,
              ESkills.JS,
              ESkills.TS,
              ESkills.REACT,
              ESkills.REACT_SIDEWAYS,
              ESkills.VALIDATIONS,
              ESkills.AWS,
              ESkills.BE,
              ESkills.DB_NO_SQL,
              ESkills.DB_SQL,
              ESkills.AZURE,
              ESkills.HOST,
            ],
            points: [
              {
                values:
                  "Supported development, QA and user experience staff to develop new products. Learned $1 improvements and best practices.",
                literals: [[ELiterals.BOLD, "software engineering process"]],
              },
              {
                values:
                  "Developed Training Management project using $1. Worked with the design team and planning meetings. $2 by resolving issues for optimal results",
                literals: [
                  [ELiterals.ITALIC, "ReactTS, Redux Saga HTML/TailwindCSS"],
                  [ELiterals.BOLD, "Contributed to deployments"],
                ],
              },
            ],
          },
        ],
      },
      certification: {
        title: "Certificates",
        shortDescription: {
          values:
            "Here you will find the certificates which I earned during my college and corporate journey.",
        },
        details: [
          {
            name: "AWS Serverless APIs & Apps",
            overview: {
              values:
                "I learnt Serverless approach of writing BE using NodeJS. Made POCs and micro-service based Lambda",
            },
            date: new Date("01/01/2023"),
            link: "https://www.udemy.com/certificate/UC-54dda4c6-b2bb-4bb5-b19b-4c41ae83614d/",
            skills: [ESkills.AWS, ESkills.BE],
          },
          {
            name: "React",
            overview: {
              values:
                "I learnt React, Redux using JavaScript. Made POCs and assignments which helped me to understand the architecture of React.",
            },
            date: new Date("01/10/2021"),
            link: "https://www.hackerrank.com/certificates/6fadf6da7be4",
            skills: [ESkills.REACT, ESkills.REACT_SIDEWAYS],
          },
          {
            name: "Java",
            overview: {
              values:
                "I learnt Java for SpringBoot framework which enables muti-threading. Made POCs and assignments which helped me to understand the logic better.",
            },
            date: new Date("01/02/2021"),
            link: "https://www.hackerrank.com/certificates/2d4b4da923d2",
            skills: [ESkills.JAVA, ESkills.SPRINGBOOT],
          },
        ],
      },
      theme: {
        primaryDark: "#EB455F",
        primaryLight: "#FCFFE7",
        onPrimary: "#ffffff",
        secondaryDark: "#2B3467",
        secondaryLight: "#BAD7E9",
        onSecondary: "#000000",
        hero: "https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg",
      },
    },
  ],
};

export default myData;
