import { useContext, useEffect, useState } from "react";
import LoginContext from "../LoginContext";
import UserList from "./UserList";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://127.0.0.1:5000/all");
      const data = await response.json();
      console.log(data.users);
      setUsers(data.users);
    };
    getUsers();
  }, []);
  const { authenticated, setAuthenticated } = useContext(LoginContext);
  return (
    <div className="">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="block p-6">Welcome to the dashboard!</h1>
        <h2 className="block p-6">
          Authentication Status: {JSON.stringify(authenticated)}
        </h2>
        <div className="grid grid-cols-3 grid-rows-auto divide-y-2 divide-black divide-solid border-2 border-black">
          <div className="grid grid-cols-3 grid-rows-auto col-span-3 row-span-1">
            <h2 className="">Email</h2>
            <h2 className="">Username</h2>
            <h2 className="">Password</h2>
          </div>
          {users.map((user, i) => (
            <UserList
              className="w-min h-min"
              key={user.id}
              email={user.email}
              username={user.username}
              password={user.password}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
