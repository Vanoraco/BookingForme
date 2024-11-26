import { useState, useEffect } from "react";
import BOOKFORME02031 from "../assets/images/BOOKFORME-02-03-1.png";
import buttonGlobalheaderButtondarkMduxn2 from "../assets/images/button-globalheader-buttondark-mduxn-2.svg";
import buttonGlobalheaderButtondarkMduxn3 from "../assets/images/button-globalheader-buttondark-mduxn-3.svg";
import buttonGlobalheaderButtondarkMduxn from "../assets/images/button-globalheader-buttondark-mduxn.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon from "../assets/images/icon.svg";

const Header = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUserName(null);
  };

  return (
    <div className="bg-[#D50630] py-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Navigation */}
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
            {/* Logo */}
            <img 
              src={BOOKFORME02031} 
              alt="Bookforme Logo" 
              className="h-16 md:h-24 w-auto" 
            />
            
            {/* Navigation Buttons */}
            <div className="flex gap-2 -mt-2 mb-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2">
                <img src={icon} alt="Flights Icon" className="h-3" />
                Flights
              </button>
              <button className="bg-transparent text-white border border-white px-4 py-2 rounded-lg flex items-center gap-2">
                <img src={icon2} alt="Hotels Icon" className="h-3" />
                Hotels
              </button>
            </div>
          </div>

          {/* User Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <img src={buttonGlobalheaderButtondarkMduxn2} alt="Help Icon" className="h-5 w-5" />
              <img src={buttonGlobalheaderButtondarkMduxn3} alt="Settings Icon" className="h-5 w-5" />
              <img src={buttonGlobalheaderButtondarkMduxn} alt="Notification Icon" className="h-5 w-5" />
            </div>

            {/* Login/Logout or User Name Button */}
            {userName ? (
              <div className="flex items-center gap-2">
                <span className="text-white px-2 py-2 rounded-lg text-sm">
                  {userName}
                </span>
                <button
                  className="text-white px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button className="text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">
                <a href="sign-in">Log in</a>
              </button>
            )}

            <img src={icon3} alt="User Icon" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
