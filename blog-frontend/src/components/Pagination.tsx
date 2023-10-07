import { useRouter } from "next/router";
import qs from "qs";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
 type TDirection = 1 | -1;
type IProps = {
    page:number,
    pageCount:number,
    redirectUrl?: string,
}

const Pagination = ({page,pageCount,redirectUrl = '/'}:IProps) => {
    const router = useRouter()
  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };
  const handlePage = (controller: TDirection) => {
    if (controller === 1 && isNextDisabled()) {
      return;
    }

    if (controller === -1 && isPrevDisabled()) {
      return;
    }
    const queryString = qs.stringify({
        page: page + controller,
    });
router.push(`${redirectUrl}?${queryString}`)
  };
  return (
    <div className="flex justify-center items-center scale-x-2 my-8">
      <button
        type="button"
        className={`${isPrevDisabled() ? "text-white bg-btn-primary outline-none focus:ring-btn-primary/50  rounded-lg text-sm  px-4 py-2 mx-2 disable" :"text-white bg-btn-primary outline-none focus:ring-btn-primary/50  rounded-lg text-sm  px-4 py-2 mx-2"}`}
        onClick={() => {
          handlePage(-1);
        }}
      >
        Prev
        {/* <GrLinkPrevious /> */}
      </button>
      <button
        type="button"
        className={`${isNextDisabled() ? "text-white bg-btn-primary outline-none focus:ring-btn-primary/50  rounded-lg text-sm  px-4 py-2 mx-2 disable" :"text-white bg-btn-primary outline-none focus:ring-btn-primary/50  rounded-lg text-sm  px-4 py-2 mx-2"}`}        
        onClick={() => {
        handlePage(1);
        }}
      >
        Next
        {/* <GrLinkNext color='white' /> */}
      </button>
    </div>
  );
};

export default Pagination;
