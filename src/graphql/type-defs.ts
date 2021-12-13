import { gql } from 'apollo-server-fastify'

export const typeDefs = gql`
  type Link {
    id: ID!
    description: String!
    url: String!
  }

  type Query {
    feed: [Link!]!
    link(id: ID!): Link
  }

  type PostInput {
    url: String!
    description: String!
  }

  type Mutation {
    post(input: PostInput): Link!

    updateLink(_id: ID!, url: String, description: String): Link

    deleteLink(_id: ID!): String
  }
`
