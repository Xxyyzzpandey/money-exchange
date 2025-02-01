"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function QrcodeGeneration({qrcode}:any){
    
    const [qr,setqr]=useState("svg link")

     useEffect(()=>{
        async function fetchqr(){
            const qrdata=await axios.get("/api/qrcodegeneraton");
            console.log("qrresponse is ",qrdata)
            if(qrdata.status===200){
                setqr(qrdata.data.qrcode);
                return
            }
            if(qrdata.status===401){
                alert("login first");
                return;
            }
        }
        fetchqr()
     },[]);


    return<>
        <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 sm:w-96 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Scan to Pay</h2>
        <div className="w-40 h-40 flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden">
          
          <img src={qr}  className="w-full h-full object-cover" />
        </div>
        <p className="mt-4 text-gray-600 text-sm">Scan the QR code to proceed.</p>
      </div>
    </div>
    </>
}