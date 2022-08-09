import type { GetStaticProps, NextPage } from "next";
import { STARPI_API_URL } from "../config/Config";
import Blog from "../core/components/Blog/Blog";

export const getStaticProps: GetStaticProps = async (context) => {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: ` {
        blogposts{
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
  }`,
    }),
  };
  const res = await fetch(`${STARPI_API_URL}/graphql`, fetchParams);
  const data = await res.json();
  return {
    props: data,
    revalidate: true
  };
};

const Home: NextPage = ({
  data: {
    blogposts: { data },
  },
}: any) => {
  return (
    <div>
      <Blog data={data} />
    </div>
  );
};

export default Home;
