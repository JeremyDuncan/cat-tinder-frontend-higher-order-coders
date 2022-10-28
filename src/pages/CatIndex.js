import React from "react";
import CatCards from "../components/CatCards";

const CatIndex = ({ cats }) => {
  return (
    <div>
      <h1>Cat Index</h1>

      {/* Card Container */}
      <div className="cardCollection">
        {cats.map((cat, index) => {
          return <CatCards index={index} cat={cat} key={index} />;
        })}
      </div>
      {/* === END Card Container === */}
    </div>
  );
};

export default CatIndex;
