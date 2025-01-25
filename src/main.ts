import 'reflect-metadata';

console.log('Demo GraphQL App: Code first');
console.log('----------------\n');

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema, buildSchemaSync } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';
import prisma from './services/prisma';

const bootstrap = async () => {
  const schema = await buildSchema({ resolvers, validate: false });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
    context: async () => ({ prisma }),
  });

  console.log(`Server running at ${url}`);
};

bootstrap();
