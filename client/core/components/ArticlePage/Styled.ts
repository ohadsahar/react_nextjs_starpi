import styled from "styled-components";

export const ArticlePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.main};
  height: 100vh;
  align-items: center;
  padding: 3vh;
`;

export const ArticleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-gap: 1vh;
  padding-bottom: 5vh;
`;

export const ArticleImage = styled.img`
  width: 400px;
  height: 400px;
  padding-bottom: 3vh;
`;

export const ArticleHintText = styled.p`
  font-size: 24px;
  font-weight: 300;
`;
