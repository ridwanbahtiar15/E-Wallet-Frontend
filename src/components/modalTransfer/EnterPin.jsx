import { Link } from "react-router-dom";
import { useState } from "react";

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

  const handleClick = (e) => {
    e.preventDefault();

    console.log(otp.join(""));
  };
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full flex justify-center flex-col gap-y-3 md:w-[70%] lg:w-[50%] xl:w-[40%]">
      <div className="text-left flex flex-col gap-y-3">
        <p className="text-sm lg:text-base font-semibold text-secondary border-b border-[#E8E8E8] pb-1">
          TRANSFER TO GALUH
        </p>
      </div>
      <div className="flex flex-col gap-y-3 py-8">
        <p className="text-xl lg:text-[30px] font-medium text-dark">
          Enter Your Pin 👋
        </p>
        <p className="text-sm lg:text-base lg:text-secondary">
          Enter Your Pin For Transaction
        </p>
      </div>
      <div className="w-full pt-6 pb-16 flex justify-center gap-x-5">
        {otp.map((data, index) => {
          return (
            <>
              <input
                type="text"
                maxLength="1"
                className="border-b w-[30px] h-[30px] lg:w-[40px] lg:h-[50px] text-center outline-none border-primary text-[30px]"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            </>
          );
        })}
      </div>
      <button
        type="button"
        className="p-3 bg-primary text-light rounded-md text-sm hover:bg-blue-800 focus:ring"
        onClick={handleClick}
      >
        Next
      </button>
      <p className="text-secondary self-center text-sm lg:text-base">
        Forgot Your Pin?{" "}
        <Link to="/resetpass" className="text-primary">
          Reset
        </Link>
      </p>
    </div>
  );
}

export default EnterPin;
