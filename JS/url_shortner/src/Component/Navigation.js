import React from "react";

const Navigation = () => {
  return (
    <div className="bg-purple-900 py-3 md:px-32 px-5 text-white">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <h5 className="text-xl font-bold">LiShort</h5>
        </div>
        <ul className="flex space-x-3 font-semibold">
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#short">Short</a>
          </li>
          <li>
            <a href="#list">List</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
