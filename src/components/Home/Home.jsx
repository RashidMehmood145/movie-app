import React, { useEffect, useState } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import './Home.scss';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies())
  }, [dispatch])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
  }
  return (
    <div>
      <div className='banner-img'>
        <div className="column_wrapper">
          <div className="content_wrapper wrap searchWrapper">
            <div className="title">
              <h2> Welcome. </h2>
              <h3> Millions of movies Explore now. </h3>
            </div>

            <div className="search">
              <form id="inner_search_form" action="/search" method="get" acceptCharset="utf-8" onSubmit={submitHandler}>
                <label>
                  <input
                    dir="auto"
                    id="inner_search_v4"
                    name="query" type="text"
                    tabIndex="1"
                    value={term}
                    autoCorrect="off"
                    autofill="off"
                    autoComplete="off"
                    spellCheck="false"
                    placeholder="Search for a movie..."
                    onChange={(e) => setTerm(e.target.value)} />
                </label>
                <input type="submit" value="Search" />
              </form>
            </div>

          </div>
        </div>
      </div>
      <MovieListing />
    </div>
  )
}


export default Home
