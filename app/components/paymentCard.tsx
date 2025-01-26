

"use client"

import "tailwindcss/tailwind.css"; 
import { useRouter } from 'next/navigation'



const PaymentCard = () => {

  const router=useRouter();

 
  return (
    <div className="containermx-auto max-w-xl p-6">
    
    <div className="bg-gray-100  p-6 rounded-lg shadow-lg">

        <h1 className="text-2xl font-semibold mb-4">Enter credentails to make payment</h1>

        
        <div className="mb-4">
            <input type="text" id="coupon" name="coupon" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Enter amount"/>
        </div>
         
        <div className="mb-4">
            <input type="text" id="coupon" name="coupon" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Enter phone number"/>
        </div>
        
        <div className="text-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                   Transfer money
                </button>
        </div>
        
    </div>
</div>
  );
};

export default PaymentCard;
