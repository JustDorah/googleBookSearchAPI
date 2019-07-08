import React from "react";

export default function DisplaySelection(props) {
  return (
    <select onChange={props.printChangeHandler || props.bookChangeHandler}>
      {props.bookOptions} {props.printOptions}
    </select>
  );
}
