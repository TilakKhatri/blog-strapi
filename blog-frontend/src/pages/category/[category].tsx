import { GetServerSideProps } from "next";
import { fetchArticles, fetchCategories } from "../api";
import { AxiosResponse } from "axios";
import Tabs from "@/components/navbar/Tab";
import Head from "next/head";
import qs from "qs";
import ArticleList from "@/components/Articles/ArticleList";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
type ITypeProps = {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
    pagination: Ipagination;
  };
  slug:string
};
const Category: React.FC<ITypeProps> = ({
  categories,
  articles,
  slug,

}: ITypeProps) => {
    const {page,pageCount} = articles.pagination;
    const router = useRouter();
    const {category:categorySlug} = router.query
    const handleSearch = (query: string) => {
        router.push(`/category/${categorySlug}/?search=${query}`);
    };
  return (
    <>
      <Head>
        <title>Guide2Begin {slug}</title>
        <meta />
      </Head>
      <Tabs categories={categories.items} handleSearchInput={handleSearch}/>
      <ArticleList articles={articles.items} />
      <Pagination page= {page} pageCount={pageCount} redirectUrl={`${categorySlug}`}/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const categoryFilter = qs.stringify({
    populate: ["author.avatar"],
    sort: ["id:desc"],
    filters: {
      category: {
        slug: query.category,
      },
    },
    pagination:{
        page:query.page ? query.page : 1,
        pageSize:3
      }
  });
console.log(categoryFilter)
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(categoryFilter);


  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
      slug:query.category
    },
  };
};

export default Category;
