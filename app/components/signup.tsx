"use client"

import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is set up
import axios from "axios";
import { useRouter } from 'next/navigation'
import Loading from "./loading"
import Head from "next/head";
import { signIn } from "next-auth/react";


const Signup = () => {

  const router=useRouter();

  const [loading,setloading]=useState(false);

  const [name,setfullName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [number,setNumber]=useState("")

  const SignupHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     setloading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        number,
        password,
      });
       
      if (response.status === 201) {
        console.log("User created successfully");
        setloading(false)
        router.push("/login"); // Redirect to login
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const status = error.response.status;
  
        if (status === 400 || status === 402) {
          console.log("All fields are required");
        } else if (status === 401 || status === 409) {
          console.log("User already exists with these credentials");
        } else {
          console.log("Something went wrong");
        }
      } else {
        console.error("Unexpected error:", error.message);
      }
    }finally{
      setloading(false);
    }
  };

  if(loading){
    return(<>
    <Loading/>
    </>)
  }


  return (
     <>
    <Head>
        <title>Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen">
        <div className="grid gap-8">
          <div
            id="back-div"
            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
          >
            <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-10 m-2">
              <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center">
                Sign Up
              </h1>
              <form action="#" method="post" className="space-y-4" onSubmit={SignupHandle}>
                <div>
                  
                  <input
                    id="name"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="text"
                    placeholder="Name"
                    required
                  onChange={(e)=>{setfullName(e.target.value)}}/>
                </div>
                <div> 
                  <input
                    id="email"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                  
                  <input
                    id="Phone"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="number"
                    placeholder="Phone Number"
                    required
                    onChange={(e)=>{setNumber(e.target.value)}}/>
                </div>
                <div>
                  <input
                    id="password"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                  type="submit"
                >
                  SIGN UP
                </button>
              </form>
              <div className="flex flex-col mt-4 items-center justify-center text-sm">
                <h3>
                  <span className="dark:text-gray-300">Have an account?</span>
                  <a
                    className="group text-blue-400 ml-1 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-blue-300 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Log In
                    </span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

     </>
  );
};

export default Signup;
