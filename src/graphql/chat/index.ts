import { queries } from "./chat.queries";
import { mutations } from "./chat.mutations";
import * as resolvers from "./chat.resolvers";
import { typeDefs } from "./chat.typedefs";
import { inputTypes } from "./chat.input";

export const Chat = { queries, mutations, resolvers, typeDefs, inputTypes };
