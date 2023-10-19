import React from "react";
import { Link } from "react-router-dom";

const Items = ({ product }) => {
  console.log(product);
  const { brand, photo_url, id } = product;

  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <Link to={`/brand/${brand}`}>
      <div className="bg-purple-300 shadow-md rounded-lg p-4">
        <figure className="w-72 h-72 mx-auto">
          <img
            src={photo_url}
            alt="brand"
            className="rounded-xl w-full h-full"
          />
        </figure> 
      </div>
      <div><h1 className="text-3xl font-semibold pt-2">{brand}</h1></div>
      
      </Link>
    </div>
  );
};

export default Items;
