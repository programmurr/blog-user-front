import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// TODO: Remove hardcoded links - research

export default function ArticleDetail() {
  let { articleId } = useParams();

  const [article, setArticle] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/api/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => setArticle(data.article))
      .catch((error) => console.error(error));
  }, []);

  return <div>{Object.keys(article).length > 0 && <p>{article.title}</p>}</div>;
}
