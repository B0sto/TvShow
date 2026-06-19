import SearchIcon from "../icons/SearchIcon"

const SearchBar = () => {
    return (
        <div className="flex items-center gap-x-4 md:gap-x-6 px-4 md:p-0">
            <SearchIcon/>

            <input type="text" placeholder="Search for TV series" className=" leading-[100%] placeholder:text-[#8B93A7] text-[#FFFFFF] w-full py-2 px-1 outline-none text-[16px] md:text-[24px]"/> 
        </div>

    )
}

export default SearchBar