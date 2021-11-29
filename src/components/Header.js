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
                  <Link to='/skills' className="nav-link active text-light ms-3 me-3" aria-current="page" ><i className="fas fa-tools"/>Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/projects' className="nav-link active text-light ms-3 me-3" aria-current="page" ><i className="fas fa-tasks"/>Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact' className="nav-link active text-light ms-3 me-3" aria-current="page" ><i className="fas fa-phone"/>Contact
                  </Link>
                </li>
              </ul>
            </div>
             
        </div>         
      </nav>
    </div>
  )
}
export default Header;

