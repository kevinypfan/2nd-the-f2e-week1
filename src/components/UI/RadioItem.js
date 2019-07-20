import React from "react";

const RadioItem = props => {
  return (
    <div className="radio-group">
      <input
        type="radio"
        id={props.name + "-" + props.label}
        value={props.value}
        name={props.name}
        onChange={e => props.radioChanged(props.name, e.target.value)}
        checked={props.selectedRadio === props.value}
      />
      <span />
      <label htmlFor={props.name + "-" + props.label}>{props.label}</label>
    </div>
  );
};

export default RadioItem;
