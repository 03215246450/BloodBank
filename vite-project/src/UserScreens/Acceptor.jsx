import React from "react";
import Buttons from "../Component/Buttons";
import { useNavigate } from "react-router-dom";
import "./Acceptor.css"

export default function Acceptor({ location }) {
  const navigate = useNavigate();
  const go = () => {
    navigate("/AcceptorForm");
  }

 
  const donorData = location?.state?.donorData || [];

  return (
    <>
    <div className="bg-images">
  <div className="container">
      <h1 className="text-white">Acceptor Screen</h1>
      <h4 className="text-center p-2 m-2 my-5 text-white">Acceptor registration</h4>
      <p className="text-center p-2 m-2 text-white">If you have not the same blood group, go to the registration Form</p>
      <Buttons onClick={go} label="Register" />

      <table className="table text-white py-5">
        <thead className="thead py-5">
          <tr className="thead py-5">
            <th>Name</th>
            <th>Address</th>
            <th>Phone Num</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="thead py-5">
          {donorData.map((data, index) => (
            <tr key={index}>
              <td>{data.Name}</td>
              <td>{data.Address}</td>
              <td>{data["Phone Num"]}</td>
              <td>{data["Blood Group"]}</td>
              <td>{data.Gender}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}



