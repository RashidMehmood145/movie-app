import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIkey } from '../../common/apis/MovieApiKeys';

const language = 'en-US';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async () => {
        const response = await movieApi.get(`/movie/top_rated?api_key=${APIkey}&language=${language}&page=1`)
        return response.data
    })

export const fetchAsyncMoviesDetail = createAsyncThunk('movies/fetchAsyncMoviesDetail',
    async (id) => {
        const response = await movieApi.get(`/movie/${id}?api_key=${APIkey}&language=${language}&page=1`)
        return response.data
    })


const initialState = {
    movies: {},
    getSelectedMovie:{}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;

        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetch successfully");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");

        }, [fetchAsyncMoviesDetail.fulfilled]: (state, { payload }) => {
            console.log("fetch successfully");
            return { ...state, getSelectedMovie: payload }
        },
    }
});


export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const  getSelectedMovie = (state) => state.movies.getSelectedMovie;
export default movieSlice.reducer;