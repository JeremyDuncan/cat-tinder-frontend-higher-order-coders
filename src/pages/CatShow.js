import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <h1>Say Hello To {catShow?.name}</h1>
      <br />
      <div className="cardCollection">
        {/* === CAT CARD START === */}
        <Card className="card">
          <img className="cardImage" alt="Sample" src={catShow?.image} />
          <CardBody className="description">
            <CardTitle tag="h1">{catShow?.name}</CardTitle>
            <CardSubtitle className="subtitle" tag="h6">
              <h5>{catShow?.age} Years Old</h5>
              <h5>Enjoys:</h5>
              {catShow?.enjoys}
            </CardSubtitle>
          </CardBody>
        </Card>
        {/* === CAT CARD END ===  */}
      </div>
      <div className="catButtons">
        <Button href={`/catedit/${catShow?.id}`}>
          <FontAwesomeIcon icon={faPenToSquare} /> Edit Cat Profile
        </Button>
        <Button onClick={handleClick}>
          <FontAwesomeIcon icon={faTrashCan} /> Delete Cat Profile
        </Button>
      </div>
    </div>
  );
};

export default CatShow;
// href={`/catedit/${catShow.id}`}
