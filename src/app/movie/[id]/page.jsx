import MovieDetails from "@/Components/MovieDetails";

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4c1eef5a8d388386187a3426bc2345be`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }

    const movie = await response.json();

    const imageUrl = movie.backdrop_path
      ? `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`
      : "default-image-url.jpg"; // Provide a default image in case backdrop_path is null

    return {
      title: movie.title,
      description: movie.overview,
      openGraph: {
        title: movie.title,
        description: movie.overview,
        images: [
          {
            url: imageUrl,
            alt: movie.title,
          },
        ],
        url: `https://yourwebsite.com/movies/${id}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: movie.title,
        description: movie.overview,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error('Error fetching movie metadata:', error);
    return {
      title: "Movie not found",
      description: "Sorry, we couldn't fetch the movie details.",
    };
  }
}

export default async function Page({ params }) {
  const { id } = await params; // Destructure the id from params
  
  return <MovieDetails id={id} />;
} 