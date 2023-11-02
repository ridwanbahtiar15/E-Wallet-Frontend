import { useState } from "react";
import { Link } from "react-router-dom";

import getImageUrl from "../utils/imageGetter";
import "../styles/style.css";

function Navbar(props) {
  const [btnArrow, setBtnArrow] = useState(false);
  const btnArrowHandle = () => {
    setBtnArrow((state) => !state);
  };
  return (
    <nav className="w-full flex justify-between py-4 px-5 items-center font-montserrat bg-light md:px-11 lg:px-11 border-b border-[#E8E8E8]">
      <div className="nav-start">
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
      </div>
      <div className="nav-end flex gap-x-[22px] items-center">
        <p className="text-secondary text-base font-normal hidden lg:block">
          Ghaluh Wizard
        </p>
        <Link to="/profile">
          <img
            src={getImageUrl("profile", "png")}
            alt="icon-profile"
            className="rounded-full w-12 h-12 hidden lg:block"
          />
        </Link>
        <button
          id="dropdown-arrow"
          className={`hidden lg:block cursor-pointer`}
          onClick={btnArrowHandle}
        >
          <img
            src={getImageUrl("down", "svg")}
            alt="down"
            className="w-full h-full"
          />
        </button>

        <button className="text-2xl lg:hidden" onClick={() => props.isClick()}>
          <img
            src={getImageUrl("burger-menu-dark", "svg")}
            alt="burger-menu"
            id="burger-menu"
            className="w-full h-full"
          />
        </button>
        {btnArrow && (
          <div
            className="absolute text-light text-sm font-normal py-2 px-6 max-lg:hidden bg-light border border-[#E8E8E8] top-24 right-10 drop-shadow-md"
            id="dropdown-menu"
          >
            <ul className="flex flex-col gap-y-2">
              <li className="p-1 hover:text-[#0B0909] text-secondary">
                <button onClick={() => props.isLogoutClick()}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
