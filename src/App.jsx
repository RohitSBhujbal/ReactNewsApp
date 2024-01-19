// App.js

import News from "./NewsApp/News";
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=microsoft&from=2024-01-18&apiKey=6cf3505246324a07814720fea4359811`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Todays Breaking News</h1>
      <section className="news-articles">
        {articles.map((article, index) => (
          <News key={index} article={article} />
        ))}
      </section>
    </div>
  );
}

export default App;
