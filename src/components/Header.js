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
                    <Link to='/' className="nav-link active text-light ms-3 me-3"><i className="fas fa-home me-2"/>Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/skills' className="nav-link active text-light ms-3 me-3"><i className="fas fa-tools me-2"/>Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/projects' className="nav-link active text-light ms-3 me-3" ><i className="fas fa-tasks me-2"/>Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/contact' className="nav-link active text-light ms-3 me-3"><i className="fas fa-phone me-2"/>Contact
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

