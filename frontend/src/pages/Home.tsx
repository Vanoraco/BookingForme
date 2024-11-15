import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import imageGlobalnavigationcardLogoimage from "../assets/images/imageGlobalnavigationcardLogoimage.svg";
import slotI from "../assets/images/slot-1.svg"

import newYo from "../assets/images/977436.svg"
import lasV from "../assets/images/lasV.svg"
import keyW from "../assets/images/keyW.svg"
import miam from "../assets/images/miam.svg"
import newO from "../assets/images/newO.svg"
import sanD from "../assets/images/sanD.svg"

import pictureG from "../assets/images/Picture.png"

import ReactDatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { LuFerrisWheel } from "react-icons/lu";
import { useState } from "react";

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const [startDate, setStartDate] = useState<Date | null>(null);

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <div>
      <div className="relative w-auto h-auto rounded-xl bg-cover bg-center bg-no-repeat overflow-hidden px-48 "
            style={{ backgroundImage: `url(${slotI})`,
                    paddingTop: '45%',
                    paddingLeft: '5%',
                    paddingRight: '5%'

             }} />
<div>
      {/* Background Image */}
      

      {/* Attractions and Search Section */}
      <div className="inline-flex flex-col items-center gap-9 relative mt-9">
        <div className="flex flex-col items-center justify-center gap-4">
  <div className="relative w-[926.47px] h-[62px] [font-family:'Segoe_UI-Black',Helvetica] font-black text-[#0c0c0c] text-3xl tracking-[0] leading-[62px] whitespace-nowrap text-center">
    Attractions, activities, and experiences
  </div>
  <p className="relative w-[931.64px] h-8 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#0c0c0c] text-2xl tracking-[0] leading-8 whitespace-nowrap text-center">
    Discover new attractions and experiences to match your interests and travel style
  </p>
</div>


        {/* Search Bar */}
        <div className="relative w-[1080px] h-[60px] bg-[#ffb700] rounded-lg">
  <div className="relative w-[1072px] h-[52px] top-1 left-1">
    {/* Search Input */}
    <div className="absolute w-[470px] h-[52px] top-0 left-0 bg-white rounded-[4px_0px_0px_4px] flex items-center">
  {/* Search Icon */}
  <LuFerrisWheel className="w-5 h-5 ml-4 text-[#595959]" />
  
  {/* Search Input */}
  <input
    type="text"
    placeholder="Where are you going?"
    className="w-full h-[52px] pl-[40px] pr-4 bg-white text-[#595959] text-base rounded focus:outline-none"
  />
</div>


    {/* Date Picker */}
    <div className="absolute w-[471px] h-[52px] top-0 left-[470px] bg-white rounded-[0px_4px_4px_0px] border-l [border-left-style:solid] border-[#d9d9d9]">
      <button className="all-[unset] box-border relative w-[470px] left-px bg-white h-[52px] rounded">
        <FaCalendarAlt className="top-4 absolute w-5 h-5 left-4 text-[#595959]" />
        

        {/* Date Picker */}
        <div className="absolute top-0 left-0 w-[470px] h-[52px] flex items-center justify-center">
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select your dates"
            className="w-full h-[52px] pl-10 pr-4 text-[#595959] ml-0 text-base bg-white border-none rounded focus:outline-none"
          />
        </div>
      </button>
    </div>

    {/* Search Button */}
    <button className="all-[unset] box-border absolute w-[127px] top-0 left-[945px] bg-[#c5001c] h-[52px] rounded">
      <div className="absolute w-16 h-6 top-[13px] left-8 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-6 whitespace-nowrap">
        Search
      </div>
    </button>
  </div>
</div>

      </div>
    </div>
      
      {/* 
      <div className="space-y-3">
        <div className="relative w-[297px] h-[72px] bg-white rounded-xl overflow-hidden"> 
          <div className="absolute h-5 top-[26px] left-16 [font-family:'Krub-Medium',Helvetica] font-medium text-[#20161d] text-[14.9px] tracking-[0] leading-5 whitespace-nowrap"> 
            Flight 
          </div>
          <img className="absolute w-10 h-10 top-4 left-4" 
               alt="Image" 
               src={imageGlobalnavigationcardLogoimage} /> 
        </div>
        <h2 className="text-3xl font-bold">Latest Destinations</h2>
        <p>Most recent destinations added by our hosts</p>
        <div className="grid gap-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {topRowHotels.map((hotel) => (
              <LatestDestinationCard hotel={hotel} />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {bottomRowHotels.map((hotel) => (
              <LatestDestinationCard hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
      */}
      <div className="relative w-[1076px] h-[469px] top-40"> 
        <div className="absolute w-[238px] h-8 -top-px left-0 [font-family:'Segoe_UI-Bold',Helvetica] font-bold text-[#1a1a1a] text-2xl tracking-[0] leading-8 whitespace-nowrap">
           Nearby destinations 
           </div>
         <div className="absolute w-[1092px] h-[421px] top-12 -left-2">
           <div className="absolute w-[348px] h-[195px] top-0 left-2 rounded-lg overflow-hidden bg-[url(/977436-jpg.png)] bg-cover bg-[50%_50%]"
           style={{ backgroundImage: `url(${newYo})`,
                    

          }}>
           <div className="relative h-[74px] top-[121px] 
                  [background:linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.42)_13.81%,rgba(0,0,0,0.49)_28.27%,rgba(0,0,0,0.56)_42.12%,rgba(0,0,0,0.62)_56.28%,rgba(0,0,0,0.66)_70.13%,rgba(0,0,0,0.69)_84.88%,rgba(0,0,0,0.7)_100%)]"
                  > 
            <div className="w-[68px] text-base absolute h-6 top-[15px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-6 whitespace-nowrap"> New York </div>
             <div className="w-[92px] text-[11.8px] absolute h-[18px] top-[39px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-[18px] whitespace-nowrap"> 1819 things to do </div> 
             <div className="absolute w-[348px] h-[52px] top-[-52px] left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.01)_13.54%,rgba(0,0,0,0.04)_27.6%,rgba(0,0,0,0.08)_42.19%,rgba(0,0,0,0.14)_56.77%,rgba(0,0,0,0.2)_71.35%,rgba(0,0,0,0.28)_85.94%,rgba(0,0,0,0.35)_100%)]" /> 
             </div> 
             </div>
              <div 
              style={{ backgroundImage: `url(${lasV})`}}
              className="top-0 left-[372px] bg-[url(/977408.png)] absolute w-[348px] h-[195px] rounded-lg overflow-hidden bg-cover bg-[50%_50%]">
               <div className="relative h-[74px] top-[121px] [background:linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.42)_13.81%,rgba(0,0,0,0.49)_28.27%,rgba(0,0,0,0.56)_42.12%,rgba(0,0,0,0.62)_56.28%,rgba(0,0,0,0.66)_70.13%,rgba(0,0,0,0.69)_84.88%,rgba(0,0,0,0.7)_100%)]"> <div className="w-[75px] text-base absolute h-6 top-[15px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-6 whitespace-nowrap">
                 Las Vegas 
                 </div> 
                 <div className="w-[86px] text-[11.6px] absolute h-[18px] top-[39px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-[18px] whitespace-nowrap"> 914 things to do </div>
                  <div className="absolute w-[348px] h-[52px] top-[-52px] left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.01)_13.54%,rgba(0,0,0,0.04)_27.6%,rgba(0,0,0,0.08)_42.19%,rgba(0,0,0,0.14)_56.77%,rgba(0,0,0,0.2)_71.35%,rgba(0,0,0,0.28)_85.94%,rgba(0,0,0,0.35)_100%)]" />
                   </div> 
                   </div> 
                   <div 
                   style={{ backgroundImage: `url(${keyW})`}}
                   className="top-0 left-[735px] bg-[url(/689598-jpg.png)] absolute w-[348px] h-[195px] rounded-lg overflow-hidden bg-cover bg-[50%_50%]"> 
                   <div className="relative h-[74px] top-[121px] [background:linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.42)_13.81%,rgba(0,0,0,0.49)_28.27%,rgba(0,0,0,0.56)_42.12%,rgba(0,0,0,0.62)_56.28%,rgba(0,0,0,0.66)_70.13%,rgba(0,0,0,0.69)_84.88%,rgba(0,0,0,0.7)_100%)]"> 
                <div 
                 
                 className="absolute w-[68px] h-6 top-[15px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                   Key West 
                   </div> 
                <div className="w-[86px] text-[11.6px] absolute h-[18px] top-[39px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-[18px] whitespace-nowrap"> 261 things to do 
                  </div>
                  <div className="absolute w-[348px] h-[52px] top-[-52px] left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.01)_13.54%,rgba(0,0,0,0.04)_27.6%,rgba(0,0,0,0.08)_42.19%,rgba(0,0,0,0.14)_56.77%,rgba(0,0,0,0.2)_71.35%,rgba(0,0,0,0.28)_85.94%,rgba(0,0,0,0.35)_100%)]" />
                  </div>
                  </div>
                  <div
                  style={{ backgroundImage: `url(${sanD})`}}
                  className="top-[211px] left-2 bg-[url(/976725.png)] absolute w-[348px] h-[195px] rounded-lg overflow-hidden bg-cover bg-[50%_50%]">
                  <div
                  
                  className="relative h-[74px] top-[121px] [background:linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.42)_13.81%,rgba(0,0,0,0.49)_28.27%,rgba(0,0,0,0.56)_42.12%,rgba(0,0,0,0.62)_56.28%,rgba(0,0,0,0.66)_70.13%,rgba(0,0,0,0.69)_84.88%,rgba(0,0,0,0.7)_100%)]">
                    <div className="w-[75px] text-base absolute h-6 top-[15px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-6 whitespace-nowrap"> 
                      San Diego 
                      </div>
                      <div className="w-[86px] text-[11.6px] absolute h-[18px] top-[39px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-[18px] whitespace-nowrap"> 371 things to do 
                        </div>
                        <div className="absolute w-[348px] h-[52px] top-[-52px] left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.01)_13.54%,rgba(0,0,0,0.04)_27.6%,rgba(0,0,0,0.08)_42.19%,rgba(0,0,0,0.14)_56.77%,rgba(0,0,0,0.2)_71.35%,rgba(0,0,0,0.28)_85.94%,rgba(0,0,0,0.35)_100%)]" />
                        </div>
                        </div>
                        <div 
                        style={{ backgroundImage: `url(${miam})`}}
                        className="top-[211px] left-[372px] bg-[url(/977388-jpg.png)] absolute w-[348px] h-[195px] rounded-lg overflow-hidden bg-cover bg-[50%_50%]">
                        <div className="relative h-[74px] top-[121px] [background:linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.42)_13.81%,rgba(0,0,0,0.49)_28.27%,rgba(0,0,0,0.56)_42.12%,rgba(0,0,0,0.62)_56.28%,rgba(0,0,0,0.66)_70.13%,rgba(0,0,0,0.69)_84.88%,rgba(0,0,0,0.7)_100%)]"> 
                  <div className="w-[43px] text-[15.5px] absolute h-6 top-[15px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-6 whitespace-nowrap"> 
                    Miami 
                    </div>
                    <div className="w-[86px] text-[11.6px] absolute h-[18px] top-[39px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-[18px] whitespace-nowrap"> 
                      775 things to do 
                      </div>
                      <div className="absolute w-[348px] h-[52px] top-[-52px] left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.01)_13.54%,rgba(0,0,0,0.04)_27.6%,rgba(0,0,0,0.08)_42.19%,rgba(0,0,0,0.14)_56.77%,rgba(0,0,0,0.2)_71.35%,rgba(0,0,0,0.28)_85.94%,rgba(0,0,0,0.35)_100%)]" />
                      </div>
                      </div>
                      <div 
                      style={{ backgroundImage: `url(${newO})`}}
                      className="top-[211px] left-[735px] bg-[url(/976879-jpg.png)] absolute w-[348px] h-[195px] rounded-lg overflow-hidden bg-cover bg-[50%_50%]">
                      <div className="relative h-[74px] top-[121px] [background:linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.42)_13.81%,rgba(0,0,0,0.49)_28.27%,rgba(0,0,0,0.56)_42.12%,rgba(0,0,0,0.62)_56.28%,rgba(0,0,0,0.66)_70.13%,rgba(0,0,0,0.69)_84.88%,rgba(0,0,0,0.7)_100%)]">
                        <div className="w-[93px] text-base absolute h-6 top-[15px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-6 whitespace-nowrap"> 
                          New Orleans 
                          </div>
                         <div className="w-[86px] text-[11.6px] absolute h-[18px] top-[39px] left-4 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white tracking-[0] leading-[18px] whitespace-nowrap"> 
                          547 things to do 
                          </div>
                          <div className="absolute w-[348px] h-[52px] top-[-52px] left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.01)_13.54%,rgba(0,0,0,0.04)_27.6%,rgba(0,0,0,0.08)_42.19%,rgba(0,0,0,0.14)_56.77%,rgba(0,0,0,0.2)_71.35%,rgba(0,0,0,0.28)_85.94%,rgba(0,0,0,0.35)_100%)]" />
                          </div> 
                          </div>
                           </div> 
      </div>
      
  
<div>
      <div className="w-[298px] mt-80 h-8 [font-family:'Segoe_UI-Bold',Helvetica] font-bold text-[#1a1a1a] text-2xl tracking-[0] leading-8 whitespace-nowrap">
  Your account, your travel
</div>

<div className="relative w-[1076px] mb-52 h-[138px] bg-white rounded-lg overflow-hidden border border-solid border-[#e7e7e7] mt-3 z-10">
  <p className="absolute w-[242px] h-6 top-5 left-[17px] [font-family:'Segoe_UI-Bold',Helvetica] font-bold text-[#1a1a1a] text-base tracking-[0] leading-6 whitespace-nowrap">
    All your trip details in one place
  </p>
  <p className="absolute w-[331px] h-5 top-[52px] left-[17px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#1a1a1a] text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
    Sign in to book faster and manage your trip with ease
  </p>
  <div className="w-[67px] left-[17px] bg-[#d50630] absolute h-9 top-[81px] rounded z-20">
    <div className="absolute w-[43px] h-5 top-[7px] left-3 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
      Sign in
    </div>
  </div>
  <div className="w-[68px] left-[92px] absolute h-9 top-[81px] rounded z-20">
    <div className="absolute w-[52px] h-5 top-[7px] left-2 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#1e1e1e] text-sm tracking-[0] leading-5 whitespace-nowrap">
      Register
    </div>
  </div>
  <div
   className="absolute w-[89px] h-[104px] top-[17px] left-[970px] bg-[url(/picture.png)] bg-cover bg-[50%_50%]" 
   style={{ backgroundImage: `url(${pictureG})`}}/>
</div>
</div>


    </div>
  );
};

export default Home;
