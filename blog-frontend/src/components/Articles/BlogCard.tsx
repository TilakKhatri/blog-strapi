import Link from "next/link";
import Image from "next/image";
import { formateDate } from "../../../utilis/format";
type IProp = {
  article: IArticle;
};
const BlogCard = ({ article }: IProp) => {
  return (
    <div className="container flex flex-col border-teal-100 shadow-md p-4">
      <Link href="#">
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
        <div className="flex items-center my-4">
          <div>
            {/* <Image src={`${process.env.BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}   width={20} height={20} alt="avatar"/> */}
          </div>
          <span className="text-gray-400 text-xs font-bold mt-2 hover:text-gray-100">
            {article.attributes.author.data.attributes.username}
          </span>
          <span className="mx-2 text-gray-400 text-xs mt-1">
            posted at {formateDate(article.attributes.createdAt)}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
