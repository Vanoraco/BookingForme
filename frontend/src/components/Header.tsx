import React from "react";
import BOOKFORME02031 from "../assets/images/BOOKFORME-02-03-1.png";
import buttonGlobalheaderButtondarkMduxn2 from "../assets/images/button-globalheader-buttondark-mduxn-2.svg";
import buttonGlobalheaderButtondarkMduxn3 from "../assets/images/button-globalheader-buttondark-mduxn-3.svg";
import buttonGlobalheaderButtondarkMduxn from "../assets/images/button-globalheader-buttondark-mduxn.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon from "../assets/images/icon.svg";

const Header = () => {
  return (
    <div className="bg-[#D50630] py-1 ">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo and Navigation */}
        <div className="flex flex-col items-start gap-4 -ml-28">
          {/* Logo */}
          <img src={BOOKFORME02031} alt="Bookforme Logo" className="h-24 w-18" />
          
          {/* Navigation Buttons */}
          <div className="flex gap-0  space-x-2 -ml-5 -mt-5 mb-6">
            <button className="bg-yellow-500 ml-9 hover:bg-yellow-600 text-white font-medium px-2 py-1 rounded-lg flex items-center gap-0">
              <img src={icon} alt="Flights Icon" className="h-3 px-2" />
              Flights
            </button>
            <button className="bg-transparent ml-9 text-white border border-white px-2 py-1 rounded-lg flex items-center gap-0">
              <img src={icon2} alt="Hotels Icon" className="h-3 px-2" />
              Hotels
            </button>
          </div>
        </div>

        {/* User Action Buttons */}
        <div className="flex gap-3 -mr-28 mb-12 items-center">
          <img src={buttonGlobalheaderButtondarkMduxn2} alt="Help Icon" className="h-5 w-5" />
          <img src={buttonGlobalheaderButtondarkMduxn3} alt="Settings Icon" className="h-5 w-5" />
          <img src={buttonGlobalheaderButtondarkMduxn} alt="Notification Icon" className="h-5 w-5" />
          <button className="text-white px-2 py-3 rounded-lg">Log in</button>
          <img src={icon3} alt="User Icon" className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
