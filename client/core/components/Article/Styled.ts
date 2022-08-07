import styled from "styled-components";

export const ArticleWrapepr = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ArticleRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ArticleRightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 3vw;
`;
export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const ArticleDescriptionText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
