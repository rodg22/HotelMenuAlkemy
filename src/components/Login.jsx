import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";

const divContainerStyle = {
  marginTop: 40,
};
const divStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 8,
  textAlign: "left",
};
const labelStyle = { marginRight: 4, width: 70 };

const inputs = [
  {
    label: "Email",
    name: "email",
  },
  {
    label: "Password",
    name: "password",
  },
];

function Login() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  async function onSubmit() {
    console.log(
      `Your mail is ${formFields.email} and the password is ${formFields.password}.`
    );
    try {
      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        data: JSON.stringify({
          email: formFields.email,
          password: formFields.password,
        }),
      };
      let res = await axios("http://challenge-react.alkemy.org/", options);
      let json = await res.data;
      swal("Authentication completed!", "Please, check our menu.", "success");
      localStorage.setItem("alkemyToken", json.token);
      console.log(json);
    } catch ({ response }) {
      swal(
        `Error ${response.status}: ${response.statusText}.`,
        response.data.error,
        "error"
      );
    }
  }

  return (
    <div style={divContainerStyle}>
      <h2>Please login to authenticate</h2>
      {inputs.map(({ name, label }) => (
        <div key={name} style={divStyle}>
          <label style={labelStyle}>{label}</label>
          <input
            value={formFields[name]}
            type={name}
            name={name}
            onChange={onChange}
          />
        </div>
      ))}
      <Button
        disabled={!(formFields.email && formFields.password)}
        onClick={onSubmit}
        variant="success"
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
