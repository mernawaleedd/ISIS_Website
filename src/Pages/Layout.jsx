import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    // Delay to wait for Outlet content to load
    const timeout = setTimeout(() => {
      // Kill previous scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Animate visible elements
      gsap.utils.toArray('.animate-on-scroll').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 60%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, 100); 

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
