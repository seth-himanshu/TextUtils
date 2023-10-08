import React from "react";

export const Alert = (props) => {
  const capitalise = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "55px" }}>
      {props.alert && (
        <div
          class={`alert alert-${props.alert.type} py-1 my-2 alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};
