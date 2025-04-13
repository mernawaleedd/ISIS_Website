import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import HomePage from "./Pages/HomePage";
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
