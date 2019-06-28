import React from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
  var posts = props.data.data.posts;
  // featured post
  let featured;
  // getting all categories
  let categories = [];
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].featured) {
      featured = posts[i];
    }
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
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">{featured.title}</h1>
            <p className="lead my-3">{featured.featuredText}</p>
            <p className="lead mb-0"><Link to={slugify(featured.title)} className="text-white font-weight-bold">Continue reading...</Link></p>
          </div>
        </div>

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
    /*
    <div className="landing-container">
      <div className="top">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="content">
          <div className="title">Articles About Programming and Technology</div>
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
      </div>
      <div className="section2">
        <div className="recent-text">RECENT ARTICLES</div>
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
        <Link to="/articles">
          <div className="more-button">ALL ARTICLES</div>
        </Link>
      </div>
    </div>
    */
  );
}

export default Landing;