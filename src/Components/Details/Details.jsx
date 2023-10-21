import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from './../Authentication/AuthProvider/AuthProvider';

const Details = () => {
  const {user} = useContext(AuthContext);
  const details = useLoaderData();
  const { _id } = useParams();
  const data = details.find((item) => item._id === _id);
  // console.log(data);

  if (!data) {
    return <div>Data not found</div>;
  }

  const handleAddToCart = async () =>{
    
    const productToAdd = {
      name: data.name,
      brand: data.brand,
      image: data.image,
      description: data.description,
      price: data.price,
      userEmail: user ? user.email : null,
    };
    console.log(productToAdd)

    fetch('https://gear-up-server-nine.vercel.app/addcart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productToAdd),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          toast.success("Successfully added to My Cart!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          
        }
      })
  }


  return <div className="py-6">
    <h1 className="text-3xl font-bold text-white bg-slate-800 py-2 rounded-lg w-3/6 mx-auto text-center">Name: {data.name}</h1>
    <img className="my-10" src={data.image} alt="" />
    <p className="text-lg text-white w-11/12 mx-auto">Product Description: {data.description}</p>
    <div className="flex justify-center items-center mt-10"><button className="px-5 py-2 rounded-3xl text-lg card-hover mt-4 bg-gradient-to-r from-green-500 via-green-300 to-green-500" onClick={handleAddToCart}>ADD TO CART</button></div>
    <ToastContainer></ToastContainer>
  </div>;
};

export default Details;
