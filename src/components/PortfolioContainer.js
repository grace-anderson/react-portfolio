import React, { useState } from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe"; 
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

import "./PortfolioContainer.css";
import "./Footer.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    
      <Container fluid>
        <Row
          className="padding-top-bottom padding-left-right white-text background-image"
        >
          <Col>{<Header />}</Col>
          <Col>
            {
              <NavTabs
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            }
          </Col>
        </Row>
        <Row className="padding-left-right">{renderPage()}</Row>
        </Container>
        <Row className="footer">{<Footer />}</Row>
    </>

  );
}
