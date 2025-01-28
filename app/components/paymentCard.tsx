

"use client"

import "tailwindcss/tailwind.css"; 
import PopupCard from "./popup";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Spinner from './loadingspinner';

const PaymentCard = ({}) => {

  const [amount,setAmount]=useState(0);
  const [number,setNumber]=useState("");
  const [loading,setloading]=useState(false)
  const [transation,settransation]=useState(false);
 
  const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleConfirm = () => {
      alert("User deleted!"); // Replace with your actual logic
      closeModal();
    };

    const { data: session }=useSession();

   const HandleTransation=async()=>{
          setloading(true)
          try{
            const senderid=session.user.number;
            const response=await axios.post("http://localhost:4000/hdfcWebhook",{amount,receiverid:number,senderid})
            if(response.status===401){
              alert("Receiver does not exist")
              return
            }
            if(response.status===403){
              alert("insifficent amount")
              return
            }
            if(response.status===201){
              return
            }
          }catch(error){
            alert("server error")
          }finally{
            closeModal()
            setloading(false)
          }
   }
   
   if(loading){
    return<>
    <Spinner/>
    </>
   }

 
  return (
    <div className="containermx-auto max-w-xl p-6">
    
    <div className="bg-gray-100  p-6 rounded-lg shadow-lg">

        <h1 className="text-2xl font-semibold mb-4">Enter credentails to make payment</h1>

        
        <div className="mb-4">
        <input type="number" id="coupon" name="coupon" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Enter amount"
             onChange={(e)=>{setAmount(e.target.value)}}/>
        </div>
         
         <div className="mb-4">
            <input type="text" id="coupon" name="coupon" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Enter phone number"
            onChange={(e)=>{setNumber(e.target.value)}}/>
        </div>
        
        <div className="text-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
             onClick={openModal}>
                   Transfer money
                </button>
                <PopupCard isOpen={isModalOpen} closeModal={closeModal} onConfirm={HandleTransation} />
        </div>
        
    </div>
</div>
  );
};

export default PaymentCard;
