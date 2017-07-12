import React from "react";

const EditEmailList = ({ addOnClick, deleteOnClick }) =>
  <div className="EditEmailList">
    <input id="new_email" type="text" name="new_email" />
    <input type="button" value="Add" onClick={addOnClick} />
    <input type="button" value="Delete" onClick={deleteOnClick} />
  </div>;

EditEmailList.propTypes = {
  addOnClick: PropTypes.func.isRequired,
  deleteOnClick: PropTypes.func.isRequired
};

export default EditEmailList;
