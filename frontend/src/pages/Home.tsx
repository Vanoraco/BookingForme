//import { useQuery } from "react-query";
//import * as apiClient from "../api-client";

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

import {  FaCalendarAlt } from 'react-icons/fa';
import { LuFerrisWheel } from "react-icons/lu";
import { useState } from "react";

const Home = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative w-full aspect-[16/7] rounded-xl bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${slotI})` }} />

      {/* Attractions and Search Section */}
      <div className="flex flex-col items-center gap-9 mt-9">
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <div className="text-center font-black text-[#0c0c0c] text-2xl sm:text-3xl leading-tight">
            Attractions, activities, and experiences
          </div>
          <p className="text-center font-normal text-[#0c0c0c] text-lg sm:text-2xl leading-tight">
            Discover new attractions and experiences to match your interests and travel style
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-[1080px] bg-[#ffb700] rounded-lg p-1">
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Search Input */}
            <div className="flex-1 bg-white rounded-lg sm:rounded-l-lg">
              <div className="flex items-center h-[52px]">
                <LuFerrisWheel className="w-5 h-5 ml-4 text-[#595959]" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full h-full pl-4 bg-white text-[#595959] text-base rounded focus:outline-none"
                />
              </div>
            </div>

            {/* Date Picker */}
            <div className="flex-1 bg-white sm:border-l border-[#d9d9d9]">
              <div className="relative h-[52px]">
                <FaCalendarAlt className="absolute top-4 left-4 w-5 h-5 text-[#595959]" />
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select your dates"
                  className="w-full h-full pl-12 pr-4 text-[#595959] text-base bg-white border-none rounded focus:outline-none"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full sm:w-[127px] h-[52px] bg-[#c5001c] rounded text-white text-xl">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Nearby Destinations */}
      <div className="mt-40 px-4">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">
          Nearby destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { img: newYo, city: "New York", things: "1819" },
            { img: lasV, city: "Las Vegas", things: "914" },
            { img: keyW, city: "Key West", things: "261" },
            { img: sanD, city: "San Diego", things: "371" },
            { img: miam, city: "Miami", things: "775" },
            { img: newO, city: "New Orleans", things: "547" },
          ].map((destination) => (
            <div key={destination.city} 
                 className="relative h-[195px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center"
                   style={{ backgroundImage: `url(${destination.img})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-base">{destination.city}</div>
                  <div className="text-xs">{destination.things} things to do</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Section */}
      <div className="mt-20 px-4 mb-12">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-3">
          Your account, your travel
        </h2>
        <div className="relative bg-white rounded-lg border border-[#e7e7e7] p-4 flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-1">
            <p className="font-bold text-[#1a1a1a] text-base mb-2">
              All your trip details in one place
            </p>
            <p className="text-sm text-[#1a1a1a] mb-4">
              Sign in to book faster and manage your trip with ease
            </p>
            <div className="flex gap-4">
              <a href="sign-in"
                 className="px-4 py-2 bg-[#d50630] text-white rounded text-sm">
                Sign in
              </a>
              <a href="register"
                 className="px-4 py-2 text-[#1e1e1e] text-sm">
                Register
              </a>
            </div>
          </div>
          <div className="hidden sm:block w-[89px] h-[104px] bg-cover bg-center"
               style={{ backgroundImage: `url(${pictureG})` }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
