
const typeDefs = `

    type Movies {
        title: String!
        overview: String
   
    }

    type Query {
        allMovies: [Movies]
    }

`
export default typeDefs
