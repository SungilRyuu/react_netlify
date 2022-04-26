import React, {useEffect, useState} from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import MovieSearch from "../includes/MovieSearch";
import MovieList from "../includes/MovieList";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import {gsap} from "gsap";

function Movie() {
    const [movies, setMovies] = useState([])

    const mainAnimation = () => {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            gsap.to("#header", {
              duration:0.2, 
              top: 0, 
              ease: "sine.out"
            });
            gsap.to("#footer", {
              duration:0.6, 
              bottom: 0,
              ease: "sine.out"
            });
            gsap.to(".cont__title h1", {
                duration: 1,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "back.out"
            })
            gsap.to(".movie__list", {
                duration: 1.5,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.1,
                ease: "back.inOut"
            })
            gsap.to(".movie__search", {
                duration: 1.5,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "sine.out"
            })

        },2000);
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE}&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => setMovies(result.results))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE}&query=doctor`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setMovies(result.results)
                mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, [])
  return (
    <>
        <Loading color="light"/>
        <Header color="light"/>
        <Contents color="light">
            <Title title={["Movie", "Search"]}  color="light"/>
                <div className="movie__cont light">
                    <div className="container">
                        <div className="movie__inner">
                            <MovieSearch onSearch={search}/>
                            <MovieList movies={movies}/>
                        </div>
                    </div>
                </div>
            <Contact />
        </Contents>
        <Footer  color="light"/>
    </>
  )
}

export default Movie

// class Movie extends React.Component {
//     state = {
//         isLoading: true,
//         movies: [],
//     }

//     mainAnimation = () => {
        // setTimeout(() => {
        //   gsap.to("#header", {
        //     duration:0.2, 
        //     top: 0, 
        //     ease: "sine.out"
        //   });
        //   gsap.to("#footer", {
        //     duration:0.6, 
        //     bottom: 0,
        //     ease: "sine.out"
        //   });
        //   gsap.to(".cont__title h1", {
        //       duration: 1,
        //       x: 0,
        //       y: 0,
        //       opacity: 1,
        //       delay: 1.0,
        //       ease: "back.out"
        //   })
        //   gsap.to(".movie__list", {
        //       duration: 1.5,
        //       x: 0,
        //       y: 0,
        //       opacity: 1,
        //       delay: 1.1,
        //       ease: "back.inOut"
        //   })
//         })
//     }

//     getMovie = async () => {
//         const movies = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=d2928e7bd0021abaf71e75c97443a56d&query=doctor"); 

//         this.setState({movies : movies})

//         setTimeout(() => {
//             console.log("두 번째 시작");
//             this.setState({movies, isLoading: false});
//             this.mainAnimation();
//         }, 1600)
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             console.log("첫 번째 시작");
//             document.getElementById("loading").classList.remove("loading__active")
//             document.querySelector("body").style.background = "var(--light_bg)"
//             this.getMovie();
//         },2000)
//     }

//     render(){
//         const {isLoading, movies} = this.state;
        
//         // console.log(ports)
//         return (
//             <>
//                 {isLoading ? (
//                     <Loading color="light" />
                    // ) : (
                    //     <>
                    //         <Header color="light"/>
                    //         <Contents color="light">
                    //             <Title title={["Movie", "Search"]}  color="light"/>
                    //             <MovieCont movies= {movies}  color="light"/>
                    //             <Contact />
                    //         </Contents>
                    //         <Footer  color="light"/>
                    //     </>
//                         )
//                 }
//             </>
//         )
//     }
// }

// export default Movie;