import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return <footer>Copyright ® {year}</footer>;
};

export default Footer;
