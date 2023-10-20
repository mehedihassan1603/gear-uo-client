import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const loadedProduct = useLoaderData();
  const navigate = useNavigate();
  const { _id, image, brand, name, type, price, description, rating } =
    loadedProduct;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;

    const updateProduct = {
      image,
      brand,
      name,
      type,
      price,
      description,
      rating,
    };
    console.log(updateProduct);

    fetch(`https://gear-up-server-nine.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product Update successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate(`/brand/${brand}`);
          }, 2000);
        }
      });
  };

  return (
    <div className="bg-gray-200 w-9/12 mt-10 mx-auto p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-600">
            Image URL:
          </label>
          <input
            type="url"
            id="image"
            name="image"
            defaultValue={image}
            required
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
            defaultValue={name}
            required
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
            defaultValue={brand}
            required
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
            defaultValue={type}
            required
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
            defaultValue={price}
            placeholder="in Dollar only"
            required
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
            defaultValue={description}
            required
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
            defaultValue={rating}
            step="0.1"
            required
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="flex justify-center items-center">
        <button
          type="submit"
          className="px-5 py-2 rounded-3xl text-lg card-hover mt-4 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500"
        >
          Submit
        </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Update;
