import Hand from '../icon/Hand'
import SearchIcon from '../icon/SearchIcon'

export default function SearchBar() {
  return (
    <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center">
      <div className="relative w-full max-w-120">
        <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-full shadow-xl px-4 sm:px-5 lg:px-6 py-3 border border-gray-200">
          <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-600 flex items-center justify-center">
            <SearchIcon />
          </div>

          <span className="text-gray-600 text-center text-sm sm:text-base md:text-lg lg:text-xl grow truncate">
            www.slimtech.com
          </span>

          <button className="bg-accent-yellow text-gray-600 px-6 sm:px-6 md:px-8 lg:px-5 py-2 sm:py-3 lg:py-2 rounded-xl lg:rounded-2xl font-bold hover:opacity-90 transition-all text-xs sm:text-sm lg:text-lg shadow-md shrink-0">
            search
          </button>
        </div>

        <div className="absolute -right-1.5 sm:-right-2 lg:-right-2 -bottom-2 sm:-bottom-4 lg:-bottom-6 
                        w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-overlay-cyan z-20 pointer-events-none">
          <Hand />
        </div>
      </div>
    </div>
  )
}
