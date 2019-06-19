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
    var posts = this.props.data.data.posts;
    // getting all categories
    let categories = [];
    for (var i = 0; i < posts.length; i++) {
      //all posts
      for (var j = 0; j < posts[i].tags.length; j++) {
        // all categories
        if (!categories.includes(posts[i].tags[j])) {
          // pushed unique categories to array
          categories.push(posts[i].tags[j]);
        }
      }
    }
    return(
      <div id="navbar" className="navbar-container">
        <div className="content">
          <div className="logo">
            <Link to="/">WICKDEEB</Link>
          </div>
          <div id="button" className="nav-item"><i className="fas fa-caret-down" onClick={this.dropdown}></i></div>
          <div className="nav-items">
            <Link to="/" onClick={this.dropdown}>
              <div className="nav-item">Home</div>
            </Link>
            <Link to="/articles" onClick={this.dropdown}>
              <div className="nav-item">Articles</div>
            </Link>
            <div className="categories">
              {categories.map(category => (
                <Link to={`/category/${category}`} key={category} onClick={this.dropdown}>
                  <div className="nav-item">
                    {category}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;