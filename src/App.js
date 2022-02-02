import "./App.css";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";

function articleList(articles) {
  return (
    <div className="Articles">
      {articles.map(
        (article) =>
          article.published && (
            <div key={article._id} className="Article">
              <p>{article.title}</p>
              <p>{article.body}</p>
              <p>{article.author.username}</p>
              <p>{article.comments.length} comments</p>
              <p>{format(parseISO(article.timestamp), "H:mmbb, dd/MM/yyyy")}</p>
            </div>
          )
      )}
    </div>
  );
}

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        setArticles(data.articles);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {articles.length === 0 ? <p>No articles yet!</p> : articleList(articles)}
    </div>
  );
}

export default App;
