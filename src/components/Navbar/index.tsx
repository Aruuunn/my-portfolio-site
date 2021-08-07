import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";

import MenuIcon from "../../images/menu.svg";
import styles from "./style.module.scss";

interface Props {}

function Navbar({}: Props): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={styles.appbar}>
        <div className={styles.main}>
          <div>
            <strong>Arun</strong>
            {"  "}Murugan
          </div>
          <div
            onClick={() => {
              setMenuOpen((s) => !s);
            }}
          >
            <img src={MenuIcon} alt="menu-open" className={styles.menuIcon} />
          </div>
          <div className={styles.itemContainer}>
            <Link
              className={styles.item}
              activeClassName={styles.itemActive}
              to="/"
            >
              Home
            </Link>
            <Link
              activeClassName={styles.itemActive}
              className={styles.item}
              to="/blogs"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={menuOpen ? styles.itemExpandContainer : styles.hideElement}
      >
        <div className={styles.itemExpand}>
          <Link
            className={styles.item}
            activeClassName={styles.itemActive}
            to="/"
          >
            Home
          </Link>
        </div>
        <div className={styles.itemExpand}>
          <Link
            activeClassName={styles.itemActive}
            className={styles.item}
            to="/blogs"
          >
            Blog
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
