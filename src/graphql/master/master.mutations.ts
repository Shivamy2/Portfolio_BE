export const mutations = `#graphql
    employeePortfolioEntry(input: MasterInput!): Master!
    updateEmployeePortfolio(code: String!, input: MasterInput!): String!
    deleteEmployeePortfolio(code: String!): String!
    insertEmployeeData: String!
`;
