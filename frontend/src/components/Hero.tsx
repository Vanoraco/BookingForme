import tenPercentOff from "../assets/images/tenPercentOff.png";
import { MdTravelExplore } from "react-icons/md";
import { IoBed } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="relative bg-blue-800 pb-16">
      {/* Background Image */}
      <img 
        className="w-full h-auto object-cover" 
        alt="Ten percent off sale" 
        src={tenPercentOff} 
      />

      {/* Input Section at Bottom */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-row items-center  p-4 gap-6 shadow-lg rounded-lg w-11/12 max-w-4xl">
        <div className="flex flex-1 items-center gap-3 bg-white rounded-md py-3 -px-3">
          <MdTravelExplore size={30} className="text-black ml-3" />
          <input
            placeholder="Flight"
            className="text-md w-full focus:outline-none px-2"
            value={""}
            //onChange={(event) => setDestination(event.target.value)}
          />
        </div>
        <div className="flex flex-1 items-center gap-3 bg-white rounded-md py-3 -px-3">
          <IoBed size={30} className="text-black ml-3" />
          <input
            placeholder="Hotels"
            className="text-md w-full focus:outline-none px-2"
            value={""}
            //onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="flex flex-1 items-center gap-3 bg-white rounded-md py-3 -px-3">
          <MdTravelExplore size={30} className="text-black ml-3" />
          <input
            placeholder="Car Rentals"
            className="text-md w-full focus:outline-none px-2"
            value={""}
            //onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
