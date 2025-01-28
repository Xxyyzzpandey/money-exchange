
import { useState,useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Spinner from './loadingspinner';


const PopupCard = ({ isOpen, closeModal, onConfirm ,Password}:any) => {

    const [password,setPassword]=useState("");
    const {data:session}=useSession()
    const [loading,setloading]=useState(false)

  useEffect(() => {
    const handleKeyPress = (e:any) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, closeModal]);


   const HandlePasswordveification=async()=>{
       setloading(true);
        try{
          if (!session || !session.user) {
            alert("No session found. Please log in.");
            return;
          }
            const email= session?.user?.email
            const response=await axios.post("/api/userpasswordvalidation",{email,password})
            console.log(response)
            if(response.status===201){
               
                return 
            }
            if(response.status===401){
                alert("incorrect password, try again")
            }
        }catch(error){
            alert("server error");
        }finally{
          closeModal()
          setloading(false)
        }
   }
   
    if(loading){
      return<>
         <Spinner/>
      </>
    };
   if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 z-50 overflow-y-auto h-full w-full px-4">
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
        <div className="flex justify-end p-2">
          <button
            onClick={closeModal}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 pt-0 text-center">
          
          <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
            Enter Password
          </h3>
          <div className="mb-4">
            
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="otp" type="text" placeholder="Enter password"
            onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
          <button
            onClick={()=>{
                HandlePasswordveification()
                onConfirm()}}
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
          >
            Continue
          </button>
          <button
            onClick={closeModal}
            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
