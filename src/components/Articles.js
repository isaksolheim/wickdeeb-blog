import React from 'react';
import { Link } from 'react-router-dom';

function Articles(props) {
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
    <div className="articles-container">
      <div className="title">ALL ARTICLES</div>
      {posts.map(post => (
        <Link to={slugify(post.title)} key={post.id}>
          <div className="recent-article">
            <img src={`./images/${post.image}`} alt={post.title} />
            <div className="post-tags">
              {post.tags.map(tag => (
                <div className="post-tag" key={tag}>{tag}</div>
              ))}
            </div>
            <div className="post-title">{post.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Articles;