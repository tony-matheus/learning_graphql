import 'graphql-import-node'
import * as typeDefs from './schema/schema.graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolverMap'
import { GraphQLSchema } from 'graphql'

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})


