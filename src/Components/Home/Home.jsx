import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Items from "../Items/Items";

const Home = () => {
    
    return (
        <div>
           <Banner></Banner>
           <Items></Items>
           
           <Footer></Footer>
        </div>
    );
};

export default Home;