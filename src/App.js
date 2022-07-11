import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/react-portfolio/" element={<Home />} />
          <Route path="/react-portfolio/home" element={<Home />} />
          <Route path="/react-portfolio/about" element={<Home />} />
          <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
          <Route path="/react-portfolio/resume" element={<Resume />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
