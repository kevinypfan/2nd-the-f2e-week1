import React from "react";

const NavBar = props => {
  const navsRender = props.navs.map(el => {
    return (
      <div className="nav-icon" key={el.name}>
        <i className="material-icons" onClick={() => props.pushStack(el.name)}>
          {el.icon}
        </i>
      </div>
    );
  });

  return (
    <div className="nav-bar">
      <div className="top-bar">{navsRender}</div>
      <div className="bottom-bar">POMODORO</div>
    </div>
  );
};

export default NavBar;
