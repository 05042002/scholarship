import React from "react";
import { Alert, Col, Container, Row, Modal, Button } from "react-bootstrap";
import Navbar from "./Navbar";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to cancel this form? </h4>
        <p>All of your input will be lost.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-primary">Close</Button>
        <Button onClick={props.onHide}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function ApplicationForm() {
  const [modalShow, setModalShow] = React.useState(false);
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
              Application Form
            </h3>
          </div>
          <form className="bg-transparent">
            <Container>
              {/* Name */}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="name">
                      Name <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={10}>
                    <div className="">
                      <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              {/* Mobile NUmber and Email*/}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="mobile">
                      Mobile Number <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={3}>
                    <div className="">
                      <input
                        name="mobile"
                        className="form-control"
                        type="text"
                        placeholder="Enter Mobile Number"
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
                        placeholder="Enter email id"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              {/* DOB, Age and Gender */}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="    col-form-label" for="dob">
                      Date of Birth <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={3}>
                    <div className="   ">
                      <input
                        name="dob"
                        className="form-control datepicker"
                        placeholder="Select Date"
                        type="date"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={1}>
                    <label className=" col-form-label" for="age">
                      Age <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={3}>
                    <div className="   ">
                      <input
                        name="age"
                        className="form-control"
                        type="number"
                        placeholder="Enter Age"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={1}>
                    <label className="    col-form-label" for="gender">
                      Gender <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={2}>
                    <div className="   ">
                      <Col sm={12} md={12}>
                        <select className="custom-select">
                          <option selected="">Choose Gender </option>
                          <option value={1}>Male</option>
                          <option value={2}>Female</option>
                          <option value={3}>Other</option>
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
              {/* Adhar Card */}
              <div className="form-group  ">
                <Row>
                  <Col xs={12} sm={12} md={2}>
                    <label className="col-form-label" for="adhar_card">
                      Adhar Card <span className="compulsory">*</span>
                    </label>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <div className="">
                      <input
                        name="adhar_card"
                        className="form-control"
                        type="text"
                        placeholder="Enter Adhar Card number"
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
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => setModalShow(true)}
                      >
                        Cancel
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Container>
          </form>
        </div>
      </Container>
    </>
  );
}
