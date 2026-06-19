import Navbar from "./components/common/Navbar"
import SearchBar from "./components/common/SearchBar"

function App() {
  return (
    <div className="p-0 sm:p-4 md:p-6 lg:p-8 bg-[#10141E] flex flex-col lg:flex-row gap-y-6 md:gap-y-8 gap-x-9">
      <Navbar />

      <main className="lg:mt-5">
        <SearchBar />
      </main>
    </div>
  )
}

export default App