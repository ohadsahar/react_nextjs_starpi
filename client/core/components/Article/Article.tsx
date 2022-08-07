import { ArticleProps } from "../../../models/Article.model";
import AppButton from "../../../shared/Button/Button";
import DeleteButton from "../../../shared/DeleteButton/DeleteButton";
import AppTitle from "../../../shared/Typography/AppTitle";
import {
  ArticleDescriptionText,
  ArticleImage,
  ArticleInfo,
  ArticleRightSideWrapper,
  ArticleRowWrapper,
  ArticleWrapepr,
  ButtonWrapper,
} from "./Styled";

interface Article {
  id: string;
  attributes: ArticleProps;
  onRoute: (title: string) => void;
  onDelete: (id: string) => void;
}

const Article = ({ id, attributes, onRoute, onDelete }: Article) => {
  return (
    <ArticleWrapepr>
      <ArticleRowWrapper>
        <ArticleImage
          alt="ohad"
          width={300}
          height={300}
          src={attributes.blogimage.data.attributes.url}
        />
        <ArticleRightSideWrapper>
          <ArticleInfo>
            <AppTitle title={attributes?.title} fontSize="2vw" />
            <ArticleDescriptionText>
              {attributes?.blogbody}
            </ArticleDescriptionText>
          </ArticleInfo>
          <AppButton
            articleTitle={attributes.title}
            buttonText={"Navigate Page"}
            onPress={onRoute}
          />
        </ArticleRightSideWrapper>
      </ArticleRowWrapper>
      <ButtonWrapper>
        <DeleteButton
          id={id}
          buttonText={"Delete Article"}
          onDelete={onDelete}
        />
      </ButtonWrapper>
    </ArticleWrapepr>
  );
};

export default Article;
