import React from 'react';
import {Link} from 'react-router-dom';

export function WebHeader(props) {
  const backgroundStyle = {
    backgroundColor: "#4a2e83"
  }
  const titleColor = {
    color: "white"
  }
  return (
  <header className="text-light p-4" style={backgroundStyle}>
    <div className="d-flex align-items-center">
      <img src="/img/Favicon.jpg" alt="the favicon of the website" className="favicon mr-3"
           style={{height: "40px"}}/>
      <h1>UniWork</h1>
    </div>

    <nav>
      {/* links go here */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" style={titleColor} to="/joblist">Job List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={titleColor} to="/discussion">Discussion Board</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={titleColor} to="/visainfo">Visa Information</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={titleColor} to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={titleColor} to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  </header>);
}