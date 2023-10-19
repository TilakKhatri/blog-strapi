import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-50 fixed w-full z-10 top-0 left-0 shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto py-3 px-2 ">
          <Link href="/" className="flex items-center">
            <span className="self-center text-lg sm:text-xl font-semibold whitespace-nowrap dark:text-gray-800">
              Guide2Begin
            </span>
          </Link>
          <div className="flex">
            <button
              type="button"
              className="text-white bg-btn-primary hover:bg-primay focus:ring-4 focus:outline-none  font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center mr-3 md:mr-0 btn-sm"
            >
              Login
            </button>
          </div>
         
        </div>
      </nav>
    </>
  );
}
