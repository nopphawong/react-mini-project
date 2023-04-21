import React from 'react'
import { useSelector } from 'react-redux'
import './MovieList.scss'
import { SearchMovieType } from '../../models/movie.model'
import MovieCard from '../MovieCard/MovieCard'
import { RootState } from '../../store/store'

type Props = {}
function MovieList({}: Props) {
  const { movies } = useSelector((state: RootState) => state.movies)

  return (
    <div className='movie-container'>
      {movies &&
        movies.map((movie) => <MovieCard key={movie?.imdbID} movie={movie} />)}
    </div>
  )
}

export default MovieList
