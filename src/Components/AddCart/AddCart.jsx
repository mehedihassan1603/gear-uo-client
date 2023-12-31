import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import Footer from "../Footer/Footer";

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
              
              fetch(`https://gear-up-server-nine.vercel.app/addcart/${id}`,{
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
        <table className="w-5/6 mx-auto divide-y divide-gray-200">
          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center mt-20">
              <h1 className="2xl text-center text-black bg-slate-200 p-3 rounded-lg">
                No product in your cart. Please Add to Cart first!
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl text-white text-center mt-5 font-semibold bg-slate-800 rounded-lg py-2 mb-4">
                My Products:
              </h1>
              <table className="w-5/6 mx-auto divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 md:px-6 lg:px-6 text-white py-3 text-left text-xs font-medium uppercase tracking-wider">
                      No.
                    </th>
                    <th className="px-3 md:px-6 lg:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-3 md:px-6 lg:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-3 md:px-6 lg:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProducts.map((mycart, index) => (
                    <tr key={mycart._id}>
                      <td className="px-3 md:px-6 lg:px-6 whitespace-nowrap">
                        <div className="text-lg font-medium text-gray-900">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-3 md:px-6 lg:px-6 whitespace-nowrap">
                        <img
                          src={mycart.image}
                          alt={mycart.name}
                          className="h-12 w-16 object-cover rounded-lg"
                        />
                      </td>
                      <td className="px-3 md:px-6 lg:px-6 whitespace-nowrap">
                        <div className="text-lg text-gray-900">{mycart.name}</div>
                      </td>
                      <td className=" whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(mycart._id)}
                          className="btn btn-ghost text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </table>
        <Footer></Footer>
      </div>
    );
    
    
};

export default AddCart;
