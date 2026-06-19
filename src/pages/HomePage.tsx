import Navbar from '../components/common/Navbar'
import SearchBar from '../components/common/SearchBar'
import MoviesSection from '../components/common/MoviesSection'

const HomePage = () => {
    return (
        <div className="p-0 sm:p-4 md:p-6 lg:p-8 bg-[#10141E] flex flex-col lg:flex-row gap-y-6 md:gap-y-8 gap-x-9">
            <Navbar />

            <main className="w-full flex-1 lg:mt-5">
                <SearchBar />

                <MoviesSection />
            </main>
        </div>
    )
}

export default HomePage
