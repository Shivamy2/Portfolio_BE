import { IMaster } from "./graphql/master/master.interface";

const obj: IMaster = {
  headerOptions: ["home", "about", "projects", "contact"],
  details: [
    {
      userCode: 2312,
      name: "Shivam Yadav",
      home: {
        typewriterText: "hey, i'm shivam yadav",
        description: {
          values: "",
          literals: "",
        },
        socialLinks: undefined,
      },
    },
  ],
};

export default obj;
