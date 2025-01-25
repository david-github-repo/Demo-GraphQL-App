const schema = `#graphql
  type Book {
    id: ID!
    name: String!
    description: String!
    reviews: [Review!]
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]
  }

  type Review {
    id: ID!
    username: String!
    rating: Int!
    book: Book!
  }

  type Query {
    books: [Book]
    book(bookId: ID!): Book
    bookByName(name: String): Book

    authors: [Author]
    author: Author

    reviews: [Review]
    review: Review
  }
`;

export default schema;
