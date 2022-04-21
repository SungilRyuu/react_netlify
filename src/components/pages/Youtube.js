import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import YoutubeCont from "../includes/YoutubeCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";


function Youtube(){
    return (
        <>
            <Header />
            <Contents>
                <Title title={["youtube", "book"]} />
                <YoutubeCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube;