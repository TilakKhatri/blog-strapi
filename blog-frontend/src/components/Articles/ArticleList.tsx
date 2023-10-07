import BlogCard from "./BlogCard"

type IProps = {
    articles: IArticle[]
}

const ArticleList = ({articles}:IProps) => {

    return (
        <div className="grid lg:grid-cols-2 gap-12 mt-12 container">
{
    articles.map((article)=><BlogCard article={article} />)
}
        </div>
    )
}

export default ArticleList