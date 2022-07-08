import React, { useState } from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe"; //AboutMe is home page, with active "About Me" nav link
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import "./PortfolioContainer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image from "../img/ivana-cajina-dQejX2ucPBs-unsplash.jpg"

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
    <Container fluid>
      <Row className="padding-top-bottom" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <Col>
          {<Header />}
          </Col>
          <Col>
            {
              <NavTabs
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            }
            </Col>
        </Row>
        <Row>
        {renderPage()}
        </Row>
    </Container>
  );
}
