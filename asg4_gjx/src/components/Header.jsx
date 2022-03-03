import React from "react";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to the Blog!:)</h1>
      <div>
        <Link to="/">
          <button >
            Home
          </button>
        </Link>
        <Link to="/message-board">
          <button >Message Board</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;