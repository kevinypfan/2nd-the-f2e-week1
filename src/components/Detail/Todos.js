import React, { useState } from "react";
import Toast from "./Toast";
import TodoList from "../TodoList";
import InputGroup from "../UI/InputGroup";

const Todos = props => {
  const [toasts, setToasts] = useState([
    { title: "TO-DO", order: true },
    { title: "DONE", order: true }
  ]);

  const orderClickHandler = key => {
    setToasts(val => {
      const newToasts = val.map(el => {
        if (el.title === key) {
          el.order = !el.order;
        }
        return el;
      });
      return newToasts;
    });
  };

  const toastsRender = toasts.map(el => {
    return (
      <div key={el.title}>
        <Toast
          {...el}
          {...props}
          orderClicked={orderClickHandler}
          key={el.title}
          type="order"
        />
        <TodoList {...props} color="white" done={el.title === "DONE"} />
      </div>
    );
  });
  return (
    <div className="todos">
      <InputGroup />
      {toastsRender}
    </div>
  );
};

export default Todos;
