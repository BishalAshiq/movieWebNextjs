import Image from "next/image";
import React from "react";
import MoviesCss from "./Movies.module.css";
import { Mulish } from "next/font/google";
import Link from "next/link";

const mulish = Mulish({
  weight: "700",
  size: "4rem",
  subsets: ["latin"],
  display: "swap",
});
const mulish1 = Mulish({
  weight: "700",
  size: "2rem",
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <>
      <div>
        <div className={MoviesCss.page_Tag}>
          <h1 className={mulish.className}>All Movies</h1>
        </div>
        <div className={MoviesCss.movie_div}>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-1.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>The Role</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <Link className={MoviesCss.button_read_more} href="/movie">
              <button>Read More</button>
            </Link>
          </div>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-2.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>City Ocan</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <button className={MoviesCss.button_read_more}>Read More</button>
          </div>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-3.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>6 Underground</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <button className={MoviesCss.button_read_more}>Read More</button>
          </div>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-4.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>The Inception</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <button className={MoviesCss.button_read_more}>Read More</button>
          </div>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-5.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>Day Shif</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <button className={MoviesCss.button_read_more}>Read More</button>
          </div>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-7.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>Insepta</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <button className={MoviesCss.button_read_more}>Read More</button>
          </div>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-8.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>Over Voltage</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <button className={MoviesCss.button_read_more}>Read More</button>
          </div>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-9.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>Hotel Transtinaia</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <button className={MoviesCss.button_read_more}>Read More</button>
          </div>
          <div className={MoviesCss.single_movie_div}>
            <Image
              className={MoviesCss.movie_image}
              src="/m-10.png"
              alt="watching netflix"
              width={200}
              height={500}
            />
            <h5 className={mulish1.className}>Leao Ever Green</h5>
            <p className={MoviesCss.movies_description}>
              Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best
              in the dangerous art of extraction.
            </p>
            <button className={MoviesCss.button_read_more}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
