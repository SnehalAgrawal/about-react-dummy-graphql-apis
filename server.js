import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
