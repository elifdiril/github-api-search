import React from "react";
import "../styles/button.css";

const Buttons = ({ selectedButton, setSelectedButton }) => {
  return (
    <div className="buttons">
      <input
        type="radio"
        id="javascript"
        name="programming_language"
        value="javascript"
        onClick={() => setSelectedButton("javascript")}
        checked={selectedButton === "javascript"}
        readOnly
      />
        <label for="javascript">Javascript</label>
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
        id="python"
        name="programming_language"
        value="python"
        onClick={() => setSelectedButton("python")}
        checked={selectedButton === "python"}
        readOnly
      />{" "}
      <label for="python">Python</label>
    </div>
  );
};

export default Buttons;
