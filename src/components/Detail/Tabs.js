import React from "react";

const Tabs = props => {
  return (
    <div className="tabs">
      <div
        onClick={() => props.pushStack("Todos")}
        className={`tab-group ${props.stackName === "Todos" ? "active" : ""}`}
      >
        <div className="item-icon">
          <i className="material-icons">list</i>
        </div>
        <div className="item-text">TO-DO LIST</div>
      </div>
      <div
        onClick={() => props.pushStack("Analytics")}
        className={`tab-group ${
          props.stackName === "Analytics" ? "active" : ""
        }`}
      >
        <div className="item-icon">
          <i className="material-icons">insert_chart</i>
        </div>
        <div className="item-text">ANALYTICS</div>
      </div>
      <div
        onClick={() => props.pushStack("Ringtones")}
        className={`tab-group ${
          props.stackName === "Ringtones" ? "active" : ""
        }`}
      >
        <div className="item-icon">
          <i className="material-icons">library_music</i>
        </div>
        <div className="item-text">RINGTONES</div>
      </div>
    </div>
  );
};

export default Tabs;
