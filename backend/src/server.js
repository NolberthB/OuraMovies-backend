import { GraphQLServer } from 'graphql-yoga'

// resolvers
import resolvers from './graphql/resolvers/index.js'
import typeDefs from './graphql/schema.js'

// import path and limitations using type:module this is a hijack solution
/*
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

*/

// create server whit graphql-yoga v1
const server = new GraphQLServer({
  // typeDefs
  typeDefs,
  // resolver
  resolvers
})

export default server
