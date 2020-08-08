import 'graphql-import-node'
import { typeDefs, resolvers } from './graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})


