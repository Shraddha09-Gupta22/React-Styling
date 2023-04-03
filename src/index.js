//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

// date input
const date = new Date();

// current time
const curr = date.getHours();

let greeting; // variable to store the values

// inline css
const customeStyle = {
  color: ""
};

// comparison function
if (curr < 12) {
  greeting = "Good Morning";
  customeStyle.color = "red";
} else if (curr > 12 && curr < 18) {
  greeting = "Good Afternoon";
  customeStyle.color = "green";
} else {
  greeting = "Good Night";
  customeStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customeStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
