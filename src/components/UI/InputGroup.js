import React, { useState } from "react";

const InputGroup = () => {
  const [inputNull, setInputNull] = useState("");

  const inputChanged = e => {
    setInputNull(e.target.value);
  };

  return (
    <div className="input-group">
      {inputNull.length > 0 ? (
        ""
      ) : (
        <label htmlFor="mission">ADD A NEW MISSION...</label>
      )}
      <input type="text" id="mission" onChange={inputChanged} />
      <button className="input-icon">
        <i className="material-icons">add</i>
      </button>
    </div>
  );
};

export default InputGroup;
