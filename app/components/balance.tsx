import { useState } from "react"

export  function BalanceCard(){
    return<>
    <div className="flex flex-wrap justify-center mt-10">

<div className="p-4 max-w-sm">
    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div className="flex items-center mb-3">
            <div
                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 className="text-white dark:text-white text-lg font-medium">Feature 1</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                <BalanceDisplayCard amount={0}/>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a href="#" className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>
</div>
    </>
}

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