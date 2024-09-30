import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import Categories from "../../pages/Categories";
import Faqs from "../../pages/Faqs";
import News from "../../pages/News";
import Blogs from "../../pages/Blogs";
import Servises from "../../pages/Servises";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import './layout.scss'
import Sources from "../../pages/Sources";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <SideBar />
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/news" element={<News />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Servises />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
