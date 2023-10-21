import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Root.css';

const Root = () => {
    return (
        <div className="font-avenir bg-gradient-to-r from-slate-400 to-slate-400">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;