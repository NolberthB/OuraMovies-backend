//import models 
import Movie from '../../models/Movie.js'
import User from '../../models/User.js'

const Query = {
    // resolvers for Movies
    async getMovies(){
        const movie = await Movie.find()
        return movie
    },

    // resolver for Users
    async getUsers(){
        const user = await User.find()
        return user
    }
}

export default Query