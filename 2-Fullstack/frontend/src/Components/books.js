import React, { useState, useEffect } from "react";
// import "./books.css";
import axios from "axios";
const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/books/show").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const showData = data.map((data, id) => {
    return (
      <tr key={id}>
        <td>
          <img src={data.image} alt="gambar" />
        </td>
        <td>{data.bookTitle}</td>
        <td>{data.years}</td>
        <td>{data.description}</td>
        <td>{data.status}</td>
      </tr>
    );
  });

  return (
    <div>
      <table
        className="table table-dark table-striped table-hover justify-content-center text-center"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Book Title</th>
            <th scope="col">years</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>{showData}</tbody>
      </table>
    </div>
  );
};

export default Books;
