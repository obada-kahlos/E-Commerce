import React from "react";
import Li from "./Li";
import { navbarData } from "@/data/navbar/navbar-data";
import { useRouter } from "next/router";
import Link from "next/link";

const Menu = ({ menu, handleToogle }) => {
  const router = useRouter();
  const handleLogout=() => {
    localStorage.removeItem("login-token");
    router.push("/");
  }
  return (
    <>
      <div className="py-2 md:border-b-[#E4E7ED] md:border-[2px] ">
        <div className="wrapper menu md:flex justify-between flex-col md:flex-row ">
          <ul className="md:text-black  text-white md:flex gap-[20px] block navbar nav w-[100%]">
            {/* {navbarData.map((item, key) => {
              return (
                <Li
                  key={key}
                  onClick={handleToogle}
                  text={item.title}
                  link={item.link}
                />
              );
            })} */}

            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="/home"
              >
                home
              </Link>
            </li>
            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="/category/electronics"
              >
                Electronics
              </Link>
            </li>
            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="/category/jewelery"
              >
                Jewelery
              </Link>
            </li>
            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="/category/men's clothing"
              >
                Men&apos;s clothing
              </Link>
            </li>
            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="/category/women's clothing"
              >
                Women&apos;s clothing
              </Link>
            </li>
          </ul>
          <div className="flex justify-between text-white md:text-black ">
            <Link href={"/admin"}>
              <button className="admin mx-[10px]  font-[500] relative hover:text-first-color  ">
                Admin
              </button>
            </Link>
            <Link href="/">
              <button
                className="logout mx-[10px]  font-[500] relative hover:text-first-color"
                onClick={handleLogout}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
        {menu && <div className="overlay" onClick={handleToogle}></div>}
      </div>

      <style>
        {`
            @media (max-width: 768px) {
                .menu {
                        position: fixed;
                        left: ${menu ? "0" : "-100%"};
                        top: 0;
                        background: #15161d;
                        height: 100vh;
                        max-width: 250px;
                        width: 100%;
                        overflow: hidden;
                        z-index: 22;
                        padding-top: 30px;
                        -webkit-transform: translateX(0%);
                        -ms-transform: translateX(0%);
                        transform: translateX(0%);
                        -webkit-transition: 0.2s all;
                        transition: 0.2s all;
                        z-index : 999;
                    }
                    .nav li {
                        display: block;
                        padding: 20px 20px 20px 0px;
                    }
                        .nav li a {
                        font-size: 14px !important;
                        font-weight: normal;
                    }
                    .overlay{
                        position : fixed;
                        top :0;
                        left : 0;
                        height : 100%;
                        width : 100%;
                        background-color : rgba(0,0,0,0.3);
                        z-index: 998;
                    }
                }
              
            `}
      </style>
    </>
  );
};

export default Menu;
