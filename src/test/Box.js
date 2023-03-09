import React from "react";

export default function Box(props) {
  //   const styles = {
  //     backgroundColor: props.on ? "#222222" : "transparent",
  //   };
  console.log(props.id);
  return <div className="box" onClick={() => props.toggle(props.id)}></div>;
}
