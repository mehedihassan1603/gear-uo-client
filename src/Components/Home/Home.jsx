import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Items from "../Items/Items";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import ObservationForm from "./Observationform/ObservationForm";
import TopBrand from "./TopBrand";
import ServicesComponent from "./ServicesComponent";
import Chat from "./Chat";
import Welcome from "./Welcome";

const Home = () => {
  const products = useLoaderData();

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={`theme-${isDarkMode ? "dark" : "light"}`}>
      <button
        className="theme-toggle-button"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Banner />
      <TopBrand />

      <div className="w-full mx-auto rounded-lg p-4 mb-10">
        <h1 className="marquee text-5xl font-avenir font-semibold py-3 text-slate-100 text-center">
          <span className=" bg-slate-800 p-3 rounded-2xl">Choose a Brand that you want to explore!!!</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((data, index) => (
            <div key={data.id} data-aos={"slide-up"} data-aos-delay="100">
              <Items product={data}></Items>
            </div>
          ))}
        </div>
      </div>

      <ServicesComponent />

      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center px-20 gap-10 py-10 bg-slate-800">
        <div className="hero bg-sky-200 rounded-lg shadow-lg card-hover">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/h2mWnCC/delivery-man.png"
              className="max-w-sm rounded-lg shadow-2xl"
              width={"200px"}
            />
            <div>
              <h1 className="text-5xl font-bold">Free Shipping</h1>
            </div>
          </div>
        </div>
        <div className="hero bg-sky-200 rounded-lg shadow-lg card-hover">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/GCWjmym/24-hours-support.png"
              className="max-w-sm rounded-lg shadow-2xl"
              width={"200px"}
            />
            <div>
              <h1 className="text-5xl font-bold">24/7 Support</h1>
            </div>
          </div>
        </div>
      </div>

      <ObservationForm />


      {/* <div className="flex flex-col md:flex-row lg:flex-row justify-around my-10 gap-10 items-center w-9/12 mx-auto text-black bg-blue-200 p-6">
        <div className="" data-aos="slide-right">
          <img src="https://doortofuture.com/wp-content/uploads/2021/11/online-jobs-from-home-without-investment1.jpg" alt="" />
        </div>
        <div className="w-3/4 mx-auto" data-aos="slide-up">
          <h1 className="text-3xl font-semibold">Online jobs for students can be lucrative, pay well, and set you on a successful career path… if you choose them well & you’re willing to do the work.</h1>
        </div>
      </div> */}


      {/* <div className="flex flex-col md:flex-col lg:flex-row-reverse justify-center items-center px-20 gap-10 py-10 bg-slate-800">
        <div className="hero bg-sky-200 rounded-lg shadow-lg card-hover">
          <div className="hero-content flex-col lg:flex-row-reverse m-0 p-0 lg:m-6 lg:p-6">
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-full w-60"><img src="https://i.ibb.co/MVZQ28W/chatting-with-friend-through-messenger-vector-26590462.jpg" width={'100%'} className="rounded-full" alt="" /></div>
              <h1 className="text-3xl font-bold">You can "Chat" with us...</h1>
            </div>
            <div className="">
            <Chat></Chat>
            </div>
          </div>
        </div>
        <div className="hero bg-sky-200 rounded-lg shadow-lg card-hover">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/GCWjmym/24-hours-support.png"
              className="max-w-sm rounded-lg shadow-2xl"
              width={"200px"}
            />
            <div>
              <h1 className="text-5xl font-bold">24/7 Support</h1>
            </div>
          </div>
        </div>
      </div> */}


      

      <Footer />
    </div>
  );
};

export default Home;
