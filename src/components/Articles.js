import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import he from "he";
import {
  ArticleWall,
  ArticleList,
  Article,
  ArticleInfo,
} from "../styled-components/StyledArticles";

function articleList(articles) {
  return (
    <ArticleList className="ArticleList">
      {articles.map((article) => (
        <Article key={article._id} className="Article">
          <Link to={`articles/${article._id}`}>{he.decode(article.title)}</Link>
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
      {articles.length > 0 && articleList(articles)}
    </ArticleWall>
  );
}
