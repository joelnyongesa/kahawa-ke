import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Brew1 from '../assets/services/Brew1-CKy_yuFI.jpeg';
import Brew2 from '../assets/services/Brew2-Dx0zbhws.jpeg';
import Brew3 from '../assets/services/Brew3-V5puqgiV.png';
import Brew4 from '../assets/services/Brew4-Cgw2-ZR0.png';
import Brew5 from '../assets/services/Brew5-BLmcc3FZ.png';
import Brew6 from '../assets/services/Brew6-o-S4Yph_.jpeg';
import Brew7 from '../assets/services/Brew7-DyFgUK6w.jpeg';
import Brew8 from '../assets/services/Iced-mbJWyDsi.jpeg';

const ServiceSection = () => {
  return (
    <div id="service" className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 lg:py-16">
      <div className="w-full max-w-5xl mx-auto py-8 text-white">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-800 mb-2">
            Services
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[1px] w-10 bg-orange-800/50"></div>
            <h3 className="text-sm sm:text-md uppercase tracking-wider text-orange-800/80">
              What we offer
            </h3>
            <div className="h-[1px] w-10 bg-orange-800/50"></div>
          </div>
          <p className="max-w-2xl mx-auto text-stone-600 text-sm sm:text-base mt-4">Experience Kenya's finest coffee services</p>
        </div>

        <Swiper
          spaceBetween={20}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="swiper-container rounded-lg shadow-lg"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
              <img
                alt="Best Coffee Flavor"
                className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                src={Brew8}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">Best Coffee Flavor</h3>
                  <p className="text-sm text-gray-300 mt-2">Experience the rich taste of our coffee and sip your way to relaxation!</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More<span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
              <img
                alt="Corporate & Event Catering"
                className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                src={Brew6}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">Corporate & Event Catering</h3>
                  <p className="text-sm text-gray-300 mt-2">Bringing the Brew to You! Perfect Coffee for Any Event</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More<span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
              <img
                alt="Take away Coffee"
                className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                src={Brew5}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">Take away Coffee</h3>
                  <p className="text-sm text-gray-300 mt-2">Grab & Go! Freshly Brewed Coffee for Busy Days, Brewed to Perfection!</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More<span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
              <img
                alt="Coffee Tasting Experiences"
                className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                src={Brew4}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">Coffee Tasting Experiences</h3>
                  <p className="text-sm text-gray-300 mt-2">Dive into the World of Flavors with Our Exclusive Coffee Tasting Experience ☕✨</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More<span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
              <img
                alt="Special Brewed Coffee"
                className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                src={Brew1}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">Special Brewed Coffee</h3>
                  <p className="text-sm text-gray-300 mt-2">Savor the Moment with freshly Brewed Coffee. Unique flavors in every brew.</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More<span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
              <img
                alt="Ready Coffee Beans"
                className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                src={Brew3}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">Ready Coffee Beans</h3>
                  <p className="text-sm text-gray-300 mt-2">Elevate your brew at home with aromatic beans for the ultimate coffee experience.</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More<span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
              <img
                alt="Barista Workshops & Classes"
                className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                src={Brew7}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">Barista Workshops & Classes</h3>
                  <p className="text-sm text-gray-300 mt-2">Master the Art of Coffee. Join Our Barista Workshops & Classes.</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More<span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-900 overflow-hidden shadow-lg flex flex-col h-full rounded-lg">
              <img
                alt="Special Ricano"
                className="w-full h-48 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                src={Brew2}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">Special Ricano</h3>
                  <p className="text-sm text-gray-300 mt-2">Experience the Art in Every Cup! Indulge in expertly crafted barista creations.</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More<span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #36946D !important;
        }

        .swiper-pagination-bullet {
          background-color: #d2a679 !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #BFA06B !important;
        }
      `}</style>
    </div>
  );
};

export default ServiceSection;
