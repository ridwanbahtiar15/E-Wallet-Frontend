import React, { useState } from "react";
import { useSelector } from "react-redux";
import { enterPin } from "../utils/https/enterPin";
import Title from "../components/Title";

function EnterPin() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Next Input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const jwt = useSelector((state) => state.user.userInfo.token)

  const handleClick = (e) => {
    e.preventDefault();

    console.log(otp.join(""));

    const body = {
      userPin: parseInt(otp.join("")),
    };

    console.log(body);
    console.log(jwt);

    enterPin(body, jwt)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Title title={"Enter Pin"}>
        <form>
          <div className="flex bg-[#3969FD] h-screen lg:p-0 p-[60px]">
            <div className="bg-white lg:rounded-r-[40px] rounded-[20px] lg:rounded-none lg:w-[50%] w-full flex justify-center items-center p-[10px]">
              <div>
                {/* Bagian E-Wallet */}
                <div className="flex items-center gap-[15px] mb-[13px]">
                  <img src="/img/wallet.png" alt="" className="w-8 h-8 object-cover" />
                  <h1 className="font-nunito text-[#2948FF] text-xl font-semibold">E-Wallet</h1>
                </div>

                <div className="mb-[13px]">
                  <h1 className="text-[#0B132A] font-montserrat lg:text-3xl text-lg font-medium">Enter Your Pin 👋</h1>
                </div>

                <div className="mb-[13px]">
                  <h2 className="text-[#4F5665] font-montserrat lg:text-base text-xs">Please save your pin because this so important.</h2>
                </div>

                <div className="p-[10px] mb-[70px]">
                  {otp.map((data, index) => {
                    return (
                      <>
                        <input
                          type="text"
                          maxLength="1"
                          className="border-b-[1px] lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] text-center mr-5"
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                        />
                      </>
                    );
                  })}
                </div>

                <button className="bg-[#2948FF] w-full p-[10px] text-white rounded-md font-montserrat text-base font-medium hover:opacity-80 mb-[13px]" onClick={handleClick}>
                  Submit
                </button>

                <div>
                  <h1 className="text-[#4F5665] text-base font-montserrat text-center">
                    Forgot Your Pin? <span className="text-[#2948FF] cursor-pointer hover:opacity-80">Reset</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="lg:w-[50%] w-0 flex justify-center">
              <img src="/img/people.png" alt="" className="h-[100%] w-auto object-cover" />
            </div>
          </div>
        </form>
      </Title>
    </>
  );
}

export default EnterPin;
