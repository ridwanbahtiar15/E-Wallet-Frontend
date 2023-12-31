import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import getImageUrl from "../utils/imageGetter";
import DropdownMobile from "../components/DropdownMobile";
import Modal from "../components/Modal";
import Title from "../components/Title";
import EnterPin from "../components/modalTransfer/EnterPin";

import { getUser, createTransfer } from "../utils/https/transfer";
import { useSelector } from "react-redux";

function Transfer() {
  const [Message, setMessage] = useState({ msg: null, isError: null });
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    status: null,
  });

  const [openModalTransfer, setOpenModalTransfer] = useState({
    isOpen: false,
    status: null,
  });
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [user, setUser] = useState({});
  const jwt = useSelector((state) => state.user.userInfo.token);
  const id = useParams();
  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_HOST + "/user?id=" + id.id;
    getUser(url, jwt)
      .then((res) => {
        console.log(res.data.result[0]);
        setUser(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!e.target.nominal.value) {
      setOpenModal({ isOpen: true, status: "Login Error" });
      return setMessage({ msg: "Please Enter Your Transfer Amount" });
    }
    if (parseInt(e.target.nominal.value) < 10000) {
      setOpenModal({ isOpen: true, status: "Login Error" });
      return setMessage({ msg: "Minimum Transfer is Rp. 10.000" });
    }
    const body = {
      to: id.id,
      amount: parseInt(e.target.nominal.value),
      notes: e.target.notes.value,
      name: user.full_name,
    };
    setOpenModalTransfer({ isOpen: true, body: body });
  };

  return (
    <>
      <Title title={"Transfer Detail"}>
        <Navbar
          isClick={() => setIsDropdownShow(true)}
          isLogoutClick={() => {
            setOpenModal({ isOpen: true, status: "logout" });
            setMessage({ msg: "Are You Sure?" });
          }}
        ></Navbar>
        <main className="flex font-montserrat">
          <aside className="xl:w-1/5 border-r border-[#E8E8E8] py-6 px-11 hidden lg:block">
            <div className="flex flex-col gap-y-4">
              <Link to="/dashboard" className="flex items-center gap-x-2 py-2 px-4 hover:bg-primary rounded-md outline-none text-base font-normal text-secondary">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M4.92265 5.43523L6.4874 7M22 12.5C22 18.0229 17.5229 22.5 12 22.5C6.47715 22.5 2 18.0229 2 12.5H22ZM22 12.5H20H22ZM22 12.5C22 9.7418 20.8833 7.24435 19.0774 5.43523L22 12.5ZM2 12.5H4H2ZM2 12.5C2 9.74175 3.1167 7.24435 4.92265 5.43523L2 12.5ZM12 2.5V4.5V2.5ZM12 2.5C14.7646 2.5 17.2672 3.62189 19.0774 5.43523L12 2.5ZM12 2.5C9.2354 2.5 6.7328 3.62189 4.92265 5.43523L12 2.5ZM19.0774 5.43523L17.5126 7L19.0774 5.43523Z"
                      stroke="#4F5665"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 10.5V16.5" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M19.926 18.598C18.0976 20.9711 15.2273 22.5 11.9999 22.5C8.77248 22.5 5.90218 20.9711 4.07373 18.598C6.41033 17.2629 9.11603 16.5 11.9999 16.5C14.8837 16.5 17.5894 17.2629 19.926 18.598Z"
                      stroke="#4F5665"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="max-xl:hidden">Dashboard</p>
              </Link>
              <Link to="/transfer" className="flex items-center gap-x-2 py-2 px-4 bg-primary rounded-md outline-none text-sm font-normal text-light">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.5039 0.577294C18.1889 0.378019 18.931 0.570249 19.434 1.08253C19.937 1.5938 20.123 2.33957 19.918 3.02999L18.669 7.23188C18.55 7.63144 18.1339 7.85789 17.7359 7.73913C17.3389 7.61936 17.1129 7.19867 17.2319 6.80012L18.481 2.59722C18.551 2.36171 18.4259 2.2027 18.3689 2.14533C18.3119 2.08696 18.1519 1.96014 17.9209 2.02758L1.82937 6.70652C1.57336 6.781 1.51736 6.99537 1.50536 7.08394C1.49436 7.1725 1.49036 7.39392 1.71837 7.53482L5.10449 9.61816C5.4575 9.83555 5.5695 10.3005 5.35249 10.6568C5.21149 10.8883 4.96548 11.0171 4.71247 11.0171C4.57947 11.0171 4.44446 10.9819 4.32246 10.9064L0.936341 8.82206C0.265318 8.40942 -0.0866946 7.66667 0.018309 6.88265C0.123313 6.09762 0.658331 5.47464 1.41336 5.25523L17.5039 0.577294ZM16.0282 10.8492C16.1482 10.4487 16.5652 10.2212 16.9622 10.342C17.3592 10.4618 17.5852 10.8824 17.4662 11.282L15.1441 19.096C14.9191 19.8519 14.2971 20.3833 13.5201 20.4829C13.4331 20.495 13.3471 20.5 13.2611 20.5C12.583 20.5 11.963 20.1518 11.602 19.5539L7.50187 12.7645C7.32286 12.4666 7.36786 12.0841 7.61287 11.8386L13.4341 5.98007C13.7271 5.68518 14.2011 5.68518 14.4941 5.98007C14.7871 6.27496 14.7871 6.75302 14.4941 7.04791L9.08992 12.4877L12.8841 18.7699C13.0221 18.9984 13.2391 18.9964 13.3291 18.9863C13.4171 18.9742 13.6301 18.9199 13.7061 18.6643L16.0282 10.8492Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="max-xl:hidden">Transfer</p>
              </Link>
              <Link to="/history" className="flex items-center gap-x-2 py-2 px-4 hover:bg-primary rounded-md outline-none text-sm font-normal text-secondary">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M2.90918 3.86365V7.5H6.54556" stroke="#4F5665" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M2 12.5C2 18.0229 6.47715 22.5 12 22.5C17.5229 22.5 22 18.0229 22 12.5C22 6.97715 17.5229 2.5 12 2.5C8.299 2.5 5.06755 4.51056 3.33839 7.49905"
                      stroke="#4F5665"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12.0026 6.5L12.002 12.5044L16.2417 16.7441" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="max-xl:hidden">History</p>
              </Link>
              <Link to="/topup" className="flex items-center gap-x-2 py-2 px-4 hover:bg-primary rounded-md outline-none text-sm font-normal text-secondary">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <mask id="mask0_234_227" maskUnits="userSpaceOnUse" x="0" y="7" width="20" height="15">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.000488281 7.2941H20.0001V21.0381H0.000488281V7.2941Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_234_227)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5655 21.0381H4.43549C1.99049 21.0381 0.000488281 19.0491 0.000488281 16.6031V11.7281C0.000488281 9.2831 1.99049 7.2941 4.43549 7.2941H5.36849C5.78249 7.2941 6.11849 7.6301 6.11849 8.0441C6.11849 8.4581 5.78249 8.7941 5.36849 8.7941H4.43549C2.81649 8.7941 1.50049 10.1101 1.50049 11.7281V16.6031C1.50049 18.2221 2.81649 19.5381 4.43549 19.5381H15.5655C17.1835 19.5381 18.5005 18.2221 18.5005 16.6031V11.7191C18.5005 10.1061 17.1885 8.7941 15.5765 8.7941H14.6335C14.2195 8.7941 13.8835 8.4581 13.8835 8.0441C13.8835 7.6301 14.2195 7.2941 14.6335 7.2941H15.5765C18.0155 7.2941 20.0005 9.2791 20.0005 11.7191V16.6031C20.0005 19.0491 18.0105 21.0381 15.5655 21.0381Z"
                        fill="#4F5665"
                      />
                    </g>
                    <mask id="mask1_234_227" maskUnits="userSpaceOnUse" x="9" y="0" width="2" height="15">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.25 0.500092H10.75V14.041H9.25V0.500092Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_234_227)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 14.041C9.586 14.041 9.25 13.705 9.25 13.291V1.25C9.25 0.836 9.586 0.5 10 0.5C10.414 0.5 10.75 0.836 10.75 1.25V13.291C10.75 13.705 10.414 14.041 10 14.041Z"
                        fill="#4F5665"
                      />
                    </g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.0852 4.92868C6.8942 4.92868 6.7022 4.85568 6.5562 4.70968C6.2632 4.41768 6.2612 3.94368 6.5542 3.64968L9.4692 0.72168C9.7502 0.43868 10.2502 0.43868 10.5312 0.72168L13.4472 3.64968C13.7392 3.94368 13.7382 4.41768 13.4452 4.70968C13.1512 5.00168 12.6772 5.00168 12.3852 4.70768L10.0002 2.31368L7.6162 4.70768C7.4702 4.85568 7.2772 4.92868 7.0852 4.92868Z"
                      fill="#4F5665"
                    />
                  </svg>
                </div>
                <p className="max-xl:hidden">Top Up</p>
              </Link>
              <Link to="/profile" className="flex items-center gap-x-2 py-2 px-4 hover:bg-primary rounded-md outline-none text-sm font-normal text-secondary">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.59151 12.7068C11.2805 12.7068 14.4335 13.2658 14.4335 15.4988C14.4335 17.7318 11.3015 18.3068 7.59151 18.3068C3.90151 18.3068 0.749512 17.7528 0.749512 15.5188C0.749512 13.2848 3.88051 12.7068 7.59151 12.7068Z"
                      stroke="#4F5665"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.59157 9.51979C5.16957 9.51979 3.20557 7.55679 3.20557 5.13479C3.20557 2.71279 5.16957 0.749786 7.59157 0.749786C10.0126 0.749786 11.9766 2.71279 11.9766 5.13479C11.9856 7.54779 10.0356 9.51079 7.62257 9.51979H7.59157Z"
                      stroke="#4F5665"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M14.4829 8.38159C16.0839 8.15659 17.3169 6.78259 17.3199 5.11959C17.3199 3.48059 16.1249 2.12059 14.5579 1.86359" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5952 12.2322C18.1462 12.4632 19.2292 13.0072 19.2292 14.1272C19.2292 14.8982 18.7192 15.3982 17.8952 15.7112" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="max-xl:hidden">Profile</p>
              </Link>
              <button
                to="/logout"
                className="flex items-center gap-x-2 py-2 px-4 hover:bg-primary rounded-md outline-none text-sm font-normal"
                onClick={() => {
                  setOpenModal({ isOpen: true, status: "logout" });
                  setMessage({ msg: "Are You Sure?" });
                }}
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path
                      d="M12 7.125L12 4.5C12 2.84315 13.3431 1.5 15 1.5L18 1.5C19.6569 1.5 21 2.84315 21 4.5L21 18.5C21 20.1569 19.6569 21.5 18 21.5L15 21.5C13.3431 21.5 12 20.1569 12 18.5L12 16.5"
                      stroke="#D00000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path d="M4 14.5L1.44194 11.9419C1.19786 11.6979 1.19786 11.3021 1.44194 11.0581L4 8.5" stroke="#D00000" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M9 11.5L2 11.5" stroke="#D00000" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="max-xl:hidden text-danger">Logout</p>
              </button>
            </div>
          </aside>
          <div id="Header" className="lg:ml-[40px] mx-[21px] mt-[26px] lg:mr-[79px] mb-[98px] w-full">
            <div className="flex gap-[17px] items-center mb-[15px]">
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Send">
                  <path
                    id="Send_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5039 0.0772939C18.1889 -0.121981 18.931 0.0702488 19.434 0.582527C19.937 1.0938 20.123 1.83957 19.918 2.52999L18.669 6.73188C18.55 7.13144 18.1339 7.35789 17.7359 7.23913C17.3389 7.11936 17.1129 6.69867 17.2319 6.30012L18.481 2.09722C18.551 1.86171 18.4259 1.7027 18.3689 1.64533C18.3119 1.58696 18.1519 1.46014 17.9209 1.52758L1.82937 6.20652C1.57336 6.281 1.51736 6.49537 1.50536 6.58394C1.49436 6.6725 1.49036 6.89392 1.71837 7.03482L5.10449 9.11816C5.4575 9.33555 5.5695 9.80052 5.35249 10.1568C5.21149 10.3883 4.96548 10.5171 4.71247 10.5171C4.57947 10.5171 4.44446 10.4819 4.32246 10.4064L0.936341 8.32206C0.265318 7.90942 -0.0866946 7.16667 0.018309 6.38265C0.123313 5.59762 0.658331 4.97464 1.41336 4.75523L17.5039 0.0772939ZM16.0282 10.3492C16.1482 9.94867 16.5652 9.72122 16.9622 9.84199C17.3592 9.96175 17.5852 10.3824 17.4662 10.782L15.1441 18.596C14.9191 19.3519 14.2971 19.8833 13.5201 19.9829C13.4331 19.995 13.3471 20 13.2611 20C12.583 20 11.963 19.6518 11.602 19.0539L7.50187 12.2645C7.32286 11.9666 7.36786 11.5841 7.61287 11.3386L13.4341 5.48007C13.7271 5.18518 14.2011 5.18518 14.4941 5.48007C14.7871 5.77496 14.7871 6.25302 14.4941 6.54791L9.08992 11.9877L12.8841 18.2699C13.0221 18.4984 13.2391 18.4964 13.3291 18.4863C13.4171 18.4742 13.6301 18.4199 13.7061 18.1643L16.0282 10.3492Z"
                    fill="#2948FF"
                  />
                </g>
              </svg>
              <h1 className="text-[#0B132A] font-montserrat text-base font-semibold">Transfer Money</h1>
            </div>
            <div className="lg:flex hidden items-center gap-[13px]">
              <div className="px-2 py-1 flex gap-2">
                <div className="bg-[#2948FF] w-6 h-6 rounded-full flex justify-center items-center text-white text-xs">1</div>
                <h1 className="font-montserrat lg:text-base text-xs text-primary">Find People</h1>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width={85} height={1} viewBox="0 0 85 1" fill="none">
                <path d="M0 0.5H85" stroke="#2948FF" strokeDasharray="4 4" />
              </svg>
              <div className="px-2 py-1 flex gap-2">
                <div className="bg-primary w-6 h-6 rounded-full flex justify-center items-center text-white text-xs">2</div>

                <h1 className="font-montserrat text-base text-primary">Set Nominal</h1>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width={85} height={1} viewBox="0 0 85 1" fill="none">
                <path d="M0 0.5H85" stroke="#4F5665" strokeDasharray="4 4" />
              </svg>
              <div className="px-2 py-1 flex gap-2">
                <div className="bg-secondary w-6 h-6 rounded-full flex justify-center items-center text-white text-xs">3</div>

                <h1 className="font-montserrat text-base text-secondary">Finish</h1>
              </div>
            </div>
            <div className="border-[1px] mt-4 pt-[26px] lg:pl-[31px] px-5 pb-[43px] lg:pr-[27px]">
              <section className="">
                <div id="People_Information" className="lg:flex w-full justify-between mb-[26px]">
                  <div className="flex lg:block">
                    <h1 className="text-[#0B132A] font-montserrat text-base font-semibold mb-[1px]">People Information</h1>
                  </div>
                </div>
                <div id="People_Identity" className="text-sm mb-[26px] px-5 py-2.5 flex bg-[#e8e8e8] gap-5 rounded-md justify-between">
                  <div className="flex gap-x-4">
                    <div>
                      <img src={user && user.photo_profile ? user.photo_profile : getImageUrl("profile", "jpg")} alt="photo_profile" className="w-[84px] h-[84px] rounded-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">{user && user.full_name}</p>
                      <p className="text-[#4F5665]">{user && user.phone_number}</p>
                      <div className="flex px-2 py-1 bg-[#2948FF] text-white w-fit rounded-md gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <g clipPath="url(#clip0_44_327)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.58507 1.01936C8.64181 0.32688 7.3582 0.32688 6.41493 1.01936L5.48738 1.7003C5.33429 1.81269 5.1563 1.88642 4.96858 1.9152L3.8312 2.08958C2.67456 2.26691 1.76691 3.17456 1.58958 4.3312L1.4152 5.46858C1.38642 5.6563 1.31269 5.83429 1.2003 5.98738L0.51936 6.91493C-0.17312 7.8582 -0.17312 9.1418 0.51936 10.0851L1.2003 11.0126C1.31269 11.1657 1.38642 11.3437 1.4152 11.5314L1.58958 12.6688C1.76691 13.8254 2.67456 14.7331 3.8312 14.9104L4.96858 15.0848C5.1563 15.1136 5.33429 15.1873 5.48738 15.2997L6.41493 15.9806C7.3582 16.6731 8.6418 16.6731 9.58507 15.9806L10.5126 15.2997C10.6657 15.1873 10.8437 15.1136 11.0314 15.0848L12.1688 14.9104C13.3254 14.7331 14.2331 13.8254 14.4104 12.6688L14.5848 11.5314C14.6136 11.3437 14.6873 11.1657 14.7997 11.0126L15.4806 10.0851C16.1731 9.1418 16.1731 7.8582 15.4806 6.91493L14.7997 5.98738C14.6873 5.83429 14.6136 5.6563 14.5848 5.46858L14.4104 4.3312C14.2331 3.17456 13.3254 2.26691 12.1688 2.08958L11.0314 1.9152C10.8437 1.88642 10.6657 1.81269 10.5126 1.7003L9.58507 1.01936ZM7.3026 2.22851C7.71762 1.92383 8.28238 1.92383 8.6974 2.22851L9.62494 2.90945C9.9729 3.16489 10.3774 3.33246 10.8041 3.39787L11.9415 3.57225C12.4504 3.65027 12.8497 4.04962 12.9277 4.55852L13.1021 5.69589C13.1675 6.12256 13.3351 6.5271 13.5906 6.87506L14.2715 7.8026C14.5762 8.21762 14.5762 8.78238 14.2715 9.1974L13.5906 10.1249C13.3351 10.4729 13.1675 10.8774 13.1021 11.3041L12.9277 12.4415C12.8497 12.9504 12.4504 13.3497 11.9415 13.4277L10.8041 13.6021C10.3774 13.6675 9.9729 13.8351 9.62494 14.0906L8.6974 14.7715C8.28238 15.0762 7.71762 15.0762 7.3026 14.7715L6.37506 14.0906C6.0271 13.8351 5.62256 13.6675 5.19589 13.6021L4.05852 13.4277C3.54962 13.3497 3.15027 12.9504 3.07225 12.4415L2.89787 11.3041C2.83246 10.8774 2.66489 10.4729 2.40945 10.1249L1.72851 9.1974C1.42383 8.78238 1.42383 8.21762 1.72851 7.8026L2.40945 6.87505C2.66489 6.5271 2.83246 6.12256 2.89787 5.69589L3.07225 4.55852C3.15027 4.04962 3.54962 3.65027 4.05852 3.57225L5.19589 3.39787C5.62256 3.33246 6.0271 3.16489 6.37505 2.90945L7.3026 2.22851ZM11.2803 7.28033C11.5732 6.98744 11.5732 6.51256 11.2803 6.21967C10.9874 5.92678 10.5126 5.92678 10.2197 6.21967L7 9.43934L5.78033 8.21967C5.48744 7.92678 5.01256 7.92678 4.71967 8.21967C4.42678 8.51256 4.42678 8.98744 4.71967 9.28033L6.46967 11.0303C6.76256 11.3232 7.23744 11.3232 7.53033 11.0303L11.2803 7.28033Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_44_327">
                              <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Verified</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Star">
                        <path
                          id="Vector"
                          d="M12.9135 17.8812L17.6419 20.8769C18.2463 21.2598 18.9967 20.6903 18.8173 19.9847L17.4512 14.6108C17.4127 14.4611 17.4173 14.3036 17.4643 14.1564C17.5114 14.0092 17.5991 13.8783 17.7172 13.7787L21.9573 10.2496C22.5144 9.78588 22.2269 8.86126 21.5111 8.81481L15.9738 8.45544C15.8247 8.44479 15.6816 8.39198 15.5613 8.30317C15.441 8.21437 15.3484 8.09321 15.2943 7.95382L13.2292 2.75323C13.173 2.60528 13.0732 2.4779 12.943 2.38802C12.8127 2.29814 12.6582 2.25 12.5 2.25C12.3418 2.25 12.1873 2.29814 12.057 2.38802C11.9268 2.4779 11.827 2.60528 11.7708 2.75323L9.70568 7.95382C9.65157 8.09321 9.55897 8.21437 9.43868 8.30317C9.31838 8.39198 9.17533 8.44479 9.02618 8.45544L3.48894 8.81481C2.77315 8.86126 2.4856 9.78588 3.04272 10.2496L7.28278 13.7787C7.40095 13.8783 7.4886 14.0092 7.53566 14.1564C7.58272 14.3036 7.58727 14.4611 7.5488 14.6108L6.28188 19.5945C6.06667 20.4412 6.96715 21.1246 7.69243 20.6651L12.0865 17.8812C12.21 17.8025 12.3535 17.7607 12.5 17.7607C12.6465 17.7607 12.79 17.8025 12.9135 17.8812V17.8812Z"
                          stroke="#4F5665"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <form onSubmit={onSubmitHandler}>
                  <div id="amount_input" className="mb-[26px]">
                    <p className="text-[#0B132A] font-montserrat text-base font-semibold mb-[1px]">Amount</p>
                    <p className="text-sm mb-[15px] font-montserrat text-[#4F5665]">Type the amount you want to transfer and then press continue to the next steps.</p>
                    <div className="flex flex-col gap-y-3 relative">
                      <input type="number" id="nominal" placeholder="Enter Nominal Transfer" className="py-4 px-10 border rounded-lg border-[#DEDEDE] text-sm tracking-wide outline-none focus:border-primary placeholder:text-secondary" />
                      <div className="icon-email absolute top-[18px] left-4">
                        <img src={getImageUrl("u_money-bill", "svg")} alt="u_money-bill" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div id="notes_input" className="mb-[26px]">
                    <p className="text-[#0B132A] font-montserrat text-base font-semibold mb-[1px]">Notes</p>
                    <p className="text-sm mb-[15px] font-montserrat text-[#4F5665]">You can add some notes for this transfer such as payment coffee or something</p>
                    <textarea
                      name="notes"
                      id="notes"
                      cols="30"
                      rows="10"
                      className="w-full py-4 px-4 border rounded-lg border-[#DEDEDE] text-sm tracking-wide outline-none focus:border-primary placeholder:text-secondary"
                      placeholder="Enter Some Notes"
                    ></textarea>
                  </div>
                  <button type="submit" className="p-[12px] text-sm rounded-md text-light bg-primary hover:bg-blue-800 active:ring w-full">
                    Submit & Transfer
                  </button>
                </form>
              </section>
            </div>
          </div>
        </main>
        {isDropdownShown && <DropdownMobile isClick={() => setIsDropdownShow(false)} />}
        {openModal.isOpen && <Modal modal={openModal} closeModal={setOpenModal} message={Message} />}
        {openModalTransfer.isOpen && (
          <div className="bg-gray-200 justify-center items-center h-screen opacity-100 absolute z-10 font-montserrat" id="modalTransfer">
            <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center px-[10px] md:px-0">
              <EnterPin modalTransfer={openModalTransfer} />
            </div>
          </div>
        )}
      </Title>
    </>
  );
}

export default Transfer;
