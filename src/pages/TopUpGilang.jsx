import React, { useEffect, useState } from 'react';
import { topUpPayment, completeTopUp } from '../utils/https/topUp';

function TopUp() {
    const jwt = localStorage.getItem("token")
    const [token, setToken] = useState()
    const body = {
        name: "Hero",
        amount: 20000,
        payment_type: 2,
    }
    const submit = () => {
        topUpPayment(body)
        .then((res) => {
            console.log(res)
            setToken(res.data.snapToken)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        if (token) {
            window.snap.pay(token, {
                onSuccess: (result) => {
                    localStorage.setItem("Payment", JSON.stringify(result))
                    setToken("")
                    completeTopUp(jwt, body)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                },
                onPending: (result) => {
                    localStorage.setItem("Payment", JSON.stringify(result))
                    setToken("")
                },
                onError: (error) => {
                    console.log(error)
                    setToken("")
                },
                onClose: () => {
                    console.log("You not pay yet")
                    setToken("")
                }
            })
        }
    }, [token])
    useEffect(() => {
        const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        let scriptTag = document.createElement("script")
        scriptTag.src = midtransUrl
        const midtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
        scriptTag.setAttribute("data-client-key" , midtransClientKey)
        document.body.appendChild(scriptTag)
        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [])
  return (
    <main className='p-8'>
      <div className=''>
        <button onClick={submit} className='p-4 rounded-lg bg-gray-600'>
            Confirm
        </button>
        <button className='p-4 rounded-lg bg-gray-600'>
            Go To Payment
        </button>
      </div>
    </main>
  );
}

export default TopUp;
