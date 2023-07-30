import React from "react";
import header from "./Header.module.css";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={header.main_header}>
      <div className={header.navbar_brand}>
        <Link href="/">
          <Image
            src="/dis.png"
            width={100}
            height={20}
            alt="Picture of the author"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
