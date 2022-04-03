import React from "react";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="flex items-center justify-center md:justify-between bg-pink-700 text-white px-12 py-4 md:py-8 max-w-[100%] mx-auto ">
      <div className="hidden md:block">Logo</div>
      <div className="flex gap-5 justify-center">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/reviews">Review</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink className="hidden md:block" to="/about">
          About
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
