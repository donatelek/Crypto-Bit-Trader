import React, { Component } from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
class Nav extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="navigation">
          <ul className="nav">
            <li className="nav-item" ><Link to='/login'>Login</Link></li>
            <li className="nav-item" ><Link to='/register' className='navRegister'>Register</Link></li>
          </ul>
        </div>
      </>
    );
  }
}

const NavLogo = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <Link to='/' className='headerLogo'>
                <div className='headerLogo'></div>
                <img className="header-logo-image" src={logo} alt="Logo" />
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export {
  Nav,
  NavLogo
}