import type { MovieCardType } from "../../types/MovieCardType"
import Tv from "../icons/Tv"
import CardBookmark from "../icons/CardBookmark"
import { useBookmark } from "../context/BookmarkContext"

type MovieCardProps = {
    movie: MovieCardType
}



const MovieCard = ({ movie }: MovieCardProps) => {
    const { isBookmarked, toggleBookmark } = useBookmark();
    const bookmarked = isBookmarked(movie.title)

    return (
        <div className="max-w-70 min-w-41 text-white">
            <div className="relative rounded-lg">
                <button
                    type="button"
                    onClick={() => toggleBookmark(movie.title)}
                    className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-[#10141E]/50 cursor-pointer"
                >
                    <CardBookmark filled={bookmarked} />
                </button>
                <img src={movie.thumbnail.regular.medium} alt={movie.title} className="w-full h-full rounded-lg" />
            </div>
            <div className="text-[#8B93A7] text-[11px] md:text-[13px] flex items-center gap-x-1.5 mt-1.5">
                <p>{movie.year}</p>
                <span className="size-0.5 rounded-full bg-[#8B93A7]"></span>

                <Tv color="#8B93A7" width={12} height={12} />
                <p>{movie.category}</p>

                <span className="size-0.5 rounded-full bg-[#8B93A7]"></span>
                <p>{movie.rating}</p>
            </div>
            <h4 className="text-[14px] md:text-[18px]">{movie.title}</h4>
        </div>
    )
}

export default MovieCard
