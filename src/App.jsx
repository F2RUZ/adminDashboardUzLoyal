import React, { useEffect } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Categories from "./pages/Categories";
import Faqs from "./pages/Faqs";
import News from "./pages/News";
import Servises from "./pages/Servises";
import Blogs from "./pages/Blogs";
import Sources from "./pages/Sources";

const App = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  useEffect(() => {
    if (token?.length > 30) {
      navigate("/categories");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <ToastContainer />

      {token ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/categories" element={<Categories />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/news" element={<News />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Servises />} />
            <Route path="/sources" element={<Sources />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
