import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const CatIndex = ({ cats }) => {
  return (
    <div>
      <h1>Cat Index</h1>
      <div className="cardCollection">
        {cats.map((cat, index) => {
          return (
            <div index={index} cat={cat} key={index}>
              {/* === CAT CARD START === */}
              <Card className="card">
                <img className="cardImage" alt="Sample" src={cat.image} />
                <CardBody className="description">
                  <CardTitle tag="h2">
                    {cat.name}, {cat.age}
                  </CardTitle>
                  <CardSubtitle className="subtitle" tag="h6">
                    {cat.enjoys}
                  </CardSubtitle>
                  <Button href={`/catshow/${cat.id}`}>Prrrrr?</Button>
                </CardBody>
              </Card>
              {/* === CAT CARD END ===  */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatIndex;
