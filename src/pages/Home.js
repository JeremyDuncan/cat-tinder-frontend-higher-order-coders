import React from "react";
import { Button } from "reactstrap";
import catHomeTwo from "../assets/cat_home_4.webp";
import catHomeThree from "../assets/cat_home_6.webp";
import catHomeOne from "../assets/cat_readme_pic.webp";

const Home = () => {
  return (
    <div className="page">
      <h1>Home</h1>
      <h2>Welcome to Cat Tinder, the place where cats nip!</h2>
      <br />
      <div className="imageContainer">
        <div className="catImagesHome">
          <img src={catHomeOne} alt="Stella Cat"/>
          <img src={catHomeTwo} alt="Sassy Cat" />
          <img src={catHomeThree} alt="Posing Cat" />
        </div>
      </div>
      <div className="catButtons">
        <Button className="btnSep but select" href="/catindex">See Available Cats!</Button>
        <Button className="btnSep but select" href="/catnew">Add Your Own Cat!</Button>
      </div>
    </div>
  );
};

export default Home;
