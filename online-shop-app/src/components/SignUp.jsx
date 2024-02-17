import React from "react";
import "./CSS/signup.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function LoginPage() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get('email')
    };
    console.log(userData)

    if (userData.username === "" && userData.password === "") {
      console.log("tost");
      toast.error("Please enter valid input");
    }
    try {
      if (userData.username !== "" && userData.password !== "") {
        console.log("first");
        const response = await fetch("http://localhost:1337/api/auth/local/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const resData = await response.json();
        console.log(resData);
        if (!response.ok) {
            if(resData.error.message === "Email or Username are already taken"){
                toast.error("User or email already exist");
            }else{
                throw Error
            }
          
        } else if (response.ok) {
          toast.success("Login successfully");
          setTimeout(() => {
            navigate("/login");
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
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>SignUp</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
            className="signup-input"
              type="text"
              id="username"
              name="username"
              placeholder="name or email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            className="signup-input"
              type="email"
              id="email"
              name="email"
              placeholder="email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            className="signup-input"
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>
          <button type="submit">Sign up</button>
          <p className="login-message">
            Already have account ? 
            <span>
              <Link to="/login">Login</Link>
            </span>{" "}
            here
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
