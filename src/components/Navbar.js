import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.dropdown = this.dropdown.bind(this);
  }

  dropdown = () => {
    var navbar = document.getElementById('navbar');
    if (navbar.className === 'navbar-container') {
      navbar.className += ' responsive';
    } else {
      navbar.className = 'navbar-container';
    }
  }

  render() {
    return(
      <div id="navbar" className="navbar-container">
        <div className="logo">
          <Link to="/">WICKDEEB</Link>
        </div>
        <div id="button" className="nav-item"><i className="fas fa-caret-down" onClick={this.dropdown}></i></div>
        <div className="nav-items">
          <div className="nav-item">
            <Link to="/" onClick={this.dropdown}>Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/articles" onClick={this.dropdown}>Articles</Link>
          </div>
          <div className="categories">
            <div className="nav-item">
              <Link to="#" onClick={this.dropdown}>Category 1</Link>
            </div>
            <div className="nav-item">
              <Link to="#" onClick={this.dropdown}>Category 2</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;