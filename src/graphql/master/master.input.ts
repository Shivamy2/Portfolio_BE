export const inputTypes = `#graphql
    input DescriptionInput {
        values: String
        literals: [String]
    }  

    input SocialLinksInput {
        github: String!
        linkedin: String!
        twitter: String
        youtube: String
        reddit: String
        dev: String
        medium: String
        instagram: String
    }

    input HomeInput {
        inputwriterText: String!
        description: DescriptionInput!
        socialLinks: SocialLinksInput!
    }

    input AboutInput {
        title: String!
        myIntroduction: DescriptionInput!
        knowMeDescription: DescriptionInput
        skills: [String]
    }

    input ProjectDetailsInput {
        title: String
        shortDescription: DescriptionInput
        longDescription: DescriptionInput
        overview: DescriptionInput
        points: [DescriptionInput]
        stackUsed: [String]
        imageUrl: String
        pocUrl: String
        hostedUrl: String
    }

    input ProjectsInput {
        title: String
        introduction: DescriptionInput
        personalProjectsDetails: [ProjectDetailsInput]
        professionalProjectsDetails: [ProjectDetailsInput]
    }
    
    input ContactInput {
        title: String
        introduction: DescriptionInput
        email: String
        name: String
        message: String
    }
  
    input Certificates {
        title: string;
        description: IDescription;
        link: string;
        date: Date;
    }

    
    input ExperienceDetails {
        employerName: string;
        employerLocation: string;
        position: string;
        joiningDate: Date;
        endingData: Date | "Present";
        overview: IDescription;
        points: IDescription[];
        techStackLearned: ESkills[];
    }

    input Experience {
        title: string;
        introduction: string;
        companies: ExperienceDetails[];
    }


    input EmployeeDetailsInput {
        name: String
        dpUrl: String
        userCode: Int
        home: HomeInput
        about: AboutInput
        contact: ContactInput
        projects: ProjectsInput
        experience: Experience
        certification: Certificates 
    }

    input MasterInput {
        headerOptions: [String]
        details: [EmployeeDetailsInput]
    }
`;
