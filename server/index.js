import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import _ from "lodash";
import {
  resolvers as MySchemaResolvers,
  typeDef as MySchemaTypes,
} from "./schema/mySchema.js";

const Query = `
  type Query {
    _empty: String
  }
`;

const Mutation = `
  scalar JSON

  type Mutation {
    _empty: String
  }
`;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against your data.

export const typeDefs = [Query, Mutation, MySchemaTypes];

// Resolvers define the technique for fetching the types defined in the schema.

export const resolvers = _.merge(MySchemaResolvers);

// To enable CORS

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers, cors is optional.

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: corsOptions,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);
