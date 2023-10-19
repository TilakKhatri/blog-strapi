import Link from "next/link";
import Image from "next/image";
import { formateDate } from "../../../utilis/format";
type IProp = {
  article: IArticle;
};
const BlogCard = ({ article }: IProp) => {
  // console.log('url ',process.env.NEXT_PUBLIC_BASE_URL)
  return (
    <div className="container min-w-md flex sm:flex-row flex-col  border-teal-100 shadow-md p-4">
      <div className="w-full flex justify-start sm:py-2 py-0">
      <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${article.attributes.Image.data[0].attributes.url}`} width={210} height={250}   alt="image" className="rounded-lg"/>
      </div>
      <div className="w-full flex flex-col " >
        <Link href={`/article/${article.attributes.slug}`}>
          <h1 className="text-lg font-medium text-gray-800 hover:decoration-primary hover:cursor-pointer hover:underline hover:text-primary">
            {article.attributes.Title}
          </h1>
        </Link>
        <div className="mt-1">
          <p className="text-sm text-gray-700">
            {article.attributes.Content.length < 100
              ? article.attributes.Content
              : article.attributes.Content.slice(0, 100) + "..."}
          </p>
        </div>
        <div className="flex flex-row mt-2 gap-2">
          <div className="flex items-center ">
            <div className="p-2 " >
              <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}   width={30} height={30} className="rounded-full" alt="avatar"/>
            </div>
            <span className="text-gray-400 text-xs font-bold  hover:text-gray-100">
              {article.attributes.author.data.attributes.username}
            </span>
            <span className="mx-2 text-gray-400 text-xs ">
              posted at {formateDate(article.attributes.createdAt)}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
