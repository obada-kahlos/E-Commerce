import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdRemoveShoppingCart,
  MdShoppingCart,
  MdRemoveRedEye,
} from "react-icons/md";
import { VscHeartFilled } from "react-icons/vsc";
const Card = ({
  id,
  title,
  price,
  category,
  image,
  handleAddDeleteCart,
  item,
  isProductInStorage,
  handleAddDeleteWishList,
  isProductWishListInStorage,
}) => {
  return (
    <>
      <div className="  justify-center w-[250px] max-w-[100%]  text-center mx-auto p-[15px]  border-[#ccc] border-[3px] border-solid  xl:col-span-3  lg:col-span-4 sm:col-span-6 col-span-12   hover:border-first-color duration-300 ">
        <div className={`flex justify-center items-center h-[200px] w-full`}>
          <Image
            src={image}
            alt="product"
            className=" max-h-full"
            width={150}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-around h-[120px] py-[10px]">
          <p className="text-[18px] my-[5px] font-bold">{category}</p>
          <p className="text-[15px] font-[500]">{title?.slice(0, 25)}...</p>
          <p className="text-first-color  font-bold text-[20px]">${price}</p>
        </div>
        <div className="product-btns flex justify-center items-center">
          <button onClick={() => handleAddDeleteWishList(item)}>
            <VscHeartFilled
              className={`card-icon m-auto text-[20px] ${
                isProductWishListInStorage && isProductWishListInStorage(id)
                  ? "red"
                  : ""
              }`}
            />
            <span className="tooltipp">
              {" "}
              {isProductWishListInStorage && isProductWishListInStorage(id)
                ? "Delete from WishList"
                : "Add to wishList"}
            </span>
          </button>
          <button>
            {isProductInStorage && isProductInStorage(id) ? (
              <MdRemoveShoppingCart
                className={`card-icon m-auto text-[20px] red`}
                onClick={() => handleAddDeleteCart(item)}
              />
            ) : (
              <MdShoppingCart
                className={`card-icon m-auto text-[20px]`}
                onClick={() => handleAddDeleteCart(item)}
              />
            )}
            <span className="tooltipp">
              {isProductInStorage && isProductInStorage(id)
                ? "Delete from cart"
                : "Add to cart"}
            </span>
          </button>
          <button>
            <Link href={`/products/${id}`}>
              <MdRemoveRedEye className="card-icon m-auto text-[20px]" />
              <span className="tooltipp">quick view</span>
            </Link>
          </button>
        </div>
      </div>
      <style>
        {`
            .card-icon{
                color: rgb(58, 56 ,56 ,.58);
                transtion:0.3s;
                z-index:-1

            }
            button:hover .card-icon {
              color:#D10024;
            }

            .red{
              color:red !important;
            }
          `}
      </style>
    </>
  );
};

export default Card;

// {
//   productExists ? "Delete from cart" : "Add to cart";
// }
