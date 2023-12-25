import { ApolloServer } from "@apollo/server";
import { ApolloServerErrorCode } from "@apollo/server/errors";
import { User } from "./master";

const createGraphQlServer = async () => {
  const graphQlServer = new ApolloServer({
    typeDefs: [
      `
            ${User.typeDefs}
            type Query {
                ${User.queries}
            }

            ${User.inputTypes}
            type Mutation {
                ${User.mutations}
            }
        `,
    ],
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
      },
    },
    formatError: (formattedError, _error) => {
      if (
        formattedError?.extensions?.code ===
        ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
      )
        return {
          ...formattedError,
          message: "Your query doesn't match the schema",
        };

      if (
        formattedError?.extensions?.code ===
        ApolloServerErrorCode.INTERNAL_SERVER_ERROR
      )
        return {
          ...formattedError,
          message: "Internal Server Error",
        };
      return formattedError;
    },
  });

  // start gql server
  await graphQlServer.start();
  return graphQlServer;
};

export default createGraphQlServer;
