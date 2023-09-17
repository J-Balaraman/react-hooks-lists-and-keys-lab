import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((link) => (
    <a key={link} style={{ textDecoration: "none", marginRight: "10px" }} href={`#${link}`}>
      {link}
    </a>
  ));

  return <nav>{linksList}</nav>;
}

export default NavBar;
