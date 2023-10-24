import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../UserScreens/Signup";
import Login from "../UserScreens/Login";
import Protected from "./Protected";
import DonorForm from "../UserScreens/DonorForm";
import Donate from "../UserScreens/Donate";
import Acceptor from "../UserScreens/Acceptor";
import AcceptorForm from "../UserScreens/AcceptorForm";
// import AcceptorData from "../UserScreens/AcceptorData";

function Approuter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route
            path="/Donor"
            element={<Protected UserScreens={DonorForm} />}
          />
          <Route path="/Donate" element={<Protected UserScreens={Donate} />} />
          <Route
            path="/Acceptor"
            element={<Protected UserScreens={Acceptor} />}
          />
           <Route
            path="/AcceptorForm"
            element={<Protected UserScreens={AcceptorForm} />}
          />
           {/* <Route
            path="/AcceptorData"
            element={<Protected UserScreens={AcceptorData} />}
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default Approuter;