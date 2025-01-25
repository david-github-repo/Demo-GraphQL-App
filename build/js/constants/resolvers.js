import prisma from '../services/prisma.js';
const resolvers = {
    Query: {
        books: async () => await prisma.book.findMany(),
        book: async (_, { bookId }) => await prisma.book.findUnique({ where: { id: bookId } }),
        bookByName: async (_, { name }) => await prisma.book.findFirst({ where: { name } }),
        authors: async () => await prisma.author.findMany(),
        author: async (_, { authorId }) => await prisma.author.findUnique({ where: { id: authorId } }),
        reviews: async () => await prisma.review.findMany(),
        review: async (_, { reviewId }) => await prisma.review.findUnique({ where: { id: reviewId } }),
    },
    Book: {
        reviews: async ({ id }) => await prisma.review.findMany({ where: { bookId: id } }),
        author: async ({ authorId }) => await prisma.author.findUnique({ where: { id: authorId } }),
    },
    Author: {
        books: async ({ id }) => await prisma.book.findMany({ where: { authorId: id } }),
    },
    Review: {
        book: async ({ bookId }) => await prisma.book.findUnique({ where: { id: bookId } }),
    },
};
export default resolvers;
