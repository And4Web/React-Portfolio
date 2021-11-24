import React from 'react'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">And4Web</a>
             <ul className="nav me-auto mb-2 mb-lg-0 justify-content-end" >
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/">Contact</a>
                </li>
              </ul>
        </div>         
      </nav>
    </div>
  )
}
export default Header;

