import prisma from './services/prisma.js';

console.log('Demo GraphQL App: Code first');
console.log('----------------\n');

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

/* const server = new ApolloServer({ typeDefs: schema, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`Server running at ${url}`); */
