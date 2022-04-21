import React from "react";

function PortInfo({image, category, title, link}){
    return (
    <article className="port__item">
        <figure className="img">
            <a href={link}><img src={image} alt={category} /></a>
        </figure>
        <div className="text">
            <h3>{title}</h3>
            <p>{category}</p>
        </div>
    </article>
    )
}

function PortCont ({port}){
    return (
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {port.map(tex => (
                        <PortInfo 
                        image={tex.image}
                        category={tex.category}
                        link={tex.link}
                        title={tex.title}
                        key={tex.title}
                        />
                    ))}
                    {/* <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="/img/port01@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="/img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="/img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="/img/port01@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="/img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="/img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    );
}

export default PortCont;