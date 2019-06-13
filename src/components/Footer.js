import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  var posts = props.data.data.posts;
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
    <div className="footer-container">
      <h2>Wickdeeb</h2>
      {categories.map(category => (
        <div className="category" key={category}>
          <Link to={`/${category}`}>{category}</Link>
        </div>
      ))}
    </div>
  );
}

export default Footer;