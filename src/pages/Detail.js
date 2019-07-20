import React from "react";
import Tabs from "../components/Detail/Tabs";
import Controller from "../components/Detail/Controller";
import Analytics from "../components/Detail/Analytics";
import Ringtones from "../components/Detail/Ringtones";
import Todos from "../components/Detail/Todos";
import InputGroup from "../components/UI/InputGroup";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Detail = props => {
  return (
    <section className="Detail">
      <div className="left-section">
        <div className="content">
          <Tabs {...props} />
          <Controller {...props} />
        </div>
      </div>
      <div className="right-section">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {props.stackName === "Todos" && <Todos {...props} />}
          {props.stackName === "Analytics" && <Analytics />}
          {props.stackName === "Ringtones" && <Ringtones />}
        </ReactCSSTransitionGroup>
      </div>
    </section>
  );
};
export default Detail;
