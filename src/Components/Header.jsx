import React from "react";
import Netflix_Logo_PMS from "../utils/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="z-10 absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44"
       src={Netflix_Logo_PMS} alt="logo" />
    </div>
  );
};

export default Header;
