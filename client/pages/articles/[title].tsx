import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { STARPI_API_URL } from "../../config/Config";
import ArticlePage from "../../core/components/ArticlePage/ArticlePage";

export const getStaticPaths: GetStaticPaths = async () => {
  const fetchParams = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        blogposts {
          data {
              attributes {
                  title   
              }
          }
      }
  }
      `,
    }),
  };
  const res = await fetch(`${STARPI_API_URL}/graphql`, fetchParams);
  const posts = await res.json();
  const paths = posts.data?.blogposts?.data?.map((post: any) => {
    return { params: { title: post.attributes.title } };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fetchParams = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        blogposts(filters:{title :{eq:"${params?.title}"}}) {
          data {
            id,
            attributes {
              title,
              blogbody,
              blogimage{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
      }
  }
      `,
    }),
  };

  const res = await fetch(`${STARPI_API_URL}/graphql`, fetchParams);
  const posts = await res.json();
  return {
    props: posts.data?.blogposts?.data[0].attributes,
  };
};

const Post: NextPage = (props: any) => {
  return <ArticlePage {...props} />;
};

export default Post;
