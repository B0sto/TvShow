import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import BookmarksPage from "./pages/BookmarksPage"
import { BookmarkProvider } from "./components/context/BookmarkContext"

function App() {
  return (
    <BookmarkProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Routes>
      </BrowserRouter>
    </BookmarkProvider>
  )
}

export default App
