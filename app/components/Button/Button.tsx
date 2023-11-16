import React from "react";
import "./Button.scss";

const Button = ({ url }: any) => {
  return (
    <a className="btn cursor-pointer" href={url} target="_blank">
      <strong>VISIT</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </a>
  );
};

export default Button;
