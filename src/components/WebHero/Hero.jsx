import React from "react";
import Header from "../Header/Header";
import "./hero.css";

export default function Hero({ h1, h3, p, span, button }) {
  const h1Parts = h1?.split(span);

  return ( 
    <div className="mother-container">
      <Header />
      <div className="welcome">
        <h3>{h3}</h3>
        <h1>
          {h1Parts[0]}
          <span>{span}</span>
          {h1Parts[1]}
        </h1>
        <p>{p}</p>
        <button>{button}</button>
      </div>
    </div>
  );
}
