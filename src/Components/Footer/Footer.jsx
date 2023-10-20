import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/4">
          <h3 className="text-2xl mb-3">Gear Up</h3>
          <h1 className="mt-6 mb-3 text-xl">Visit Us: </h1>
          <ul className="list-none p-0">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">X</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Viber</a>
            </li>
            <li>
              <a href="#">Whatsapp</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4">
          <h3 className="text-xl mb-3">Smart Vehicle</h3>
          <ul className="list-none p-0"></ul>
        </div>
        <div className="lg:w-1/4">
          <h3 className="text-xl mb-3">Gear Deals</h3>
          <ul className="list-none p-0">
            <li>
              <a href="#">GearShare</a>
            </li>
            <li>
              <a href="#">GearBusiness</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4">
          <h3 className="text-xl mb-3">About Us</h3>
          <ul className="list-none p-0">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Investors Relations</a>
            </li>
          </ul>
          <div className="container mx-auto mt-5">
            <h1>Get Support:</h1>
            <ul>
              <li>
                <a href="#">Tech Support</a>
              </li>
              <li>
                <a href="#">Contact US</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-black mx-auto text-center py-4">
        <p>&copy; 2023 Gear Up. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
