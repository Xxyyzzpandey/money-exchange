"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react";
import axios from "axios";

export default function TransationHistory(){
    
  const [history,setHistory]=useState<any[]>([])
  const [empty,setempty]=useState(false);
  
    
  const {data:session}=useSession()
  useEffect(() => {
    async function fetchTransactionHistory() {
      try {
        const number = session?.user.number;
        console.log(number)
        // Call an API route to fetch transaction history
        const response = await axios.post("/api/transitionhistory",{number});

        if (response.status===401) {
          throw new Error("all field are required");
        }
        if(!response){
          setempty(false);
        }
        setHistory(response.data.transactions); 
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      }
    }
    fetchTransactionHistory();
  }, []);

    console.log("value of history is ",history)

    if(empty){
      return <>
      <div className="relative max-w-xl mx-auto mt-20">
        <img className="h-64 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"/>
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">No Transation yet</h2>
        </div>
       </div>
      </>
    }

    return <>
        <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
  {Array.isArray(history) && history.length > 0 ? (
    history.map((x: any) => (
      <HistoryCard 
        key={x.id}
        amount={x.amount} 
        date={x.data} 
        sendrec={x.senderid === session?.user.number 
          ? `Paid to : ${x.recieverid}`  // If the user is the sender, show the receiver's ID
          : `Recieved from : ${x.senderid}`} 
      />
    ))
  ) : (
    <li>No transactions found</li> // Show this if history is empty or not loaded
  )}
</ul>
    </>
}


 function HistoryCard({amount,date,sendrec}:any){

    return (
        <>
    <li>
        <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">&#8377; {amount}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500"> {sendrec}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">Status: <span className="text-green-600">Done</span></p>
                <p className="font-medium text-indigo-600 hover:text-indigo-500">{date}</p>
            </div>
        </div>
    </li>
        </>
    )
}