import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = links.map((el)=> <a key={el} href = {el}>{el}</a>)

  return <nav>
    {renderLinks}
    </nav>;
}

export default NavBar;
