export type MovieCardType = {
  title: string
  thumbnail: {
    regular: {
      small: string
      medium: string
      large: string
    }
  }
  year: number
  category: "Movie" | "TV Series"
  rating: "PG" | "E" | "18+"
  isBookmarked: boolean
  isTrending: boolean
}