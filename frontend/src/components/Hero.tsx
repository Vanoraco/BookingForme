import { useState } from "react";
import tenPercentOff from "../assets/images/tenPercentOff.png";
import { MdTravelExplore } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [hotel, setHotel] = useState("");
  const [carRental, setCarRental] = useState("");

  return (
    <div className="relative">
      {/* Background Image Container */}
      <div className="relative w-full">
        <img 
          className="w-full h-auto object-cover" 
          alt="Ten percent off sale" 
          src={tenPercentOff} 
        />

        {/* Input Section - Bottom of the background image */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl">
          {/* Stack vertically on mobile, horizontally on larger screens */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Flight Input */}
            <div className="flex items-center gap-3 bg-white rounded-md py-2 lg:py-4 px-4 shadow-lg">
              <MdTravelExplore size={22} className="text-black min-w-[22px]" />
              <input
                placeholder="Flight"
                className="w-full lg:w-72 text-base focus:outline-none"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
              />
            </div>

            {/* Hotels Input */}
            <div className="flex items-center gap-3 bg-white rounded-md py-2 lg:py-4 px-4 shadow-lg">
              <IoBed size={22} className="text-black min-w-[22px]" />
              <input
                placeholder="Hotels"
                className="w-full lg:w-72 text-base focus:outline-none"
                value={hotel}
                onChange={(event) => setHotel(event.target.value)}
              />
            </div>

            {/* Car Rentals Input */}
            <div className="flex items-center gap-3 bg-white rounded-md py-2 lg:py-4 px-4 shadow-lg">
              <IoCarSport size={22} className="text-black min-w-[22px]" />
              <input
                placeholder="Car Rentals"
                className="w-full lg:w-72 text-base focus:outline-none"
                value={carRental}
                onChange={(event) => setCarRental(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
