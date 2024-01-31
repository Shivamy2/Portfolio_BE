import { ApolloServer } from "@apollo/server";
import { ApolloServerErrorCode } from "@apollo/server/errors";
import { User } from "./master";
import { Chat } from "./chat";

const createGraphQlServer = async () => {
  const graphQlServer = new ApolloServer({
    typeDefs: [
      `
            ${User.typeDefs}
            ${Chat.typeDefs}
            type Query {
                ${User.queries}
                ${Chat.queries}
            }

            ${User.inputTypes}
            ${Chat.inputTypes}
            type Mutation {
                ${User.mutations}
                ${Chat.mutations}
            }
        `,
    ],
    resolvers: {
      Query: {
        ...User.resolvers.queries,
        ...Chat.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
        ...Chat.resolvers.mutations,
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
    introspection: true,
  });

  // start gql server
  await graphQlServer.start();
  return graphQlServer;
};

export default createGraphQlServer;
