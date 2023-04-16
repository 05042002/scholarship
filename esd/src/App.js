import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import Landingpage from "./components/Langingpage";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Merit from "./components/Merit";
import ScholarshipInfo from "./components/ScholarshipInfo";
import BasicExample from "./components/BasicExample";
import ApplicationForm from "./components/ApplicationForm";
import BankAndIncomeDetailsForm from "./components/BankAndIncomeDetailsForm";
import AcademicDetailsForm from "./components/AcademicDetailsForm";
import InstituteRegistrationForm from "./components/InstitueRegistrationForm";
import Eg from "./components/eg";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    document.title = "Scholarship Management Website";
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      />
      {/* ====  REMIXICON CDN ==== */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/* ==== ANIMATE ON SCROLL CSS CDN  ==== */}
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      {/* <Merit/> */}
      {/* <Navbar/> */}
      {/* <Landingpage/> */}
      {/* <ScholarshipInfo/> */}
      {/* <BasicExample/> */}
      {/* <ApplicationForm/> */}
      {/* <BankAndIncomeDetailsForm/> */}
      {/* <AcademicDetailsForm/> */}
      {/* <InstituteRegistrationForm/> */}
      {/* <Eg/> */}
      {/* <Forms/> */}
      {/* <Router>
      <Switch>
        <Route exact path="/" component={Dictionary} />
        <Route path="/details/:key" component={Details} />
      </Switch>
    </Router> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage />} />
          <Route path="merit-scholarships" element={<Eg />} />
          <Route
            path="student-application-form"
            element={<ApplicationForm />}
          />
          <Route
            path="institute-registration-form"
            element={<InstituteRegistrationForm />}
          />
          <Route
            path="scholarship-information"
            element={<ScholarshipInfo />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
