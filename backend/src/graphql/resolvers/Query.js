import Movie from '../../models/Movie.js'

const Query = {

  /*   async  getMovies () {
    const movie = await Movie.find()
    return movie
  }
  */

  async allMovies () {
    const movie = await Movie.find()
    return movie
  }

}

export default Query
