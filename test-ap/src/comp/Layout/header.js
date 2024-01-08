import React from "react";
import Navigation from "./navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-white text-lg font-bold">
            The E-Commerce Store
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
