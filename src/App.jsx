import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import HomePage from "./Pages/HomePage";
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import NewsPage from "./Pages/NewsPage";
import ContactPage from "./Pages/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<NewsPage  />} />
          <Route path="contact" element={<ContactPage  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
