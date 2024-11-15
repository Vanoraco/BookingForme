import { useState } from "react";
import tenPercentOff from "../assets/images/tenPercentOff.png";
import { MdTravelExplore } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";

const Hero = () => {
  // Define state for each input
  const [destination, setDestination] = useState("");
  const [hotel, setHotel] = useState("");
  const [carRental, setCarRental] = useState("");

  return (
    <div className="relative  pb-16">
      {/* Background Image */}
      <img 
        className="w-full h-auto object-cover" 
        alt="Ten percent off sale" 
        src={tenPercentOff} 
      />

      {/* Input Section at Bottom */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-row items-center p-4 gap-6  rounded-lg w-11/12 max-w-4xl">
        <div className="flex flex-1 items-center gap-3 bg-white rounded-md py-3 px-3">
          <MdTravelExplore size={30} className="text-black ml-3" />
          <input
            placeholder="Flight"
            className="text-md w-full focus:outline-none px-2"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
        </div>
        <div className="flex flex-1 items-center gap-3 bg-white rounded-md py-3 px-3">
          <IoBed size={30} className="text-black ml-3" />
          <input
            placeholder="Hotels"
            className="text-md w-full focus:outline-none px-2"
            value={hotel}
            onChange={(event) => setHotel(event.target.value)}
          />
        </div>
        <div className="flex flex-1 items-center gap-3 bg-white rounded-md py-3 px-3">
          <IoCarSport size={30} className="text-black ml-3" />
          <input
            placeholder="Car Rentals"
            className="text-md w-full focus:outline-none px-2"
            value={carRental}
            onChange={(event) => setCarRental(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
