import React from "react";
import Table from "../components/table/Table";

const Categories = () => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Inactive",
    },
    { id: 3, name: "Tom Johnson", email: "tom@example.com", status: "Active" },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      status: "Pending",
    },
  ];
  return (
    <div>
      <h1>Categories</h1>
      <Table data={data} />
    </div>
  );
};

export default Categories;
