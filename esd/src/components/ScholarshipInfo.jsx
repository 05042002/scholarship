// import "../../src/assets/style.css";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import "../App.css";
import React, { useEffect } from "react";

function Merit() {
  useEffect(() => {
    document.title = "Scholarship Management Website";
  }, []);
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/* ==== HEADER ==== */}
      <header className="container header">
        {/* ==== NAVBAR ==== */}
        <nav className="nav">
          <div className="logo">
            <a href="index.js" style={{ textDecoration: "none" }}>
              <h2>Scholarship </h2>
            </a>
          </div>
          <div className="nav_menu" id="nav_menu">
            <button className="close_btn" id="close_btn">
              <i className="ri-close-fill" />
            </button>
            <ul className="nav_menu_list">
              <li className="nav_menu_item">
                <a
                  href="index.js"
                  className="nav_menu_link"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li className="nav_menu_item">
                <a
                  href="#services"
                  className="nav_menu_link"
                  style={{ textDecoration: "none" }}
                >
                  Scholarships
                </a>
              </li>
              <li className="nav_menu_item">
                <a
                  href="#about_us"
                  className="nav_menu_link"
                  style={{ textDecoration: "none" }}
                >
                  information
                </a>
              </li>
              <li className="nav_menu_item">
                <a
                  href="#contact"
                  className="nav_menu_link"
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <button className="toggle_btn" id="toggle_btn">
            <i className="ri-menu-line" />
          </button>
        </nav>
      </header>
      <section id="scholarshipInfo">
        <main>
          <div className="container py-4">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
              <div className="container-fluid py-5">
                <h1
                  className="display-5 fw-bold"
                  style={{ textAlign: "center" }}
                >
                  Scholarship Name
                </h1>
                <div className="container text-center">
                  <div className="row">
                    <div className="col-sm-3">Deadline</div>
                    <div className="col-sm-9 bg-">30 April, 2023</div>
                  </div>
                </div>

                <button className="btn btn-primary btn-lg" type="button">
                  Example button
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* </div> */}
      <footer />
      {/* ==== ANIMATE ON SCROLL JS CDN */}
      {/* ==== GSAP CDN ==== */}
      {/* ==== SCRIPT.JS ==== */}
    </>
  );
}

export default Merit;
