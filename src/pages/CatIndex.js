import React from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

const CatIndex = ({ cats }) => {
  return (
    <div className="index">
      <h1>Available Cats</h1>
      <br />
      <div className="cardCollection">
        {cats.map((cat, index) => {
          return (
            <div index={index} cat={cat} key={index}>
              {/* === CAT CARD START === */}
              <Card className="card">
                <img className="cardImage" alt="Sample" src={cat.image} />
                <CardBody className="description">
                  <CardTitle tag="h1">{cat.name}</CardTitle>
                  <div className="shrink but arrow">
                    <Button className="btnSep" href={`/catshow/${cat.id}`}>
                      View {cat.name}
                    </Button>
                  </div>
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
