import { ESkills, IMaster } from "./graphql/master/master.interface";

const obj: IMaster = {
  headerOptions: ["home", "about", "projects", "contact"],
  details: [
    {
      userCode: 2312,
      name: "Shivam Yadav",
      home: {
        typewriterText: "hey, i'm shivam yadav",
        description: {
          values: `Hardworking and passionate job seeker with strong organizational skills eager to secure $1 position. Ready to help team achieve Fcompany goals. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet $2`,
          literals: [
            ["b", "Software Developer"],
            ["i", "team goals"],
          ],
        },
        socialLinks: {
          github: "https://github.com/Shivamy2",
          linkedin: "https://www.linkedin.com/in/shivamy2/",
          instagram: "",
        },
      },
      about: {
        title: "About Me",
        myIntroduction: {
          values:
            "Here you will find more information about me, what I do, and my current skills mostly in terms of $1",
          literals: [["i", "programming and technology"]],
        },
        knowMeDescription: {
          values:
            "I'm a Full Stack Developer working at Front-end and Back-end side of Web Applications that leads to the success of overall product. \n I have worked on many projects including $2, and many adhocs. I've worked with Team Leads, Project Managers to solve business logics and contribute in optimisation of system. \n I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to $1 me.",
          literals: [
            ["b", "contact"],
            ["i", "Insurance, Banca, E-commerce"],
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
          ESkills.SEO,
          ESkills.AWS,
          ESkills.BE,
          ESkills.GRAPHQL,
          ESkills.DB_NO_SQL,
          ESkills.DB_SQL,
          ESkills.HOST,
          ESkills.TERMINAL,
          ESkills.SPRINGBOOT,
          ESkills.MOBILE,
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
            title: "Portfolio",
            overview: {
              values:
                "I made this website $1 such any person who need portfolio could dump data into db and can see whole $2. This website is totally configurable with heading and content, profile picture and header options.",
              literals: [
                ["b", "generic"],
                ["i", "resume into portfolio"],
              ],
            },
            shortDescription: {
              values: "",
              literals: [[""]],
            },
            longDescription: {
              values: "",
              literals: [[""]],
            },
            stackUsed: [ESkills.HTML],
            hostedUrl: "",
            imageUrl: "",
            pocUrl:
              "https://github.com/Shivamy2/Portfolio_FE|https://github.com/Shivamy2/Portfolio_BE",
            points: [{ values: "" }],
          },
        ],
        professionalProjectsDetails: [
          {
            title: "",
            overview: {
              values: "",
              literals: [[""]],
            },
            shortDescription: {
              values: "",
              literals: [[""]],
            },
            longDescription: {
              values: "",
              literals: [[""]],
            },
            stackUsed: [ESkills.HTML],
            hostedUrl: "",
            imageUrl: "",
            pocUrl: "",
            points: [{ values: "" }],
          },
        ],
      },
      contact: {
        title: "Contact",
        introduction: {
          values:
            "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible",
        },
      },
      certification: {
        title: "",
        description: {
          values: "",
        },
        link: "",
        date: new Date(),
      },
    },
  ],
};

export default obj;
