"use client"

import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is set up
import { useRouter } from 'next/navigation'
import Loading from "./loading"
import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from 'next/link';
import Navbar from "./navbar";

const Signin = () => {

  const router=useRouter();
  const [loading,setloading]=useState(false);

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleSignin=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try {
        setloading(true);
        const response = await signIn("credentials", {
          email,
          password,
          redirect: false, // Prevent automatic redirection
        });
         //console.log(response)
        if (response?.ok) {
          alert("login Successfully")
          router.push("/"); // Redirect to homepage or desired route
        } else {
          // console.error("Sign-in failed:", response?.error);
          alert("Login failed. Please check your email and password.");
        }
      } catch (err) {
        console.error("Error during sign-in:", err);
        alert("An unexpected error occurred. Please try again.");
      } finally {
        setloading(false);
      }
  }

  if(loading){
    return(<>
    <Loading/>
    </>)
  }


  return (<>
    <Navbar/>
    <Head>
    <title>Sign In</title>
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
            Sign In
          </h1>
          <form action="#" method="post" className="space-y-4" onSubmit={handleSignin}>
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
              SIGN IN
            </button>
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3>
              <span className="dark:text-gray-300">Don't have an account?</span>
              <Link
                className="group text-blue-400 ml-1 transition-all duration-100 ease-in-out"
                href="/pages/signupage"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-300 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  sign up
                </span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Signin;
