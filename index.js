import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';

dotenv.config();

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
//   await server.listen();
  const { url } = await server.listen(process.env.PORT || 4500);
  console.log(`🚀 Server ready at ${url}`);
}



startApolloServer(typeDefs, resolvers);