import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import imageGlobalnavigationcardLogoimage from "../assets/images/imageGlobalnavigationcardLogoimage.svg"

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    
    <div className="space-y-3">
     {/* <div className="relative w-[297px] h-[72px] bg-white rounded-xl overflow-hidden"> 
        <div className="absolute h-5 top-[26px] left-16 [font-family:'Krub-Medium',Helvetica] font-medium text-[#20161d] text-[14.9px] tracking-[0] leading-5 whitespace-nowrap"> 
          Flight 
          </div>
           <img className="absolute w-10 h-10 top-4 left-4" 
                alt="Image" 
                src={imageGlobalnavigationcardLogoimage} /> 
            </div>*/}
      <h2 className="text-3xl font-bold">Latest Destinations</h2>
      <p>Most recent desinations added by our hosts</p>
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
  );
};

export default Home;
