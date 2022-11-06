import React from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

const CatIndex = ({ cats, readCat }) => {
  return (
    <div className="index">
      {console.log(cats)}
      <h1>Available Cats</h1>
      <br />
      <div className="cardCollection loader">
        {cats.map((cat, index) => {
          return (
            <div index={index} cat={cat} key={index}>
              {/* === CAT CARD START === */}
              <Card className="card">
                <img className="cardImage" alt="Sample" src={cat.image} />
                <CardBody className="description">
                  <CardTitle tag="h1">{cat.name}</CardTitle>
                  <Button
                    className="btnSep but arrow"
                    href={`/catshow/${cat.id}`}
                  >
                    View {cat.name}
                  </Button>
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
