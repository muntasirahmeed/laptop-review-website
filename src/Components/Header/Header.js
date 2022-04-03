import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-center md:justify-between bg-pink-700 text-white px-12 py-4 md:py-8 max-w-[100%] mx-auto ">
      <div className="hidden md:block">Logo</div>
      <div className="flex gap-5 justify-center">
        <Link to="/">Home</Link>
        <Link to="/reviews">Review</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blogs">Blogs</Link>
        <Link className="hidden md:block" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
