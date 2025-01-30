"use client"

import { useState } from "react";
import QR from "../../components/qrcode"
import Link from "next/link";
import { signOut } from "next-auth/react"; 

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (<>
    
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 h-full z-20 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
            <span className="text-white font-bold uppercase">Sidebar</span>
            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar Content */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link
              href="/"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
               <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l9-9 9 9M4 10v10h5v-6h6v6h5V10"
                  />
              </svg>
              Home
            </Link>
            <Link
              href="/pages/p2p"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8h18M3 12h6m6 0h6M5 16h2m4 0h8M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
                  />
              </svg>
               Pay
            </Link>
            <Link
              href="/pages/transationhistory"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12a9 9 0 1 1 3 6m-3-6h3m6 0v-6m0 6l3 3"
                  />
              </svg>
              History
            </Link>
            <Link
              href="/pages/qrcode"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h4v4H4V4zm12 0h4v4h-4V4zM4 16h4v4H4v-4zm12 12h4v-4h-4v4zM10 10h4v4h-4v-4zm6 6h4v4h-4v-4z"
                  />
              </svg>
              QR 
            </Link>
            <Link
              href="#"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H9m4 8H5a2 2 0 01-2-2V6a2 2 0 012-2h8"
                  />
              </svg>
             <button onClick={()=>{signOut()}}>SignOut</button>  
            </Link>
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
          <button
            className="text-gray-500 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <input
            className="mx-4 w-full border rounded-md px-4 py-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-col items-center justify-center  space-y-4 p-4">
            <QR/>
        </div>
      </div>
    </div>
    </>
  );
}
