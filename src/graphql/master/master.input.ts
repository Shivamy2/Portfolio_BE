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

    input ThemeInput {
        primaryDark: String
        primaryLight: String
        onPrimary: String
        secondaryDark: String
        secondaryLight: String
        onSecondary: String
        hero: String
    }

    input EmployeeDetailsInput {
        name: String
        introduction: DescriptionInput
        dpUrl: String
        userCode: String
        home: HomeInput
        about: AboutInput
        contact: ContactInput
        projects: ProjectsInput
        experience: ExperienceInput
        certification: CertificatesInput
        theme: ThemeInput 
    }

    input MasterInput {
        headerOptions: [String]
        details: [EmployeeDetailsInput]
    }

    input GetProjectBySkillInput {
        code: String!
        skill: String!
    }

    input GetProjectInput {
        id: ID!
        code: String!
        type: String!
    }
`;
