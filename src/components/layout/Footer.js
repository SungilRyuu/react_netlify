import React from "react";

function Footer(props){
    return(
        <footer id="footer" className={props.color}>
            <div>
                <h4>email</h4>
                <a href="mailto:x7nxc3@naver.com">illie@naver.com</a>
            </div>
            <div>
                <h4>kakao</h4>
                <a href="#">Illie</a>
            </div>
            <div>
                <h4>Social</h4>
                <ul>
                    <li><a href="/">Youtube</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Github</a></li>
                    <li><a href="/">Cafe</a></li>
                    <li><a href="/">Reference</a></li>
                    <li><a href="/">Tutorials</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;