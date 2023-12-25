export const typeDefs = `#graphql
    type Description {
        values: String
        literals: [String]
    }  

    type SocialLinks {
        github: String
        linkedin: String
        twitter: String
        youtube: String
        reddit: String
        dev: String
        medium: String
        instagram: String
    }

    type Home {
        typewriterText: String
        description: Description
        socialLinks: SocialLinks
    }

    type About {
        title: String
        myIntroduction: Description
        knowMeDescription: Description
        skills: [String]
    }

    type ProjectDetails {
        title: String
        shortDescription: Description
        longDescription: Description
        overview: Description
        points: [Description]
        stackUsed: [String]
        imageUrl: String
        pocUrl: String
        hostedUrl: String
    }

    type Projects {
        title: String
        introduction: Description
        personalProjectsDetails: [ProjectDetails]
        professionalProjectsDetails: [ProjectDetails]
    }
    
    type Contact {
        title: String
        introduction: Description
        email: String
        name: String
        message: String
    }
  
    type Certificates {
        title: string;
        description: IDescription;
        link: string;
        date: Date;
    }

    type EmployeeDetails {
        name: String
        userCode: Int
        home: Home
        about: About
        contact: Contact
        projects: Projects
        certification: Certificates 
    }

    type Master {
        _id: ID!
        headerOptions: [String]
        details: [EmployeeDetails]
    }
`;
