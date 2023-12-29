export const queries = `#graphql
    getAllData: [Master]
    getCurrectEmployeeData(code: Int!): [Master]
    getProjectsBySkill(input: GetProjectBySkillInput!): SkillProjects!
    getProjects(input: GetProjectInput!): ProjectDetails!
`;
