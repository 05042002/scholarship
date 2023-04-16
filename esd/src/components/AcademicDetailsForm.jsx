import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";

export default function AcademicDetailsForm() {
  return (
    <>
    {/* Personal Details form */}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <Navbar/>
      <Container>
          <div className="pd-20 card-box mb-30">
            <div className="clearfix">
                <h3
                  className="text-blue "
                  style={{ color: " #2b50c7", textAlign: "center" }}
                >
                  Application Form
                </h3>
                <h4>Academic Details</h4>
              </div>
            <form className="bg-transparent">
              <Container>
                {/* College Name */}
                <div className="form-group  ">
                  <Row>
                    <Col xs={12} sm={12} md={2}>
                      <label className="col-form-label" for="college_name">
                        Name of College <span className="compulsory">*</span>
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={10}>
                      <div className="">
                        <input
                          name="college_name"
                          className="form-control"
                          type="text"
                          placeholder="Enter College Name"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* UID and Email*/}
                <div className="form-group  ">
                  <Row>
                    <Col xs={12} sm={12} md={2}>
                      <label className="col-form-label" for="uid">
                        UID <span className="compulsory">*</span>
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={3}>
                      <div className="">
                        <input
                          name="uid"
                          className="form-control"
                          type="text"
                          placeholder="Enter UID"
                        />
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={1}>
                      <label className="col-form-label" for="email">
                        Email <span className="compulsory">*</span>
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      <div className="">
                        <input
                          name="email"
                          className="form-control"
                          type="email"
                          placeholder="Enter your college email id"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* DOB, Age and Gender */}
                <div className="form-group  ">
                  <Row>
                  <Col xs={12} sm={12} md={2}>
                      <label className="    col-form-label" for="degree">
                        Degree <span className="compulsory">*</span>
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={3}>
                      <div className="">
                        <Col sm={12} md={12}>
                          <select className="custom-select">
                            <option selected="">Choose Degree </option>
                            <option value={1}>B.E.</option>
                            <option value={2}>B.Tech</option>
                            <option value={3}>B.Sc</option>
                          </select>
                        </Col>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={1}>
                      <label className=" col-form-label" for="gpa">
                        GPA <span className="compulsory">*</span>
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={3}>
                      <div className="   ">
                        <input
                          name="gpa"
                          className="form-control"
                          type="number"
                          placeholder="Enter Current GPA"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* Achievements */}
                <div className="form-group  ">
                  <Row>
                    <Col xs={12} sm={12} md={2}>
                      <label className="col-form-label" for="Achievements">
                      Achievements
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={10}>
                      <div className="">
                        <input
                          name="Achievements"
                          className="form-control"
                          type="text"
                          placeholder="Enter Achievements"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* Extracurricular Activities */}
                <div className="form-group  ">
                  <Row>
                    <Col xs={12} sm={12} md={3}>
                      <label className="col-form-label" for="Extracurricular_Activities">
                      Extracurricular Activities
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={9}>
                      <div className="">
                        <input
                          name="Extracurricular_Activities"
                          className="form-control"
                          type="text"
                          placeholder="Enter Extracurricular Activities (if any)"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* Letter Of Recommendation */}
                <div className="form-group  ">
                  <Row>
                    <Col xs={12} sm={12} md={3}>
                      <label className="col-form-label" for="lor">
                      Letter of Recommendation
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={9}>
                      <div className="">
                        <input
                          name="lor"
                          className="form-control"
                          type="text"
                          placeholder="Attach Letter of Recommendation (if any)"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                
                {/* SUbmit Button */}
                <div className="form-group  ">
                  <Row>
                    <Col xs={12} md={2}>
                      <label className="col-form-label" />
                    </Col>
                    <Col xs={12} md={2}>
                      <div className="   ">
                          <button
                            type="button"
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                      </div>
                      </Col>
                    <Col xs={12} md={2}>
                      <div className="   ">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Cancel
                          </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </form>
          </div>
      </Container>      
    </>
  );
}
