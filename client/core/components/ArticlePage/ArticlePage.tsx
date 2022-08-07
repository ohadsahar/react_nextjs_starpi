import React from "react";
import { ArticleProps } from "../../../models/Article.model";
import AppTitle from "../../../shared/Typography/AppTitle";
import {
  ArticleHintText,
  ArticleImage,
  ArticleInfoWrapper,
  ArticlePageWrapper,
} from "./Styled";

const ArticlePage = ({ title, blogbody, blogimage }: ArticleProps) => {
  return (
    <ArticlePageWrapper>
      <ArticleInfoWrapper>
        <AppTitle title={title} />
      </ArticleInfoWrapper>
      <ArticleImage src={blogimage.data.attributes.url} />
      <ArticleHintText>{blogbody}</ArticleHintText>
    </ArticlePageWrapper>
  );
};

export default ArticlePage;
