import React, { useState } from "react";
import { fbLogin } from "../Router/Fbmethods";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from "../Component/Select";


export default function Login() {
  const [model, setModel] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const fillModel = (key, val) => {
    setModel({ ...model, [key]: val });
  };

  const login = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);
        if (model.role === "Donor") {
          navigate("/Donate");
        } else if (model.role === "Acceptor") {
          navigate('/Acceptor'); 
        }else{
          (console.log("route not found"))
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <Container>
        <h1 className="pt-5 text-dark text-center">Login to Your Account</h1>
        <hr className="w-25 my-5 mx-auto" />

        <Row>
          <Col md={6} className="mx-auto">
            <h1 className="login-heading text-center">Login</h1>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={model.email}
                  onChange={(e) => fillModel("email", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={model.password}
                  onChange={(e) => fillModel("password", e.target.value)}
                />
              </Form.Group>

              <div>
                <Select
                  getValue={(e) => fillModel("role", e)}
                  label="Select Your role"
                  options={[
                    {
                      value: "Donor",
                      displayName: "Donor",
                    },
                    {
                      value: "Acceptor",
                      displayName: "Acceptor",
                    },
                  ]}
                />
              </div>


              <Button
                variant="primary"
                type="button"
                className="w-100 my-2"
                onClick={login}
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


