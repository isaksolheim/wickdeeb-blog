import React from 'react';

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

  return(
    <div className="landing-container">
      <div className="top">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <h1>Wickdeeb Programming Articles</h1>
        <h2>Read About</h2>
        <div className="category">Everything</div>
        {categories.map(category => (
          <div className="category" key={category}>
            {category}
          </div>
        ))}
      </div>
      <h2>Recent Articles</h2>
      {posts.map(post => (
        <div className="recent-article" key={post.id}>
          <img src={post.image} alt={post.title} />
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Landing;