import React from "react";
import Header from "@/components/Header/index";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-[--light] ${className}  transition-all duration-300 ease-out  `}
    >
      <Cursor />
      <Navbar />
      <Header  />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
