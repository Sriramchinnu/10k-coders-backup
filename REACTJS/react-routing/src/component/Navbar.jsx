import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg    bg-warning" >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
             
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* <a className="nav-link " aria-current="page" href="#">
                  Home
                </a> */}
               <Link to="/"className="nav-link">Home</Link>

                {/* <a className="nav-link" href="#">
                  Features
                </a> */}
               <Link to="/feature" className="nav-link">Feature</Link>

                {/* <a className="nav-link" href="#">
                  Pricing
                </a> */}
               <Link to="/pricing"className="nav-link">Pricing</Link>

                
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}