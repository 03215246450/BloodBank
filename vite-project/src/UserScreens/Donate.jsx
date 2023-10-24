import React from "react";
import { useNavigate } from "react-router-dom";
import DonorData from "./DonorData"
import "./Donate.css";




function Donate() {
  const donate = () => {
    navigate("/Donor");
  };
  const navigate = useNavigate();



  return (
    <>
      <div className="bg-image">
        <div className="container">
          <div className="text-overlay">
            <h1 className="">Donate Blood 
            <button onClick={donate} className="btn btn-light text-dark fs-5 m-2">
              Donate
            </button>
            </h1>
          </div>
        </div>
        

      </div>
    </>
  );
}

export default Donate;
