import Link from "next/link";
import { useRouter } from "next/router";

type ITypeProps = {
  categories: ICategory[];
  handleSearchInput: (query:string)=>void;
};

const Tabs = ({ categories,handleSearchInput }: ITypeProps) => {

  const router = useRouter();
  const isTabActive = (category: ICategory) => {
    return category.attributes.slug === router.query.category;
  };

  return (
    <div className="w-full px-4 py-3 mx-auto ">
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
        <div className="order-2 place-self-center sm:place-self-stretch">
          <ul className="flex items-center justify-start font-medium mt-4 space-x-3 text-sm">
            <li>
              <Link
                href="/"
                className={
                  "sm:text-lg text-md " +
                  `${
                    router.pathname === "/" ? "text-primary font-bold" : "text-gray-700"
                  }`
                }
                aria-current="page"
              >
                Recent
              </Link>
            </li>
            {categories.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/category/${item.attributes.slug}`}
                  className={
                    " text-md sm:text-lg font-semibold" +
                    ` ${isTabActive(item) ?"text-primary font-bold" : "text-gray-700" }`
                  }
                  aria-current="page"
                >
                  {item.attributes.Title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:order-2 place-self-center sm:place-self-end">
          <div className="relative w-auto ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              className=" p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg "
              placeholder="Search..."
              onChange={(e)=>handleSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
