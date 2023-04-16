import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";

export default function Forms() {
  return (
    <>
    <Navbar/>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Form Wizards</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Form Wizards
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-6 col-sm-12 text-right">
                  <div className="dropdown">
                    <a
                      className="btn btn-primary dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                    >
                      January 2018
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Export List
                      </a>
                      <a className="dropdown-item" href="#">
                        Policies
                      </a>
                      <a className="dropdown-item" href="#">
                        View Assets
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <h4 className="text-blue h4">Step wizard</h4>
                <p className="mb-30">jQuery Step wizard</p>
              </div>
              <div className="wizard-content">
                <form className="tab-wizard wizard-circle wizard">
                  <h5>Personal Info</h5>
                  <section>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email Address :</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone Number :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Select City :</label>
                          <select className="custom-select form-control">
                            <option value="">Select City</option>
                            <option value="Amsterdam">India</option>
                            <option value="Berlin">UK</option>
                            <option value="Frankfurt">US</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date of Birth :</label>
                          <input
                            type="text"
                            className="form-control date-picker"
                            placeholder="Select Date"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Step 2 */}
                  <h5>Job Status</h5>
                  <section>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Job Title :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Company Name :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Job Description :</label>
                          <textarea
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Step 3 */}
                  <h5>Interview</h5>
                  <section>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Interview For :</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Interview Type :</label>
                          <select className="form-control">
                            <option>Normal</option>
                            <option>Difficult</option>
                            <option>Hard</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Interview Date :</label>
                          <input
                            type="text"
                            className="form-control date-picker"
                            placeholder="Select Date"
                          />
                        </div>
                        <div className="form-group">
                          <label>Interview Time :</label>
                          <input
                            className="form-control time-picker"
                            placeholder="Select time"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Step 4 */}
                  <h5>Remark</h5>
                  <section>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Behaviour :</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Confidance</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Result</label>
                          <select className="form-control">
                            <option>Select Result</option>
                            <option>Selected</option>
                            <option>Rejected</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Comments</label>
                          <textarea
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <h4 className="text-blue h4">Step wizard vertical</h4>
                <p className="mb-30">jQuery Step wizard</p>
              </div>
              <div className="wizard-content">
                <form className="tab-wizard wizard-circle wizard vertical">
                  <h5>Personal Info</h5>
                  <section>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email Address :</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone Number :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Select City :</label>
                          <select className="custom-select form-control">
                            <option value="">Select City</option>
                            <option value="Amsterdam">India</option>
                            <option value="Berlin">UK</option>
                            <option value="Frankfurt">US</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date of Birth :</label>
                          <input
                            type="text"
                            className="form-control date-picker"
                            placeholder="Select Date"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Step 2 */}
                  <h5>Job Status</h5>
                  <section>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Job Title :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Company Name :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Job Description :</label>
                          <textarea
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Step 3 */}
                  <h5>Interview</h5>
                  <section>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Interview For :</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Interview Type :</label>
                          <select className="form-control">
                            <option>Normal</option>
                            <option>Difficult</option>
                            <option>Hard</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Interview Date :</label>
                          <input
                            type="text"
                            className="form-control date-picker"
                            placeholder="Select Date"
                          />
                        </div>
                        <div className="form-group">
                          <label>Interview Time :</label>
                          <input
                            className="form-control time-picker"
                            placeholder="Select time"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Step 4 */}
                  <h5>Remark</h5>
                  <section>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Behaviour :</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Confidance</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Result</label>
                          <select className="form-control">
                            <option>Select Result</option>
                            <option>Selected</option>
                            <option>Rejected</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Comments</label>
                          <textarea
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
            {/* success Popup html Start */}
            <div
              className="modal fade"
              id="success-modal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body text-center font-18">
                    <h3 className="mb-20">Form Submitted!</h3>
                    <div className="mb-30 text-center">
                      {/* <img src="vendors/images/success.png" /> */}
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
