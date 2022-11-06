import React from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

const CatIndex = ({ cats, readCat, loaded }) => {

  return (
    <div className="index">
      {console.log(cats.length)}
      
      {cats.length === 0 && (
        <>
        <h2 className="loadMessage">LOADING PLEASE WAIT</h2>
        <h4>Server Booting Up</h4>
        </>
      )}
      {cats.length !== 0 && (
      <h1>Available Cats</h1>
      )}
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
