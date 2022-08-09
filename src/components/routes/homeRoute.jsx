import React from "react";
import Hero from "../home/hero/Hero";
import "./homeRoute.css";
import Image from "../home/image/image";
import Brands from "../home/brands/Brands";
import Features from "../home/features/Features";
import Chateau from "../home/chateau/Chateau";
import Benefits from "../home/benefits/Benefits";
import Question from "../home/questions/Question";
import Printivo from "../home/printivo/Printivo";
import Newsletter from "../home/newsletter/Newsletter";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="home-route">
      <Hero />
      <Image />
      <Brands />
      <Features />
      <Chateau />
      <Benefits />
      <Question />
      <Printivo />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
