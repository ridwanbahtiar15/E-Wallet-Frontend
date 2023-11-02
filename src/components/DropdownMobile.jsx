/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import getImageUrl from "../utils/imageGetter";
import { Link } from "react-router-dom";

function DropdownMobile(props) {
  return (
    <div id="dropdownMobile" className="w-screen lg:hidden font-montserrat">
      <div className="fixed left-0 top-0  w-screen h-screen pt-4 px-5 md:px-11 lg:px-11 bg-light">
        <div className="mb-5 flex justify-between">
          <div className="flex gap-x-4 items-center">
            <div>
              <img
                src={getImageUrl("Money-Wallet", "png")}
                alt="logo"
                className="w-8 h-8"
              />
            </div>
            <p className="font-nunitoSans text-xl text-primary font-semibold">
              E-Wallet
            </p>
          </div>
          <button className="lg:hidden" onClick={() => props.isClick()}>
            <img
              src={getImageUrl("close-dark", "svg")}
              alt="x"
              className="w-6 h-6"
            />
          </button>
        </div>
        <ul className="flex flex-col gap-y-2 w-full text-center">
          <li className="p-3 hover:font-medium text-secondary hover:bg-primary hover:text-light rounded-md">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="p-3 hover:font-medium text-secondary hover:bg-primary hover:text-light rounded-md">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-3 hover:font-medium text-secondary hover:bg-primary hover:text-light rounded-md">
            <Link to="/transfer">Transfer</Link>
          </li>
          <li className="p-3 hover:font-medium text-secondary hover:bg-primary hover:text-light rounded-md">
            <Link to="/history">History</Link>
          </li>
          <li className="p-3 hover:font-medium text-secondary hover:bg-primary hover:text-light rounded-md">
            <Link to="/topup">Top Up</Link>
          </li>
          <li className="p-3 hover:font-medium text-secondary hover:bg-primary hover:text-light rounded-md">
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMobile;
