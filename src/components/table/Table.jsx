import React, { useEffect, useState } from "react";
import "./table.scss";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const Table = ({ data }) => {
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);
  //getCategoriesApi
  async function getCatigories() {
    await axios
      .get("https://api.dezinfeksiyatashkent.uz/api/categories")
      .then((res) => setCategories(res?.data?.data));
  }

  useEffect(() => {
    getCatigories();
  }, []);

  //getFaqs Api

  async function getFaqs() {
    await axios
      .get("https://api.dezinfeksiyatashkent.uz/api/faqs")
      .then((res) => setFaqs(res?.data?.data));
  }

  useEffect(() => {
    getFaqs();
  }, []);

  //getParams

  const params = useLocation()?.pathname;
  console.log(faqs);

  return (
    <div className="table-container">
      <table className="dashboard-table">
        <thead>
          {params === "/faqs" ? (
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          ) : (
            <tr>
              <th>T/R</th>
              <th>ID</th>
              <th>Name</th>
              <th>Describtions</th>
              <th>Actions</th>
            </tr>
          )}
        </thead>
        <tbody>
          {params === "/categories" ? (
            categories.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item?.description}</td>
                <td>
                  <button className="btn btn-edit">Edit</button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
            ))
          ) : params === "/faqs" ? (
            faqs.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.text_uz}</td>
                <td>
                  <button className="btn btn-edit">Edit</button>
                  <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
