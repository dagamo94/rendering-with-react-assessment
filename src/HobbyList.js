import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  const items = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);

  return (
    hobbies.length > 0 && (
      <div>
        <h4>Hobbies</h4>
        <ul>{items}</ul>
      </div>
    )
  );
}

export default HobbyList;
