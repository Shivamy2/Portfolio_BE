export const typeDefs = `#graphql
    type Description {
        values: String
        literals: [[String]]
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

    type CertificateDetails {
        name: String
        overview: Description
        link: String
        date: String
        skills: [String]
    }
  
    type Certificates {
        title: String
        description: Description
        details: [CertificateDetails]
    }

    type ExperienceDetails {
        employerName: String
        employerLocation: String
        position: String
        joiningDate: String
        endingDate: String
        overview: Description
        points: [Description]
        techStackLearned: [String]
    }

    type Experience {
        title: String
        introduction: String
        totalExperience: String
        companies: [ExperienceDetails]
    }

    type Theme {
        primaryDark: String
        primaryLight: String
        onPrimary: String
        secondaryDark: String
        secondaryLight: String
        onSecondary: String
        hero: String
    }

    type EmployeeDetails {
        name: String
        dpUrl: String
        userCode: Int
        home: Home
        about: About
        contact: Contact
        projects: Projects
        experience: Experience
        certification: Certificates
        theme: Theme
    }

    type Master {
        _id: ID!
        headerOptions: [String]
        details: [EmployeeDetails]
    }

    type SkillProjects {
        personal: [ProjectDetails]
        professional: [ProjectDetails]
    }
`;
