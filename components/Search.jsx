import Image from "next/image";
import { VscHeartFilled, VscThreeBars } from "react-icons/vsc";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { initializeCount, initializeCounter, setOpenAside, setSearchTerm } from "@/feature/productsSlice";
import { useEffect } from "react";
const Search = ({ handleToogle }) => {
  const { count, searchTerm,counter } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeCount());
    dispatch(initializeCounter());
  }, [dispatch]);
  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="bg-second-color py-2 border-b-[2px] border-first-color sticky top-[40px] left-0 z-[997]">
      <div className="wrapper lg:grid lg:grid-cols-12 lg:gap-x-4  flex flex-col items-center">
        <div className=" lg:col-span-3 grid-cols-4 ">
          <Image
            src="/logo.png"
            alt="Landscape picture"
            width={150}
            height={150}
            priority={true}
          />
        </div>

        <div className="lg:col-span-6  ">
          <form className=" flex items-center md:py-4 py-2 ">
            <input
              className="h-10 text-gray-500 flex-1 md:px-4 px-4  md:text-md text-[15px]  rounded-l-3xl sm:w-[400px] search"
              placeholder="Search here"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className=" text-white bg-first-color h-10 rounded-r-3xl md:px-5 px-3 py-2 md:text-md text-[14px]">
              Search
            </button>
          </form>
        </div>

        <div className="lg:col-span-3 flex justify-end grid-cols-4">
          <div
            className="inline-block py-4"
            onClick={() => dispatch(setOpenAside())}
          >
            <Link href="#" className="text-white block w-24 text-center title ">
              <VscHeartFilled className="text-md  block m-auto text-[20px]" />
              <span className="text-xs block">Your Wishlist</span>
              <div>{counter}</div>
            </Link>
          </div>

          <div className="inline-block py-4 mr-[-15px]">
            <Link
              href="cart"
              className="text-white block w-24 text-center title"
            >
              <MdShoppingCart className="text-md  block mx-[auto]  text-[20px] " />
              <span className="text-xs block">Your Cart</span>
              <div>{count}</div>
            </Link>
          </div>

          <div
            className="inline-block py-4 md:hidden cursor-pointer"
            onClick={handleToogle}
          >
            <Link
              href={"#"}
              className="text-white block w-24 text-center title"
            >
              <VscThreeBars className="text-md  block m-auto text-[20px]" />
              <span className="text-xs block ">Menu</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
