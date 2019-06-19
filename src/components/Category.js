import React from 'react';
import { Link } from 'react-router-dom';

function Category(props) {
  const slugify = (title) => {
    //slugifys title
    return title.replace(/\s+/g, '-').toLowerCase();
  }

  var category = props.match.params.category;
  var posts = props.data.data.posts;
  // getting all categories
  let filteredPosts = [];
  for (var i = 0; i < posts.length; i++) {
    //all posts
    for (var j = 0; j < posts[i].tags.length; j++) {
      // all categories
      if (posts[i].tags[j] === category) {
        filteredPosts.push(posts[i]);
      }
    }
  }

  return(
    <div className="category-container">
      <div className="category">{category}</div>
      {filteredPosts.map(post => (
        <Link to={`/${slugify(post.title)}`} key={post.id}>
          <div className="article">
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

export default Category