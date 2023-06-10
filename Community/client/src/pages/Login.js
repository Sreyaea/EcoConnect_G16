import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import "./login.css";
import earth from "./earth.gif";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);
  let history = useHistory();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        history.push("/");
      }
    });
  };

  return (
    <div className="login">
      <div className="simage">
        <img src={earth} alt="EARTH" />
        <h4>For a planet worth living on ... </h4>
      </div>
      <div className="loginContainer">
        <label>Username:</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <label>Or</label>
        <Link to="/registration">
          <button>Registration</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
