import React, { useContext } from "react";
import { UsersDataStore } from "../context/MyContext";

const MoreDetails = () => {
  const { selectedUser } = useContext(UsersDataStore);
  return (
    <div className=" border">
      {Object.keys(selectedUser).length ? (
        Object.entries(selectedUser)?.map(([key, value]) => {
          if (typeof value !== "object") {
            return (
              <div className="flex row gap-x-2 bg-red-100 rounded-md">
                <p>{key}</p>
                <p>{value}</p>
              </div>
            );
          } else {
            return (
              <div className="flex row gap-x-2 bg-red-100 rounded-md">
                <p>{key}</p>
                <p>{JSON.stringify(value)}</p>
              </div>
            );
          }
        })
      ) : (
        <p>Please click on view more to get the more details</p>
      )}
    </div>
  );
};

export default MoreDetails;
