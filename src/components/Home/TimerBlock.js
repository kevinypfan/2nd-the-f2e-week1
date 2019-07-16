import React from "react";

const TimerBlock = props => {
  const timeFormat = t => {
    let tmp = t;
    const hr = Math.floor(tmp / 6000);
    tmp = tmp % 6000;
    const mm = Math.floor(tmp / 100);
    return `${("" + hr).length === 1 ? "0" + hr : hr}:${
      ("" + mm).length === 1 ? "0" + mm : mm
    }`;
  };
  return (
    <div className="timer-block">
      <div className="timer-title">
        <span className="circle-block" />
        <div className="text-group">
          <div className="timer-text">THE FIRST THING TO DO TODAY</div>
          <div className="processor-area">
            <div className="timer-processor" />
            <div className="timer-processor" />
            <div className="timer-processor" />
            <div className="timer-processor active" />
          </div>
        </div>
      </div>
      <div className="timer-main">{timeFormat(props.time)}</div>
    </div>
  );
};

export default TimerBlock;
