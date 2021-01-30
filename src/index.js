//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
let greeting = "";
const currentDate = new Date();
const time = currentDate.getHours();

let customStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
}
//or "Good Afternoon" if between 12PM and 6PM.
else if (time < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
}
//or "Good evening" if between 6PM and midnight.
else {
  greeting = "Good evening";
  customStyle.color = "blue";
}
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
