import { createSlice, current } from '@reduxjs/toolkit'
import { SearchMovieType } from '../../models/movie.model'

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movieListing",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload
            console.log(current(state))
        }
    }
})

export const { addMovie } = movieSlice.actions
export default movieSlice.reducer