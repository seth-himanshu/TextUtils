import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUC = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLC = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space handled", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  return (
    <div>
      <div
        className="mb-3 container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>
          <label htmlFor="myBox" className="form-label my-2">
            {props.heading}
          </label>
        </h4>
        <textarea
          className="form-control"
          placeholder="Enter Text Here"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
        <button
          disabled={text.length === 0}
          className={`btn btn-sm btn-${props.button} my-2 mx-1`}
          onClick={handleUC}
        >
          Change to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-sm btn-${props.button} my-2 mx-1`}
          onClick={handleLC}
        >
          Change to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-sm btn-${props.button} my-2 mx-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-sm btn-${props.button} my-2 mx-1`}
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-sm btn-${props.button} my-2 mx-1`}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>Your Text Summary</h4>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and {text.length}
        </p>
        <p>
          {0.008 *
            text.split("").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read this
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;
