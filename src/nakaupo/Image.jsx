import React from "react";
import "../index.css";
import ImageRightSrc from "../assets/Group 1.png"; 

function Image() {
  return (
    <div className="image-right">
      <img src={ImageRightSrc} alt="Image Right" />
    </div>
  );
}

export default Image;
