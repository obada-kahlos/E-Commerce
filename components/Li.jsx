import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope, FaMapMarkerAlt, FaRegUser } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
const Li = ({ icon, text, link, onClick }) => {
  return (
    <>
      <li onClick={onClick} className="ml-[10px]">
        <Link
          className="text-xs hover:text-first-color hover:duration-500 "
          href={link}
        >
          <a className="text-xs text-first-color mr-1 inline-flex">{icon}</a>
          {/* <a icon={icon} className="text-xs text-first-color mr-1" />{" "} */}

          {text}
        </Link>
      </li>
    </>
  );
};

export default Li;
