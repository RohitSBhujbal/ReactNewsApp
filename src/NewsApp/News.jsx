// News.js

import React from 'react';


export default function News({ article }) {
  return (
    <div className="news">
      <div className="news-img" style={{ backgroundImage: `url(${article.urlToImage})` }}></div>
      <div className="news-content">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
        <div className="source">
          <p>{article.author}</p>
        </div>
      </div>
    </div>
  );
}
