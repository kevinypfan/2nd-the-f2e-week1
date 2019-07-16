import React from "react";

const TodoList = () => (
  <ul className="todo-list">
    <li>
      <span className="list-circle" />
      <span className="list-text">THE SECOND THING TO DO TODAY</span>
      <span className="list-icon">
        <i className="material-icons">play_circle_outline</i>
      </span>
    </li>
    <li>
      <span className="list-circle" />
      <span className="list-text">THE THIRD THING TO DO TODAY</span>
      <span className="list-icon">
        <i className="material-icons">play_circle_outline</i>
      </span>
    </li>
    <li>
      <span className="list-circle" />
      <span className="list-text">THE FORTH THING TO DO TODAY</span>
      <span className="list-icon">
        <i className="material-icons">play_circle_outline</i>
      </span>
    </li>
    <div className="list-more">MORE</div>
  </ul>
);

export default TodoList;
