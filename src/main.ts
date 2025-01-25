import prisma from './services/prisma.js';

console.log('Demo GraphQL App');
console.log('----------------\n');

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import schema from './constants/schema.js';
import resolvers from './constants/resolvers.js';

const server = new ApolloServer({ typeDefs: schema, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`Server running at ${url}`);
