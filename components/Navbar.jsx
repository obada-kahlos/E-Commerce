import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Search from "./Search";
const Navbar = () => {
  const [menuToogle, setMenuToogle] = useState(false);
  const handleToogle = () => {
    setMenuToogle(!menuToogle);
  };
  return (
    <>
      <Header />
      <Search handleToogle={handleToogle} />
      <Menu menu={menuToogle} handleToogle={handleToogle} />
      
    </>
  );
};

export default Navbar;
