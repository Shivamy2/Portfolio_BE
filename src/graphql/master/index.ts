import { queries } from "./master.queries";
import { mutations } from "./master.mutations";
import * as resolvers from "./master.resolvers";
import { typeDefs } from "./master.typedefs";
import { inputTypes } from "./master.input";

export const User = { queries, mutations, resolvers, typeDefs, inputTypes };
