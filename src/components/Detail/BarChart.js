import React, { useRef, useEffect, useState } from "react";

const BarChart = props => {
  const timerRef = useRef({});
  const boxRef = useRef();
  const [boxHeight, setBoxHeight] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    timerStart();
  }, []);
  useEffect(() => {
    setBoxHeight(boxRef.current.clientHeight);
    if (time % 3) {
      setBarData([
        { date: "7/1", value: randomFunc() },
        { date: "7/2", value: randomFunc() },
        { date: "7/3", value: randomFunc() },
        { date: "7/4", value: randomFunc() },
        { date: "7/5", value: randomFunc() },
        { date: "7/6", value: randomFunc() },
        { date: "7/7", value: randomFunc() }
      ]);
    }
  }, [time]);
  const randomFunc = () => {
    return Math.round(Math.random() * 24);
  };
  const timerStart = () => {
    timerRef.current = setInterval(() => {
      setTime(t => (t += 1));
    }, 1000);
  };
  const [barData, setBarData] = useState([
    { date: "7/1", value: 16 },
    { date: "7/2", value: 12 },
    { date: "7/3", value: 16 },
    { date: "7/4", value: 8 },
    { date: "7/5", value: 12 },
    { date: "7/6", value: 4 },
    { date: "7/7", value: 20 }
  ]);
  const renderBar = barData.map((el, index, ary) => {
    const values = ary.map(d => d.value);
    return (
      <div
        className={`bar ${Math.max(...values) === el.value ? "bar-max" : ""}`}
        style={{ height: ((boxHeight - 16) / 24) * el.value }}
      >
        <div className="x-label">{el.date}</div>
      </div>
    );
  });

  return (
    <div className="bar-group">
      <div className="y-label">
        {[4, 8, 12, 16, 20, 24].map(el => (
          <span style={{ height: boxHeight / 6 }}>{el}</span>
        ))}
      </div>
      <div className="bar-box" ref={boxRef}>
        {renderBar}
      </div>
    </div>
  );
};

export default BarChart;
