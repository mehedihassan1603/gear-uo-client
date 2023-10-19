import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const AddCart = () => {
    const cartProducts = useLoaderData();
    // console.log(cartProducts);
    const {user} = useContext(AuthContext);
    const [products, setProducts] = useState(cartProducts);
    console.log(products)
    const filteredProducts = products.filter(product => product.userEmail === user.email);

    
    
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/addcart/${id}`,{
                method: 'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = products.filter(product => product._id !== id);
                      
                      setProducts(remaining);
                      
                }
              })
            }
          })
    };

    return (
        <div>
            <h1>Add Cart: {filteredProducts.length}</h1>
            <div>
                {
                  
                    filteredProducts.map((mycart, index) => (
                        <div key={mycart._id}>
                            <h1>No. {index + 1}</h1>
                            <h1>Name: {mycart.name}</h1>
                            <button onClick={() => handleDelete(mycart._id)} className="btn btn-ghost">Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AddCart;
