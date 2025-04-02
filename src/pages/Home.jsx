import React from "react";
import Hero from "../components/Hero";
import Domains from "../components/Domains";
import Events from "../components/Events";
import JoinCommunity from "../components/JoinCommunity";
import Contributors from "../components/Contributors";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Domains />
      <Events />
      <JoinCommunity />
      <Contributors />
      <Reviews />
    </div>
  );
};

export default Home;
