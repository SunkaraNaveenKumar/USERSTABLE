import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Table from "./reusable-components/UserTable";
import { Spinner } from "./icons/icons";
import MoreDetails from "./reusable-components/MoreDetails";
import { UsersDataStore } from "./context/MyContext";
import ThemeToggleComp from "./Hoc/ThemeToggleComp";

function App() {
  const [selectedUser, setSelectedUser] = useState({});
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fethUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log("Error:", err?.messages);
      } finally {
        setLoading(false);
      }
    };
    fethUsers();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner width="3em" height="3em" />
      </div>
    );
  }

  return (
    <div>
      <UsersDataStore.Provider value={{ users, setSelectedUser, selectedUser }}>
        <Table />
        <div className="w-80 ml-10 mt-10 bg-red-100 flex justify-center items-center h-60">
          <MoreDetails />
        </div>
      </UsersDataStore.Provider>
    </div>
  );
}

export default ThemeToggleComp(App);
