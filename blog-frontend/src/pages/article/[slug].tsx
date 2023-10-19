import { GetServerSideProps } from "next";
import { fetchArticleBySlug } from "../api/index";
import { AxiosResponse } from "axios";
import qs from "qs";
import { NOTFOUND } from "dns";

type IProp = {
  article: IArticle,
  noFound?:boolean
};

const Slug = ({ article }: IProp) => {
  console.log("articles", article);

  return (
    <div className="container">
      {/* <h1>{article.attributes.Title}</h1> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const options = {
    populate: ["Image", "author.avatar"],
    filters: {
      slug: {
        $eq: query.slug,
      },
    },
  };
  const qsString = qs.stringify(options);
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticleBySlug(qsString);
  if (articles.data.length === 0) return {
    notFound:true
  };
  return {
    // returning props as objet items with array of categories
    props: {
      article:articles.data[0],
    
    },
  };
};

export default Slug;
