import { useLoaderData } from "react-router-dom";

const AddCart = () => {
    const cartProducts = useLoaderData();
    console.log(cartProducts)

    return (
        <div>
            <h1>Add Cart: {cartProducts.length}</h1>
            <div>
                {
                    cartProducts.map((mycart, index) => (
                        <div key={mycart._id}>
                            <h1>No. {index + 1}</h1>
                            <h1>Name: {mycart.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AddCart;
