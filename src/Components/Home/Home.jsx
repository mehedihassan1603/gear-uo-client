import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Items from "../Items/Items";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import ObservationForm from "./Observationform/ObservationForm";

const Home = () => {
  const products = useLoaderData();
  console.log(products);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="w-full mx-auto rounded-lg shadow-lg p-4">
        <h1 className="marquee text-5xl font-avenir font-semibold py-10 text-slate-100 text-center">
          <span>Choose a Brand that you want to explore!!!</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {products.map((data, index) => (
            <div
              key={data.id}
              data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <Items product={data}></Items>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center px-20 gap-10 py-10 bg-slate-900">
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


      <ObservationForm></ObservationForm>


      <Footer></Footer>
    </div>
  );
};

export default Home;
