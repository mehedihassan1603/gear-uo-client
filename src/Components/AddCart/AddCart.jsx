import { useLoaderData } from "react-router-dom";

const AddCart = () => {
    const cartProducts = useLoaderData();

    return (
        <div>
            <h1>Add Cart: {cartProducts.length}</h1>
        </div>
    );
};

export default AddCart;