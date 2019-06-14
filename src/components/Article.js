import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

function Article(props) {
  const slugify = (title) => {
    //slugifys title
    return title.replace(/\s+/g, '-').toLowerCase();
  }

  const findArticle = () => {
    let post;
    for (var i = 0; i < props.data.data.posts.length; i++) {
      if (props.match.params.slug === slugify(props.data.data.posts[i].title)) {
        post = props.data.data.posts[i];
      }
    }
    return post;
  }

  const postView = (post) => {
    const markdown = post.content;
    return(
      <article>
        <div className="post-title">{post.title}</div>
        <div className="tags">
          {post.tags.map(tag => (
            <Link to={`/category/${tag}`} key={tag}>
              <div className="post-tag">{tag}</div>
            </Link>
          ))}
        </div>
        <img src={post.image} alt={post.title} />
        <div className="markdown-container">
          <Markdown source={markdown} />
        </div>
      </article>
    );
  }

  return(
    <div className="article-container">
      {postView(findArticle())}
    </div>
  );
}

export default Article;