import { GetServerSideProps } from "next";
import { fetchArticleBySlug } from '../api/index'
import { AxiosResponse } from "axios"
import qs from 'qs'

type IProp = {
    article: {
        items: IArticle[]
    }
}

const Slug = ({article}:IProp) => {
console.log('article',article)

    return (
<div className="container">
<h1>hello</h1>
</div>
    )
}

export const getServerSideProps:GetServerSideProps = async({query}) => {
const options = {
    populate: ["Image","author.avatar"],
    filters:{
        slug:{
            $eq:query.slug
        }
    }
}
    const qsString = qs.stringify(options)
    const { data: article}: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticleBySlug(qsString);

    return {
        // returning props as objet items with array of categories
        props: {
          article: {
            items: article.data[0],
          },
        },
      };
}

export default Slug;