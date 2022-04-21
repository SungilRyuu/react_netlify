import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import PortCont from "../includes/PortCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import {gsap} from "gsap";
import axios from "axios";

class Portfolio extends React.Component {
    state = {
        isLoading: true,
        ports: [],
    }

    mainAnimation = () => {
        setTimeout(() => {
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
          gsap.to(".port__inner", {
              duration: 1.5,
              x: 0,
              y: 0,
              opacity: 1,
              delay: 1.1,
              ease: "back.inOut"
          })
        })
    }

    getPorts = async () => {
        const {data: {data: {ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json"); 

        this.setState({ports : ports})

        setTimeout( () => {
            console.log("두 번째 시작");
            this.setState({isLoading: false});
            this.mainAnimation();
        }, 1600)
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫 번째 시작");
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background = "#000"
            this.getPorts();
        },2000)
    }

    render(){
        const {isLoading, ports} = this.state;
        
        // console.log(ports)
        return (
            <>
                {isLoading ? (
                    <Loading />
                    ) : (
                        <>
                            <Header />
                            <Contents>
                                <Title title={["portfolio", "site"]}/>
                                <PortCont port = {ports} />
                                <Contact />
                            </Contents>
                            <Footer />
                        </>
                        )
                }
            </>
        )
    }
}

export default Portfolio;