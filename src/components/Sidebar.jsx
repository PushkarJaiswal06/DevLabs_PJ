import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, togglePanels }) => {
  const panelRefs = useRef([]);
  const navigate = useNavigate();
  const pages = [
    { name: "Home", path: "/" },
    { name: "Domains", path: "/domains" },
    { name: "Events", path: "/events" },
    { name: "Join Us", path: "/join" },
    { name: "Contributors", path: "/contributors" },
    { name: "Reviews", path: "/reviews" },
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.set(panelRefs.current, { x: "100%", opacity: 0 });
      gsap.to(panelRefs.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)",
      });
    }
  }, [isOpen]);

  const handleNavigation = (path, panelRef) => {
    gsap.to(panelRef, {
      x: "-100%",
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        navigate(path);
        togglePanels();
      },
    });
  };

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          {pages.map((page, index) => (
            <div
              key={page.name}
              ref={(el) => (panelRefs.current[index] = el)}
              style={{
                backgroundColor: `hsl(${index * 40}, 30%, 30%)`,
                color: "white",
                width: "80px",
                height: "100%",
                padding: "20px",
                position: "absolute",
                top: 0,
                right: `${index * 80}px`,
                zIndex: 10 - index,
                writingMode: "vertical-rl",
                textOrientation: "upright",
                paddingBottom: "30%",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onClick={() => handleNavigation(page.path, panelRefs.current[index])}
            >
              <h2>{page.name}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
