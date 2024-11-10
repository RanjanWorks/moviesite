import React from "react";

import Image from "next/image";


const CastCard = ({ movies }) => {
  return (
    <div className="border border-zinc-800 rounded-md p-1 hover:bg-zinc-900 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
      <div className="relative">
        <Image
          className="h-auto w-full rounded-md"
          src={`https://image.tmdb.org/t/p/w500/${movies.profile_path}`}
          alt={movies.name}
          width={500}
          height={750}
          layout="intrinsic"
        />
      </div>
      <div className="text-white my-2">
        <h1
          className="text-base sm:text-lg lg:text-xl overflow-hidden text-ellipsis whitespace-nowrap"
          title={movies.name}
          >
            {movies.name}
        
        </h1>
        <p className="text-xs text-slate-300">
          {movies.character}
        </p>
      </div>
    </div>
  );
};

export default CastCard;
