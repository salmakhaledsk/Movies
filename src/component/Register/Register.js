import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../services/auth";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const handelValidation = (ev) => {
    if (ev.target.name === "email") {
      setUser({ ...user, email: ev.target.value });
      setError({
        ...errors,
        emailError:
          ev.target.value.length === 0
            ? "Email is required"
            : ev.target.value.includes("@")
            ? ""
            : "Invalid email",
      });
    } else if (ev.target.name === "password") {
      setUser({ ...user, password: ev.target.value });
      setError({
        ...errors,
        passwordError:
          ev.target.value.length === 0
            ? "Password is required"
            : ev.target.value.match(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
              )
            ? ""
            : "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character",
      });
    }
  };
  //////111111////////////////

  const handelSubmit = async (ev) => {
    ev.preventDefault();
    if (!errors.emailError && !errors.passwordError) {
      try {
        await userRegister(user.email, user.password);
        toast.success("Register successful");
        navigate("/login");

      } catch (error) {
        toast.error("Registration failed");
      }
    } else {
      toast.error("Invalid validation");
    }
  };

  return (
    <>
      <div className="login-card " style={{  marginTop:"10%" }}> 
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(ev) => {
                handelValidation(ev);
              }}
            />
            <p className="text-danger">{errors.emailError}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              className="form-control"
              id="exampleInputPassword1"
              onChange={(ev) => {
                handelValidation(ev);
              }}
            />
            <p className="text-danger">{errors.passwordError}</p>
          </div>
          <button type="submit" className="btn btn-success btnn">
            Submit
          </button>
          <Toaster position="top-center" />
        </form>
      </div>
    </>
  );
}

export default Register;
