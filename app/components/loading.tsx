"use client"

import { useState } from "react"

export default function Loading(){
   
    const [tab,setTab]=useState("signup")

    return(
        <>
        <div className="relative">


<div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
  <div className="flex items-center">
    <span className="text-3xl mr-4">Loading</span>
    <svg className="animate-spin h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>
  </div>
</div>



<div className=" from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="mt-2">Join our amazing community</p>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setTab("signup")}
                className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${
                  tab === "signup" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setTab("login")}
                className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${
                  tab === "login" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Login
              </button>
            </div>

            {tab === "signup" && (
              <form className="space-y-4" >
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Full Name"
                   />
                  <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Email"
                   />
                  <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="number"
                   />
                  <i className="fas fa-phone absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Password"
                  />
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Sign Up
                </button>
              </form>
            )}

            { tab === "Login"&&(
              <form className="space-y-4" >
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Email"
                    />
                  <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Password"
                    />
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Login
                </button>
              </form>
            )}

            <div className="mt-6">
              <p className="text-center text-gray-600 mb-4">Or continue with</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  <i className="fab fa-facebook-f mr-2"></i> Facebook
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                  <i className="fab fa-google mr-2"></i> Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</div>
        </>
    )
}