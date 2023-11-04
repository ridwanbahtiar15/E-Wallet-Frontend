/* eslint-disable react/prop-types */
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
            src={getImageUrl("1", "png")}
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
            className="absolute text-light text-sm font-normal w-48 max-lg:hidden bg-light top-24 right-10 drop-shadow-md rounded-xl p-3 z-10"
            id="dropdown-menu"
          >
            <div className="flex flex-col gap-y-2">
              <Link
                to="/profile"
                className="p-3 text-secondary hover:text-light hover:bg-primary rounded-md flex items-center gap-x-4"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.7496 7.99997C15.7496 8.99453 15.3545 9.94835 14.6513 10.6516C13.948 11.3549 12.9942 11.75 11.9996 11.75C11.005 11.75 10.0512 11.3549 9.34797 10.6516C8.64469 9.94835 8.24961 8.99453 8.24961 7.99997C8.24961 7.00541 8.64469 6.05158 9.34797 5.34832C10.0512 4.64506 11.005 4.24997 11.9996 4.24997C12.9942 4.24997 13.948 4.64506 14.6513 5.34832C15.3545 6.05158 15.7496 7.00541 15.7496 7.99997ZM15.8411 12.6095C16.7881 11.8199 17.4688 10.7578 17.7908 9.56768C18.1127 8.37751 18.0601 7.11707 17.6402 5.95784C17.2204 4.79861 16.4536 3.79687 15.4442 3.08888C14.4348 2.38091 13.2318 2.0011 11.9989 2.0011C10.7659 2.0011 9.56293 2.38091 8.55354 3.08888C7.54414 3.79687 6.77734 4.79861 6.35749 5.95784C5.93763 7.11707 5.88507 8.37751 6.20698 9.56768C6.5289 10.7578 7.20964 11.8199 8.15661 12.6095C6.67999 13.3076 5.42101 14.3941 4.51446 15.7527C3.6079 17.1114 3.0879 18.6909 3.01011 20.3225C3.00288 20.6165 3.11103 20.9016 3.31143 21.1167C3.51181 21.332 3.7885 21.4602 4.08226 21.4739C4.37601 21.4877 4.66345 21.3858 4.88304 21.1902C5.10262 20.9946 5.2369 20.7209 5.25711 20.4275C5.33889 18.6942 6.08496 17.0591 7.34047 15.8615C8.59597 14.6638 10.2645 13.9956 11.9996 13.9956C13.7347 13.9956 15.4033 14.6638 16.6588 15.8615C17.9143 17.0591 18.6604 18.6942 18.7421 20.4275C18.7459 20.5773 18.7793 20.7248 18.8408 20.8614C18.9023 20.9981 18.9905 21.1211 19.1002 21.2231C19.2098 21.3252 19.3388 21.4044 19.4794 21.456C19.6201 21.5076 19.7696 21.5306 19.9193 21.5235C20.069 21.5166 20.2157 21.4797 20.351 21.4152C20.4862 21.3507 20.6072 21.26 20.7068 21.1481C20.8066 21.0362 20.8828 20.9055 20.9312 20.7638C20.9798 20.622 20.9995 20.4719 20.9891 20.3225C20.9111 18.6908 20.3909 17.1111 19.4842 15.7524C18.5773 14.3938 17.318 13.3074 15.8411 12.6095Z"
                      fill="#4F5665"
                    />
                  </svg>
                </div>
                <p>Profile</p>
              </Link>
              <button
                className="p-3 text-danger hover:text-light hover:bg-primary rounded-md flex items-center gap-x-4"
                onClick={() => props.isLogoutClick()}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                  >
                    <path
                      d="M12 7.125L12 4.5C12 2.84315 13.3431 1.5 15 1.5L18 1.5C19.6569 1.5 21 2.84315 21 4.5L21 18.5C21 20.1569 19.6569 21.5 18 21.5L15 21.5C13.3431 21.5 12 20.1569 12 18.5L12 16.5"
                      stroke="#D00000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 14.5L1.44194 11.9419C1.19786 11.6979 1.19786 11.3021 1.44194 11.0581L4 8.5"
                      stroke="#D00000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 11.5L2 11.5"
                      stroke="#D00000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p>Logout</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
