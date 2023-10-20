import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Root.css';

const Root = () => {
    return (
        <div className="font-avenir bg-gradient-to-r from-slate-700 via-cyan-800 to-slate-800">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;