const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-10 md:py-12 lg:py-20 bg-orange-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4 text-black text-sm sm:text-base md:text-lg">Feel free to reach out to us for any inquiries or collaborations.</p>
            <div className="text-gray-300 mt-6 space-y-4 text-xs sm:text-sm md:text-base">
              <p><strong>Location</strong><br />Kahawa Ke Central Office <br />123 Coffee Lane, Kikuyu, KE</p>
              <p><strong>Contact Us</strong><br />P: +254 705 669144 <br />M: kahawake@gmail.com</p>
            </div>
            <div className="flex space-x-3 mt-5 text-lg sm:text-xl">
              <a href="#" className="hover:text-orange-500">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 bg-[#1a1a1a] rounded-lg border border-[#A14527] shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-900 mb-6">Your Details</h2>
            <form className="space-y-4">
              <input placeholder="Full Name" className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 text-xs sm:text-sm md:text-base focus:outline-none focus:border-[#842E1A]" required type="text" name="fullName" />
              <input placeholder="Email Address" className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 text-xs sm:text-sm md:text-base focus:outline-none focus:border-[#842E1A]" required type="email" name="emailAddress" />
              <input placeholder="Subject" className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 text-xs sm:text-sm md:text-base focus:outline-none focus:border-[#842E1A]" required type="text" name="messageSubject" />
              <input placeholder="Company / Guest Info" className="w-full bg-transparent border-b border-[#A14527] py-2 px-1 text-xs sm:text-sm md:text-base focus:outline-none focus:border-[#842E1A]" required type="text" name="companyInfo" />
              <button type="submit" className="w-full py-3 bg-orange-900 text-white text-sm sm:text-lg rounded-md hover:bg-[#842E1A] transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
