export const queries = `#graphql
    getAllData: [Master]
    getCurrectEmployeeData(code: String!): [Master]
    getProjectsBySkill(input: GetProjectBySkillInput!): SkillProjects!
    getProjects(input: GetProjectInput!): ProjectDetails!
`;
