import React from "react";
import { ArticleProps } from "../../../models/Article.model";
import { useBlog } from "../../customHooks/useBlog";
import Article from "../Article/Article";
import { BlogWrapper } from "./Styled";

const Blog = ({ data }: any) => {
  const { onRoute, onDelete } = useBlog();
  return (
    <BlogWrapper>
      {data.length > 0 &&
        data?.map((data: any, index: number) => (
          <Article
            onRoute={onRoute}
            onDelete={onDelete}
            {...data}
            key={index}
          />
        ))}
    </BlogWrapper>
  );
};

export default Blog;
