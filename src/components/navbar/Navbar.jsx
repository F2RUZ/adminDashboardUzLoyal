import React, { useEffect } from "react";
import "./navbar.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLog = () => {
    toast.warning("LogOut", {
      position: "top-center",
      autoClose: 1500,
    });

    // Tokenni o'chirish va navigatsiyani bir vaqtning o'zida amalga oshirish
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/"); // Logout tugmasi bosilgandan keyin asosiy sahifaga o'tish
    }, 1500); // Toast xabari ko'rsatilgandan keyin 1.5 soniyadan so'ng o'tadi
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">Admin Dashboard</div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item navbar__menu-item--active">
          Dashboard
        </li>
      </ul>
      <div onClick={handleLog} className="navbar__user">
        <span className="navbar-out"> 🚪</span>
        <span className="navbar__user__name">Admin</span>
      </div>
    </div>
  );
};

export default Navbar;
