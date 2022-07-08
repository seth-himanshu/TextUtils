import React from 'react'

export default function About(props) {


    return (
        <div className="container my-3">
            <h1 style={{ color: props.mode==='dark' ? "white" : "black"}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode==='dark' ? '#16181b' : "white", color: props.mode==='dark' ? "white" : "black"}}>
                            About | TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={{ backgroundColor: props.mode==='dark' ? '#16181b' : "white", color: props.mode==='dark' ? "white" : "black"}}>
                            <strong>TextUtils is a text manipulation webpage.</strong> You can convert your text from uppercase to lowercase and from lowercase to uppercase, copy your text to clipboard, remove extra spaces and clear the textarea after finishing your task.
                            !! Thank You for using TextUtils !!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode==='dark' ? '#16181b' : "white", color: props.mode==='dark' ? "white" : "black"}}>
                            Theme & Modes
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode==='dark' ? '#16181b' : "white", color: props.mode==='dark' ? "white" : "black"}}>
                            You can apply Light and Dark Themes to the webpage. We have also provided various themes in addition to dark mode,which are Red, Blue and Green theme. You can use those themes after applying dark mode.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{ backgroundColor: props.mode==='dark' ? '#16181b' : "white", color: props.mode==='dark' ? "white" : "black"}}>
                           Technology Used:
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode==='dark' ? '#16181b' : "white", color: props.mode==='dark' ? "white" : "black"}}>
                            This webpage is totally based on React Js. We've used bootstrap for styling purposes.
                            It is a Front-End development Project.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
