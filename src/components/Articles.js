import react, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import he from "he";
import {
  ArticleWall,
  ArticleList,
  Article,
  ArticleTitle,
  ArticleInfo,
} from "../styled-components/StyledArticles";

// TODO: Add navigation to articles i.e. click on title - go to detail

function articleList(articles) {
  return (
    <ArticleList className="ArticleList">
      {articles.map((article) => (
        <Article key={article._id} className="Article">
          <ArticleTitle>{he.decode(article.title)}</ArticleTitle>
          <p>{he.decode(article.body)}</p>
          <ArticleInfo>
            <p>
              By {article.author.username}
              {" :: "}
              {article.comments.length}{" "}
              {article.comments.length === 1 ? "comment" : "comments"}
              {" :: "}
              {format(parseISO(article.timestamp), "H:mmbb, dd/MM/yyyy")}
            </p>
          </ArticleInfo>
        </Article>
      ))}
    </ArticleList>
  );
}

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ArticleWall className="ArticleWall">
      {articles.length === 0 ? <p>No articles yet!</p> : articleList(articles)}
    </ArticleWall>
  );
}
