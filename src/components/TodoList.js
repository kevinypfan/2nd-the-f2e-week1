import React from "react";

const TodoList = props => {
  let todosRender;
  if (props.limit) {
    todosRender = props.todos
      .filter(el => el.completed)
      .slice(0, props.limit)
      .map(el => {
        return (
          <li key={el.title}>
            <span className="list-circle" />
            <span className="list-text">{el.title}</span>
            <span className="list-icon">
              <i className="material-icons">play_circle_outline</i>
            </span>
          </li>
        );
      });
  } else if (props.done) {
    todosRender = props.todos
      .filter(el => !el.completed)
      .map(el => {
        return (
          <li
            key={el.title}
            style={{
              borderBottom: `1px solid ${
                props.color === "white" ? "rgba(255, 255, 255, 0.2)" : "#003164"
              }`,
              padding: `20px 0`
            }}
          >
            <span
              className="list-circle"
              style={{
                border: `2px solid ${
                  props.color === "white" ? "white" : "#003164"
                }`
              }}
            >
              <i className="material-icons">done</i>
            </span>
            <span
              className="list-text"
              style={{
                textDecorationLine: "line-through",
                color: props.color === "white" ? "white" : "#003164"
              }}
            >
              {el.title}
            </span>
            <span className="list-icon">
              <i
                className="material-icons"
                style={{ color: props.color === "white" ? "white" : "#003164" }}
              >
                play_circle_outline
              </i>
            </span>
          </li>
        );
      });
  } else {
    todosRender = props.todos
      .filter(el => el.completed)
      .map(el => {
        return (
          <li
            key={el.title}
            style={{
              borderBottom: `1px solid ${
                props.color === "white" ? "rgba(255, 255, 255, 0.2)" : "#003164"
              }`,
              padding: `20px 0`
            }}
          >
            <span
              className="list-circle"
              style={{
                border: `2px solid ${
                  props.color === "white" ? "white" : "#003164"
                }`
              }}
            />
            <span
              className="list-text"
              style={{ color: props.color === "white" ? "white" : "#003164" }}
            >
              {el.title}
            </span>
            <span className="list-icon">
              <i
                className="material-icons"
                style={{ color: props.color === "white" ? "white" : "#003164" }}
              >
                play_circle_outline
              </i>
            </span>
          </li>
        );
      });
  }

  return (
    <ul className="todo-list">
      {todosRender}
      {!!props.limit && (
        <div className="list-more" onClick={() => props.pushStack("Todos")}>
          MORE
        </div>
      )}
    </ul>
  );
};

export default TodoList;
