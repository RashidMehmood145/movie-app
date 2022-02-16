import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import './MovieListing.scss'
import { Settings } from '../../common/Settings';
export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  let renderMovies = " ";
  console.log(movies.results)


  renderMovies =
    movies.total_pages > 0 ? (
      movies.results.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...Settings} >{renderMovies}</Slider>
        </div>

      </div>

    </div>
  )
}
