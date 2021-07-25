import React,{useState , useEffect} from "react";
import HeroSlider from "react-slick";
import axios from 'axios'


import { NextArrow, PrevArrow } from "./Arrows.component";
const HeroCarousal = () => {

  const [images , setImages] = useState([]);

  useEffect(()=>{
    const nowPLaying = async ()=>{
      const getImages = await axios.get('/movie/now_playing');
      setImages(getImages.data.results)
    }
    nowPLaying();
  },[])


  const settingsLG = {
    arrows: true,
    autoplay: true,
    speed: 1000,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    dots: false,
    speed: 1000,

    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-38 md:h-80 px-1 py-3 ">
              <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} alt="testing" className="w-full h-full" />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-md focus:outline-none"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;
