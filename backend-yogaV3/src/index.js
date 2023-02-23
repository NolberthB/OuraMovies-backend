// import server to initialize it !!
import server from './server.js'

// import connections to the database MongoDB
import './database.js'
 
// Start the server!]
const PORT = 4000
server.listen( PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}/graphql`)
})


