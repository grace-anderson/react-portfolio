import React from "react";
import Navbar from "./nav/Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout(props) {
  return (
    <div>
      <div className="flex items-center justify-center">
      {/* header */}
      <Header />
      </div>

      {/* nav */}
      <Navbar />

      {props.children}

      {/* footer */}
      <Footer className="flex items-center justify-center" />
    </div>
  );
}
