import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
//TODO
//About Me - will be the home page
//Portfolio,
//Contact
//Resume

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    //TODO
    //About Me - will be the home page
    //Portfolio,
    //Contact
    //Resume
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      }
        {renderPage()}
    </div>
  );
}
