import React from "react";
import "./Header.css";

function Header({ name, birthday, imageSrc }) {
  return (
    <div className="group">
      <img src={imageSrc} className="item" />
      <div className="item">
        <h1>{name}</h1>
        <h2>Birthday: {birthday}</h2>
      </div>
    </div>
  );
}

export default Header;
