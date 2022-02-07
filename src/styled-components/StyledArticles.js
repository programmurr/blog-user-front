import styled from "styled-components";

export const ArticleWall = styled.section`
  display: flex;
  justify-content: center;
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

export const ArticleTitle = styled.h2`
  font-weight: 600;
  margin: 10px 0;
  font-size: 18px;
`;

export const ArticleInfo = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 13px;
`;

export const StyledDetail = styled.div`
  width: 100%;
  max-width: 958px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DetailInfo = styled.div`
  align-self: flex-start;
  font-style: italic;
  font-size: 14px;
`;
