import React from "react";

const Button = (props) => {
  const handleClick = (name) => {
    console.log("Button clicked!", name);
  };

  return (
    //   <button onClick={() => handleClick("sarim")}>{props.text}</button>
    <button onClick={props.onClick}>{props.text}</button>
  );
};

export default Button;
