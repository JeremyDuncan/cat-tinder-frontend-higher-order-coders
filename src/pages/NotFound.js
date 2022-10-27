import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import notFound from "../assets/404_cat.jpeg";

const NotFound = () => {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      {/* Card Container */}
      <div className="cardCollection">
        {/* === CAT CARD START === */}

        <Card
          outline
          style={{
            width: "18rem",
          }}
        >
          <img className="cardImage" alt="Sample" src={notFound} />
          <CardBody className="description">
            <div className="seperate">
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
