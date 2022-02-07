import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import he from "he";
import { format, parseISO } from "date-fns";
import {
  ArticleWall,
  StyledDetail,
  ArticleTitle,
  DetailInfo,
} from "../styled-components/StyledArticles";
import {
  CommentWall,
  Comment,
  CommentDetail,
} from "../styled-components/StyledComments";

export default function ArticleDetail() {
  let { articleId } = useParams();

  const [article, setArticle] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/api/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => setArticle(data.article))
      .catch((error) => console.error(error));
  }, [articleId]);

  const [comments, setComments] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/api/articles/${articleId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data.comments))
      .catch((error) => console.error(error));
  }, [articleId]);

  return (
    <ArticleWall className="ArticleWall">
      {article && (
        <StyledDetail className="ArticleDetail">
          <ArticleTitle className="ArticleTitle">{article.title}</ArticleTitle>
          <p className="ArticleBody">{he.decode(article.body)}</p>
          <DetailInfo className="DetailInfo">
            <p className="ArticleAuthor">By {article.author.username}</p>
            <p className="ArticleTimestamp">
              {format(parseISO(article.timestamp), "H:mmbb, dd/MM/yyyy")}
            </p>
          </DetailInfo>
          {comments &&
            comments.map((comment) => (
              <CommentWall key={comment._id} className="CommentWall">
                <h3>Comments</h3>
                <Comment className="Comment">
                  <p className="CommentBody">{comment.body}</p>
                  <CommentDetail className="CommentDetail">
                    By {comment.author.username} at{" "}
                    {format(parseISO(comment.timestamp), "H:mmbb, dd/MM/yyyy")}
                  </CommentDetail>
                </Comment>
              </CommentWall>
            ))}
        </StyledDetail>
      )}
    </ArticleWall>
  );
}
