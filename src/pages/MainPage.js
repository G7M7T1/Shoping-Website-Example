import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import CardList from "../components/CardList";
import Categories from "../components/Categories";
import Features from "../components/Features";

function MainPage() {
  return (
    <div className="MainPage">
      <Navbar />
      <Carousel />
      <CardList />
      <Categories />
      <Features />
    </div>
  );
}

export default MainPage;
