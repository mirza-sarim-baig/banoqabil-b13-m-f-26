import PropTypes from "prop-types";
import React, { useEffect } from "react";

const Button = ({ count }) => {
  Button.prototype = {
    count: PropTypes.number.isRequired,
  };

  useEffect(() => {
    return () => {
      console.log("Button component unmounted");
    };
  });

  //   useEffect(() => {
  //     console.log("Button component mounted");
  //   }, []);

  //   useEffect(() => {
  //     console.log("Button component updated with count:", count);
  //   }, [count]);

  //   useEffect(() => {
  //     return console.log("Button component unmounted");
  //   }, []);

  return <div>Button{count}</div>;
};

export default Button;
