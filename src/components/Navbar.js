import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({ title = 'Set title here', abouttext = 'About text here' ,mode,toggleMode}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{abouttext}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick = {()=>{toggleMode('primary')}} style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
            <div className="bg-danger rounded mx-2" onClick = {()=>{toggleMode('danger')}} style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
            <div className="bg-success rounded mx-2" onClick = {()=>{toggleMode('success')}} style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
            <div className="bg-warning rounded mx-2" onClick = {()=>{toggleMode('warning')}} style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
          </div> */}
        </div>
      </div>
      <div className={`form-check form-switch text-${mode === "light"?"dark" : "light"}`}>
        <input className="form-check-input my-3" onClick = {()=>{toggleMode(null)}} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Toggle Mode</label>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  abouttext: PropTypes.string
}

