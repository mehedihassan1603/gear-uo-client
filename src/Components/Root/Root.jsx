import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Root.css';

const Root = () => {
    return (
        <div className="font-avenir bg-blue-200">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;