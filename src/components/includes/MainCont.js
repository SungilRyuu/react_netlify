import React from "react";

function MainInfo({text}){
    return <div>{text}</div>
}

const mainText = [
    {text : "we provide"},
    {text : "VISUAL CODING"},
    {text : "solutions"},
    {text : "for you webs"}
]

function MainCont(){
    return(
        <section className="main__cont">
            <div className="main__inner">
                {mainText.map(tex => (
                    <MainInfo text={tex.text} key={tex.text}/>
                ))}
            </div>
        </section>
    )
}

export default MainCont;