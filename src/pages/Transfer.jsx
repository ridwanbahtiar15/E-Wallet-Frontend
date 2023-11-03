import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Navbar from '../components/Navbar'
import Modal from '../components/Modal'

function Transfer() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    })

  return (
    <>

        <Navbar/>

        <section className='flex'>

            {/* Bagian Kiri */}
            <div className='w-[20%] py-[24px] px-[42px] border-r-[1px]'>
                
                <button className='mb-4 flex items-center gap-3 w-full hover:bg-[#2948FF] px-2 py-[6px] rounded-md text-[#4F5665] hover:text-white'>

                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                        <path d="M4.92265 5.43523L6.4874 7M22 12.5C22 18.0229 17.5229 22.5 12 22.5C6.47715 22.5 2 18.0229 2 12.5H22ZM22 12.5H20H22ZM22 12.5C22 9.7418 20.8833 7.24435 19.0774 5.43523L22 12.5ZM2 12.5H4H2ZM2 12.5C2 9.74175 3.1167 7.24435 4.92265 5.43523L2 12.5ZM12 2.5V4.5V2.5ZM12 2.5C14.7646 2.5 17.2672 3.62189 19.0774 5.43523L12 2.5ZM12 2.5C9.2354 2.5 6.7328 3.62189 4.92265 5.43523L12 2.5ZM19.0774 5.43523L17.5126 7L19.0774 5.43523Z" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 10.5V16.5" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.9265 18.598C18.0981 20.9711 15.2278 22.5 12.0004 22.5C8.77296 22.5 5.90266 20.9711 4.07422 18.598C6.41081 17.2629 9.11651 16.5 12.0004 16.5C14.8842 16.5 17.5899 17.2629 19.9265 18.598Z" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <h1 className='font-montserrat text-sm'>Dashboard</h1>

                </button>

                <button className='mb-4 flex items-center gap-5 w-full px-2 py-2 rounded-md text-white bg-[#2948FF] hover:opacity-80'>

                    <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Send">
                            <path id="Send_2" fillRule="evenodd" clipRule="evenodd" d="M17.5039 0.577294C18.1889 0.378019 18.931 0.570249 19.434 1.08253C19.937 1.5938 20.123 2.33957 19.918 3.02999L18.669 7.23188C18.55 7.63144 18.1339 7.85789 17.7359 7.73913C17.3389 7.61936 17.1129 7.19867 17.2319 6.80012L18.481 2.59722C18.551 2.36171 18.4259 2.2027 18.3689 2.14533C18.3119 2.08696 18.1519 1.96014 17.9209 2.02758L1.82937 6.70652C1.57336 6.781 1.51736 6.99537 1.50536 7.08394C1.49436 7.1725 1.49036 7.39392 1.71837 7.53482L5.10449 9.61816C5.4575 9.83555 5.5695 10.3005 5.35249 10.6568C5.21149 10.8883 4.96548 11.0171 4.71247 11.0171C4.57947 11.0171 4.44446 10.9819 4.32246 10.9064L0.936341 8.82206C0.265318 8.40942 -0.0866946 7.66667 0.018309 6.88265C0.123313 6.09762 0.658331 5.47464 1.41336 5.25523L17.5039 0.577294ZM16.0282 10.8492C16.1482 10.4487 16.5652 10.2212 16.9622 10.342C17.3592 10.4618 17.5852 10.8824 17.4662 11.282L15.1441 19.096C14.9191 19.8519 14.2971 20.3833 13.5201 20.4829C13.4331 20.495 13.3471 20.5 13.2611 20.5C12.583 20.5 11.963 20.1518 11.602 19.5539L7.50187 12.7645C7.32286 12.4666 7.36786 12.0841 7.61287 11.8386L13.4341 5.98007C13.7271 5.68518 14.2011 5.68518 14.4941 5.98007C14.7871 6.27496 14.7871 6.75302 14.4941 7.04791L9.08992 12.4877L12.8841 18.7699C13.0221 18.9984 13.2391 18.9964 13.3291 18.9863C13.4171 18.9742 13.6301 18.9199 13.7061 18.6643L16.0282 10.8492Z" fill="white" />
                        </g>
                    </svg>

                    <h1 className='font-montserrat text-sm'>Transfer</h1>

                </button>

                <button className='mb-4 flex items-center gap-4 w-full hover:bg-[#2948FF] px-2 py-[6px] rounded-md text-[#4F5665] hover:text-white'>

                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                        <path d="M2.90918 3.86365V7.5H6.54556" stroke="#4F5665" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12.5C2 18.0229 6.47715 22.5 12 22.5C17.5229 22.5 22 18.0229 22 12.5C22 6.97715 17.5229 2.5 12 2.5C8.299 2.5 5.06755 4.51056 3.33839 7.49905" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.0026 6.5L12.002 12.5044L16.2417 16.7441" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <h1 className='font-montserrat text-sm'>History</h1>

                </button>

                <button className='mb-4 flex gap-5 px-2 py-2 text-[#4F5665] w-full rounded-md hover:bg-[#2948FF] hover:text-white'>

                    <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Upload">
                            <g id="Group 3">
                                <mask id="mask0_263_260" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={0} y={7} width={20} height={15}>
                                    <path id="Clip 2" fillRule="evenodd" clipRule="evenodd" d="M0 7.2941H19.9996V21.0381H0V7.2941Z" fill="white" />
                                </mask>

                                <g mask="url(#mask0_263_260)">
                                    <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M15.565 21.0381H4.435C1.99 21.0381 0 19.0491 0 16.6031V11.7281C0 9.2831 1.99 7.2941 4.435 7.2941H5.368C5.782 7.2941 6.118 7.6301 6.118 8.0441C6.118 8.4581 5.782 8.7941 5.368 8.7941H4.435C2.816 8.7941 1.5 10.1101 1.5 11.7281V16.6031C1.5 18.2221 2.816 19.5381 4.435 19.5381H15.565C17.183 19.5381 18.5 18.2221 18.5 16.6031V11.7191C18.5 10.1061 17.188 8.7941 15.576 8.7941H14.633C14.219 8.7941 13.883 8.4581 13.883 8.0441C13.883 7.6301 14.219 7.2941 14.633 7.2941H15.576C18.015 7.2941 20 9.2791 20 11.7191V16.6031C20 19.0491 18.01 21.0381 15.565 21.0381Z" fill="#4F5665" />
                                </g>
                            </g>

                            <g id="Group 6">
                                <mask id="mask1_263_260" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={0} width={2} height={15}>
                                    <path id="Clip 5" fillRule="evenodd" clipRule="evenodd" d="M9.25 0.500092H10.75V14.041H9.25V0.500092Z" fill="white" />
                                </mask>

                                <g mask="url(#mask1_263_260)">
                                    <path id="Fill 4" fillRule="evenodd" clipRule="evenodd" d="M10 14.041C9.586 14.041 9.25 13.705 9.25 13.291V1.25C9.25 0.836 9.586 0.5 10 0.5C10.414 0.5 10.75 0.836 10.75 1.25V13.291C10.75 13.705 10.414 14.041 10 14.041Z" fill="#4F5665" />
                                </g>

                            </g>

                            <path id="Fill 7" fillRule="evenodd" clipRule="evenodd" d="M7.08471 4.92868C6.89371 4.92868 6.70171 4.85568 6.55571 4.70968C6.26271 4.41768 6.26071 3.94368 6.55371 3.64968L9.46871 0.72168C9.74971 0.43868 10.2497 0.43868 10.5307 0.72168L13.4467 3.64968C13.7387 3.94368 13.7377 4.41768 13.4447 4.70968C13.1507 5.00168 12.6767 5.00168 12.3847 4.70768L9.99971 2.31368L7.61571 4.70768C7.46971 4.85568 7.27671 4.92868 7.08471 4.92868Z" fill="#4F5665" />
                        </g>
                    </svg>

                    <h1 className='font-montserrat text-sm'>Top Up</h1>

                </button>

                <button className='mb-4 text-[#4F5665] flex gap-[22px] items-center px-2 py-2 rounded-md hover:bg-[#2948FF] hover:text-white w-full'>

                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="2 User">
                            <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M7.59102 12.7068C11.28 12.7068 14.433 13.2658 14.433 15.4988C14.433 17.7318 11.301 18.3068 7.59102 18.3068C3.90102 18.3068 0.749023 17.7528 0.749023 15.5188C0.749023 13.2848 3.88002 12.7068 7.59102 12.7068Z" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M7.59108 9.51979C5.16908 9.51979 3.20508 7.55679 3.20508 5.13479C3.20508 2.71279 5.16908 0.749786 7.59108 0.749786C10.0121 0.749786 11.9761 2.71279 11.9761 5.13479C11.9851 7.54779 10.0351 9.51079 7.62208 9.51979H7.59108Z" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Stroke 5" d="M14.4824 8.38159C16.0834 8.15659 17.3164 6.78259 17.3194 5.11959C17.3194 3.48059 16.1244 2.12059 14.5574 1.86359" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Stroke 7" d="M16.5947 12.2322C18.1457 12.4632 19.2287 13.0072 19.2287 14.1272C19.2287 14.8982 18.7187 15.3982 17.8947 15.7112" stroke="#4F5665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>

                    <h1 className='font-montserrat text-sm'>Profile</h1>

                </button>

                <button className='text-[#D00000] flex gap-5 items-center px-2 py-2 rounded-md hover:bg-[#2948FF] hover:text-white w-full'>

                    <svg width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon">
                            <path id="Rectangle 93" d="M12 7.125L12 4.5C12 2.84315 13.3431 1.5 15 1.5L18 1.5C19.6569 1.5 21 2.84315 21 4.5L21 18.5C21 20.1569 19.6569 21.5 18 21.5L15 21.5C13.3431 21.5 12 20.1569 12 18.5L12 16.5" stroke="#D00000" strokeWidth="1.5" strokeLinecap="round" />
                            <path id="Vector 419" d="M4 14.5L1.44194 11.9419C1.19786 11.6979 1.19786 11.3021 1.44194 11.0581L4 8.5" stroke="#D00000" strokeWidth="1.5" strokeLinecap="round" />
                            <path id="Vector 420" d="M9 11.5L2 11.5" stroke="#D00000" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>

                    <h1 className='font-montserrat text-sm'>Keluar</h1>

                </button>

            </div>

            {/* Bagian Kanan */}
            <div className='ml-[40px] mt-[26px] mr-[79px] mb-[98px] w-full'>
                
                {/* Bagian Transfer Money */}
                <div className='flex gap-[17px] items-center mb-[15px]'>

                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Send">
                            <path id="Send_2" fillRule="evenodd" clipRule="evenodd" d="M17.5039 0.0772939C18.1889 -0.121981 18.931 0.0702488 19.434 0.582527C19.937 1.0938 20.123 1.83957 19.918 2.52999L18.669 6.73188C18.55 7.13144 18.1339 7.35789 17.7359 7.23913C17.3389 7.11936 17.1129 6.69867 17.2319 6.30012L18.481 2.09722C18.551 1.86171 18.4259 1.7027 18.3689 1.64533C18.3119 1.58696 18.1519 1.46014 17.9209 1.52758L1.82937 6.20652C1.57336 6.281 1.51736 6.49537 1.50536 6.58394C1.49436 6.6725 1.49036 6.89392 1.71837 7.03482L5.10449 9.11816C5.4575 9.33555 5.5695 9.80052 5.35249 10.1568C5.21149 10.3883 4.96548 10.5171 4.71247 10.5171C4.57947 10.5171 4.44446 10.4819 4.32246 10.4064L0.936341 8.32206C0.265318 7.90942 -0.0866946 7.16667 0.018309 6.38265C0.123313 5.59762 0.658331 4.97464 1.41336 4.75523L17.5039 0.0772939ZM16.0282 10.3492C16.1482 9.94867 16.5652 9.72122 16.9622 9.84199C17.3592 9.96175 17.5852 10.3824 17.4662 10.782L15.1441 18.596C14.9191 19.3519 14.2971 19.8833 13.5201 19.9829C13.4331 19.995 13.3471 20 13.2611 20C12.583 20 11.963 19.6518 11.602 19.0539L7.50187 12.2645C7.32286 11.9666 7.36786 11.5841 7.61287 11.3386L13.4341 5.48007C13.7271 5.18518 14.2011 5.18518 14.4941 5.48007C14.7871 5.77496 14.7871 6.25302 14.4941 6.54791L9.08992 11.9877L12.8841 18.2699C13.0221 18.4984 13.2391 18.4964 13.3291 18.4863C13.4171 18.4742 13.6301 18.4199 13.7061 18.1643L16.0282 10.3492Z" fill="#2948FF" />
                        </g>
                    </svg>

                    <h1 className='text-[#0B132A] font-montserrat text-base font-semibold'>Transfer Money</h1>

                </div>

                {/*  */}
                <div className='flex items-center gap-[13px]'>

                    <div className='px-2 py-1 flex gap-2'>

                        <div className='bg-[#2948FF] w-6 h-6 rounded-full flex justify-center items-center text-white text-xs'>1</div>

                        <h1 className='font-montserrat text-base text-[#2948FF]'>Find People</h1>

                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width={85} height={1} viewBox="0 0 85 1" fill="none">
                        <path d="M0 0.5H85" stroke="#4F5665" strokeDasharray="4 4" />
                    </svg>

                    <div className='px-2 py-1 flex gap-2'>

                        <div className='bg-[#4F5665] w-6 h-6 rounded-full flex justify-center items-center text-white text-xs'>2</div>

                        <h1 className='font-montserrat text-base text-[#4F5665]'>Set Nominal</h1>

                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width={85} height={1} viewBox="0 0 85 1" fill="none">
                        <path d="M0 0.5H85" stroke="#4F5665" strokeDasharray="4 4" />
                    </svg>

                    <div className='px-2 py-1 flex gap-2'>

                        <div className='bg-[#4F5665] w-6 h-6 rounded-full flex justify-center items-center text-white text-xs'>3</div>

                        <h1 className='font-montserrat text-base text-[#4F5665]'>Finish</h1>

                    </div>

                </div>

                {/* Bagian Find People */}
                <div className='border-[1px] mt-4 pt-[26px] pl-[31px] pb-[43px] pr-[27px]'>
                    <div className='flex justify-between'>

                        <h1 className='text-[#0B132A] font-montserrat text-base font-semibold'>Find People</h1>

                        <div className='flex items-center border-[1px]'>

                            <input type="text" placeholder='Enter Number Or Full Name' />

                            <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Search">
                                    <circle id="Ellipse_739" cx="6.84394" cy="6.84439" r="5.99237" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                                    <path id="Line_181" d="M11.0117 11.3234L13.3611 13.6667" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>

                        </div>

                    </div>
                </div>

            </div>

        </section>

    </>
  )
}

export default Transfer