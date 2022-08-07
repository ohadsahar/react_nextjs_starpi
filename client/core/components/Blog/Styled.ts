import styled from "styled-components";

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.main};
  padding: 1vh;
  height: 100vh;
  grid-row-gap: 1vh;
`;
