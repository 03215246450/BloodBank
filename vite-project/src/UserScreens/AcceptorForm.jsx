import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../Component/Buttons";
import Input from "../Component/Input";
import { fbLogin } from "../Router/Fbmethods";
import Select from "../Component/Select";





export default function Signup() {
  const [model, setModel] = useState({ name: "", email: "", password: "", Gender: "", Address: "",
   Phonenum: "", BloodGroup: "" });
   const [donorData, setDonorData] = useState([]);
  const navigate = useNavigate();

  const fillModel = (key, val) => {
    setModel({ ...model, [key]: val });
  };

  const signUpUser = () => {
    fbLogin(model)
      .then((res) => {
        setDonorData([...donorData, model]);
        navigate( "/Donate", { state: { donorData } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="login-container">
      <div className="container">
      </div>
      <div className="container m-auto py-2">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 m-auto border rounded p-4 shadow">
              <h1 className="login-heading text-center">Acceptor Form</h1>

              <div>
                <Input
                  onChange={(e) => fillModel("name", e.target.value)}
                  label="Name"
                  type="text"
                />
              </div>

              <div>
                <Input
                  onChange={(e) => fillModel("Address", e.target.value)}
                  label="Address"
                  type="text"
                />
              </div>

              <div>
                <Input
                  onChange={(e) => fillModel("Phone Number", e.target.value)}
                  label="Phone Number"
                  type="text"
                />
              </div>


              <div>
                <Input
                  onChange={(e) => fillModel("Gender", e.target.value)}
                  label="Gender"
                  type="text"
                />
              </div>


      <div>
                <Select
                  getValue={(e) => fillModel("role", e)} 
                  label="Blood Group"
                  options={[
                    {
                      value: "A Blood ",
                      displayName: "A Blood",
                    },
                    {
                      value: "B Blood",
                      displayName: "B Blood",
                    },
                    {
                        value: "AB Blood",
                        displayName: "AB Blood",
                      },
                      {
                        value: "O Blood",
                        displayName: "O Blood",
                      },
                  ]}
                />
              </div> 
          

              <div>
                <Input
                  onChange={(e) => fillModel("email", e.target.value)}
                  label="Email"
                  type="email"
                />
              </div>

              <div>
                <Input
                  onChange={(e) => fillModel("password", e.target.value)}
                  label="Password"
                  type="password"
                />
              </div>

              <Buttons onClick={signUpUser} label="Submit" />

           
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}



