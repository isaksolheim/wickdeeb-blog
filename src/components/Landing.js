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
    //slugifys title
    return title.replace(/\s+/g, '-').toLowerCase();
  }


  return(
    <div className="landing-container">
      <div className="top">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="title">WICKDEEB Programming Articles</div>
        <div className="read-about">Read About</div>
        <Link to="/articles">
          <div className="category">Everything</div>
        </Link>
        {categories.map(category => (
          <Link to={`/category/${category}`} key={category}>
            <div className="category">
              {category}
            </div>
          </Link>
        ))}
      </div>
      <div className="recent-text">RECENT ARTICLES</div>
      {posts.map(post => (
        <Link to={slugify(post.title)} key={post.id}>
          <div className="recent-article">
            <img src={post.image} alt={post.title} />
            <div className="post-tags">
              {post.tags.map(tag => (
                <div className="post-tag" key={tag}>{tag}</div>
              ))}
            </div>
            <div className="post-title">{post.title}</div>
          </div>
        </Link>
      ))}
      <Link to="/articles">
        <div className="more-button">ALL ARTICLES</div>
      </Link>
    </div>
  );
}

export default Landing;