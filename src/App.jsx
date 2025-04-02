import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import DomainsPage from "./pages/DomainsPage";
import EventsPage from "./pages/EventsPage";
import JoinCommunityPage from "./pages/JoinCommunityPage";
import ContributorsPage from "./pages/ContributorsPage";
import ReviewsPage from "./pages/ReviewsPage";

const AppContainer = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  overflow-x: hidden;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AppContainer>
        <LoadingScreen isLoading={isLoading} />
        <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <Sidebar isOpen={isOpen} togglePanels={toggleSidebar} />

        <motion.div
          className="progress-bar"
          style={{
            scaleX,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#fff",
            transformOrigin: "0%",
            zIndex: 1000,
          }}
        />
<Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
<Sidebar isOpen={isOpen} togglePanels={toggleSidebar} />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domains" element={<DomainsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/join" element={<JoinCommunityPage />} />
            <Route path="/contributors" element={<ContributorsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
