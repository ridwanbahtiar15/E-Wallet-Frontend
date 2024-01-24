/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import { Link } from "react-router-dom";

function Header() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center w-full h-[76px] px-4 md:px-[40px] text-white bg-[#2948FF]">
        <div className="flex gap-4 items-center">
          <img src="/img/e-wallet-logo-header.webp" alt="logo-header-img" />
          <p className="font-nunito font-semibold text-xl">E-Wallet</p>
        </div>
        <div className="flex md:hidden">
          <img className="cursor-pointer" onClick={() => setDropDown((state) => !state)} src={getImageUrl("hamburger-white", "svg")} alt="hamburger-white-img" />
        </div>
        <div className={`md:hidden flex flex-col w-full gap-[18px] h-screen px-[40px] bg-white text-[#2948FF] rounded-b-2xl right-0 text-center absolute top-16 ${dropDown ? "" : "hidden"}`}>
          <Link to="/auth/login" className="border border-transparent justify-center text-sm mt-[18px] p-5 hover:border hover:border-[#2948FF] rounded-md ">
            Sign In
          </Link>
          <Link to="/auth/register" className="border border-transparent justify-center text-sm hover:border hover:border-[#2948FF] p-5 rounded-md">
            Sign Up
          </Link>
        </div>
        <div className="hidden md:flex md:gap-2">
          <Link to="/auth/login" className="border border-white h-[48px] py-3 px-4 rounded-md hover:bg-blue-700">
            Sign In
          </Link>
          <Link to="/register" className="border text-[#2948FF] bg-white border-white h-[48px] py-3 px-4 rounded-md hover:bg-slate-200">
            Sign Up
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
