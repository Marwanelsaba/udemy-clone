import React from "react";
import NavBar from "./components/NavBar";
import BannerSec from "./components/BannerSec";
import HeroSec from "./components/HeroSec";
import FeaturedCourses from "./components/FeaturedCourses"; 
import TrustedCompanies from "./components/TrustedCompanies";

function App() {
  return (
    <div>
      <NavBar />
      <BannerSec />
      <HeroSec />
      <FeaturedCourses />
      <TrustedCompanies />
    </div>
  );
}

export default App;