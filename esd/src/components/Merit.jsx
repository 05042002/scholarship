// import "../../src/assets/style.css";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import React, { useEffect } from "react";
import homeImage from "../image/scholarship.jpg";
// import Carousel from "react-bootstrap/Carousel";

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
      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                <span>Merit </span>Based Scholarships
                <br />
              </h1>
              <p className="info-text">Merit-based scholarships are awarded based on the student's academic achievements, talents, and accomplishments.</p>
              <Button> 
                <a href="#services">
              <i className="ri-arrow-drop-down-line"  width="50px" height="50px"/>
              </a>
              </Button>
            </div>
            <div className="grid-item-2">
              <div className="team_img_wrapper">
                {/* <img src="./img/team.svg" alt="team-img" /> */}
                <img src={homeImage} alt="" />
                {/* <img src="./img/schedule.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper" id="services">
        <div className="container service-section">
          <h1>Scholarships</h1>
          <br />
          <div className="grid-cols-3">
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="featured_info">
                    <span style={{color:"#335eea"}}>Scholarship Name 1</span><br/>
                    <ul>
                      <li>Deadline </li>
                      <li>Amount </li>
                    </ul>
                    <Button variant="primary" style={{ width: "120px" }}>
                      Apply Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="featured_info">
                    <span style={{color:"#335eea"}}>Scholarship Name 1</span><br/>
                    <ul>
                      <li>Deadline </li>
                      <li>Amount </li>
                    </ul>
                    <Button variant="primary" style={{ width: "120px" }}>
                      Apply Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="featured_info">
                    <span style={{color:"#335eea"}}>Scholarship Name 1</span><br/>
                    <ul>
                      <li>Deadline </li>
                      <li>Amount </li>
                    </ul>
                    <Button variant="primary" style={{ width: "120px" }}>
                      Apply Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            
          </div>
          <div className="grid-cols-3">
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="featured_info">
                    <span style={{color:"#335eea"}}>Scholarship Name 1</span><br/>
                    <ul>
                      <li>Deadline </li>
                      <li>Amount </li>
                    </ul>
                    <Button variant="primary" style={{ width: "120px" }}>
                      Apply Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="featured_info">
                    <span style={{color:"#335eea"}}>Scholarship Name 1</span><br/>
                    <ul>
                      <li>Deadline </li>
                      <li>Amount </li>
                    </ul>
                    <Button variant="primary" style={{ width: "120px" }}>
                      Apply Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="featured_info">
                    <span style={{color:"#335eea"}}>Scholarship Name 1</span><br/>
                    <ul>
                      <li>Deadline </li>
                      <li>Amount </li>
                    </ul>
                    <Button variant="primary" style={{ width: "120px" }}>
                      Apply Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
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
