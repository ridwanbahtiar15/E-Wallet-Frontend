/* eslint-disable no-unused-vars */
import React from "react";

function Home() {
  return (
    <>
      <main className="font-montserrat">
        <div className="flex flex-col px-10 pt-[75px] bg-[#2948FF] text-white h-auto gap-6 md:pt-[133px] lg:h-screen">
          <h1 className="text-[32px] md:font-medium md:text-5xl lg:text-6xl md:text-center">Experience the Future of Digital Payments with e-wallet</h1>
          <div className="flex flex-col-reverse md:flex-row lg:gap-[75px]">
            <div className="flex justify-center">
              <img className="lg:max-w-[422px]" src="/img/mobile-dashboard-1.webp" alt="mobile-dashboard-img" />
            </div>
            <div className="flex flex-col gap-6 md:self-center">
              <p className="text-base font-normal">Simplify Your Life with Secure and Convenient Mobile Payments</p>
              <div className="flex gap-[25px]">
                <button className="flex flex-1 items-center justify-center h-[50px] bg-white rounded-md gap-[10px] hover:bg-slate-200">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.78559 4.09508C4.58568 4.29499 4.51904 4.62818 4.51904 5.02801V19.755C4.51904 20.1548 4.65232 20.488 4.85223 20.6879L4.91887 20.7545L13.182 12.4914V12.3582L4.78559 4.09508Z"
                      fill="url(#paint0_linear_22_788)"
                    />
                    <path d="M15.8474 15.2902L13.1152 12.5581V12.3582L15.8474 9.62601L15.914 9.69264L19.1793 11.5585C20.1122 12.0916 20.1122 12.9579 19.1793 13.491L15.8474 15.2902Z" fill="url(#paint1_linear_22_788)" />
                    <path d="M15.9142 15.2236L13.1154 12.4248L4.78564 20.7545C5.11883 21.0877 5.5853 21.0877 6.18504 20.8211L15.9142 15.2236Z" fill="url(#paint2_linear_22_788)" />
                    <path d="M15.9142 9.62607L6.18504 4.09514C5.5853 3.76195 5.11883 3.82859 4.78564 4.16178L13.1154 12.4249L15.9142 9.62607Z" fill="url(#paint3_linear_22_788)" />
                    <path opacity="0.2" d="M15.8475 15.1569L6.18504 20.6212C5.65194 20.9544 5.18547 20.8878 4.85228 20.6212L4.78564 20.6879L4.85228 20.7545C5.18547 21.0211 5.65194 21.0877 6.18504 20.7545L15.8475 15.1569Z" fill="black" />
                    <path
                      opacity="0.2"
                      d="M4.78559 20.6212C4.58568 20.4213 4.51904 20.0881 4.51904 19.6883V19.7549C4.51904 20.1548 4.65232 20.488 4.85223 20.6879V20.6212H4.78559ZM19.1794 13.2911L15.8475 15.1569L15.9141 15.2236L19.1794 13.3577C19.6458 13.0912 19.8457 12.758 19.8457 12.4248C19.8457 12.758 19.5792 13.0245 19.1794 13.2911Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M6.18499 4.16174L19.1794 11.5585C19.5792 11.8251 19.8457 12.0916 19.8457 12.4248C19.8457 12.0916 19.6458 11.7585 19.1794 11.4919L6.18499 4.0951C5.25206 3.562 4.51904 3.96183 4.51904 5.02803V5.09467C4.51904 4.0951 5.25206 3.62864 6.18499 4.16174Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_22_788" x1="12.3823" y1="4.90139" x2="1.19848" y2="16.0845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00A0FF" />
                        <stop offset="0.007" stop-color="#00A1FF" />
                        <stop offset="0.26" stop-color="#00BEFF" />
                        <stop offset="0.512" stop-color="#00D2FF" />
                        <stop offset="0.76" stop-color="#00DFFF" />
                        <stop offset="1" stop-color="#00E3FF" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_22_788" x1="20.4014" y1="12.4255" x2="4.27707" y2="12.4255" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE000" />
                        <stop offset="0.409" stop-color="#FFBD00" />
                        <stop offset="0.775" stop-color="#FFA500" />
                        <stop offset="1" stop-color="#FF9C00" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_22_788" x1="14.3995" y1="13.9548" x2="-0.765949" y2="29.1202" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF3A44" />
                        <stop offset="1" stop-color="#C31162" />
                      </linearGradient>
                      <linearGradient id="paint3_linear_22_788" x1="2.71787" y1="-0.785412" x2="9.49027" y2="5.98699" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#32A071" />
                        <stop offset="0.069" stop-color="#2DA771" />
                        <stop offset="0.476" stop-color="#15CF74" />
                        <stop offset="0.801" stop-color="#06E775" />
                        <stop offset="1" stop-color="#00F076" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-[#2948FF] text-sm">Play Store</p>
                </button>
                <button className="flex flex-1 h-[50px] items-center justify-center border-white border gap-[10px] rounded-md hover:bg-slate-200/25 ">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.778 12.7964C16.7602 10.6721 18.5166 9.63956 18.5938 9.59209C17.5969 8.14422 16.0541 7.94246 15.5141 7.92466C14.2205 7.78818 12.9625 8.70201 12.3038 8.70201C11.6333 8.70201 10.6127 7.94246 9.52082 7.96027C8.11448 7.984 6.79122 8.79695 6.07322 10.0668C4.5838 12.6481 5.69345 16.4458 7.12352 18.5345C7.84152 19.5551 8.67227 20.7004 9.77005 20.6588C10.8382 20.6173 11.2417 19.9764 12.5293 19.9764C13.811 19.9764 14.1849 20.6588 15.3005 20.6351C16.4516 20.6173 17.1696 19.6085 17.8639 18.576C18.6887 17.4071 19.021 16.2499 19.0329 16.1906C19.0032 16.1787 16.8017 15.3361 16.778 12.7964Z"
                      fill="white"
                    />
                    <path
                      d="M14.6718 6.554C15.2474 5.83599 15.6391 4.8569 15.5323 3.86C14.7015 3.8956 13.6571 4.43559 13.0578 5.14173C12.5297 5.76479 12.055 6.77949 12.1737 7.73485C13.1112 7.80605 14.0725 7.26013 14.6718 6.554Z"
                      fill="white"
                    />
                  </svg>
                  <p>Apps Store</p>
                </button>
              </div>
              <div className="flex gap-3">
                <h1 className="text-[32px] font-medium">4.6 M</h1>
                <img src="/img/user.webp" alt="user-profile-img" />
              </div>
              <div>
                <p className="text-base font-normal">Around the world, we already have over 4.6 happy user</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-10">
          <div className="flex flex-col gap-7 px-10 justify-items-center lg:flex-row lg:justify-between ">
            <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[9px]">
              <div className="flex justify-center">
                <svg className="self-center" width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29.5" cy="29" r="29" fill="#2948FF" />
                  <path
                    d="M41.682 30H37.682C37.1515 30 36.6428 30.2107 36.2678 30.5858C35.8927 30.9609 35.682 31.4696 35.682 32V37C35.682 37.5304 35.8927 38.0391 36.2678 38.4142C36.6428 38.7893 37.1515 39 37.682 39H39.682C40.2124 39 40.7211 38.7893 41.0962 38.4142C41.4713 38.0391 41.682 37.5304 41.682 37V30ZM41.682 30C41.682 28.4165 41.3686 26.8486 40.7598 25.3868C40.151 23.925 39.259 22.5981 38.135 21.4826C37.0111 20.3672 35.6775 19.4852 34.2111 18.8875C32.7447 18.2899 31.1745 17.9883 29.591 18.0003C28.0075 17.9883 26.4373 18.2899 24.9709 18.8875C23.5045 19.4852 22.1709 20.3672 21.0469 21.4826C19.923 22.5981 19.0309 23.925 18.4222 25.3868C17.8134 26.8486 17.5 28.4165 17.5 30V37C17.5 37.5304 17.7107 38.0391 18.0858 38.4142C18.4609 38.7893 18.9696 39 19.5 39H21.5C22.0304 39 22.5391 38.7893 22.9142 38.4142C23.2893 38.0391 23.5 37.5304 23.5 37V32C23.5 31.4696 23.2893 30.9609 22.9142 30.5858C22.5391 30.2107 22.0304 30 21.5 30H17.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[15px] lg:gap-[9px]">
                <p className="text-center font-bold text-lg lg:text-left">24/7 Support</p>
                <p className="text-center text-base font-normal lg:text-left">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[9px]">
              <div className="flex justify-center">
                <svg className="self-center" width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29.5" cy="29" r="29" fill="#2948FF" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.3205 15.801L39.1772 18.8236C40.1678 19.1622 40.8333 20.0742 40.8333 21.0955V29.95C40.8333 32.6339 39.8358 35.2325 38.026 37.2605C37.1973 38.1898 36.1339 38.9884 34.7756 39.7031L29.9884 42.2163C29.8389 42.2937 29.6742 42.3337 29.5082 42.3337C29.3435 42.3337 29.1789 42.2937 29.0293 42.2163L24.2326 39.7017C22.8715 38.9857 21.8067 38.1871 20.9794 37.2618C19.1669 35.2312 18.1666 32.6312 18.1666 29.9446C18.1666 29.4033 18.6194 28.9633 19.1765 28.9633C19.7335 28.9633 20.1863 29.4033 20.1863 29.9446C20.1863 32.1606 21.0096 34.3019 22.5038 35.9765C23.1692 36.7218 24.0487 37.3751 25.1916 37.9751L29.5082 40.2377L33.8151 37.9764C34.9553 37.3778 35.8348 36.7245 36.5017 35.9765C37.9931 34.3032 38.815 32.1646 38.815 29.95V21.0955C38.815 20.9062 38.6915 20.7382 38.509 20.6755L29.6523 17.6529C29.5548 17.6196 29.4464 17.6196 29.3477 17.6529L20.4923 20.6755C20.3098 20.7382 20.1863 20.9062 20.1863 21.0955V23.6288C20.1863 24.1714 19.7335 24.6114 19.1765 24.6114C18.6194 24.6114 18.1666 24.1714 18.1666 23.6288V21.0955C18.1666 20.0742 18.8335 19.1622 19.8241 18.8236L28.6795 15.801C29.2091 15.6223 29.7922 15.6223 30.3205 15.801ZM28.5483 32.0903C28.2794 32.0903 28.0242 31.9863 27.8348 31.8023L25.2882 29.3277C24.8945 28.9437 24.8945 28.3251 25.2882 27.9411C25.6834 27.5571 26.3214 27.5571 26.7152 27.9411L28.5483 29.721L33.0789 25.3198C33.4727 24.9372 34.112 24.9372 34.5058 25.3198C34.8996 25.7025 34.8996 26.3238 34.5058 26.7064L29.2618 31.8023C29.0724 31.9863 28.8158 32.0903 28.5483 32.0903Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[15px] lg:gap-[9px]">
                <p className="text-center font-bold text-lg lg:text-left">Data Privacy</p>
                <p className="text-center text-base font-normal lg:text-left">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[9px]">
              <div className="flex justify-center">
                <svg className="self-center" width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29.5" cy="29" r="29" fill="#2948FF" />
                  <path d="M29.6629 33.581L29.6629 17.5264" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M33.5509 29.6777L29.6629 33.5817L25.7749 29.6777" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M35.84 23.8369H37.084C39.7973 23.8369 41.996 26.0356 41.996 28.7502V35.2622C41.996 37.9689 39.8026 40.1622 37.096 40.1622H22.2426C19.5293 40.1622 17.3293 37.9622 17.3293 35.2489L17.3293 28.7356C17.3293 26.0302 19.524 23.8369 22.2293 23.8369H23.4853"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[15px] lg:gap-[9px]">
                <p className="text-center font-bold text-lg lg:text-left">Easy Download</p>
                <p className="text-center text-base font-normal lg:text-left">Zwallet is 100% totally free to use it&apos;s now available on Google Play Store and App Store.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col px-10 pt-7 gap-5 lg:w-[480px] lg:self-end">
              <p className="text-[#2948FF] font-bold text-lg text-center lg:text-left ">WELCOME TO E-WALLET</p>
              <p className="font-medium text-[32px] text-center lg:text-left">Your All-in-One Digital Payment Solution</p>
              <p className="font-medium text-base text-center lg:text-left">
                Say goodbye to cash and hello to the future of payments! With e-wallet, you have the power of secure, fast, and convenient digital transactions right at your fingertips. Whether you&apos;re shopping, dining out, or sending
                money to loved ones, we&apos;ve got you covered.
              </p>
              <button className="h-[50px] justify-center bg-[#2948FF] text-white py-[10px] rounded-md lg:max-w-[143px] hover:bg-blue-700">Get Started</button>
            </div>
            <div className="relative mt-[300px] bottom-0 px-10 flex justify-center lg:pt-1 lg:flex-row lg:w-[680px]">
              <img className="relative bottom-0" src="/img/Group-1308.webp" alt="background-img" />
              <img className="absolute bottom-0 " src="/img/mobile-dashboard-2.webp" alt="mobile-dashboard-img-2" />
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F8] px-10 py-14 flex flex-col items-center lg:flex-row">
          <div className="lg:flex-1">
            <img src="/img/online-payment-security-concept-3d-phone-bill 1.webp" alt="3d-phone-bill-img" />
          </div>
          <div className="lg:flex-1">
            <div className="flex flex-col gap-[25px]">
              <p className="font-medium text-[32px] ">All The Great Zwallet Features.</p>
              <p>We have some great features from the application and it&apos;s totally free to use by all users around the world.</p>
              <ul className="flex flex-col gap-3 text-[#00A700] text-lg font-bold">
                <li className="flex gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#00A700" />
                    <g clip-path="url(#clip0_27_88)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0001 18.6207C15.6566 18.6207 18.6208 15.6565 18.6208 12C18.6208 8.34345 15.6566 5.37927 12.0001 5.37927C8.34358 5.37927 5.37939 8.34345 5.37939 12C5.37939 15.6565 8.34358 18.6207 12.0001 18.6207ZM15.1286 10.5768C15.371 10.3344 15.371 9.94139 15.1286 9.699C14.8862 9.45661 14.4933 9.45661 14.2509 9.699L10.9656 12.9842L9.74932 11.768C9.50693 11.5256 9.11393 11.5256 8.87154 11.768C8.62914 12.0104 8.62914 12.4034 8.87154 12.6458L10.5267 14.3009C10.7691 14.5433 11.1621 14.5433 11.4045 14.3009L15.1286 10.5768Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_88">
                        <rect width="13.2414" height="13.2414" fill="white" transform="translate(5.37939 5.37927)" />
                      </clipPath>
                    </defs>
                  </svg>
                  Small Fee
                </li>
                <li className="flex gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#00A700" />
                    <g clip-path="url(#clip0_27_88)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0001 18.6207C15.6566 18.6207 18.6208 15.6565 18.6208 12C18.6208 8.34345 15.6566 5.37927 12.0001 5.37927C8.34358 5.37927 5.37939 8.34345 5.37939 12C5.37939 15.6565 8.34358 18.6207 12.0001 18.6207ZM15.1286 10.5768C15.371 10.3344 15.371 9.94139 15.1286 9.699C14.8862 9.45661 14.4933 9.45661 14.2509 9.699L10.9656 12.9842L9.74932 11.768C9.50693 11.5256 9.11393 11.5256 8.87154 11.768C8.62914 12.0104 8.62914 12.4034 8.87154 12.6458L10.5267 14.3009C10.7691 14.5433 11.1621 14.5433 11.4045 14.3009L15.1286 10.5768Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_88">
                        <rect width="13.2414" height="13.2414" fill="white" transform="translate(5.37939 5.37927)" />
                      </clipPath>
                    </defs>
                  </svg>
                  Data Secured
                </li>
                <li className="flex gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#00A700" />
                    <g clip-path="url(#clip0_27_88)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0001 18.6207C15.6566 18.6207 18.6208 15.6565 18.6208 12C18.6208 8.34345 15.6566 5.37927 12.0001 5.37927C8.34358 5.37927 5.37939 8.34345 5.37939 12C5.37939 15.6565 8.34358 18.6207 12.0001 18.6207ZM15.1286 10.5768C15.371 10.3344 15.371 9.94139 15.1286 9.699C14.8862 9.45661 14.4933 9.45661 14.2509 9.699L10.9656 12.9842L9.74932 11.768C9.50693 11.5256 9.11393 11.5256 8.87154 11.768C8.62914 12.0104 8.62914 12.4034 8.87154 12.6458L10.5267 14.3009C10.7691 14.5433 11.1621 14.5433 11.4045 14.3009L15.1286 10.5768Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_88">
                        <rect width="13.2414" height="13.2414" fill="white" transform="translate(5.37939 5.37927)" />
                      </clipPath>
                    </defs>
                  </svg>
                  User Friendly
                </li>
              </ul>
              <button className="h-[50px] bg-[#2948FF] text-white text-sm py-[10px] rounded-md lg:max-w-[143px] hover:bg-blue-700">Get Started</button>
            </div>
          </div>
        </div>
        <div className="px-10 py-14 flex flex-col items-center gap-[19px] lg:flex-row lg:justify-center">
          <div className="flex flex-col lg:w-[330px]">
            <p className="font-medium text-[32px] text-center lg:text-left">100+ Trusted Partners</p>
            <p className="font-normal text-base text-center lg:text-left">We have reached global level and have 100+ brand partners around the globe.</p>
          </div>
          <div className="md:flex">
            <img src="/img/microsoft-logo.webp" alt="microsoft-logo" />
            <img src="/img/dropbox-logo.webp" alt="dropbox-logo" />
            <img src="/img/h&m-logo.webp" alt="h&m-logo" />
            <img src="/img/airbnb-logo.webp" alt="airbnb-logo" />
            <img src="/img/canon-logo.webp" alt="canon-logo" />
            <img src="/img/dell-logo.webp" alt="dell-logo" />
          </div>
        </div>
        <div className="px-10 py-14 flex flex-col items-center gap-[19px]">
          <p className="font-medium text-[32px] text-center">What Our Users Are Saying</p>
          <p className="font-normal text-base text-center">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
          <div className="flex flex-col items-center mt-10 text-white gap-[19px] bg-[#2948FF] rounded-2xl p-14 lg:w-[707px]">
            <img src="/img/profile.webp" alt="profile-img" />
            <p className="font-bold text-lg">James Bond</p>
            <div className="flex gap-[15px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.1564 5.13165L9.18919 4.55508L7.41575 0.959771C7.36731 0.861334 7.28763 0.781646 7.18919 0.733209C6.94231 0.611334 6.64231 0.712896 6.51888 0.959771L4.74544 4.55508L0.778252 5.13165C0.668877 5.14727 0.568877 5.19883 0.492314 5.27696C0.399755 5.37209 0.34875 5.50008 0.350508 5.63281C0.352266 5.76553 0.406642 5.89212 0.501689 5.98477L3.372 8.78321L2.69388 12.7348C2.67797 12.8267 2.68815 12.9212 2.72324 13.0077C2.75833 13.0941 2.81694 13.169 2.89242 13.2238C2.9679 13.2786 3.05723 13.3112 3.15028 13.3178C3.24333 13.3245 3.33638 13.3049 3.41888 13.2613L6.96731 11.3957L10.5158 13.2613C10.6126 13.3129 10.7251 13.3301 10.8329 13.3113C11.1048 13.2645 11.2876 13.0066 11.2408 12.7348L10.5626 8.78321L13.4329 5.98477C13.5111 5.90821 13.5626 5.80821 13.5783 5.69883C13.6204 5.4254 13.4298 5.17227 13.1564 5.13165Z"
                  fill="#FF8906"
                />
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.1564 5.13165L9.18919 4.55508L7.41575 0.959771C7.36731 0.861334 7.28763 0.781646 7.18919 0.733209C6.94231 0.611334 6.64231 0.712896 6.51888 0.959771L4.74544 4.55508L0.778252 5.13165C0.668877 5.14727 0.568877 5.19883 0.492314 5.27696C0.399755 5.37209 0.34875 5.50008 0.350508 5.63281C0.352266 5.76553 0.406642 5.89212 0.501689 5.98477L3.372 8.78321L2.69388 12.7348C2.67797 12.8267 2.68815 12.9212 2.72324 13.0077C2.75833 13.0941 2.81694 13.169 2.89242 13.2238C2.9679 13.2786 3.05723 13.3112 3.15028 13.3178C3.24333 13.3245 3.33638 13.3049 3.41888 13.2613L6.96731 11.3957L10.5158 13.2613C10.6126 13.3129 10.7251 13.3301 10.8329 13.3113C11.1048 13.2645 11.2876 13.0066 11.2408 12.7348L10.5626 8.78321L13.4329 5.98477C13.5111 5.90821 13.5626 5.80821 13.5783 5.69883C13.6204 5.4254 13.4298 5.17227 13.1564 5.13165Z"
                  fill="#FF8906"
                />
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.1564 5.13165L9.18919 4.55508L7.41575 0.959771C7.36731 0.861334 7.28763 0.781646 7.18919 0.733209C6.94231 0.611334 6.64231 0.712896 6.51888 0.959771L4.74544 4.55508L0.778252 5.13165C0.668877 5.14727 0.568877 5.19883 0.492314 5.27696C0.399755 5.37209 0.34875 5.50008 0.350508 5.63281C0.352266 5.76553 0.406642 5.89212 0.501689 5.98477L3.372 8.78321L2.69388 12.7348C2.67797 12.8267 2.68815 12.9212 2.72324 13.0077C2.75833 13.0941 2.81694 13.169 2.89242 13.2238C2.9679 13.2786 3.05723 13.3112 3.15028 13.3178C3.24333 13.3245 3.33638 13.3049 3.41888 13.2613L6.96731 11.3957L10.5158 13.2613C10.6126 13.3129 10.7251 13.3301 10.8329 13.3113C11.1048 13.2645 11.2876 13.0066 11.2408 12.7348L10.5626 8.78321L13.4329 5.98477C13.5111 5.90821 13.5626 5.80821 13.5783 5.69883C13.6204 5.4254 13.4298 5.17227 13.1564 5.13165Z"
                  fill="#FF8906"
                />
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.1564 5.13165L9.18919 4.55508L7.41575 0.959771C7.36731 0.861334 7.28763 0.781646 7.18919 0.733209C6.94231 0.611334 6.64231 0.712896 6.51888 0.959771L4.74544 4.55508L0.778252 5.13165C0.668877 5.14727 0.568877 5.19883 0.492314 5.27696C0.399755 5.37209 0.34875 5.50008 0.350508 5.63281C0.352266 5.76553 0.406642 5.89212 0.501689 5.98477L3.372 8.78321L2.69388 12.7348C2.67797 12.8267 2.68815 12.9212 2.72324 13.0077C2.75833 13.0941 2.81694 13.169 2.89242 13.2238C2.9679 13.2786 3.05723 13.3112 3.15028 13.3178C3.24333 13.3245 3.33638 13.3049 3.41888 13.2613L6.96731 11.3957L10.5158 13.2613C10.6126 13.3129 10.7251 13.3301 10.8329 13.3113C11.1048 13.2645 11.2876 13.0066 11.2408 12.7348L10.5626 8.78321L13.4329 5.98477C13.5111 5.90821 13.5626 5.80821 13.5783 5.69883C13.6204 5.4254 13.4298 5.17227 13.1564 5.13165Z"
                  fill="#FF8906"
                />
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.1564 5.13165L9.18919 4.55508L7.41575 0.959771C7.36731 0.861334 7.28763 0.781646 7.18919 0.733209C6.94231 0.611334 6.64231 0.712896 6.51888 0.959771L4.74544 4.55508L0.778252 5.13165C0.668877 5.14727 0.568877 5.19883 0.492314 5.27696C0.399755 5.37209 0.34875 5.50008 0.350508 5.63281C0.352266 5.76553 0.406642 5.89212 0.501689 5.98477L3.372 8.78321L2.69388 12.7348C2.67797 12.8267 2.68815 12.9212 2.72324 13.0077C2.75833 13.0941 2.81694 13.169 2.89242 13.2238C2.9679 13.2786 3.05723 13.3112 3.15028 13.3178C3.24333 13.3245 3.33638 13.3049 3.41888 13.2613L6.96731 11.3957L10.5158 13.2613C10.6126 13.3129 10.7251 13.3301 10.8329 13.3113C11.1048 13.2645 11.2876 13.0066 11.2408 12.7348L10.5626 8.78321L13.4329 5.98477C13.5111 5.90821 13.5626 5.80821 13.5783 5.69883C13.6204 5.4254 13.4298 5.17227 13.1564 5.13165Z"
                  fill="#FF8906"
                />
              </svg>
              <p>5.0</p>
            </div>
            <p className="font-bold text-5xl">&ldquo;</p>
            <p className="font-normal text-base text-center">
              I&apos;ve been using the e-wallet for over two years now, and I&apos;m very satisfied with the ease of use. This has completely changed the way I shop and conduct financial transactions.
            </p>
          </div>
          <svg className="mt-4" width="76" height="9" viewBox="0 0 76 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="38" cy="4" r="4" fill="#E8E8E8" />
            <circle cx="55" cy="4" r="4" fill="#E8E8E8" />
            <circle cx="72" cy="4" r="4" fill="#E8E8E8" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.25441 8.44432C4.24369 8.4444 4.23296 8.44444 4.22222 8.44444C4.21148 8.44444 4.20075 8.4444 4.19003 8.44432H3.91085V8.43314C1.72437 8.27376 0 6.44937 0 4.22222C0 1.99508 1.72437 0.170685 3.91085 0.0113071V0H4.22222H20.877V0.00638229C20.9545 0.0021459 21.0325 0 21.1111 0C23.443 0 25.3333 1.89035 25.3333 4.22222C25.3333 6.55409 23.443 8.44444 21.1111 8.44444C21.0325 8.44444 20.9545 8.4423 20.877 8.43806V8.44432H4.25441Z"
              fill="#2948FF"
            />
          </svg>
        </div>
        <div className="flex flex-col bg-[#F8F8F8] px-10 py-14 gap-[19px] lg:flex-row-reverse lg:items-center ">
          <div className="flex flex-col gap-[25px]lg:max-w-[580px]">
            <p className="font-medium text-4xl">Download The App</p>
            <p className="font-normal text-base">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
            <div className="flex gap-[25px]">
              <button className="flex flex-1 items-center justify-center h-[50px] border bg-[#2948FF] rounded-md gap-[10px] hover:bg-blue-700">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.78559 4.09508C4.58568 4.29499 4.51904 4.62818 4.51904 5.02801V19.755C4.51904 20.1548 4.65232 20.488 4.85223 20.6879L4.91887 20.7545L13.182 12.4914V12.3582L4.78559 4.09508Z" fill="url(#paint0_linear_22_788)" />
                  <path d="M15.8474 15.2902L13.1152 12.5581V12.3582L15.8474 9.62601L15.914 9.69264L19.1793 11.5585C20.1122 12.0916 20.1122 12.9579 19.1793 13.491L15.8474 15.2902Z" fill="url(#paint1_linear_22_788)" />
                  <path d="M15.9142 15.2236L13.1154 12.4248L4.78564 20.7545C5.11883 21.0877 5.5853 21.0877 6.18504 20.8211L15.9142 15.2236Z" fill="url(#paint2_linear_22_788)" />
                  <path d="M15.9142 9.62607L6.18504 4.09514C5.5853 3.76195 5.11883 3.82859 4.78564 4.16178L13.1154 12.4249L15.9142 9.62607Z" fill="url(#paint3_linear_22_788)" />
                  <path opacity="0.2" d="M15.8475 15.1569L6.18504 20.6212C5.65194 20.9544 5.18547 20.8878 4.85228 20.6212L4.78564 20.6879L4.85228 20.7545C5.18547 21.0211 5.65194 21.0877 6.18504 20.7545L15.8475 15.1569Z" fill="black" />
                  <path
                    opacity="0.2"
                    d="M4.78559 20.6212C4.58568 20.4213 4.51904 20.0881 4.51904 19.6883V19.7549C4.51904 20.1548 4.65232 20.488 4.85223 20.6879V20.6212H4.78559ZM19.1794 13.2911L15.8475 15.1569L15.9141 15.2236L19.1794 13.3577C19.6458 13.0912 19.8457 12.758 19.8457 12.4248C19.8457 12.758 19.5792 13.0245 19.1794 13.2911Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M6.18499 4.16174L19.1794 11.5585C19.5792 11.8251 19.8457 12.0916 19.8457 12.4248C19.8457 12.0916 19.6458 11.7585 19.1794 11.4919L6.18499 4.0951C5.25206 3.562 4.51904 3.96183 4.51904 5.02803V5.09467C4.51904 4.0951 5.25206 3.62864 6.18499 4.16174Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_22_788" x1="12.3823" y1="4.90139" x2="1.19848" y2="16.0845" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00A0FF" />
                      <stop offset="0.007" stop-color="#00A1FF" />
                      <stop offset="0.26" stop-color="#00BEFF" />
                      <stop offset="0.512" stop-color="#00D2FF" />
                      <stop offset="0.76" stop-color="#00DFFF" />
                      <stop offset="1" stop-color="#00E3FF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_22_788" x1="20.4014" y1="12.4255" x2="4.27707" y2="12.4255" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFE000" />
                      <stop offset="0.409" stop-color="#FFBD00" />
                      <stop offset="0.775" stop-color="#FFA500" />
                      <stop offset="1" stop-color="#FF9C00" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_22_788" x1="14.3995" y1="13.9548" x2="-0.765949" y2="29.1202" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF3A44" />
                      <stop offset="1" stop-color="#C31162" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_22_788" x1="2.71787" y1="-0.785412" x2="9.49027" y2="5.98699" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#32A071" />
                      <stop offset="0.069" stop-color="#2DA771" />
                      <stop offset="0.476" stop-color="#15CF74" />
                      <stop offset="0.801" stop-color="#06E775" />
                      <stop offset="1" stop-color="#00F076" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-white text-sm">Play Store</p>
              </button>
              <button className="flex flex-1 items-center justify-center text-[#2948FF] h-[50px] border gap-[10px] rounded-md border-[#2948FF] hover:bg-slate-200">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.5787 9.29677C11.5609 7.17243 13.3173 6.13993 13.3944 6.09246C12.3975 4.64458 10.8547 4.44283 10.3147 4.42503C9.02114 4.28855 7.76315 5.20237 7.10449 5.20237C6.43395 5.20237 5.41332 4.44283 4.32148 4.46063C2.91514 4.48437 1.59188 5.29731 0.873876 6.56717C-0.615536 9.14842 0.494106 12.9461 1.92418 15.0349C2.64218 16.0555 3.47293 17.2007 4.5707 17.1592C5.63881 17.1177 6.04232 16.4768 7.32998 16.4768C8.6117 16.4768 8.98554 17.1592 10.1011 17.1355C11.2523 17.1177 11.9703 16.1089 12.6646 15.0764C13.4894 13.9074 13.8217 12.7503 13.8335 12.691C13.8039 12.6791 11.6024 11.8365 11.5787 9.29677Z"
                    fill="#2948FF"
                  />
                  <path
                    d="M9.47225 3.05435C10.0478 2.33635 10.4395 1.35725 10.3327 0.360352C9.50192 0.395955 8.45755 0.935941 7.85822 1.64208C7.33011 2.26514 6.85539 3.27984 6.97407 4.2352C7.91163 4.30641 8.87292 3.76048 9.47225 3.05435Z"
                    fill="#2948FF"
                  />
                </svg>
                <p>Apps Store</p>
              </button>
            </div>
          </div>
          <img className="md:max-w-[422px] self-center" src="/img/mobile-dashboard-3.webp" alt="mobile-dashboard-3-img" />
        </div>
      </main>
    </>
  );
}

export default Home;
