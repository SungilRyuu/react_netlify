import React from 'react';
import MovieList from '../includes/MovieList';

function MovieCont(props) {
  console.log(props)
  return (
    <div className={`movie__cont ${props.color}`}>
      <div className="container">
        <div className="movie__inner">
          <MovieList movies={props.movies} />
        </div>
      </div>
    </div>
  )
}

export default MovieCont;