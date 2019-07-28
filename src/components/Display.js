import React from "react";

// The purpuse of this component is to visually display the state of its parent component(i.e. the component that imports and uses this function)

function Display({ value = 0 }) {
  return <div className="display">{value}</div>;
}

export default Display;

 