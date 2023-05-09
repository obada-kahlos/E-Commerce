import Button from "@/components/button";
import { setCount } from "@/feature/productsSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const [myArrayOfProducts, setMyArrayOfProducts] = useState(
    JSON.parse(localStorage.getItem("myArray"))
  );
  
  const myArray = JSON.parse(localStorage.getItem("myArray"));
  const handleDeleteCard = () => {
    localStorage.removeItem("myArray");
    setMyArrayOfProducts(null);
    dispatch(setCount(0));
  };

  const handleRemove = (id) => {
    let indexToRemove = myArray.findIndex((item) => item?.id === id);
    let newArray = [...myArray];
    newArray.splice(indexToRemove, 1);
    setMyArrayOfProducts(newArray);
    localStorage.setItem("myArray", JSON.stringify(newArray));
    dispatch(setCount(newArray.length));
  };

  return (
    <>
      {myArray?.length > 0 ? (
        <>
          <div className=" wrapper flex justify-between">
            <h3 className="font-[bold] m-[8px] text-[20px] hover:text-first-color transition-[0.3] ">
              My Cart
            </h3>
            <Button
              text={"Delete Cart"}
              className={"remove"}
              color={"black"}
              fontSize={"18px"}
              fontWeight={"500"}
              margin={"8px"}
              hoverText={"#D10024"}
              onClick={handleDeleteCard}
            />
          </div>
          <div className="grid grid-cols-12 sm:gap-x-8 sm:gap-y-8  gap-y-8 py-8 wrapper ">
            {myArray?.map((item) => {
              return (
                <div
                  key={item?.key}
                  className=" justify-center w-[250px] max-w-[100%]  text-center mx-auto p-[15px]  border-[#ccc] border-[3px] border-solid  xl:col-span-3  lg:col-span-4 sm:col-span-6 col-span-12   hover:border-first-color duration-300 "
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
                  <p className=" font-[bold] text-[25px] text-first-color my-[10px]">
                    ${item?.price}
                  </p>
                  <Button
                    text={"Delete From Cart"}
                    bg={"#ccc"}
                    border={"2px solid #ccc"}
                    className={"delete"}
                    padding={"5px 20px"}
                    width={"fit-content"}
                    color={"black"}
                    borderRadius={"10px"}
                    margin={"15px auto"}
                    onClick={() => handleRemove(item?.id)}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="h-[70vh] w-full flex justify-center items-center">
          <h3 className="text-first-color md:text-[36px] text-[24px]">
            Your Cart Is Empty.....
          </h3>
        </div>
      )}
    </>
  );
};

export default Index;
