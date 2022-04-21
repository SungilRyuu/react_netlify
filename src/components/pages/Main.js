import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import Footer from "../layout/Footer";
import {gsap} from "gsap";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

// 로딩 소스를 줄거임 함수 -> 클래스
// class: 함수의 집합체

class Main extends React.Component {
    state = {
        isLoading: true,
    }

    getSite = () => {
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
        gsap.to(".main__inner > div:nth-child(1)", {
          duration:0.7, 
          y: 0,
          opacity: 1, 
          delay: 1,
          ease:"back.out(1.7)"
        });
        gsap.to(".main__inner > div:nth-child(2)", {
          duration:0.7, 
          y: 1,
          opacity: 1, 
          delay:1.3,
          ease:"back.out(1.7)"
        });
        gsap.to(".main__inner > div:nth-child(3)", {
          duration:0.7, 
          y: 0,
          opacity: 1, 
          delay: 1.6,
          ease:"back.out(1.7)"
        });
        gsap.to(".main__inner > div:nth-child(4)", {
          duration:0.7, 
          y: 0,
          opacity: 1, 
          delay: 1.9,
          ease:"back.out(1.7)"
        });

      },)
    }

    getPorts = () => {
      setTimeout( () => {
          console.log("두 번째 시작");
          this.setState({isLoading: false});
          this.getSite();
      }, 1000)
  }

  componentDidMount(){
      setTimeout(() => {
          console.log("첫 번째 시작");
          document.getElementById("loading").classList.remove("loading__active")
          this.getPorts();
      },1000)
  }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({isLoading:false});
    //         this.getSite();
    //     },5000);
    // }

    render(){
        const {isLoading} = this.state;
        
        return (
            <>
                {isLoading ? (
                    <Loading />
                    ) : (
                        <>
                            <Header />
                            <Contents>
                                <MainCont />
                            </Contents>
                            <Footer />
                        </>
                        )
                }
            </>
        )
    }
}





export default Main;