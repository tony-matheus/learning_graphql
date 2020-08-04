import { IResolvers } from 'graphql-tools'

export const resolvers: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    }
  }
}

