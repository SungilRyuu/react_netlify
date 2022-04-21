import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ScriptCont from "../includes/ScriptCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import {gsap} from "gsap";


// function Script(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <Title title={["Script", "javascript"]} />
//                 <ScriptCont />
//                 <Contact />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

class Script extends React.Component {
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
            gsap.to(".script__inner .script img", {
              duration:1, 
              y: 0,
              opacity: 1, 
              delay: 1.5,
              ease:"back.out(1.7)"
            });
            gsap.to(".script__inner .script .num", {
              duration:1, 
              y: 0,
              opacity: 1, 
              delay: 2,
              ease:"back.out(1.7)"
            });
            gsap.to(".script__inner .script .desc", {
              duration:1, 
              y: 0,
              opacity: 1, 
              delay: 2,
              ease:"back.out(1.7)"
            });
        },)
    }


    getScript = () => {
        setTimeout(() => {
            console.log("second")
            this.setState({isLoading: false})
            this.getSite();
        })
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("first")
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background = "var(--black)"
            this.getScript();            
        },2000)
    }
    render(){
        const {isLoading} = this.state;

        return(
            <>
                {isLoading ? (
                    <Loading />
                ):(
                    <>
                        <Header />
                        <Contents>
                            <Title title={["Script", "javascript"]} />
                            <ScriptCont />
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}
export default Script;