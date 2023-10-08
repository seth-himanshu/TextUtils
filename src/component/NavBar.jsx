import React from "react";
import {Link} from 'react-router-dom';

export const NavBar = (props) => {
  return (
    <div>
      <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div
              className="btn-group mx-4"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" onClick={props.redTheme} className="btn btn-danger"/>
              <button type="button" onClick={props.blueTheme} className="btn btn-primary"/>
              <button type="button" onClick={props.greenTheme} className="btn btn-success"/>
              <button type="button" onClick={props.toggleMode} className={`btn btn-${props.mode==="dark"? "light" : "dark"}`}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
