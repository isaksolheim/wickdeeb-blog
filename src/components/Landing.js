import React from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
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
  
  const slugify = (title) => {
    // slugifys title
    return title.replace(/\s+/g, '-').toLowerCase();
  }

  return(
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">WICKDEEB</h1>
          <p className="lead font-weight-normal">Read about Programming and Technology</p>
          <Link to="/articles" className="btn btn-outline-secondary">All Articles</Link>
          {categories.map(category => (
            <Link to={`/category/${category}`} className="btn btn-outline-secondary" key={category}>{category}</Link>
          ))}
        </div>
      </div>


      <div className="container">
        <div className="articles">
          {posts.map(post => (
            <Link to={slugify(post.title)} key={post.id}>
              <div className="recent-article">
                <img src={post.image} alt={post.title} />
                <div className="post-title">{post.title}</div>
                <div className="post-tags">
                  {post.tags.map(tag => (
                    <div className="post-tag" key={tag}>{tag}</div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;