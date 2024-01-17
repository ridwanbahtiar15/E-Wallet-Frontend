import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { confirmPin, createTransfer } from "./transfer";
import getImageUrl from "../../utils/imageGetter";

function EnterPin({
  /*  eslint-disable-next-line react/prop-types */
  modalTransfer: { body },
  closeModalTransfer,
}) {
  const data = body;
  const jwt = useSelector((state) => state.user.userInfo.token);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState();
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Next Input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const [status, setStatus] = useState("transfer");

  const failed = () => {
    setOtp(new Array(6).fill(""));
    setStatus("transfer");
  };

  const handleClick = () => {
    const body = {
      last_pin: otp.join(""),
    };
    if (body.last_pin.length < 6) {
      return setErrorMessage("Please Enter Your Pin");
    }
    console.log(otp.join(""));
    console.log(data);
    setErrorMessage("");
    confirmPin(body, jwt)
      .then((res) => {
        console.log(res);
        createTransfer(data, jwt) //kalau sukses bakal jalan axios create transaction
          .then((res) => {
            console.log(res);
            setStatus("success"); //create transaction berhasil, status success
          })
          .catch((err) => {
            console.log(err);
            setStatus("failed"); //error pada create transaction, status failed
          });
      })
      .catch((err) => {
        console.log(err);
        setStatus("wrongpin"); //karena pin tidak terkonfirmasi
      });
  };
  return (
    <>
      {status === "transfer" && (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full flex justify-center flex-col gap-y-3 md:w-[70%] lg:w-[50%] xl:w-[40%]">
          <div className="text-left flex flex-col gap-y-3">
            <p className="text-sm lg:text-base font-semibold text-secondary border-b border-[#E8E8E8] pb-1">TRANSFER TO GALUH</p>
          </div>
          <div className="flex flex-col gap-y-3 py-8">
            <p className="text-xl lg:text-[30px] font-medium text-dark">Enter Your Pin 👋</p>
            <p className="text-sm lg:text-base lg:text-secondary">Enter Your Pin For Transaction</p>
          </div>
          <p className="text-danger text-center">{errorMessage}</p>

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
          <button type="button" className="p-3 bg-primary text-light rounded-md text-sm hover:bg-blue-800 focus:ring" onClick={handleClick}>
            Next
          </button>
          <p className="text-secondary self-center text-sm lg:text-base">
            Forgot Your Pin?{" "}
            <Link to="/resetpass" className="text-primary">
              Reset
            </Link>
          </p>
        </div>
      )}
      {status === "wrongpin" && (
        <div className="bg-white rounded-2xl shadow-md p-6 pb-8 w-full flex justify-center flex-col gap-y-3 md:w-[70%] lg:w-[50%] xl:w-[40%]">
          <div className="text-left flex flex-col gap-y-3">
            <p className="text-sm lg:text-base font-semibold text-secondary border-b border-[#E8E8E8] pb-1">{`TRANSFER TO ${body.name}`}</p>
          </div>
          <div className="flex flex-col gap-y-3 items-center">
            <div>
              <img src={getImageUrl("oh-no", "png")} alt="oh-no" />
            </div>
            <p className="text-[22px] font-semibold text-dark">
              Oops Transfer <span className="text-danger">Failed</span>
            </p>
            <p className="text-xl text-secondary">Your PIN is Wrong</p>
          </div>
          <button type="button" onClick={failed} className="p-3 bg-primary text-light rounded-md font-medium hover:bg-blue-800 focus:ring">
            Try Again
          </button>
          <Link to="/dashboard" className="p-3 bg-light border border-primary text-primary rounded-md font-medium hover:bg-slate-200 focus:ring flex justify-center items-center">
            Back To Dashboard
          </Link>
        </div>
      )}
      {status === "failed" && (
        <div className="bg-white rounded-2xl shadow-md p-6 pb-8 w-full flex justify-center flex-col gap-y-3 md:w-[70%] lg:w-[50%] xl:w-[40%]">
          <div className="text-left flex flex-col gap-y-3">
            <p className="text-sm lg:text-base font-semibold text-secondary border-b border-[#E8E8E8] pb-1">{`TRANSFER TO ${body.name}`}</p>
          </div>
          <div className="flex flex-col gap-y-3 items-center">
            <div>
              <img src={getImageUrl("oh-no", "png")} alt="oh-no" />
            </div>
            <p className="text-[22px] font-semibold text-dark">
              Oops Transfer <span className="text-danger">Failed</span>
            </p>
            <p className="text-sm text-secondary">Sorry Theres is an issue for your transfer, try again later !</p>
          </div>
          <button type="button" onClick={failed} className="p-3 bg-primary text-light rounded-md font-medium hover:bg-blue-800 focus:ring">
            Try Again
          </button>
          <Link to="/dashboard" className="p-3 bg-light border border-primary text-primary rounded-md font-medium hover:bg-slate-200 focus:ring flex justify-center items-center">
            Back To Dashboard
          </Link>
        </div>
      )}
      {status === "success" && (
        <div className="bg-white rounded-2xl shadow-md p-6 pb-8 w-full flex justify-center flex-col gap-y-3 md:w-[70%] lg:w-[50%] xl:w-[40%]">
          <div className="text-left flex flex-col gap-y-3">
            <p className="text-sm lg:text-base font-semibold text-secondary border-b border-[#E8E8E8] pb-1">{`TRANSFER TO ${body.name}`}</p>
          </div>
          <div className="flex flex-col gap-y-3 items-center">
            <div>
              <img src={getImageUrl("contact-us", "png")} alt="contact-us" />
            </div>
            <p className="text-[22px] font-semibold text-dark">
              Yeay Transfer <span className="text-success">Success</span>
            </p>
            <p className="text-sm text-secondary">Thank you for using this application for your financial</p>
          </div>
          <Link to="/dashboard" className="p-3 bg-primary text-light rounded-md font-medium hover:bg-blue-800 focus:ring">
            Done
          </Link>
          <Link to="/transfer" className="p-3 bg-light border border-primary text-primary rounded-md font-medium hover:bg-slate-200 focus:ring flex justify-center items-center">
            Transfer Again
          </Link>
        </div>
      )}
    </>
  );
}

export default EnterPin;
