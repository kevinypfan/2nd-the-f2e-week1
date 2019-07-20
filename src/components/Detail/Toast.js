import React from "react";

const Toast = props => {
  return (
    <div className="toast">
      <div className="toast-title">{props.title}</div>
      <div className="toast-feature">
        {props.type === "order" && (
          <div
            className="order-icon"
            onClick={() => props.orderClicked(props.title)}
          >
            {props.order ? (
              <i className="material-icons">arrow_drop_down</i>
            ) : (
              <i className="material-icons">arrow_drop_up</i>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Toast;
