import React from "react";
import { Link } from "react-router-dom";

const BasicMenu = () => {
  return (
    <nav id="navbar" className="flex bg-blue-300">
      <div className="w-4/5 bg-gray-300">
        <ul className="flex p-4 bg-gray-300">
          <li className="pr-6 text-2xl">
            <Link to={"/"}>MAIN</Link>
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/todo/"}>todo</Link>
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/products/"}>products</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/5 flex justify-end bg-purple-100 p-4 font-medium">
        <div className="text-white text-sm m-1 rounded">Login</div>
      </div>
    </nav>
  );
};

export default BasicMenu;
