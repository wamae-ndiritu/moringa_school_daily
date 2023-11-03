import React from "react";
import Header from "../components/Header";
import FeaturedView from "../components/FeaturedView";
import NewPostSection from "../components/NewPostSection";
import TrendingMedia from "../components/TrendingMedia";
import VideoSlider from "../components/VideoSlider";
import ArticlesSection from "../components/ArticlesSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <FeaturedView />
      <NewPostSection />
      <TrendingMedia />
      <VideoSlider />
      <ArticlesSection section_color='bg-white' />
      <Footer />
    </>
  );
};

export default HomePage;
