import React, { useState, useEffect } from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import StreamBanner from "../components/Streambanner/StreamBanner.component";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [TopMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);
  useEffect(() => {
    const requestTopMovies = async () => {
      const getTopMovies = await axios.get("/movie/upcoming");
      setTopMovies(getTopMovies.data.results);
    };
    requestTopMovies();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <StreamBanner />
          <h1 className="font-bold text-2xl ml-2 py-1 text-gray-800   ">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-premierBackground py-12">
          <div className="container mx-auto px-4">
            <div className="  ">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt=""
                className="w-full h-full cursor-pointer"
              />
              <PosterSlider
                images={popularMovies}
                title="Premier"
                subtitle="Brand New Releases Every Friday"
                isDark={true}
              />
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <PosterSlider images={TopMovies} title="Top Movies" isDark={false} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
