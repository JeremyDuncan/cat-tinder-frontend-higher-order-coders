import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";
import catHome from "../assets/cat_home.webp";
import catHome2 from "../assets/cat_home_2.webp";
import catHome3 from "../assets/cat_home_3.webp";
const Home = () => {
  return (
    <div className="page">
      <h1>Home</h1>
      <h3>Welcome to Cat Tinder, the place where cats nip!</h3>
      <br />

      {/* Card Container */}
      <div className="cardCollection">
        {/* === CAT CARD START === */}
        <Card
          outline
          style={{
            width: "18rem",
          }}
        >
          <img className="cardImage" alt="Sample" src={catHome} />
          <CardBody className="description">
            <CardTitle tag="h1">Stella, 10</CardTitle>
            <CardSubtitle className="mb-5 subtitle" tag="h5">
              Purring Biscuit Maker
            </CardSubtitle>
            <div className="seperate">
              <CardText>Why aren't you feeding me??</CardText>
              <Button href="/*">Prrr?</Button>
            </div>
          </CardBody>
        </Card>
        {/* === CAT CARD END ===  */}

        {/* === CAT CARD START === */}
        <Card
          outline
          style={{
            width: "18rem",
          }}
        >
          <img className="cardImage" alt="cat" src={catHome2} />
          <CardBody className="description">
            <CardTitle tag="h1">Hidalgo, 7</CardTitle>
            <CardSubtitle className="mb-5 subtitle" tag="h5">
              Purrfffect Partner
            </CardSubtitle>
            <div className="seperate">
              <CardText>Looking for a purrdy partner in crime??</CardText>
              <Button href="/*">Prrr?</Button>
            </div>
          </CardBody>
        </Card>
        {/* === CAT CARD END ===  */}

        {/* === CAT CARD START === */}
        <Card
          outline
          style={{
            width: "18rem",
          }}
        >
          <img className="cardImage" alt="Sample" src={catHome3} />
          <CardBody className="description">
            <CardTitle tag="h1">Harley, 5</CardTitle>
            <CardSubtitle className="mb-5 subtitle" tag="h5">
              Food Bowl Cleaner
            </CardSubtitle>
            <div className="seperate">
              <CardText>What did you do with the catnip??</CardText>
              <Button href="/*">Prrr?</Button>
            </div>
          </CardBody>
        </Card>
        {/* === CAT CARD END ===  */}

        {/* === END Card Container === */}
      </div>
    </div>
  );
};

export default Home;
