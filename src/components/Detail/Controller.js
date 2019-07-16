import React from "react";

const Controller = props => {
  const timeFormat = t => {
    let tmp = t;
    const hr = Math.floor(tmp / 6000);
    tmp = tmp % 6000;
    const mm = Math.floor(tmp / 100);
    return `${("" + hr).length === 1 ? "0" + hr : hr}:${
      ("" + mm).length === 1 ? "0" + mm : mm
    }`;
  };

  let timeProcessor = () => {
    const processor = ((150000 - props.time) / 150000) * 360;
    return {
      background: `conic-gradient(#ff4384 0deg ${processor}deg, white ${processor}deg 360deg)`
    };
  };

  return (
    <div className="play-controller">
      <div className="controll-circle">
        <div className="processor-circle" style={timeProcessor()}>
          <div className="solid-circle">
            <div
              className="play-icon"
              onClick={
                props.timerStatus ? props.backTimePause : props.backTimeStart
              }
            >
              <i className="material-icons">
                {props.timerStatus ? "pause" : "play_arrow"}
              </i>
            </div>
          </div>
        </div>
      </div>

      <div className="timer-main">{timeFormat(props.time)}</div>
      <div className="todo-title">THE FIRST THING TO DO TODAY</div>
    </div>
  );
};
export default Controller;
