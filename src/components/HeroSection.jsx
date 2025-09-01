import Kahawa2 from '../assets/Kahawa2-BheoTJ0B.webp';

const HeroSection = () => {
  return (
    <div id="home" className="bg-amber-50 pt-16 sm:py-12 relative overflow-x-hidden">
      <div className="absolute top-20 left-10 opacity-5 -z-10 hidden sm:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-coffee w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 text-orange-800"
        >
          <path d="M10 2v2"></path>
          <path d="M14 2v2"></path>
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
          <path d="M6 2v2"></path>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 -z-10 hidden sm:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-coffee w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 text-orange-800"
        >
          <path d="M10 2v2"></path>
          <path d="M14 2v2"></path>
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
          <path d="M6 2v2"></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 xl:gap-16 px-6 xl:px-15 2xl:px-20">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold text-orange-800 tracking-tighter leading-none font-display">
            KAHAWA
          </h1>
          <div className="h-1 bg-gradient-to-r from-orange-800 to-orange-300 mt-1 sm:mt-2" style={{ width: '100%' }}></div>
          <h2 className="text-orange-800 font-semibold mt-2 text-base sm:text-lg md:text-xl" >
            Awaken your senses
          </h2>
          <p className="text-sm sm:text-base mt-3 sm:mt-4 md:mt-6 leading-relaxed text-stone-700 max-w-xl mx-auto lg:mx-0">
            Because life is too short for bland coffee. Our brews are an invitation to taste, to feel, to savor with our premium Kenyan Brewed Coffee. Each cup tells a story of rich heritage and exceptional quality.
          </p>
          <div className="mt-5 sm:mt-6 md:mt-8 flex justify-center lg:justify-start gap-6">
            <button className="bg-green-800 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-md shadow-lg border border-green-900 hover:bg-green-700 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-3.5 h-3.5 sm:w-4 sm:h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
              Download App
            </button>
            <button className="border border-orange-300 text-orange-800 px-4 py-2 sm:px-5 sm:py-3 rounded-md hover:bg-orange-100 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-3.5 h-3.5 sm:w-4 sm:h-4">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Newsletter
            </button>
          </div>
          <div className="mt-5 sm:mt-6 md:mt-8 flex items-center gap-2 text-stone-600 justify-center lg:justify-start">
            <div className="flex -space-x-1.5 sm:-space-x-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white"></div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white"></div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white"></div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white"></div>
            </div>
            <p className="text-xs sm:text-sm">Loved by 10,000+ coffee enthusiasts</p>
          </div>
        </div>

        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0 hidden sm:flex">
          <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br rounded-md opacity-30 w-[85%] h-[85%] sm:w-[90%] sm:h-[90%] lg:w-full lg:h-full transform translate-x-2 sm:-translate-x-3 md:-translate-x-4 translate-y-2 sm:translate-y-3 md:translate-y-4 mx-auto"></div>
            <div className="relative w-full">
              <img className="w-full h-auto object-cover" alt="Kahawa premium coffee" src={Kahawa2} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-2 z-10">
                <div className="bg-orange-800 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex flex-col items-center justify-center text-center p-3 gap-[2px] sm:gap-[3px] md:gap-[2px]">
                  <span className="text-[6px] sm:text-[7px] md:text-xs lg:text-sm">Premium</span>
                  <span className="font-bold text-[8px] sm:text-sm md:text-base lg:text-lg">Kenyan</span>
                  <span className="text-[6px] sm:text-[7px] md:text-xs lg:text-sm">Coffee</span>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:hidden flex justify-center items-center relative mt-6">
        <div className="relative w-full max-w-[200px] aspect-square">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full mx-auto">
            <img className="w-full h-auto object-cover" alt="Kahawa premium coffee" loading="eager" src={Kahawa2} />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-lg p-1.5 z-20">
            <div className="bg-orange-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-center p-0.5">
              <span className="text-[6px]">Premium</span>
              <span className="font-bold text-[8px]">Kenyan</span>
              <span className="text-[6px]">Coffee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
