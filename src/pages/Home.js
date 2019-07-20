import React from "react";
import InputGroup from "../components/UI/InputGroup";
import TimerBlock from "../components/Home/TimerBlock";
import TodoList from "../components/TodoList";
import ControlCircle from "../components/Home/ControlCircle";

const Home = props => {
  return (
    <section className="Home">
      <div className="left-section">
        <div className="content">
          <InputGroup />
          <TimerBlock time={props.time} />
          <TodoList {...props} limit={3} done={true} />
        </div>
      </div>
      <div className="right-section">
        <ControlCircle
          time={props.time}
          timerStatus={props.timerStatus}
          backTimeStart={props.backTimeStart}
          backTimeStop={props.backTimeStop}
          backTimePause={props.backTimePause}
        />
      </div>
    </section>
  );
};

export default Home;
