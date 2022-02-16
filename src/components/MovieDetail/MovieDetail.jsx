import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchAsyncMoviesDetail, getSelectedMovie } from '../../features/movies/movieSlice';
import './MoviesDetail.scss'

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie) || {};
  console.log(data)
  const img_url = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    dispatch(fetchAsyncMoviesDetail(id));
  }, [dispatch, id])

  return (
    // <div>MovieDetails:{id}</div>
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.title}</div>

            <div className="movie-rating">
              <span>
                Movie Rating <i className="fa fa-star"></i> : {data.vote_average}
              </span>
              <span>
                Status <i className="fas fa-thumbs-up"></i>:
                {data.status}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.runtime} mins
              </span>
              <span>
                Release Date <i className="fa fa-calendar"></i> : {data.release_date}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Over View</span>
                <span>{data.overview}</span>
              </div>
              <div>
                <span>Popularity</span>
                <span>{data.popularity}</span>
              </div>
              <div>
                <span>Tagline</span>
                <span>{data.tagline}</span>
              </div>

              <div>
                <span>Languages</span>
                <span>{data.original_language}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={img_url + data.poster_path} alt={data.title} />
          </div>
        </>

      )}
    </div>
  );
};