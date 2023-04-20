import React, { useState, useEffect } from 'react'
import movieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/slices/movieSlice'
import './Home.scss'
import { SearchMovieData } from '../../models/movie.model'

// Components
import MovieList from '../MovieList/MovieList'

type Props = {}

const Home = ({}: Props) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState<string>('')

  const fetchMovies = async () => {
    try {
      const searchKey = search ? search : 'spider'
      const { data: movies } = await movieApi.get(
        `?apikey=${APIKey}&s=${searchKey}&type=movie`
      )

      setTimeout(() => {
        dispatch(addMovie(movies.Search as SearchMovieData[]))
      }, 500)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [search])

  return (
    <>
      <div>
        <h3 style={{ margin: '1rem 0' }}>Movies</h3>
        <input
          type='text'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MovieList />
      </div>
    </>
  )
}

export default Home
