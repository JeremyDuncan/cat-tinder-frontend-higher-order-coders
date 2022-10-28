import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const CatShow = ({ cats }) => {
  const { id } = useParams();
  let catShow = cats?.find((cat) => cat.id === +id);

  return (
    <div>
      <h1>Cat Show</h1>
      <div className="cardCollection">
        {/* === CAT CARD START === */}
        <Card className="card">
          <img className="cardImage" alt="Sample" src={catShow?.image} />
          <CardBody className="description">
            <CardTitle tag="h2">
              {catShow?.name}, {catShow?.age}
            </CardTitle>
            <CardSubtitle className="subtitle" tag="h6">
              {catShow?.enjoys}
            </CardSubtitle>
            <Button href={`/catshow/${catShow?.id}`}>Prrrrr?</Button>
          </CardBody>
        </Card>
        {/* === CAT CARD END ===  */}
      </div>
      {/*       
      {showCat.name}
      {showCat.age}
      <img src={showCat.image} /> */}
    </div>
  );
};

export default CatShow;
