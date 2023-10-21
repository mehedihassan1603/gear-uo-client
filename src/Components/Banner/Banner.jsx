import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full h-4/5">
      <div
        id="slide1"
        className="carousel-item relative w-full h-52 lg:h-[500px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/GFJrtf0/Car-For-Sale-Promo-Cover-Template-Made-with-Poster-My-Wall333.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full h-52 lg:h-[500px] "
        style={{
          backgroundImage: `url("https://i.ibb.co/DQPg2LS/Luxury-Car-Rental-Made-with-Poster-My-Wall333.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="text">
        
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full h-52 lg:h-[500px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/LYzzMLx/Sell-your-cars.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="text">
        {/* <p className="bnr bg-rose-200 text-black p-6 rounded-full"><span className="text-3xl">Get Started from Today...</span></p> */}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
