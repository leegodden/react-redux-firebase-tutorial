import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/styles.scss';
import { auth } from '../../firebase/utils';

import Logo from './../../assets/logo.png';

const Header = (props) => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="simpletut logo" />
          </Link>
        </div>
        <div className="callToActions">

          {/* // if user logged in */}
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>Logout</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  currentUser: null
};

export default Header;
