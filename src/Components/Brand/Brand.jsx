import React, { useState } from "react";
import "./Brand.css";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const Brand = () => {
  const products = useLoaderData();
  console.log(products);
  const { brand } = useParams();
  const brandLowerCase = brand.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.brand.toLowerCase() === brandLowerCase
  );

  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 1;

  const nextSet = () => {
    const newStartIndex = startIndex + imagesPerPage;
    if (newStartIndex < filteredProducts.length) {
      setStartIndex(newStartIndex);
    }
  };

  const prevSet = () => {
    const newStartIndex = startIndex - imagesPerPage;
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
    }
  };

  const generateStarRating = (rating, product) => {
    const maxRating = 5;
    const filledStars = Math.round(rating);
    const stars = [];

    for (let i = 0; i < maxRating; i++) {
      if (i < filledStars) {
        stars.push(
          <input
            type="radio"
            name={`rating-${product._id}`}
            className="mask mask-star-2 bg-green-500"
            checked
          />
        );
      } else {
        stars.push(
          <input
            type="radio"
            name={`rating-${product._id}`}
            className="mask mask-star-2 bg-green-500"
          />
        );
      }
    }

    return stars;
  };

  return (
    <div>
      {filteredProducts.length > 0 && (
  <div className="carousel w-full h-[500px]">
    {filteredProducts.slice(startIndex, startIndex + imagesPerPage).map((product, index) => (
      <div key={product._id} className="carousel-item w-full">
        <div>
          <img src={product.image} className="w-full h-[500px]" alt={`Image ${index + 1}`} />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-white text-3xl font-avenir hidden lg:block">
            We offer you <br />
            ---The freedom to explore. <br />
            ---The thrill of the open road. <br />
            ---The joy of driving.
          </h1>
        </div>
      </div>
    ))}
    
  </div>
)}

{filteredProducts.length > 0 && (
  <div className="flex justify-center w-full py-2 gap-2">
    <button onClick={prevSet} className="btn btn-xs">
      Previous
    </button>
    <button onClick={nextSet} className="btn btn-xs">
      Next
    </button>
  </div>
)}


      <div className="w-11/12 mx-auto mt-10">
        <div>
          <h1 className="text-3xl text-white text-center mb-2">Here are the Products for you:</h1>
        </div>
        <div className="grid grid-cols-1 ml-8 md:ml-0 lg:ml-0 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.length === 0 ? (
            <div className="col-span-3 mt-20 pb-20"><h1 className="text-center text-3xl text-red-500">No Product available of this brand right now!!!</h1></div>
          ) : (
            filteredProducts.map((product) => (
              <div key={product._id} className="w-80 h-[400px] bg-slate-200 rounded-lg shadow-xl">
                <img src={product.image} alt="" />
                <div className="mx-10">
                  <h1>Name: {product.name}</h1>
                  <h1>Brand: {product.brand}</h1>
                  <h2>Type: {product.type}</h2>
                  <p>Price: {product.price}$</p>

                  <h3 className="star-rating">Rating: {generateStarRating(product.rating, product)}</h3>
                  <div className="flex justify-between items-center gap-10">
                    <Link to={`/details/${product._id}`}>
                      <button className="px-5 py-2 rounded-3xl text-lg card-hover mt-4 bg-gradient-to-r from-teal-500 via-teal-300 to-teal-500">Details</button>
                    </Link>
                    <Link to={`/update/${product._id}`}>
                      <button className="px-5 py-2 rounded-3xl text-lg card-hover mt-4 bg-gradient-to-r from-rose-500 via-rose-300 to-rose-500">Update</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Brand;
