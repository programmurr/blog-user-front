import styled from "styled-components";

export const ArticleWall = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ArticleList = styled.div`
  width: 100%;
  max-width: 958px;
  display: flex;
  flex-direction: column;
`;

export const Article = styled.div`
  border-bottom: 1px solid black;
  margin-top: 10px;
`;

export const ArticleTitle = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const ArticleInfo = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 13px;
`;
