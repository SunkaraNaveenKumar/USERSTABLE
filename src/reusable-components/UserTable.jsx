import React, { useState,useContext } from "react";
import { UsersDataStore } from "../context/MyContext";
const Table = () => {

    const { users, setSelectedUser } = useContext(UsersDataStore);

  const handleViewMore = (id) => {
    console.log("id", id);
    const findUser = users.find((user) => user.id === id);
    setSelectedUser(findUser || {});
  };
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>View More Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, name, email, company } = user || {};
            const { name: companyName } = company || {};
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{companyName}</td>
                <td>
                  <button
                    className="border rounded-md bg-blue-100 px-4"
                    onClick={() => handleViewMore(id)}
                  >
                    View Mores
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
