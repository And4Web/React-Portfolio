import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">And4Web</a>
            <div style={{float:'right'}}>
            <ul className="nav me-auto mb-2 mb-lg-0 justify-content-end"  >
                <li className="nav-item">
                  <Link to='/' className="nav-link active text-light ms-3 me-3" aria-current="page" ><i className="fas fa-home"/>Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light ms-3 me-3" href="/">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light ms-3 me-3" href="/">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light ms-3 me-3" href="/">Contact</a>
                </li>
              </ul>
            </div>
             
        </div>         
      </nav>
    </div>
  )
}
export default Header;

