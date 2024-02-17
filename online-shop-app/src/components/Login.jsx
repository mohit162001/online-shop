import React from "react";
import "./CSS/login.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { storeUserData } from "../helper";

function LoginPage() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      identifier: formData.get("username"),
      password: formData.get("password"),
    };

    if (userData.identifier === "" || userData.password === "") {
      toast.error("Please enter valid input");
    }
    try {
      if (userData.identifier !== "" && userData.password !== "") {
        const response = await fetch("http://localhost:1337/api/auth/local", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const resData = await response.json();

        console.log(resData);
        if (!response.ok) {
          throw Error
        } else if (response.ok) {
          toast.success("Login successfully");
          storeUserData(resData)
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
       
      }
    } catch (error) {
        toast.error("Something went wrrog");
    }
  
  }
  return (
    <>
      <Toaster />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="name or email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>
          <button type="submit">Login</button>
          <p className="signup-message">
            New user ?{" "}
            <span>
              <Link to="/signup">Signup</Link>
            </span>
            here
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
