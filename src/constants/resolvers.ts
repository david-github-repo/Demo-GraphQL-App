import prisma from '../services/prisma.js';

const resolvers = {
  Query: {
    books: async () => await prisma.book.findMany(),
    book: async (_: any, { bookId }: { bookId: string }) =>
      await prisma.book.findUnique({ where: { id: bookId } }),
    bookByName: async (_: any, { name }: { name: string }) =>
      await prisma.book.findFirst({ where: { name } }),

    authors: async () => await prisma.author.findMany(),
    author: async (_: any, { authorId }: { authorId: string }) =>
      await prisma.author.findUnique({ where: { id: authorId } }),

    reviews: async () => await prisma.review.findMany(),
    review: async (_: any, { reviewId }: { reviewId: string }) =>
      await prisma.review.findUnique({ where: { id: reviewId } }),
  },

  Book: {
    reviews: async ({ id }: { id: string }) =>
      await prisma.review.findMany({ where: { bookId: id } }),
    author: async ({ authorId }: { authorId: string }) =>
      await prisma.author.findUnique({ where: { id: authorId } }),
  },

  Author: {
    books: async ({ id }: { id: string }) =>
      await prisma.book.findMany({ where: { authorId: id } }),
  },

  Review: {
    book: async ({ bookId }: { bookId: string }) =>
      await prisma.book.findUnique({ where: { id: bookId } }),
  },
};

export default resolvers;
