import React from "react";

export default function DisplaySelection(props) {
  return (
    <select>
      {props.bookOptions} {props.printOptions}
    </select>
  );
}
