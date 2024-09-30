import React, { useEffect, useState } from "react";
import "./login.scss"; // SCSS faylini ulash
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormData yaratish
    const formData = new FormData();
    formData.append("phone_number", username);
    formData.append("password", password);

    // Post so'rovi
    axios
      .post("https://api.dezinfeksiyatashkent.uz/api/auth/signin", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // FormData uchun Content-Type
        },
      })
      .then((data) => {
        if (data?.data?.success === true) {
          const token = data?.data?.data?.tokens?.accessToken?.token;
          localStorage.setItem("token", token);
          console.log(token);
          toast.success(data?.data?.message, {
            position: "top-center",
            autoClose: 1500,
          });

          navigate("/categories");
        } else {
          toast.error(data?.data?.message, {
            position: "top-center",
            autoClose: 200,
          });
        }
      })
      .catch((error) =>
        console.error("Error:", error.data ? error.data.data : error.message)
      );

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Dashboard Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
