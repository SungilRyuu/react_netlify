import React, { useEffect, useState } from 'react'
import Loading from "../basics/Loading";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import YoutubeSearch from "../includes/YoutubeSearch";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import YoutubeList from '../includes/YoutubeList';
import {gsap} from "gsap";

// require('dotenv').config()

function Youtube() {
  const [videos, setVideos] = useState([])
  
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
                gsap.to(".youtube__cont", {
                    duration: 1,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    delay: 1.3,
                    ease: "back.out"
                })
                gsap.to(".youtube__search", {
                    duration: 1,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    delay: 1.5,
                    ease: "back.out"
                })
              },2000)
          }
        

  const search = (query) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${query}&key=${process.env.REACT_APP_API}`, requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    
  }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=bts&key=${process.env.REACT_APP_API}`, requestOptions)
            .then(response => response.json())
            .then(result => {
              setVideos(result.items);
              mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, []);

  return (
    <>
      <Loading />
        <Header />
        <Contents>
            <Title title={["youtube", "reference"]} />
            <section className='youtube__cont'>
              <div className="container">
                <div className="youtube__inner">
                  <YoutubeSearch onSearch={search}/>
                  <YoutubeList videos={videos} />
                </div>
              </div>
            </section>
            <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Youtube;