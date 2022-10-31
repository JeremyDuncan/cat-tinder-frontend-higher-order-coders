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
      <h1>Cat Edit</h1>
      <div className="catForm">
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            defaultValue={currentCat?.name}
          />
          <Label for="name">Age</Label>
          <Input
            type="text"
            name="age"
            onChange={handleChange}
            defaultValue={currentCat?.age}
          />
          <Label for="name">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            onChange={handleChange}
            defaultValue={currentCat?.enjoys}
          />
          <Label for="name">Image</Label>
          <Input
            type="text"
            name="image"
            onChange={handleChange}
            defaultValue={currentCat?.image}
          />
        </FormGroup>
      </Form>
      </div>
      <Button onClick={handleSubmit} name="submit">
        Submit Updated Cat
      </Button>
    </div>
  );
};

export default CatEdit;
