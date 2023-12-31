import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => console.log("Successfull"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="text-white bg-gradient-to-r from-slate-400 via-cyan-300 to-blue-400 px-6 py-3 flex justify-between">
      <Link to={"/"} className="flex flex-col lg:flex-row items-center">
        <img
          className="rounded-full mr-2"
          src="https://i.ibb.co/w7MXjg1/Whats-App-Image-2023-10-18-at-00-04-25-aa47fc69.jpg"
          width={"50px"}
          alt=""
        />
        <h1 className="fonty text-3xl text-white text-bold">Gear Up</h1>
      </Link>
      <div className="flex">
        <ul className="space-x-6 font-avenir flex flex-col md:flex-col lg:flex-row text-lg justify-center items-center">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-pink-300 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="text-white hover:text-pink-300 transition duration-300"
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addcart"
              className="text-white hover:text-pink-300 transition duration-300"
            >
              My Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="text-white flex flex-col lg:flex-row items-center">
        {user ? (
          <>
            <div className="flex flex-col justify-center items-center">
              <span>
                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
              </span>
              <span>{user.displayName}</span>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <a onClick={handleLogout}>Logout</a>
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-gradient-to-r from-green-800 via-green-600 to-green-800 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
