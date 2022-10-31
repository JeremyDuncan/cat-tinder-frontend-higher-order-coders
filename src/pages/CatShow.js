import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams();
  let catShow = cats?.find((cat) => cat.id === +id);

  const navigate = useNavigate();

  const handleClick = () => {
    deleteCat(catShow?.id);
    navigate("/catindex");
  };
  return (
    <div>
      <h1>Cat Show</h1>
      <div className="cardCollection">
        {/* === CAT CARD START === */}
        <Card className="card">
          <img className="cardImage" alt="Sample" src={catShow?.image} />
          <CardBody className="description">
            <CardTitle tag="h2">
              {catShow?.name}
              <br />
              {catShow?.age} Years Old
            </CardTitle>
            <CardSubtitle className="subtitle" tag="h6">
              {catShow?.enjoys}
              
            </CardSubtitle>
          </CardBody>
          
        </Card>
        {/* === CAT CARD END ===  */}
      </div>
      <div className="catButtons">
        <Button href={`/catedit/${catShow?.id}`}>Edit Cat Profile</Button>
        <Button onClick={handleClick}>Delete Cat Profile</Button>
      </div>
    </div>
  );
};

export default CatShow;
// href={`/catedit/${catShow.id}`}
