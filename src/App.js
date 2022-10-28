import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import mockCats from "./mockCats";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catindex" element={<CatIndex cats={mockCats}/>} />
          <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
          <Route path="/catnew" element={<CatNew />} />
          <Route path="/catedit" element={<CatEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
