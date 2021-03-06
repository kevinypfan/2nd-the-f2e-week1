import React, { useState, useRef, useEffect } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Home from "./Home";
import Detail from "./Detail";
import NavBar from "../components/NavBar";

const Index = () => {
  const [time, setTime] = useState(150000);
  const [timerStatus, setTimerStatus] = useState(false);
  const timeRef = useRef({});
  const [stack, setStack] = useState("Home");
  const [todos, setTodos] = useState([
    { title: "the First thing to do today", completed: false },
    { title: "the second thing to do today", completed: false },
    { title: "the third thing to do today", completed: false },
    { title: "the Forth thing to do today", completed: false },
    { title: "complete the keynote", completed: false },
    { title: "prepare presentation", completed: false },
    { title: "mockup of the new case", completed: true, workCircle: 4 },
    { title: "product prototype", completed: true, workCircle: 2 },
    { title: "draw a wireframe", completed: true, workCircle: 7 },
    { title: "website detail refine", completed: true, workCircle: 5 }
  ]);

  const homeNavs = [
    { name: "Todos", icon: "list", text: "TO-DO LIST" },
    { name: "Analytics", icon: "insert_chart", text: "ANALYTICS" },
    { name: "Ringtones", icon: "library_music", text: "RINGTONES" }
  ];

  const detailNavs = [{ name: "Home", icon: "close", text: "Close" }];

  useEffect(() => {
    if (time === 0) {
      backTimePause();
    }
  }, [time]);

  const backTimeStart = () => {
    if (timerStatus === true || time === 0) {
      return;
    }
    setTimerStatus(true);
    timeRef.current = setInterval(() => {
      setTime(t => t - 1000);
    }, 100);
  };
  const backTimeStop = () => {
    setTimerStatus(false);
    clearInterval(timeRef.current);
    setTime(150000);
  };
  const backTimePause = () => {
    setTimerStatus(false);
    clearInterval(timeRef.current);
  };

  const pushStack = name => {
    setStack(name);
  };

  const renderMap = {
    Home: (
      <div key="1">
        <Home
          time={time}
          timerStatus={timerStatus}
          backTimeStart={backTimeStart}
          backTimePause={backTimePause}
          backTimeStop={backTimeStop}
          todos={todos}
          pushStack={pushStack}
        />
        <NavBar pushStack={pushStack} navs={homeNavs} />
      </div>
    ),
    Detail: (
      <div key="2">
        <NavBar pushStack={pushStack} navs={detailNavs} />
        <Detail
          pushStack={pushStack}
          stackName={stack}
          time={time}
          timerStatus={timerStatus}
          backTimeStart={backTimeStart}
          backTimePause={backTimePause}
          todos={todos}
        />
      </div>
    )
  };

  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      {stack === "Home" ? renderMap.Home : renderMap.Detail}
    </ReactCSSTransitionGroup>
  );
};

export default Index;
