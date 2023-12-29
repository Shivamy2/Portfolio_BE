export const mutations = `#graphql
    employeePortfolioEntry(input: MasterInput!): Master!
    updateEmployeePortfolio(code: Int!, input: MasterInput!): String!
    deleteEmployeePortfolio(code: Int!): String!
    insertEmployeeData: String!
    getProjectsBySkill(input: GetProjectBySkillInput!): SkillProjects!
    getProjects(input: GetProjectInput!): ProjectDetails!
`;
