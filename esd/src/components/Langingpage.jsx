import { Button, Card, Col, Row } from "react-bootstrap";
import "../App.css";
import React, { useEffect } from "react";
import homeImage from "../image/scholarship.jpg";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "./Navbar";

export default function Landingpage() {
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1" data-aos="fade-up" data-aos-duration="800">
              <h1 className="main-heading">
                Welcome to <span>Scholarship</span>
                <br />
              </h1>
              <p className="info-text">Empowering the next Generation</p>
              <div className="btn_wrapper">
                <button
                  className="btn view_more_btn"
                  style={{
                    backgroundColor: "#335eea",
                    color: "#fff",
                    width: "200px",
                  }}
                >
                  view Scholarships
                  <i className="ri-arrow-right-line" />
                </button>
                <button
                  className="btn documentation_btn"
                  style={{ backgroundColor: "#cfe2ff", color: "#0e2a86" }}
                >
                  login
                </button>
              </div>
            </div>
            <div className="grid-item-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="team_img_wrapper">
                {/* <img src="./img/team.svg" alt="team-img" /> */}
                <img src={homeImage} alt="" />
                {/* <img src="./img/schedule.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="statistics">
        <div className="container service-section">
        <h1>Statistics</h1>
          <Row>
            {/* <div className="grid-cols-4"> */}
            <Col>
              <div className="grid-col-item" data-aos="fade-up" data-aos-duration="500">
                <Card border="primary">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title> 214532</Card.Title>
                    <Card.Text>Total Applications</Card.Text>
                  </Card.Body>
                </Card>
              </div></Col>
              <Col>
              <div className="grid-col-item" data-aos="fade-up" data-aos-duration="1000">
                <Card border="success">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>53246 </Card.Title>
                    <Card.Text>Scholarships Awarded</Card.Text>
                  </Card.Body>
                </Card>
              </div></Col>
              <Col>
              <div className="grid-col-item" data-aos="fade-up" data-aos-duration="1500">
                <Card border="warning">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>76565.98</Card.Title>
                    <Card.Text>Amount Disbursed</Card.Text>
                  </Card.Body>
                </Card>
              </div></Col>
              <Col>
              <div className="grid-col-item" data-aos="fade-up" data-aos-duration="2000">
                <Card border="dark">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>100</Card.Title>
                    <Card.Text>Number of Scholarship Schemes</Card.Text>
                  </Card.Body>
                </Card>
              </div></Col>
            {/* </div> */}
          </Row>
        </div>
      </div>
      <section  id="services">
        <div className="container service-section">
          <h1>Scholarship Categories</h1>
          <br />
          <div className="grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Merit Based Scholarship</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore ratione facilis animi voluptas exercitationem
                      molestiae.
                    </p>
                    <a href="/merit-scholarships">
                    <Button variant="primary" style={{ width: "150px" }} >
                      Learn More...
                    </Button></a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Need Based Scholarship</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut ipsum esse corrupti. Quo, labore debitis!
                    </p>
                    <Button variant="primary" style={{ width: "150px" }}>
                      Learn More...
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>International Scholarships</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nostrum voluptate totam ipsa corrupti vero!
                    </p>
                    <Button variant="primary" style={{ width: "150px" }}>
                      Learn More...
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Minority Scholarship</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore ratione facilis animi voluptas exercitationem
                      molestiae.
                    </p>
                    <Button variant="primary" style={{ width: "150px" }}>
                      Learn More...
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Research Scholarship</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut ipsum esse corrupti. Quo, labore debitis!
                    </p>
                    <Button variant="primary" style={{ width: "150px" }}>
                      Learn More...
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>All Scholarships</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nostrum voluptate totam ipsa corrupti vero!
                    </p>
                    <Button variant="primary" style={{ width: "150px" }}>
                      Learn More...
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="about_us">
        <br />
        <br />
        <div className="container">
          <h1>Information</h1>
          <br />
          <div className="row" >
            <div className="col-6" data-aos="fade-up" data-aos-duration="1000">
              <h3>Eligibility Criteria</h3>
              <ul>
                <li>
                  <i className="ri-arrow-right-line" />
                  To be eligible for a scholarship, applicants must meet all of
                  the necessary requirements specified by the scholarship
                  program.
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  Eligibility requirements may include maintaining a certain
                  GPA, demonstrating financial need, or being enrolled in a
                  particular course of study.
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  It is important for applicants to carefully review the
                  eligibility criteria for each scholarship opportunity they are
                  interested in.
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  Applicants should ensure that they meet all of the necessary
                  requirements before applying.
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  Meeting the eligibility criteria is a necessary first step in
                  the application process.
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  However, meeting the eligibility criteria does not guarantee
                  that an applicant will receive a scholarship.
                </li>
              </ul>
            </div>
            <div className="col-6 " data-aos="fade-up" data-aos-duration="2000">
              <h3>Application Process</h3>
              <ul>
                <li>
                  <i className="ri-arrow-right-line" />
                  Research scholarships to identify those that you are eligible
                  for and interested in
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  Gather application materials, which may include academic
                  transcripts, test scores, letters of recommendation, personal
                  essays or statements, and financial aid information
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  Complete application forms accurately and completely
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  Submit applications by the deadline specified by each
                  scholarship program
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  Follow up with the scholarship provider to confirm receipt of
                  your application or to provide additional information if
                  requested
                </li>
                <br />
                <li>
                  <i className="ri-arrow-right-line" />
                  Await the decision, which will be based on the eligibility
                  criteria and strength of your application
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section id="contact">
        <div className="container">
          <h1>Contact us</h1>
          <div className="row">
            <div className="col-6" data-aos="fade-up" data-aos-duration="1000">
              <ul className="contact-list">
                <li>
                  <a
                    href="mailto:support@website.com"
                    className="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    {/* <ion-icon name="mail-outline"></ion-icon> */}
                    <i className="ri-mail-line" />
                    {/* <img src="./img/mail.png" alt="" className="icon-img" /> */}
                    <span>: support@website.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="www.website.com"
                    className="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    {/* <ion-icon name="globe-outline"></ion-icon> */}
                    <i className="ri-earth-line" />
                    {/* <img
                      src="./img/web-development.png"
                      alt=""
                      className="icon-img"
                    /> */}
                    <span>: www.website.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+0011234567890"
                    className="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="ri-phone-line" />
                    {/* <ion-icon name="call-outline"></ion-icon> */}
                    {/* <img src="./img/telephone.png" alt="" className="icon-img" /> */}
                    <span>: (+001) 123 456 7890</span>
                  </a>
                </li>
                <li>
                  <div className="contact-link">
                    <i className="" />
                    {/* <ion-icon name="time-outline"></ion-icon> */}
                    {/* <img src="./img/clock.png" alt="" className="icon-img" /> */}
                    <a
                      href="time"
                      className="contact-link"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="ri-time-line" />
                    </a>
                    <span>: 9:00 AM - 6:00 PM</span>
                  </div>
                </li>
                <li>
                  <a
                    href="location"
                    className="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    {/* <ion-icon name="location-outline"></ion-icon> */}
                    <i className="ri-user-location-line" />
                    <span>: 1644 Deer Ridge Drive Rochelle Park, NJ 07662</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6" data-aos="fade-up" data-aos-duration="2000">
              <div className="row">
                <div className="col-md-12 mx-auto">
                  <Card>
                    <form>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows={3}
                          placeholder="Enter your message here"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </Card>
                </div>
              </div>
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
