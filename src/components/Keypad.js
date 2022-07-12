// Code Keypad Component Here
import React from "react";

export default function Keypad() {
  return (
    <input
      onChange={() => {
        console.log("Entering password...");
      }}
      type="password"
    ></input>
  );
}
