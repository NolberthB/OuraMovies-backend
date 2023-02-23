import { createSchema } from 'graphql-yoga'

//import models
import Movie from '../models/Movie.js'
import User from '../models/User.js'

// import resolvers 
import resolvers from './resolvers/index.js'
 
export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      getMovies: [Movie]
      getUsers: [User]
    }

    type Mutation {
      createMovie( title:String overview:String) : Movie 
      updateMovie( _id:ID title:String overview:String ) : Movie
      removeMovie(_id:ID): [Movie]
}
    
    type Movie {
      _id: ID!
      title: String
      overview: String
    }

    type User {
      name: String!
      password: String!
      email: String!
    }
  `,
  resolvers:{
    Query: {

      // resolvers query's for Movies
      async getMovies(){
        const movie = await Movie.find()
        return movie
      },

      // resolver for Users
      async getUsers(){
        const user = await User.find()
        return user
      }
    },

    Mutation: {
      // resolvers mutations for Movies
      async createMovie( _, { title, overview } ) {
        const newMovie = { title, overview }
        const movie = await Movie.create( newMovie )
        return movie
      },

      async updateMovie( _, { _id, title, overview } ) {
        const movie = { title, overview };
        return await Movie.findByIdAndUpdate(_id, movie, {new : true} )
      },

      async removeMovie( _, { _id } ) {
        await Movie.findByIdAndDelete( _id )
        return await Movie.find()
      }

    }
  }
})