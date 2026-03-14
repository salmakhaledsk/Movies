// import "./Login.css";
// import { useForm } from "react-hook-form";

// function LoginForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (

//       <div className="login-card">
//         <h2 className="login-title">Welcome Back</h2>
//         <p className="login-subtitle">Please login to your account</p>
//         <form onSubmit={handleSubmit(onSubmit)} className="login-form">
//           {/* Email Field */}
//           <div className="form-group">
//             <label htmlFor="email" className="form-label">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               placeholder="Enter your email"
//               {...register("email", { required: "Email is required" })}
//             />
//             {errors.email && (
//               <p className="error-message">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Password Field */}
//           <div className="form-group">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className={`form-control ${errors.password ? "is-invalid" : ""}`}
//               placeholder="Enter your password"
//               {...register("password", { required: "Password is required" })}
//             />
//             {errors.password && (
//               <p className="error-message">{errors.password.message}</p>
//             )}
//               {/* Submit Button */}
//           <button type="submit" className="btn btn-primary btn-block btnn">
//             Login
//           </button>
//           </div>

        
//         </form>
//         <p className="login-footer">
//           Don't have an account? <a href="/register">Sign up</a>
//         </p>
//       </div>
   
//   );
// }

// export default LoginForm;
