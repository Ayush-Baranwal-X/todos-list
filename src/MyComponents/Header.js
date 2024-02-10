import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{props.tab1 === true ? <b>Todos</b> : <>Todos</>}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addtodo">{props.tab2 === true ? <b>Add-Todos</b> : <>Add-Todos</>}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.tab3 === true ? <b>About</b> : <>About</>}</Link>
              </li>
              {/* 
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
              </li>
              */}
            </ul>
            {/* {props.searchBar === true ? <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : ""} */}
            {props.searchBar === true ? <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : ""}
          </div>
        </div>
      </nav>
  )
}

// In order to specify the default values
Header.defaultProps = {
  title : "Your title here",
  searchBar : true,
}

// In Order to specify the types for the variables in props
// Helps in debugging by seeing the console using inspect element
Header.propTypes = {
  title : PropTypes.string,
  searchBar : PropTypes.bool.isRequired,
}
