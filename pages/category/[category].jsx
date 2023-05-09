import { useGetProductByCategoryQuery } from "@/api/product-api/product-api";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Card from "@/components/card";
import Loader from "@/components/loader";
import { useSelector, useDispatch } from "react-redux";
import { setCount, setCounter } from "@/feature/productsSlice";
const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const category = router.query;
  const { data, isLoading } = useGetProductByCategoryQuery(category);
  const { searchTerm } = useSelector((state) => state.products);
  const filteredProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDeleteCart = (item) => {
    const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
    const productExists = myArray.some((product) => product?.id === item?.id);
    if (!productExists) {
      myArray.push(item);
      localStorage.setItem("myArray", JSON.stringify(myArray));
      dispatch(setCount(myArray.length));
    } else {
      const updatedArray = myArray.filter(
        (product) => product?.id !== item?.id
      );
      localStorage.setItem("myArray", JSON.stringify(updatedArray));
      dispatch(setCount(updatedArray.length));
    }
  };

  const isProductInStorage = (id) => {
    const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
    return myArray.some((product) => product?.id === id);
  };

  const handleAddDeleteWishList = (item) => {
    const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
    const productExists = wishList.some((product) => product?.id === item?.id);
    if (!productExists) {
      wishList.push(item);
      localStorage.setItem("wishList", JSON.stringify(wishList));
      dispatch(setCounter(wishList.length));
    } else {
      const updatedWishList = wishList.filter(
        (product) => product?.id !== item?.id
      );
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      dispatch(setCounter(updatedWishList.length));
    }
  };

  const isProductWishListInStorage = (id) => {
    const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
    return wishList.some((product) => product?.id === id);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-12 gap-2 gap-y-8 py-8  wrapper">
              {filteredProducts?.map((item) => {
                return (
                  <Card
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                    className={"card"}
                    id={item.id}
                    handleAddDeleteCart={handleAddDeleteCart}
                    isProductInStorage={isProductInStorage}
                    item={item}
                    handleAddDeleteWishList={handleAddDeleteWishList}
                    isProductWishListInStorage={isProductWishListInStorage}
                  />
                );
              })}
            </div>
          ) : (
            <div className="h-[70vh] w-full flex justify-center items-center">
              <h3 className="text-first-color md:text-[36px] text-[24px]">
                No Result Found.....
              </h3>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Index;
