import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";

export default function BankAndIncomeDetailsForm() {
  return (
    <>
      {/* Bank And Income Details Form */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <Navbar />
      <Container>
        <div className="pd-20 card-box mb-30">
          <div className="clearfix">
            <h3
              className="text-blue "
              style={{ color: " #2b50c7", textAlign: "center" }}
            >
              Application Form
            </h3>
            <h4>Bank Details</h4>
          </div>
          <form className="bg-transparent">
            <Container>
              {/* Name */}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="bank_name">
                      Bank Name <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={10}>
                    <div className="">
                      <input
                        name="bank_name"
                        className="form-control"
                        type="text"
                        placeholder="Bank Name"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              {/* Account Number */}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="acc_no">
                      Account Number <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <div className="">
                      <input
                        name="acc_no"
                        className="form-control"
                        type="text"
                        placeholder="Enter Account Number"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={1}>
                    <label className="col-form-label" for="branch">
                      Branch <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={5}>
                    <div className="">
                      <input
                        name="branch"
                        className="form-control"
                        type="text"
                        placeholder="Enter Bank Branch name"
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              <h4>Income Details</h4>

              {/* DOB, Age and Gender */}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className=" col-form-label" for="income">
                      Income <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <div className="   ">
                      <input
                        name="income"
                        className="form-control"
                        type="number"
                        placeholder="Enter Income"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={2}>
                    <label className=" col-form-label" for="income_proof">
                      Proof of Income <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <div className="   ">
                      <input
                        name="income"
                        className="form-control"
                        type="number"
                        placeholder="Attach Proof of Income"
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
                      <button type="button" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </Col>
                  <Col xs={12} md={2}>
                    <div className="   ">
                      <button type="button" className="btn btn-outline-primary">
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
