import React from "react";
import { Link } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
  return (
    <div className="flex items-center justify-center md:justify-between bg-pink-700 text-white px-12 py-4 md:py-8 max-w-[100%] mx-auto ">
      <div className="hidden md:block font-bold text-xl md:text-2xl font-mono">
        <Link to='/'>Tech Info</Link>
      </div>
      <div className="flex gap-5 justify-center font-semibold">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/reviews">Reviews</CustomLink>
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
