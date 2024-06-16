"use client";

import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <>
      {children}
      <ToastContainer
        // toastClassName={(context) =>
        //   contextClass[context?.type || "default"] +
        //   " relative flex min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        // }
        // bodyClassName={() =>
        //   "w-full bg-white text-sm text-primary font-med block p-3"
        // }
        position="top-right"
        autoClose={3000}
      />
    </>
  );
}
