import { useState } from "react"

export  function BalanceDisplayCard({amount}:any){
    return<>
    
    <div className="max-w-md mx-auto rounded-lg shadow-lg mt-5 dark:bg-gray-700 dark:shadow-blue-100">
  <div className="px-6 py-4">
    <div className="flex flex-col ">
      <h2 className="font-bold text-xl dark:text-gray-100">Available Balance</h2>
      <div className="border-2 border-blue-500 mb-3 text"></div>
    </div>
    <div className="text-gray-500 dark:text-gray-200">
      <p className="text-lg font-bold"> &#8377; {amount} </p>
      
    </div>
  </div>
</div>
       
    </>
}