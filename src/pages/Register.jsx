/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import { register } from "../utils/https/auth";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Title from "../components/Title";

function Register() {
  const [Message, setMessage] = useState({ msg: null, isError: null });
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    status: null,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.confirmPassword.value) {
      setMessage({ msg: "The passwords do not match" });
      return setOpenModal({
        isOpen: true,
        status: "Register Error",
      });
    }
    // return console.log("error");
    const body = {
      name: e.target.fullName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    register(body)
      .then((res) => {
        setMessage({
          msg: res.data.msg,
          isError: false,
        });
        setOpenModal({ isOpen: true, status: "User success registered. Please check your email." });
        // console.log(res);
      })
      .catch((err) => {
        setMessage({
          msg: err.response.data.msg,
          isError: true,
        });
        setOpenModal({ isOpen: true, status: "Something went wrong..." });
        // console.log(err);
      });
    // console.log(body);
  };

  return (
    <>
      <Title title={"Register"}>
        <div className="h-auto flex">
          <div className="flex-1 py-5 h-auto md:flex-initial md:w-2/3 lg:w-1/2 bg-white font-montserrat mx-5 lg:m-0 lg:p-10 md:rounded-r-full">
            <div className="flex flex-col gap-[13px]">
              <div className="flex items-center gap-[15px]">
                <img src="/svg/Money-Wallet-logo.svg" alt="e-wallet-logo" />
                <h1 className="text-[#2948FF] font-medium">E-Wallet</h1>
              </div>
              <p className="text-lg md:text-2xl font-medium">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
              <p className="text-xs md:leading-6 font-normal">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
              <div className="flex gap-[15px] justify-center md:flex-col">
                <button className="flex flex-1 border border-[#E8E8E8] bg-white h-[51px] p-[10px] gap-[10px] rounded-full justify-center hover:bg-slate-200">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.327 16.8285 15.1115 18.5 12.5 18.5C9.1865 18.5 6.5 15.8135 6.5 12.5C6.5 9.1865 9.1865 6.5 12.5 6.5C14.0295 6.5 15.421 7.077 16.4805 8.0195L19.309 5.191C17.523 3.5265 15.134 2.5 12.5 2.5C6.9775 2.5 2.5 6.9775 2.5 12.5C2.5 18.0225 6.9775 22.5 12.5 22.5C18.0225 22.5 22.5 18.0225 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.65302 7.8455L6.93852 10.255C7.82752 8.054 9.98052 6.5 12.5 6.5C14.0295 6.5 15.421 7.077 16.4805 8.0195L19.309 5.191C17.523 3.5265 15.134 2.5 12.5 2.5C8.65902 2.5 5.32802 4.6685 3.65302 7.8455Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12.5 22.5003C15.083 22.5003 17.43 21.5118 19.2045 19.9043L16.1095 17.2853C15.0717 18.0745 13.8037 18.5014 12.5 18.5003C9.89897 18.5003 7.69047 16.8418 6.85847 14.5273L3.59747 17.0398C5.25247 20.2783 8.61347 22.5003 12.5 22.5003Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.7571 15.6082 17.0467 16.5766 16.108 17.2855L16.1095 17.2845L19.2045 19.9035C18.9855 20.1025 22.5 17.5 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z"
                      fill="#1976D2"
                    />
                  </svg>
                  <p className="hidden md:text-lg md:text-[#4F5665] md:block">Sign In With Google</p>
                </button>
                <button className="flex flex-1 border border-[#E8E8E8] h-[51px] p-[10px] gap-[10px] rounded-full justify-center hover:bg-slate-200">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.501 2.50195C6.97901 2.50195 2.50201 6.97895 2.50201 12.501C2.50201 17.491 6.15801 21.627 10.939 22.38V15.392H8.39901V12.501H10.939V10.298C10.939 7.78995 12.432 6.40695 14.715 6.40695C15.809 6.40695 16.955 6.60195 16.955 6.60195V9.06095H15.691C14.451 9.06095 14.063 9.83295 14.063 10.624V12.499H16.834L16.391 15.39H14.063V22.378C18.844 21.629 22.5 17.492 22.5 12.501C22.5 6.97895 18.023 2.50195 12.501 2.50195Z"
                      fill="#395185"
                    />
                  </svg>
                  <p className="hidden md:text-lg md:text-[#4F5665] md:block">Sign In With Facebook</p>
                </button>
              </div>
              <div className="flex justify-center">
                <p className="font-normal text-xs text-[#AAAAAA]">Or</p>
              </div>
              <div>
                {/* Form register */}
                <form onSubmit={submitHandler} className="flex flex-col gap-[13px]">
                  <label htmlFor="fullName" className="text-base font-medium">
                    Full Name
                  </label>
                  <div className="flex gap-[15px] px-3 py-[14px] border border-[#DEDEDE] rounded-lg bg-#FCFDFE">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
                        stroke="#4F5665"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
                        stroke="#4F5665"
                        strokeWidth="1.42857"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input type="text" placeholder="Enter Your Full Name" id="fullName" className="flex-1 outline-none text-xs font-normal text-[#4F5665]" />
                  </div>
                  <label htmlFor="email" className="text-base font-medium">
                    Email
                  </label>
                  <div id="emailDiv" className="flex gap-[15px] px-3 py-[14px] border border-[#DEDEDE] rounded-lg bg-#FCFDFE">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_103_1168)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.75 2C0.783502 2 4.49654e-09 2.7835 4.49654e-09 3.75V4.48577C-0.000162957 4.49479 -0.000162567 4.50381 4.49654e-09 4.51282V12.25C4.49654e-09 13.2165 0.783501 14 1.75 14H14.25C15.2165 14 16 13.2165 16 12.25V4.51265C16.0002 4.50376 16.0002 4.49485 16 4.48594V3.75C16 2.7835 15.2165 2 14.25 2H1.75ZM14.5 4.07029V3.75C14.5 3.61193 14.3881 3.5 14.25 3.5H1.75C1.61193 3.5 1.5 3.61193 1.5 3.75V4.07029L8 7.88063L14.5 4.07029ZM1.5 5.80902V12.25C1.5 12.3881 1.61193 12.5 1.75 12.5H14.25C14.3881 12.5 14.5 12.3881 14.5 12.25V5.80902L8.37929 9.39702C8.14507 9.53432 7.85493 9.53432 7.62071 9.39702L1.5 5.80902Z"
                          fill="#4F5665"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_103_1168">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <input type="text" placeholder="Enter Your Email" id="email" className="flex-1 outline-none text-xs font-normal text-[#4F5665]" />
                  </div>
                  <label htmlFor="password" className="text-base font-medium">
                    Password
                  </label>
                  <div className="flex gap-[15px] px-3 py-[14px] border border-[#DEDEDE] rounded-lg bg-#FCFDFE">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.12583 7.99932C7.12583 8.68132 6.57316 9.23398 5.89116 9.23398C5.20916 9.23398 4.65649 8.68132 4.65649 7.99932C4.65649 7.31732 5.20916 6.76465 5.89116 6.76465H5.89316C6.57449 6.76532 7.12583 7.31798 7.12583 7.99932Z"
                        stroke="#4F5665"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M7.12787 8H11.3399V9.23467" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.45467 9.23467V8" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.83325 7.99967C1.83325 3.37501 3.37525 1.83301 7.99992 1.83301C12.6246 1.83301 14.1666 3.37501 14.1666 7.99967C14.1666 12.6243 12.6246 14.1663 7.99992 14.1663C3.37525 14.1663 1.83325 12.6243 1.83325 7.99967Z"
                        stroke="#4F5665"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input type="password" placeholder="Enter Your Password" id="password" className="flex-1 outline-none text-xs font-normal text-[#4F5665]" />
                  </div>
                  <label htmlFor="confirmPassword" className="text-base font-medium">
                    Confirm Password
                  </label>
                  <div className="flex gap-[15px] px-3 py-[14px] border border-[#DEDEDE] rounded-lg bg-#FCFDFE">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.12583 7.99932C7.12583 8.68132 6.57316 9.23398 5.89116 9.23398C5.20916 9.23398 4.65649 8.68132 4.65649 7.99932C4.65649 7.31732 5.20916 6.76465 5.89116 6.76465H5.89316C6.57449 6.76532 7.12583 7.31798 7.12583 7.99932Z"
                        stroke="#4F5665"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M7.12787 8H11.3399V9.23467" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.45467 9.23467V8" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.83325 7.99967C1.83325 3.37501 3.37525 1.83301 7.99992 1.83301C12.6246 1.83301 14.1666 3.37501 14.1666 7.99967C14.1666 12.6243 12.6246 14.1663 7.99992 14.1663C3.37525 14.1663 1.83325 12.6243 1.83325 7.99967Z"
                        stroke="#4F5665"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input type="password" placeholder="Enter Your Password Again" id="confirmPassword" className="flex-1 outline-none text-xs font-normal text-[#4F5665]" />
                  </div>
                  <button type="submit" className="w-full p-[10px] h-[50px] text-white bg-[#2948FF] hover:bg-blue-700 rounded-md">
                    Register
                  </button>
                </form>
                <p className="text-center font-normal text-xs mt-[13px]">
                  Have An Account?{" "}
                  <span>
                    <Link to="/login" className="text-blue-700">
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:bg-cover md:h-auto md:flex md:flex-initial md:w-1/3 lg:w-1/2 md:bg-gradient-to-b md:from-[#396AFC] md:to-[#2948FF] md:justify-center md:items-center">
            <img src="/img/register-side.png" alt="register-img" className="place-self-center object-contain" />
          </div>
        </div>
        <div className="hidden md:bg-cover md:h-auto md:flex md:flex-initial md:w-1/3 lg:w-1/2 md:bg-gradient-to-b md:from-[#396AFC] md:to-[#2948FF] md:justify-center md:items-center">
          <img src="/img/register-side.png" alt="register-img" className="place-self-center object-contain" />
        </div>
      </Title>
      {openModal.isOpen && <Modal modal={openModal} closeModal={setOpenModal} message={Message} />}
    </>
  );
}

export default Register;
