import React from 'react'

function MovieItem(props){
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt={props.movie.title} />
            <p className='title'>{props.movie.title.split(":")[0]}</p>
            <div className='movie__desc'>
                <p className='date'>{props.movie.release_date}</p>
                <p className='view'><a href={`https://www.themoviedb.org/movie/${props.movie.id}`} target="_blank">VIEW</a></p>
            </div>
        </li>
    )
}

function MovieList(props) {
    console.log(props)
  return (
    <div className='movie__list'>
        <ul>
            {props.movies.map((item, index) => (
                <MovieItem key={index} movie={item} />
            ))}
        </ul>
    </div>
  )
}

export default MovieList