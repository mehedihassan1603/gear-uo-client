import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const details = useLoaderData();
  const { _id } = useParams();
  const data = details.find((item) => item._id === _id);
  console.log(data);

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
    };

    fetch('http://localhost:5000/addcart', {
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


  return <div>
    <h1>Name: {data.name}</h1>
    <img src={data.image} alt="" />
    <p>Description: {data.description}</p>
    <button className="btn btn-ghost" onClick={handleAddToCart}>ADD TO CART</button>
    <ToastContainer></ToastContainer>
  </div>;
};

export default Details;
