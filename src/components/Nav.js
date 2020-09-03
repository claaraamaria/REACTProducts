import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/home", text: "Home Page" },
  { to: "/products", text: "Products Page" },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
