import React from "react";
import { FaRobot } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p className="copy">Copyright &copy; {new Date().getFullYear()}</p>
      <FaRobot />
      <p className="created">
        Created by <em>Aleksandra Chirtoska</em>
      </p>
    </footer>
  );
};

export default Footer;
