import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";

import MenuIcon from "../../images/menu.svg";
import "./style.scss";

interface Props {}

function Navbar({}: Props): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="main">
          <div>
            <strong>Arun</strong>
            {"  "}Murugan
          </div>
          <div
            onClick={() => {
              setMenuOpen((s) => !s);
            }}
          >
            <img src={MenuIcon} alt="menu-open" className="menu-icon" />
          </div>
          <div className={"item-container"}>
            <Link className="item" activeClassName={"item-active"} to="/">
              Home
            </Link>
            <Link activeClassName={"item-active"} className="item" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </nav>
      <div className={menuOpen ? "item-expand-container" : "hide-element"}>
        <div className="item-expand">
          <Link className="item" activeClassName={"item-active"} to="/">
            Home
          </Link>
        </div>
        <div className="item-expand">
          <Link activeClassName={"item-active"} className="item" to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
