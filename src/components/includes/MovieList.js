import React from 'react'

function MovieItem(props){
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt={props.movie.title} />
            <p className='title'>{props.movie.title.split(":")[0]}</p>
            <div className='movie__desc'>
                <p className='date'>{props.movie.release_date}</p>
                <p className='view'>VIEW</p>
            </div>
        </li>
    )
}

function MovieList(props) {
  return (
    <div className='movie__list'>
        <h2>'Doctor' 관련된 영화, <em>함께 살펴볼까요?</em></h2>
        <ul>
            {props.movies.data.results.map((item, index) => (
                <MovieItem key={index} movie={item} />
            ))}
        </ul>
    </div>
  )
}

export default MovieList