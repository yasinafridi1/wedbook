import React from "react";
import Footer from "../../Components/footer/Footer";
import Services from "../../Components/services/Services";
import Navbar from "../../Components/navbar/Navbar";
import HomeBanner from "../../Components/Banners/HomeBanner";
import HomeHeader from "../../Components/Banners/HomeHeader";
import MainBanner from "../../Components/Banners/MainBanner";
const Home = () => {
  return (
    <>
      <Navbar directory="home" />
      <HomeHeader/>
      <Services />
      <MainBanner/>
      <HomeBanner />    
      <Footer />
    </>
  );
};

export default Home;
