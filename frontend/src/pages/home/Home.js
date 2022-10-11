import React from "react";
import Footer from "../../Components/footer/Footer";
import Services from "../../Components/services/Services";
import Navbar from "../../Components/navbar/Navbar";
import HomeBanner from "../../Components/Banners/HomeBanner";
const Home = () => {
  return (
    <>
      <Navbar directory="home" />
      <HomeBanner />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
