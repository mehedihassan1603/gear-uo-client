import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Items from "../Items/Items";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


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

      <div className="w-full mx-auto bg-white rounded-lg shadow-lg p-4">
        <div className="grid grid-cols-2 gap-6">
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

      <Footer></Footer>
    </div>
  );
};

export default Home;
