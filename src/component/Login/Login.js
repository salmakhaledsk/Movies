import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { userLogin } from "../../services/auth";
import toast, { Toaster } from "react-hot-toast";
import { authContext } from "../../context/auth";
import { auth } from "../../services/firebase";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const { setIsAuth } = useContext(authContext);

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
            : ev.target.value.length < 8
            ? "Password must be at least 8 characters long"
            : "",
      });
    }
  };

  const handelSubmit = async (ev) => {
    ev.preventDefault();

    if (!errors.emailError && !errors.passwordError) {
      try {
        const res = await userLogin(user.email, user.password);
        console.log(res.user.accessToken);
        localStorage.setItem("token", res.user.accessToken);

        toast.success("Login successful!");
        setIsAuth(auth);
        navigate("/products");
      } catch (error) {
        toast.error("Login failed. Please try again.");
      }
    } else {
      toast.error("Invalid validation. Please fix the errors.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "450px" ,height:"40%"}}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handelSubmit}>
          <div className="mb-3 text-start">
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
              onChange={handelValidation}
            />
            <p className="text-danger">{errors.emailError}</p>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              className="form-control"
              id="exampleInputPassword1"
              onChange={handelValidation}
            />
            <p className="text-danger">{errors.passwordError}</p>
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Toaster position="top-center" />
        </form>
      </div>
    </div>
  );
}

export default Login;
