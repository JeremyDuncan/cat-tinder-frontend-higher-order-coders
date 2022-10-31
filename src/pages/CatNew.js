import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CatNew = ({createCat}) => {
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
    createCat(newCat);
    navigate("/catindex");
  };

  return (
    <div>
      <h1>Cat New</h1>

      <FormGroup>
        <Label for="name">Cat Name</Label>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter the cat's name"
          value={newCat.name}
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Cat Age</Label>
        <Input
          type="text"
          name="age"
          onChange={handleChange}
          placeholder="Enter the cat's age"
          value={newCat.age}
        />
        </FormGroup>
         <FormGroup>
        <Label for="name">Cat Enjoys</Label>
        <Input
          type="text"
          name="enjoys"
          onChange={handleChange}
          placeholder="Enter what the cat enjoys"
          value={newCat.enjoys}
        />
        </FormGroup>
         <FormGroup>
        <Label for="name">Cat Image URL</Label>
        <Input
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="Enter a cat image URL"
          value={newCat.image}
        />
      </FormGroup>

      <Button onClick={handleSubmit} name="submit">
        Submit Cat
      </Button>
    </div>
  );
};

export default CatNew;
