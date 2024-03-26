import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode === 'light' ? 'dark' : 'light'}`} data-bs-theme={props.mode === 'light'?'dark':'light'}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./components/About/">
                <strong>About</strong>
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input bg-success" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className={`form-check-label text-${props.mode}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
