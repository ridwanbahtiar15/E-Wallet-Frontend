/* eslint-disable no-unused-vars */
import React from "react";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center w-full h-[76px] px-[40px] text-white bg-[#2948FF]">
        <div className="flex gap-4 items-center">
          <img src="/img/e-wallet-logo-header.webp" alt="logo-header-img" />
          <p className="font-nunito font-semibold text-xl">E-Wallet</p>
        </div>
        <div className="hidden md:flex md:gap-2">
          <button className="border border-white h-[48px] py-3 px-4 rounded-md hover:bg-blue-700">Sign In</button>
          <button className="border text-[#2948FF] bg-white border-white h-[48px] py-3 px-4 rounded-md hover:bg-slate-200">Sign Up</button>
        </div>
      </header>
    </>
  );
}

export default Header;
