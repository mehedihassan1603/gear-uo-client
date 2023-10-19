import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Brand = () => {
  const products = useLoaderData();
  console.log(products);
  const { brand } = useParams();
  const brandLowerCase = brand.toLowerCase();

  // Filter products based on the brand specified in the URL (case-insensitive)
  const filteredProducts = products.filter(
    (product) => product.brand.toLowerCase() === brandLowerCase
  );

  return (
    <div className="w-11/12 mx-auto">
      <h1>
        {brand} Products: {filteredProducts.length}
      </h1>
      <div className="grid grid-cols-3 gap-10 ">
        {filteredProducts.map((product) => (
          <div key={product._id} className="w-80 h-96 bg-slate-200 shadow-xl">
            <img src={product.image} alt="" />
            <h1>Name: {product.name}</h1>
            <h1>Brand: {product.brand}</h1>
            <h2>Type: {product.type}</h2>
            <p>Price: {product.price}$</p>
            <h3>Rating: {product.rating}</h3>
            <Link to={`/details/${product._id}`}><button className="btn btn-accent">Details</button></Link>
            <Link to={`/update/${product._id}`}><button className="btn btn-neutral">Update</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
