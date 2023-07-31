import React from "react";
import header from "./Header.module.css";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={header.main_header}>
      <div className={header.navbar_brand}>
        <Link href="/">
          <Image
            src="/faparlix.png"
            width={230}
            height={20}
            alt="Picture of the author"
          />
        </Link>
      </div>

      <Nav />
    </header>
  );
};
export default Header;
