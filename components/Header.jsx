import React from "react";
import Li from "./Li";
import { dataLeft,dataRight } from "@/data/header-data/header-data"; 
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope, FaMapMarkerAlt, FaRegUser } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import Link from "next/link";
const Header = () => {
  return (
    <div className="py-2 bg-header-color sticky top-0 left-0 z-[997]">
      <div className="wrapper ">
        <div className="flex  sm:items-center md:justify-between md:flex-row text-white  ">
          <ul className=" sm:flex sm:justify-start ">
            {/* {dataLeft.map((item, key) => {
              return (
                <Li
                  key={key}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              );
            })} */}

            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="#"
              >
                <FiPhone className="text-xs text-first-color mr-2 inline-flex" />
                +963 943 537 522
              </Link>
            </li>
            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="#"
              >
                <FaRegEnvelope className="text-xs text-first-color mr-2 inline-flex" />
                tawfek96Kahlous@gmail.com
              </Link>
            </li>
            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="#"
              >
                <FaMapMarkerAlt className="text-xs text-first-color mr-2 inline-flex" />
                Syria-Damascus
              </Link>
            </li>
          </ul>

          <ul className="flex justify-start">
            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="#"
              >
                <BsCurrencyDollar className="text-xs text-first-color mr-2 inline-flex" />
                USD
              </Link>
            </li>
            <li className="ml-[10px]">
              <Link
                className="text-xs hover:text-first-color hover:duration-500 "
                href="#"
              >
                  <FaRegUser className="text-xs text-first-color mr-2 inline-flex" />
                My Account
              </Link>
            </li>

            {/* {dataRight.map((item, key) => {
              return (
                <Li
                  key={key}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              );
            })} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
