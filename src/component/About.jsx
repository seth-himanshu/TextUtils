import React from "react";

const About = (props) => {
  return (
    <div className="container my-3">
      <h1 style={{ color: props.mode === "dark" ? "white" : "#16181b" }}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About | TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
            >
              <strong>TextUtils is a text manipulation webpage.</strong> You can
              convert your text from uppercase to lowercase and from lowercase
              to uppercase, copy your text to clipboard, remove extra spaces and
              clear the textarea after finishing your task. !! Thank You for
              using TextUtils !!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Theme & Modes
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
            >
              You can apply Light and Dark Themes to the webpage. We have also
              provided various themes in addition to dark mode,which are Red,
              Blue and Green theme. You can use those themes after applying dark
              mode.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Technology Used:
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
            >
              This webpage is totally based on React Js. We've used bootstrap
              for styling purposes. It is a Front-End development Project.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
