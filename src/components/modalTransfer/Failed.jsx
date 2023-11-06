import { Link } from "react-router-dom";
import { useState } from "react";
import getImageUrl from "../../utils/imageGetter";

function Success() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 pb-8 w-full flex justify-center flex-col gap-y-3 md:w-[70%] lg:w-[50%] xl:w-[40%]">
      <div className="text-left flex flex-col gap-y-3">
        <p className="text-sm lg:text-base font-semibold text-secondary border-b border-[#E8E8E8] pb-1">
          TRANSFER TO GALUH
        </p>
      </div>
      <div className="flex flex-col gap-y-3 items-center">
        <div>
          <img src={getImageUrl("oh-no", "png")} alt="oh-no" />
        </div>
        <p className="text-[22px] font-semibold text-dark">
          Oops Transfer <span className="text-danger">Failed</span>
        </p>
        <p className="text-sm text-secondary">
          Sorry Theres is an issue for your transfer, try again later !
        </p>
      </div>
      <button
        type="button"
        className="p-3 bg-primary text-light rounded-md font-medium hover:bg-blue-800 focus:ring"
      >
        Try Again
      </button>
      <Link
        to="/dashboard"
        className="p-3 bg-light border border-primary text-primary rounded-md font-medium hover:bg-slate-200 focus:ring flex justify-center items-center"
      >
        Back To Dashboard
      </Link>
    </div>
  );
}

export default Success;
