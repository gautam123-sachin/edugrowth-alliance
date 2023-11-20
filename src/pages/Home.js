// src/pages/Landing.js
import React from "react";

import "./Home.css"; // Import your custom CSS file
import Hero from "../components/Hero/Hero";
import KeyFeatures from "../components/features/KeyFeatures";

function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
    </>
  );
}

export default Home;
