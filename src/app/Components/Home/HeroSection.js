import React from "react";
import HeroSectionCss from "./HeroSection.module.css";
import CommonCss from "../CommonStyle/CommonCss.module.css";
import Link from "next/link";
import { Mulish } from "next/font/google";
import Image from "next/image";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const HeroSection = ({ title, imageUrl }) => {
  return (
    <main className={HeroSectionCss.main_section}>
      <div className={CommonCss.container}>
        <div className={CommonCss.grid_two_section}>
          <div className={HeroSectionCss.hero_content}>
            <h1>LET'S WATCH MOVIE TOGETHER</h1>
            <p>
              {" "}
              From award-winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </p>
            <Link href="/movie">
              <button className={mulish.className}>Explore Movies</button>
            </Link>
          </div>
          <div className={HeroSectionCss.hero_image}>
            <Image
              className={HeroSectionCss.Hmoviebanner}
              src="/Hmoviebanner.jpg"
              alt="watching netflix"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
