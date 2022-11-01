import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CatNew = ({ createCat }) => {
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (
      newCat.name === "" ||
      newCat.age === "" ||
      newCat.enjoys === "" ||
      newCat.image === ""
    )
      return;
    else {
      createCat(newCat);
      navigate("/catindex");
    }
  };

  return (
    <div>
      <h1>Add Your Cat</h1>
      <br />
      <div className="formContainer">
        <div className="catForm">
          <Form>
            <FormGroup>
              <Label className="formLabel" for="cat name">
                Name:
              </Label>
              <Input
                className="formInput"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter the cat's name"
                value={newCat.name}
                autoFocus
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="cat age">Age:</Label>
              <Input
                className="formInput"
                type="text"
                name="age"
                onChange={handleChange}
                placeholder="Enter the cat's age"
                value={newCat.age}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="cat enjoys">Enjoys:</Label>
              <Input
                className="formInput"
                type="text"
                name="enjoys"
                onChange={handleChange}
                placeholder="Enter what the cat enjoys"
                value={newCat.enjoys}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="cat image">Image URL:</Label>
              <Input
                className="formInput"
                type="text"
                name="image"
                onChange={handleChange}
                placeholder="Enter a cat image URL"
                value={newCat.image}
                required
              />
            </FormGroup>
          </Form>
        </div>
        <div className="submitButton">
          <Button onClick={handleSubmit} name="submit">
            <FontAwesomeIcon icon={faThumbsUp} /> Submit Cat
          </Button>
          <Button href="/catindex">
            <FontAwesomeIcon icon={faThumbsDown} /> Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CatNew;
