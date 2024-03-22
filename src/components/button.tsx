import { useState } from "react";

const Button = () => {
  const [color, setColor] = useState<"red" | "blue" | "green">("blue");
  const [fontColor, setFontColor] = useState<string>("blue");

  const handleClick = (newColor: "red" | "blue" | "green") => {
    setColor(newColor);
    setFontColor(
      newColor === "red" ? "red" : newColor === "green" ? "green" : "blue"
    );
  };

  return (
    <>
      <h1 style={{ color: fontColor }}>
        "Hi! What's your favourite colour? My favourite colour is {`${color}`}."
      </h1>
      <button
        className="btn"
        onClick={() => {
          handleClick("red");
        }}
      >
        Red
      </button>
      <button
        className="btn"
        onClick={() => {
          handleClick("blue");
        }}
      >
        Blue
      </button>
      <button
        className="btn"
        onClick={() => {
          handleClick("green");
        }}
      >
        Green
      </button>
    </>
  );
};

export default Button;
