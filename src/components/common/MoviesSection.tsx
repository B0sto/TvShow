import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import type { MovieCardType } from "../../types/MovieCardType";
import axios from "axios";
import { useBookmark } from "../context/BookmarkContext";

type MoviesSectionProps = {
    title?: string;
    onlyBookmarked?: boolean;
}

const MoviesSection = ({ title = "TV Series", onlyBookmarked = false }: MoviesSectionProps) => {
    const [movies, setMovies] = useState<MovieCardType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { isBookmarked, loadDefaultBookmarks } = useBookmark();


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);

                const res = await axios.get(import.meta.env.VITE_API_URL);
                const fetchedMovies: MovieCardType[] = Array.isArray(res.data) ? res.data : [];

                setMovies(fetchedMovies);
                loadDefaultBookmarks(
                    fetchedMovies
                        .filter((movie) => movie.isBookmarked)
                        .map((movie) => movie.title)
                );

            } catch (error) {
                throw new Error("Error while fetching movies", { cause: error })
            } finally {
                setIsLoading(false);
            }
        }

        fetchMovies()
    }, [])

    if (isLoading) {
        return (
            <div className="flex min-h-[80vh] items-center justify-center">
                <span className="loader"></span>
            </div>
        )
    }

    const visibleMovies = onlyBookmarked
        ? movies.filter((movie) => isBookmarked(movie.title))
        : movies;

    return (
        <section className="mt-6 md:mt-8 px-4">
            <h3 className="text-white text-[20px] md:text-[32px] mb-6 lg:mb-9.5">{title}</h3>

            <div className="grid justify-items-center max-[375px]:grid-cols-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-7 md:gap-y-6 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
                {visibleMovies.map((movie) => (
                    <MovieCard key={movie.title} movie={movie} />
                ))}
            </div>

        </section>
    )
}

export default MoviesSection
