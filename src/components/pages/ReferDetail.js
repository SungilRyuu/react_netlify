import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import {gsap} from "gsap";

class ReferDetail extends React.Component {

    componentDidMount(){
        this.getSite();   
    }

    getSite = () => {
            gsap.to("#header", {
              duration:0.8, 
              top: 0, 
              ease: "sine.out"
            });
            gsap.to("#footer", {
              duration:0.8, 
              bottom: 0,
              ease: "sine.out",
              delay: 0.3
            });
            gsap.to(".cont__title h1", {
                duration: 1,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "back.out"
            })
            gsap.to(".refer__inner h2", {
                duration: 1,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "back.out"
            })
            gsap.to(".refer__inner table", {
              duration:1, 
              x: 0,
              opacity: 1, 
              delay: 1.5,
              ease:"back.out(1.7)"
            });
    }


    render(){
        return (
        <>
            <Header color="light" />
            <Contents>
                <section className="refer__cont light">
                    <div className="container">
                        <div className="refer__inner">
                            ddd
                        </div>
                    </div>
                </section>
            </Contents>
            <Footer color="light" />
        </>
        )
    }
}

export default ReferDetail