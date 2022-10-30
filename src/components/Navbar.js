import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  // let mystyle={
  //   color:'black',
  //   fontFamily: "Arial",
  //   fontsize:'1000px',
  //   textalign:'center'
  // }
  return (
    //here we should know that we cannot change the props or(data in props) in this function. we cannot modify it
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
              <Link className="nav-link active" aria-current="page" to="/abouttext">
                {props.AboutText}
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" href="/">
               Link
              </a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    about
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
//object
//this checks that the values passed as props are the mentioned data types. It gives an error if we pass an unmached data type
Navbar.propTypes = {
  // title:PropTypes.number,
  // if we put is required to the attribute it means that it must be passed as a prop. That means if we dont have default props, It will show an error while executing. If we have defaultProp it will take from it if the prop is of same type as declered
  // title: PropTypes.string.isRequired,
  title: PropTypes.string,
  AboutText: PropTypes.string,
};
//default props
//if we donot pass any props to the component, These default props gets added.
Navbar.defaultProps = {
  title: "Kalyan",
  AboutText: "about kalyan",
};
