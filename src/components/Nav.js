import React, { Component } from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
class Nav extends Component {
  state = {}
  render() {
    return (
      <>
        <div class="navigation">
          {/* <div className="navHamburger"><i class="fas fa-bars"></i></div>
              <div className="mobileNav">
              <li class="nav-item" ><Link to='/login'>Login</Link></li>
              <li class="nav-item" ><Link to='/register' className='navRegister'>Register</Link></li>
              </div> */}
          <ul class="nav">
            <li class="nav-item" ><Link to='/login'>Login</Link></li>
            <li class="nav-item" ><Link to='/register' className='navRegister'>Register</Link></li>
          </ul>
        </div>
      </>
    );
  }
}

const NavLogo = () => {
  return (
    <header class="site-header">
      <div class="container">
        <div class="site-header-inner">
          <div class="brand header-brand">
            <h1 class="m-0">
              <Link to='/' className='headerLogo'>
                <div className='headerLogo'></div>
                <img class="header-logo-image" src={logo} alt="Logo" />
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