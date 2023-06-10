import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./registration.css";
import earth from "./earth.gif";

function Registration() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    address: "",
    userType: "user",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).max(20).required(),
    address: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div className="signup">
      <div className="simage">
        <img src={earth} alt="EARTH" />
        <h4>For a planet worth living on ... </h4>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="Form1">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <label>Email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autoComplete="off"
            type="email"
            id="inputCreatePost"
            name="email"
            placeholder="Your Email..."
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Your Password..."
          />

          <label>Address: </label>
          <ErrorMessage name="address" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="inputCreatePost"
            name="address"
            placeholder="Your Address..."
          />

          <select className="usertype" name="userType">
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>

          <button type="submit"> Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
