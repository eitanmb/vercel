import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen();
//   const { url } = await server.listen();
//   console.log(`🚀 Server ready at ${url}`);
}



startApolloServer(typeDefs, resolvers);