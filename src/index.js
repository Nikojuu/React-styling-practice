//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom/client";
const container = document.getElementById("root");
// Create a root.
const root = ReactDOM.createRoot(container);
let color = {
  color: ""
};

const date = new Date();
const hours = date.getHours();
let greetings = "";

if (hours > 0 && hours <= 12) {
  greetings = "Good Morning";
  color.color = "red";
} else if (hours > 12 && hours <= 18) {
  greetings = "Good afternoon";
  color.color = "green";
} else {
  greetings = "Good evening";
  color.color = "blue";
}
console.log(hours);

root.render(
  <h1 className="heading" style={color}>
    {" "}
    {greetings}
  </h1>
),
  container;
