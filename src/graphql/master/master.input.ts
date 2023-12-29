export const inputTypes = `#graphql
    input DescriptionInput {
        values: String
        literals: [[String]]
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

    input CertificateDetailsInput {
        name: String
        overview: DescriptionInput
        link: String
        date: String
        skills: [String]
    }
  
    input CertificatesInput {
        title: String
        description: DescriptionInput
        details: [CertificateDetailsInput]
    }
    
    input ExperienceDetailsInput {
        employerName: String
        employerLocation: String
        position: String
        joiningDate: String
        endingDate: String
        overview: DescriptionInput
        points: [DescriptionInput]
        techStackLearned: [String]
    }

    input ExperienceInput {
        title: String
        introduction: String
        totalExperience: String
        companies: [ExperienceDetailsInput]
    }


    input EmployeeDetailsInput {
        name: String
        dpUrl: String
        userCode: Int
        home: HomeInput
        about: AboutInput
        contact: ContactInput
        projects: ProjectsInput
        experience: ExperienceInput
        certification: CertificatesInput 
    }

    input MasterInput {
        headerOptions: [String]
        details: [EmployeeDetailsInput]
    }

    input GetProjectBySkillInput {
        code: Int!
        skill: String!
    }

    input GetProjectInput {
        id: ID!
        code: Int!
        type: String!
    }
`;
