import React from "react";
import Header from "./Header.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={Header.navbar}>
      <div>
        <ul className={Header.navbarList}>
          <li className={Header.navbarItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={Header.navbarItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={Header.navbarItem}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={Header.navbarItem}>
            <Link href="/movie">Movie</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
