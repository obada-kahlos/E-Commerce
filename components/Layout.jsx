import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Aside from "./aSide";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const {openAside}=useSelector((state)=> state.products)
  const [token, setToken] = useState();
  useEffect(() => {
    const getToken = localStorage.getItem("login-token");
    setToken(getToken);
  }, []);

  return (
    <>
      <Navbar />

       <Aside />

      {token ? <main>{children}</main> : ""}
      <Footer />
    </>
  );
}
