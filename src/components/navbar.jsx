import React, { useEffect, useState } from "react";
import { logo } from "@/app/assests";
export const NavbarComponent = ({}) => {
  const [activeSection, setActiveSection] = useState("");
  const scrollToSection = (sectionId) => {
    console.log("dsd");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // When 50% of the section is visible, consider it in view
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
console.log(activeSection)
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand "onClick={() => scrollToSection("home")}>
            <img src={logo?.src} height={"70px"} alt="The Pie Express Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <div
                  onClick={() => scrollToSection("home")}
                  className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => scrollToSection("menu")}
                  className={`nav-link ${activeSection === "menu" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  Menu
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => scrollToSection("services")}
                  className={`nav-link ${activeSection === "services" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  Services
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => scrollToSection("blog")}
                  className={`nav-link ${activeSection === "blog" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  Blog
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => scrollToSection("about")}
                  className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  About
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => scrollToSection("contact")}
                  className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
