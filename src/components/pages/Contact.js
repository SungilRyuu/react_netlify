import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContactCont from "../includes/ContactCont";
import Footer from "../layout/Footer";


function Contact(){
    return (
        <>
            <Header />
            <Contents>
                <ContactCont />
            </Contents>
            <Footer />
        </>
    )
}

export default Contact;