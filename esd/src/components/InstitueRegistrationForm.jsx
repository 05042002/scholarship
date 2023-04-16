import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";

export default function InstituteRegistrationForm() {
  return (
    <>
      {/* Personal Details form */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <Navbar />
      <Container>
        <div className="pd-20 card-box mb-30">
          <div className="clearfix">
            <h3
              className="text-blue "
              style={{ color: " #2b50c7", textAlign: "center" }}
            >
              Institute Registration Form
            </h3>
          </div>
          <form className="bg-transparent">
            <Container>
              {/* Institute Name */}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="name">
                      Institute Name <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={10}>
                    <div className="">
                      <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Institute Name"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              {/* Mobile Number and Email*/}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="mobile">
                      Mobile Number <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={2}>
                    <div className="">
                      <input
                        name="mobile"
                        className="form-control"
                        type="text"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={1}>
                    <label className="col-form-label" for="email">
                      Email <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <div className="">
                      <input
                        name="email"
                        className="form-control"
                        type="email"
                        placeholder="Enter institute email id"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={2}>
                    <label
                      className="    col-form-label"
                      for="nature_of_institute"
                    >
                      Institute Type <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={1}>
                    <div className="   ">
                      <Col sm={12} md={12}>
                        <select className="custom-select">
                          <option selected="">Choose </option>
                          <option value={1}>Private</option>
                          <option value={2}>Government</option>
                        </select>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* Address */}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="Address">
                      Address <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={10}>
                    <div className="">
                      <input
                        name="Address"
                        className="form-control"
                        type="text"
                        placeholder="Enter Address"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="district">
                      District <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={2}>
                    <div className="">
                      <input
                        name="district"
                        className="form-control"
                        type="text"
                        placeholder="District"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={1}>
                    <label className="col-form-label" for="State">
                      State <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={3}>
                    <div className="">
                      <input
                        name="State"
                        className="form-control"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={1}>
                    <label className="col-form-label" for="Country">
                      Country<span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={3}>
                    <div className="">
                      <input
                        name="Country"
                        className="form-control"
                        type="text"
                        placeholder="Country"
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
