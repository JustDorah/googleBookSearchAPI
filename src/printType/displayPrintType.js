/** 
    <select>
      <option>Apples</option>
      <option>Oranges</option>
      <option>Banannas</option>
    </select>;

     * printType	Restrict to books or magazines.	
Supported values are:
printType=all - Return all volume content types (no restriction). This is the default.
printType=books - Return just books.
printType=magazines - Return just magazines.
*/

import React from "react";

export default function DisplayPrintType() {
  return (
    <select className="display_print">
      <option>All</option>
      <option>Books</option>
      <option>Magazines</option>
    </select>
  );
}
