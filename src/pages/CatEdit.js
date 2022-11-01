import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams();
  let currentCat = cats?.find((cat) => cat.id === +id);

  const [editCat, setEditCat] = useState({
    name: currentCat?.name,
    age: currentCat?.age,
    enjoys: currentCat?.enjoys,
    image: currentCat?.image,
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    updateCat(editCat, currentCat.id);
    navigate("/catindex");
  };

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Edit Cat Profile</h1>
      <br />
      <div className="catForm">
        <Form>
          <FormGroup>
            <div className="formSection">
              <Label className="formLabel" for="name">
                Name:
              </Label>
              <Input
                className="formInput"
                type="text"
                name="name"
                onChange={handleChange}
                defaultValue={currentCat?.name}
              />
            </div>
            <div className="formSection">
              <Label className="formLabel" for="name">
                Age:
              </Label>
              <Input
                className="formInput"
                type="text"
                name="age"
                onChange={handleChange}
                defaultValue={currentCat?.age}
              />
            </div>
            <div className="formSection">
              <Label className="formLabel" for="name">
                Enjoys:
              </Label>
              <Input
                className="formInput"
                type="text"
                name="enjoys"
                onChange={handleChange}
                defaultValue={currentCat?.enjoys}
              />
            </div>
            <div className="formSection">
              <Label className="formLabel" for="name">
                Image URL:
              </Label>
              <Input
                className="formInput"
                type="text"
                name="image"
                onChange={handleChange}
                defaultValue={currentCat?.image}
              />
            </div>
          </FormGroup>
        </Form>
      </div>
      <div className="submitButton">
        <Button onClick={handleSubmit} name="submit">
          <FontAwesomeIcon icon={faThumbsUp} /> Submit Updated Cat
        </Button>
        <Button href="/catindex">
          <FontAwesomeIcon icon={faThumbsDown} /> Cancel
        </Button>
      </div>
    </div>
  );
};

export default CatEdit;
