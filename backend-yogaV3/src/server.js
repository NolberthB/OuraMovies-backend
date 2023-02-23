import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './graphql/schema.js'

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })

// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

export default server