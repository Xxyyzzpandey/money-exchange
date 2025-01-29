"use client"

import { useState } from "react";
import Navbar from "../../components/navbar";
import HistoryCard from "@/app/components/historyCard";

export default function Handler() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (<>
    <Navbar/>
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
            <a
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Dashboard
            </a>
            <a
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
                  d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                />
              </svg>
              Login
            </a>
            <a
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
                  d="M11.048 2.927c.3-1.222 2.074-1.222 2.374 0l.451 1.838a1 1 0 00.95.69h1.862c1.256 0 1.769 1.602.747 2.347l-1.51 1.09a1 1 0 00-.364 1.118l.452 1.838c.3 1.222-1.019 2.207-2.025 1.466l-1.51-1.09a1 1 0 00-1.175 0l-1.51 1.09c-1.006.74-2.324-.244-2.025-1.466l.451-1.838a1 1 0 00-.364-1.118L2.22 7.802c-1.022-.745-.509-2.347.747-2.347h1.862a1 1 0 00.95-.69l.451-1.838z"
                />
              </svg>
              Favorites
            </a>
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
            <h1 className="underline text-blue-600">Transaction History</h1>
            <HistoryCard/>
        </div>
      </div>
    </div>
    </>
  );
}
