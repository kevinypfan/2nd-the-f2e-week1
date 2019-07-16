import React from "react";

const InputGroup = () => (
  <div className="input-group">
    <label htmlFor="mission">ADD A NEW MISSION...</label>
    <input type="text" id="mission" />
    <button className="input-icon">
      <i className="material-icons">add</i>
    </button>
  </div>
);

export default InputGroup;
