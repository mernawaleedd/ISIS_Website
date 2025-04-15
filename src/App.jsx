import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import HomePage from "./Pages/HomePage";
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import NewsPage from "./Pages/NewsPage";
import ContactPage from "./Pages/ContactPage";
import ProjectDetailes from './Pages/ProjectDetailes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes that use Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Route without Layout */}
        <Route path="/projectDetailes" element={<ProjectDetailes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
