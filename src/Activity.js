import React from "react";
import "./Activity.css";

function Activity({ time, description, index }) {
  return (
    <tr key={index}>
      <td style={{textAlign: "right", paddingRight:"10px"}} className="time">{time}</td>
      <td className="description">{description}</td>
    </tr>
  );
}

export default Activity;
