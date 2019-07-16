import React from "react";

const ControlCircle = props => {
  let timeProcessor = () => {
    const processor = ((150000 - props.time) / 150000) * 360;
    return {
      background: `conic-gradient(#ff4384 0deg ${processor}deg, white ${processor}deg 360deg)`
    };
  };

  return (
    <div className="controll-circle">
      <div className="processor-circle" style={timeProcessor()}>
        <div
          className="solid-circle"
          style={{ backgroundColor: props.timerStatus ? "white" : "#ff4384" }}
        >
          <div
            className="play-area"
            style={{
              backgroundColor: props.timerStatus ? "#ff4384" : "white"
            }}
          >
            <div
              onClick={
                props.timerStatus ? props.backTimePause : props.backTimeStart
              }
              className="play-icon"
            >
              <i
                className="material-icons"
                style={{
                  color: props.timerStatus ? "white" : "#ff4384"
                }}
              >
                {props.timerStatus ? "pause" : "play_arrow"}
              </i>
            </div>
            <div
              onClick={props.backTimeStop}
              className="break-area"
              style={{
                backgroundColor: props.timerStatus ? "#ff4384" : "white"
              }}
            >
              <div className="break-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlCircle;
