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
      <div className="test d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal"><Link className="title" to="/">WICKDEEB</Link></h5>
        <nav className="my-2 my-md-0 mr-md-3">
          {categories.map(category => (
            <Link 
              to={`/category/${category}`} 
              key={category} 
              className="p-2 text-dark">
                {category}
            </Link>
          ))}
        </nav>
    </div>
    );
  }
}

export default Navbar;