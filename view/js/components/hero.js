const  Hero=()=>{
    return (`<nav class="bg-blue-600 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <a href="#" className="text-white text-xl font-bold">
          {MyApp}
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-blue-300">
           { Home}
          </a>
          <a href="#" className="text-white hover:text-blue-300">
           { About}
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            {Services}
          </a>
          <a href="#" class="text-white hover:text-blue-300">
            {Contact}
          </a>
        </div>

        <button class="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>`)
}
export default Hero;