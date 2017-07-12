import React from "react";
import PropTypes from "prop-types";

const ListBox = ({ name, label, initial_value, options, handleChange }) =>
  <label>
    {label}
    <select name={name} value={initial_value} onChange={handleChange}>
      {options.map((option, index) =>
        <option key={index} value={option.toLowerCase()}>
          {option}
        </option>
      )}
    </select>
  </label>;

ListBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initial_value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ListBox;
