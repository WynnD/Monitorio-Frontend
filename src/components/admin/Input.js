import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, label, name }) =>
  <label>
    {label}
    <input type="{type}" name="{name}" />
  </label>;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
