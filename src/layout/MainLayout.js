import React from "react";
import Navbar from "./nav/Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout(props) {
  return (
    <div>
      {/* header */}
      <Header />
      {/* </div> */}

      {/* nav */}
      <Navbar />

      {props.children}

      {/* footer */}
      <Footer />
    </div>
  );
}
