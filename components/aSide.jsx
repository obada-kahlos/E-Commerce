import { setCounter, setOpenAside } from "@/feature/productsSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import Button from "./button";
import Image from "next/image";

const Aside = () => {
  const { openAside } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [myArrayOfProducts, setMyArrayOfProducts] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("wishList"))
      : null
  );
  const wishList =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("wishList"))
      : null;
  const handleDeleteWishLIst = () => {
    localStorage.removeItem("wishList");
    setMyArrayOfProducts(null);
    dispatch(setCounter(0));
  };
  const handleRemove = (id) => {
    let indexToRemove = wishList.findIndex((item) => item.id === id);
    let newArray = [...wishList];
    newArray.splice(indexToRemove, 1);
    setMyArrayOfProducts(newArray);
    localStorage.setItem("wishList", JSON.stringify(newArray));
    dispatch(setCounter(newArray.length));
  };
  return (
    <>
      {wishList?.length > 0 ? (
        <div className={`wish-list open`}>
          <div className=" flex justify-between items-center p-[20px]   border-b-[2px]  border-b-[#ccc] ">
            <h2 className="font-[600] hover:text-first-color transition-[0.3s] ">
              {" "}
              My WishList
            </h2>
            <div
              className="w-[40px] h-[40px] rounded-[50%] hover:bg-[#f7f7f7] flex justify-center items-center cursor-pointer  "
              onClick={() => dispatch(setOpenAside())}
            >
              <BsArrowRight className=" text-[20px]  " />
            </div>
          </div>
          {wishList?.map((item) => {
            return (
              <div
                key={item?.key}
                className="flex flex-col items-center border-b-[2px]  border-b-[#ccc] p-[20px]"
              >
                <div
                  className={`flex justify-center items-center h-[200px] w-full`}
                >
                  <Image
                    src={item?.image}
                    alt="product"
                    className=" max-h-full"
                    width={150}
                    height={200}
                  />
                </div>
                <p className=" font-[bold] text-[25px] text-first-color mt-[10px]">
                  ${item.price}
                </p>
                <Button
                  text={"Delete From WishList"}
                  bg={"#ccc"}
                  border={"2px solid #ccc"}
                  className={"wish-list"}
                  padding={"5px 20px"}
                  width={"fit-content"}
                  color={"black"}
                  borderRadius={"10px"}
                  margin={"15px auto"}
                  onClick={() => handleRemove(item.id)}
                  hoverBg={"white"}
                  hoverText={"#D10024"}
                  borderHover={"2px solid #D10024"}
                  fontWeight={"500"}
                />
              </div>
            );
          })}
          {wishList?.length === 1 ? (
            ""
          ) : (
            <Button
              text={"Delete All WishList"}
              bg={"#ccc"}
              border={"2px solid #ccc"}
              className={"wish-list-all"}
              padding={"5px 20px"}
              width={"fit-content"}
              color={"black"}
              borderRadius={"10px"}
              margin={"25px auto"}
              onClick={handleDeleteWishLIst}
              hoverBg={"white"}
              hoverText={"#D10024"}
              borderHover={"2px solid #D10024"}
              fontWeight={"500"}
              dispaly={"block"}
            />
          )}
        </div>
      ) : (
        ""
      )}

      <style>
        {`
        div.wish-list {
          position : fixed;
          top : 0;
          height :100vh;
          right:${openAside ? "0" : "-200%"};
          background: #fff;
          // padding : 20px;
          overflow-y: auto;
          width : 400px;
          z-index:10000;
          box-shadow:
          -5px 0px 5px rgba(0, 0, 0, 0.1),
          -10px 0px 10px rgba(0, 0, 0, 0.1);
          transition : 1s ease-in-out
        }
        div .wish-list::-webkit-scrollbar {
        display: none;
        }

        // @keyframes openSidebar {
        // from { width: 0; }
        // to { width: 400px; }
        // }
        // div .open {
        //   animation: openSidebar 0.5s forwards;
        // }
        `}
      </style>
    </>
  );
};
export default Aside;
