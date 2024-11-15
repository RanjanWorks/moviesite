import React from "react";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";
import { MdOutlineCancel } from "react-icons/md";

const Card = ({ movie, onRemoveFromWatchlist, cancel }) => {
  if (!movie || !movie.poster_path) return null; // Exclude movies without an image

  const {
    title = "No Title",
    poster_path,
    release_date = "N/A",
    vote_average = 2,
    id,
    first_air_date = "",
    name = "No Name",
  } = movie;

  return (
    <div className="border border-zinc-800 rounded-md p-1 hover:bg-zinc-900 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
      <div className="relative">
      {cancel == true ? (
          <button
            onClick={() => onRemoveFromWatchlist(id)} // Call the remove function
            className=" absolute top-2 right-2 bg-zinc-900/50 p-2 rounded-full text-white hover:bg-zinc-950 z-50 "
          >
            <MdOutlineCancel />
          </button>
        ) : (
          ""
        )}
        <Link href={`/movie/${id}`} passHref>
          <Image
            className="h-auto w-full rounded-md cursor-pointer"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width={500}
            height={750}
            layout="intrinsic"
          />
        </Link>

     
      </div>
      <div className="text-white my-2">
        <h1
          className="text-base sm:text-lg lg:text-xl overflow-hidden text-ellipsis whitespace-nowrap"
          title={title}
        >
          {title === "No Title" ? name : title}
        </h1>
        <p className="text-xs text-slate-300">
          {release_date !== "N/A" ? release_date.split("-")[0] : first_air_date}
        </p>
        <StarRating rating={vote_average} /> {/* Use StarRating component */}
      </div>
    </div>
  );
};

export default Card;
