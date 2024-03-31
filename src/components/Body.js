import React, { useState } from "react";
import "../styles/BodyStyles.css";

function Body() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [data, setData] = useState([]);

  const handleInput = (e, name) => {
    setInput((item) => {
      return { ...item, [e.target.name]: e.target.value };
    });
  };

  const handleData = () => {
    const newData = {
      name: input.name,
      email: input.email,
      contact: input.contact,
    };

    if (
      input.name.length < 1 &&
      input.email.length < 1 &&
      input.contact.length < 1
    ) {
      alert("Enter Valid Details");
    } else {
      setData([...data, newData]);
    }

    setInput({
      name: "",
      email: "",
      contact: "",
    });
  };

  return (
    <>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <h3>Enter Your Details Here:📝</h3>
          <div className="flexbox-item-1-1">
            Name: {"  "}
            <input
              type="text"
              name="name"
              value={input.name}
              placeholder="Text..."
              className="input-field"
              onChange={(e) => {
                handleInput(e, "name");
              }}
            />
          </div>
          <br />
          <div className="flexbox-item-1-1">
            Email: {"  "}
            <input
              type="email"
              name="email"
              value={input.email}
              placeholder="Text..."
              className="input-field"
              onChange={(e) => {
                handleInput(e, "email");
              }}
            />
          </div>
          <br />
          <div className="flexbox-item-1-1">
            Contact: {"  "}
            <input
              type="number"
              name="contact"
              value={input.contact}
              placeholder="Digits..."
              className="input-field"
              onChange={(e) => {
                handleInput(e, "contact");
              }}
            />
          </div>
          <br />
          <div>
            <button
              className="add-button"
              onClick={(e) => {
                handleData(e);
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flexbox-item flexbox-item-2">
          <h3>Your data</h3>
          <table className="table">
            <thead className="table th">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Body;
