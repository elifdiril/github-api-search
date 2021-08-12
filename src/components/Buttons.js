import React from "react";
import "../styles/button.css";

const Buttons = ({ selectedButton, setSelectedButton }) => {
  return (
    <div className="buttons">
      <input
        type="radio"
        id="js"
        name="programming_language"
        value="js"
        onClick={() => setSelectedButton("js")}
        checked={selectedButton === "js"}
        readOnly
      />
        <label for="js">Javascript</label>
      <br />
      <input
        type="radio"
        id="scala"
        name="programming_language"
        value="scala"
        onClick={() => setSelectedButton("scala")}
        checked={selectedButton === "scala"}
        readOnly
      />
        <label for="scala">Scala</label>
      <br />
      <input
        type="radio"
        id="py"
        name="programming_language"
        value="py"
        onClick={() => setSelectedButton("py")}
        checked={selectedButton === "py"}
        readOnly
      />{" "}
      <label for="py">Python</label>
    </div>
  );
};

export default Buttons;
