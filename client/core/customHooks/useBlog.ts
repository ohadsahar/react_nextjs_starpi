import { useRouter } from "next/router";
import { STARPI_API_URL } from "../../config/Config";

export const useBlog = () => {
  const router = useRouter();

  const onRoute = (title: string) => {
    router.push(`/articles/${title}`);
  };

  const onDelete = async (id: string) => {
    const fetchParams = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
        mutation  {
        deleteBlogpost(id:"${id}") {
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
    const deletedPost = await res.json();
  };

  return { onRoute, onDelete };
};
