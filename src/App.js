import { HashRouter, Route, Routes } from "react-router-dom";

// updated BrowserRouter to HashRouter to make routes work in gh pages - see https://stackoverflow.com/questions/54153911/react-router-gitlab-pages-show-404-error-on-refreshing?noredirect=1&lq=1 and https://github.com/facebook/create-react-app/issues/1765

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
}

export default App;
