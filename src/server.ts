import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import compression from 'compression'
import cors from 'cors'
import { schema } from './schema'
import { config } from './config';
import Promise from 'bluebird';
import mongoose from 'mongoose';

Promise.promisifyAll(mongoose);
mongoose.connect(config.db, {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true
})

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
})

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use('*', cors())
app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

httpServer.listen(
  { port: config.port },
  (): void => console.log(`\n 🚀 GraphQL is now running on http://localhost:${config.por}/graphql`)
)
