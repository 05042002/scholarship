// import "../../src/assets/style.css";
import { Button, Card, NavDropdown, Row } from "react-bootstrap";
import "../App.css";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      />
      {/* ==== STYLE.CSS ==== */}
      {/* <link rel="stylesheet" href="src/assets/style.css" /> */}
      {/* ====  REMIXICON CDN ==== */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/* ==== ANIMATE ON SCROLL CSS CDN  ==== */}
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      {/* ==== HEADER ==== */}
      <header className="container header">
        {/* ==== NAVBAR ==== */}
        <nav className="nav">
          <div className="logo" data-aos="fade-down" data-aos-duration="100">
            <a href="/" style={{ textDecoration: "none" }}>
              <h2>Scholarship </h2>
            </a>
          </div>
          <div className="nav_menu" id="nav_menu" >
            <button className="close_btn" id="close_btn">
              <i className="ri-close-fill" />
            </button>
            <ul className="nav_menu_list">
              <li className="nav_menu_item" data-aos="fade-down" data-aos-duration="200">
                <a
                  href="/"
                  className="nav_menu_link"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li className="nav_menu_item" data-aos="fade-down" data-aos-duration="400">
                <a
                  href="/#services"
                  className="nav_menu_link"
                  style={{ textDecoration: "none" }}
                >
                  Scholarships
                </a>
              </li>
              <li className="nav_menu_item" data-aos="fade-down" data-aos-duration="600">
                <a
                  href="/#about_us"
                  className="nav_menu_link"
                  style={{ textDecoration: "none" }}
                >
                  information
                </a>
              </li>
              <li className="nav_menu_item" data-aos="fade-down" data-aos-duration="800">
                <a
                  href="/#contact"
                  className="nav_menu_link"
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </li>
              <li className="nav_menu_item" data-aos="fade-down" data-aos-duration="1000">
                <button className="btn btn-primary-outline">
                  
                  <NavDropdown title="Login" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">
                      Student
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/institute-registration-form">
                      Institute
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Admin
                    </NavDropdown.Item>
                  </NavDropdown>
                </button>
              </li>
            </ul>
          </div>
          <button className="toggle_btn" id="toggle_btn">
            <i className="ri-menu-line" />
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
