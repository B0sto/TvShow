import { createContext, useContext, useState, type ReactNode } from "react";

const BOOKMARKS_KEY = "bookmarkedMovies";

type BookmarkContextType = {
    bookmarkedTitles: string[];
    toggleBookmark: (title: string) => void;
    isBookmarked: (title: string) => boolean;
    loadDefaultBookmarks: (titles: string[]) => void;
};

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
    const [bookmarkedTitles, setBookmarkedTitles] = useState<string[]>(() => {
        return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]");
    });

    const toggleBookmark = (title: string) => {
        setBookmarkedTitles((current) => {
            const updated = current.includes(title)
                ? current.filter((item) => item !== title)
                : [...current, title];

            localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));

            return updated;
        });
    };

    const isBookmarked = (title: string) => {
        return bookmarkedTitles.includes(title);
    };

    const loadDefaultBookmarks = (titles: string[]) => {
        if (localStorage.getItem(BOOKMARKS_KEY) !== null || titles.length === 0) {
            return;
        }

        setBookmarkedTitles(titles);
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(titles));
    };

    return (
        <BookmarkContext.Provider value={{ bookmarkedTitles, toggleBookmark, isBookmarked, loadDefaultBookmarks }}>
            {children}
        </BookmarkContext.Provider>
    );
};

export const useBookmark = () => {
    const ctx = useContext(BookmarkContext);

    if (!ctx) {
        throw new Error("useBookmark must be used inside BookmarkProvider");
    }

    return ctx;
};
