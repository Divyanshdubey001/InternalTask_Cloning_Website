import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import RecentPost from "./Components/RecentPost";
import FooterSection from "./Components/FooterSection";
import FeaturedPost from "./Components/FeaturedPost";
import { BrowserRouter } from "react-router-dom";
import Category from "./Components/Category";
import SliderFunction from "./Components/SliderFunction";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <HeroSection />
        <SliderFunction />
        <Category />
        <FeaturedPost />
        <RecentPost />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
