import React from "react";

function buttonText() {
  return "Submit/Click me";
}

function App() {
  const buttonStyle = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label>Enter the name :</label>
      <input id="name" type="text" />
      <button style={buttonStyle}>{buttonText()}</button>
    </div>
  );
}

export default App;
