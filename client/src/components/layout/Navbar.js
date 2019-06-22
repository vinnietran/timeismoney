import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import TimeContext from "../../context/time/timeContext";
import Logo from "../layout/MainLogo";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const timeContext = useContext(TimeContext);

  const { isAuthenticated, logout, user } = authContext;
  const {  clearTimes } = timeContext; 

  const onLogout = () => {
      logout(); 
      clearTimes();
  }

  const authLinks = (
    <Fragment>
      <li>Hello, {user && user.firstName}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
       <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
    </Fragment>
  );
  return (
    <nav style={{marginBottom: '30px'}} className='amber darken-1'>
    <div class="nav-wrapper">
    <i className={icon} /> {title}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  </nav>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Time Is Money",
  icon: "fas fa-id-card-alt"
};
export default Navbar;
