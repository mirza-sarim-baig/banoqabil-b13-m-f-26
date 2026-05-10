import PropTypes from "prop-types";
import React from "react";

const MyComp = ({ name, age }) => {
  return (
    <div>
      MyComp
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
};

MyComp.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default MyComp;
