import AboutImg from '../assets/About-kkyN4Xxi.png';

const AboutSection = () => {
  return (
    <div id="about" className="bg-gradient-to-b from-amber-50/50 to-white py-12 sm:py-16 lg:py-24">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-800 mb-2">Who are we?</h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[1px] w-8 sm:w-10 bg-orange-800/50"></div>
            <h3 className="text-sm sm:text-md uppercase tracking-wider text-orange-800/80">About Us</h3>
            <div className="h-[1px] w-8 sm:w-10 bg-orange-800/50"></div>
          </div>
          <p className="max-w-2xl mx-auto text-stone-600 text-sm sm:text-base mt-4">Discover the story behind Kenya's most beloved coffee brand</p>
        </div>
        <div className="flex lg:flex-row flex-col w-full mx-auto items-center lg:space-x-12">
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-50/50 to-orange-600 blur-lg opacity-20 transform scale-110"></div>
              <div className="relative p-2 bg-amber-50/50 rounded-full">
                <img className="w-[240px] sm:w-[280px] md:w-[350px] lg:w-[400px] aspect-square object-cover rounded-full shadow-lg" alt="Kahawa Ke coffee experience" src={AboutImg} />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-2 z-10">
                <div className="bg-green-800 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex flex-col items-center justify-center text-center p-2 gap-[2px] sm:gap-[3px] md:gap-[4px]">
                  <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm">Since</span>
                  <span className="font-bold text-[10px] sm:text-sm md:text-base lg:text-lg">2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
            <p className="text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed text-stone-700 max-w-xl">
              <span className="font-semibold text-orange-800">Kahawa Ke</span>, where coffee and comfort come together in perfect harmony. Nestled in the heart of Nairobi, Kenya, we pride ourselves on offering a unique experience for coffee lovers and travelers alike.
            </p>
            <p className="text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed text-stone-700 max-w-xl">
              At Kahawa Ke, we believe that great coffee isn't just a drink, it's a lifestyle. Our beans are ethically sourced from local Kenyan farmers, ensuring the highest quality and supporting our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
