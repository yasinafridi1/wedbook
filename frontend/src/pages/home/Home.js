import React from 'react';
import Footer from "../Components/footer/Footer";
import Services from "../Components/services/Services";
import Navbar from "../../Components/navbar/Navbar";
const Home = () => {
    return (
        <>
            <Navbar directory='home' />
            <HomeBanner />
            <Services />
            <Footer />
        </>
    );
}

export default Home;
