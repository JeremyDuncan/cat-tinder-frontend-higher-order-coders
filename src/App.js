import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
    
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => {
        setCats(payload)
      })
      .catch((error) => console.log(error))
  }

  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(cat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => this.readCat())
      .catch((errors) => console.log("Cat create errors:", errors))

      console.log(cat);
  }

  const updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      // converting an object to a string
      body: JSON.stringify(cat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => this.readCat())
      .catch((errors) => console.log("Cat update errors:", errors))
      
  }

  const deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => this.readCat())
      .catch((errors) => console.log("delete errors:", errors))
  }


  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catindex" element={<CatIndex cats={cats} readCat={readCat} />} />
          <Route path="/catshow/:id" element={<CatShow cats={cats} deleteCat={deleteCat}/>} />
          <Route path="/catnew" element={<CatNew createCat={createCat} />} />
          <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
