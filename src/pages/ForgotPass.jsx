import React, { useState } from "react";

import { forgotPass } from "../utils/https/forgotPass";
import Modal from "../components/Modal";
import Title from "../components/Title";
import { Link } from "react-router-dom";

function ForgotPass() {
  const [email, setEmail] = useState();
  const Email = (e) => {
    setEmail(e.target.value);
  };
  const [Message, setMessage] = useState({ msg: null, isError: null });
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    status: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage({ msg: "Email Must Be Filled" });
      return setOpenModal({
        isOpen: true,
        status: "forgot pass error",
      });
    }

    const body = {
      email: email,
    };

    forgotPass(body)
      .then((res) => {
        console.log(res);
        setMessage({ msg: "Check Your Email for Reset Password" });
        return setOpenModal({
          isOpen: true,
          status: "Login Error",
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.msg === "Your Account not Found") {
          setMessage({ msg: "Email is Not Found" });
          return setOpenModal({
            isOpen: true,
            status: "Login Error",
          });
        }
      });

    console.log(email);
  };

  return (
    <>
      <Title title={"Forgot Password"}>
        <form onSubmit={handleSubmit}>
          <div className="bg-[#3969FD] w-full h-screen flex justify-center items-center px-3 md:px-0">
            <div className="bg-white py-[40px] px-[25px] lg:py-[70px] lg:px-[70px] w-screen md:w-[600px] h-auto lg:my-[70px] my-[100px] rounded-[20px]">
              {/* Bagian E-Wallet */}
              <div className="flex items-center gap-[15px] mb-[25px]">
                <img src="img/wallet.png" alt="" className="w-8 h-8 object-cover" />
                <h1 className="font-nunito text-[#2948FF] text-xl font-semibold">E-Wallet</h1>
              </div>

              {/* Bagian Fill out form correctly */}
              <div className="mb-[25px]">
                <h1 className="text-[#0B132A] font-montserrat lg:text-3xl text-lg font-medium">Fill Out Form Correctly 👋</h1>
              </div>

              {/* Bagian we willl ..... */}
              <div className="mb-[25px]">
                <h2 className="text-[#4F5665] lg:text-base text-xs font-normal font-montserrat">We will send new password to your email</h2>
              </div>

              {/* Bagian input email */}
              <h1 className="text-[#0B132A] text-base font-medium font-montserrat mb-[13px]">Email</h1>
              <div className="flex items-center gap-[10px] border-[1px] rounded-lg pl-[14px] mb-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_9_276)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.74988 2C0.78338 2 -0.000122066 2.7835 -0.000122066 3.75V4.48577C-0.000285027 4.49479 -0.000284637 4.50381 -0.000122066 4.51282V12.25C-0.000122066 13.2165 0.783379 14 1.74988 14H14.2499C15.2164 14 15.9999 13.2165 15.9999 12.25V4.51265C16.0001 4.50376 16.0001 4.49485 15.9999 4.48594V3.75C15.9999 2.7835 15.2164 2 14.2499 2H1.74988ZM14.4999 4.07029V3.75C14.4999 3.61193 14.388 3.5 14.2499 3.5H1.74988C1.61181 3.5 1.49988 3.61193 1.49988 3.75V4.07029L7.99988 7.88063L14.4999 4.07029ZM1.49988 5.80902V12.25C1.49988 12.3881 1.61181 12.5 1.74988 12.5H14.2499C14.388 12.5 14.4999 12.3881 14.4999 12.25V5.80902L8.37917 9.39702C8.14495 9.53432 7.85481 9.53432 7.62059 9.39702L1.49988 5.80902Z"
                      fill="#4F5665"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9_276">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="text-sm p-3 border border-[#E8E8E8] focus:ring-0 focus:ring-offset-0 rounded-r-md border-l-0  font-medium text-secondary placeholder:font-medium placeholder:text-secondary outline-none focus:border focus:border-primary w-full"
                  onChange={Email}
                />
              </div>
              <Link to="/login" className="cursor-default flex justify-end">
                <p className="mb-4 w-max text-end cursor-pointer hover:underline">Go To Login Page</p>
              </Link>
              {/* Bagian button submit */}
              <button type="submit" className="bg-primary p-3 rounded-md flex justify-center items-center gap-x-2 hover:bg-blue-800 focus:ring w-full text-white">
                Submit
              </button>
            </div>
          </div>
        </form>
      </Title>
      {openModal.isOpen && <Modal modal={openModal} closeModal={setOpenModal} message={Message} />}
    </>
  );
}

export default ForgotPass;
