import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ContContact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import {gsap} from "gsap";


// function About(){
//     return (
//         <>
//             <Header color="light" />
//             <Contents >
//                 <Title title={["about", "me"]} color="light"/>
//                 <AboutCont color="light" />
//             <ContContact />
//             </Contents>
//             <Footer color="light" />
//         </>
//     )
// }

class About extends React.Component {
    state = {
        isLoading: true,
    }

    getSite = () => {
        setTimeout(() => {
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
            gsap.to(".about__img", {
              duration:1, 
              y: 0,
              opacity: 1, 
              delay: 1.5,
              ease:"back.out(1.7)"
            });
            gsap.to(".about__txt", {
              duration:1, 
              y: 0,
              opacity: 1, 
              delay: 2,
              ease:"back.out(1.7)"
            });
        },)
    }

    getAbout = () => {
        setTimeout(() => {
            console.log("두 번째 시작");
            this.setState({isLoading: false});
            this.getSite();
        }, 1000)
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫 번째 시작");
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background = "var(--light_bg)"
            this.getAbout();
        },2000)
    }

    render(){
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                <Loading color="light" />
                ):(<>
                <Header color="light" />
                <Contents >
                    <Title title={["about", "me"]} color="light"/>
                    <AboutCont color="light" />
                <ContContact />
                </Contents>
                <Footer color="light" />
                </>
                )
                }
            </>
        )
    }
}

export default About;