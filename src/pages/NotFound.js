import React from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import notFound from "../assets/404_cat.jpeg";

const NotFound = () => {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      
      {/* Card Container */}
      <div className="cardCollection">
        {/* === CAT CARD START === */}

        <Card
        className="card"
          outline
          style={{
            width: "18rem",
          }}
        >
          <img className="cardImage" alt="Sample" src={notFound} />
          <CardBody className="description">

            <div className="seperate">
            <CardSubtitle className="subtitle" tag="h5">
          You've been "Dogfished" 🐶
          </CardSubtitle>
              <Button href="/">Go Home</Button>
            </div>
          </CardBody>
        </Card>
        {/* === CAT CARD END ===  */}

        {/* === END Card Container === */}
      </div>
    </div>
  );
};

export default NotFound;
