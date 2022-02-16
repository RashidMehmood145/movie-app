import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";


const MovieCard = (props) => {
  const img_url = 'https://image.tmdb.org/t/p/w500/';
  const { data } = props;
  // console.log(data.poster_path);
  return (
    <div className="card-item">
      <Link to={`/movie/${data.id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={img_url + data.poster_path} alt={data.title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.title}</h4>
              <p> {data.release_date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;