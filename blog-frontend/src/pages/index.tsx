import { GetServerSideProps } from "next";
import { Roboto } from "next/font/google";
import { fetchArticles, fetchCategories } from "./api";
import { AxiosResponse } from "axios";
import qs from 'qs'
import Tabs from "@/components/navbar/Tab";
import ArticleList from "@/components/Articles/ArticleList";
import Pagination from '@/components/Pagination'
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

type ITypeProps = {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[],
    pagination:Ipagination
  };
};

// here destructuring props by id categories
const Home: React.FC<ITypeProps> = ({ categories, articles }) => {
  const router  = useRouter()
  // console.log('items as props',categories)
  const handleSearch = (query : string) => {
    router.push(`/?search=${query}`)
  }
  return (
    <div>
      <Tabs categories={categories.items} handleSearchInput={handleSearch}/>
      <ArticleList articles={articles.items} />
      <Pagination page= {articles.pagination.page} pageCount={articles.pagination.pageCount}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  // customize query
  const options:Partial<any> = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    pagination:{
      page:query.page ? query.page : 1,
      pageSize:3
    }
  };
  if(query.search){
    options.filters = {
      Title: {
          $containsi: query.search,
      },
  };
  }
  const qsString = qs.stringify(options)
  // console.log('qsstring',qsString)
  //fetching articles
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(qsString);
  // fetching categories from api call
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();
  return {
    // returning props as objet items with array of categories
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};

export default Home;
