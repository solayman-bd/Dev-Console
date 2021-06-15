import React from "react";
import Header from "../../components/Header/Header";
import HomePageContainer from "../../components/HomePageContainer/HomePageContainer";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <div className="100vh">
      <Header />
      <HomePageContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
