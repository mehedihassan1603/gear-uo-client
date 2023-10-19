import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    image: "",
    name: "",
    brand: "",
    type: "car",
    price: 0,
    description: "",
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Add Product successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate(`/brand/${brand}`);
          }, 2000);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-600">
            Image URL:
          </label>
          <input
            type="url"
            id="image"
            name="image"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-600">
            Brand Name:
          </label>
          <select
            id="brand"
            name="brand"
            required
            defaultValue=""
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Please Select One</option>
            <option value="tesla">Tesla</option>
            <option value="honda">Honda</option>
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
            <option value="mercedesbenz">Marcedes Benz</option>
            <option value="audi">Audi</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-600">
            Type:
          </label>
          <select
            id="type"
            name="type"
            required
            defaultValue=""
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Please Select One</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="Engines">Engines</option>
            <option value="compressor">Compressor</option>
            <option value="accessory">Accessory</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-600">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="in Dollar only"
            required
            // value={product.price}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Short Description:
          </label>
          <textarea
            id="description"
            name="description"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-600">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;
