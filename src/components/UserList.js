import React from "react";

const UserList = (props) => {
  //border-2 border-black
  return (
    <>
      <h2 className="col-span-1 row-span-1">{props.email}</h2>
      <h2 className="col-span-1 row-span-1">{props.username}</h2>
      <h2 className="col-span-1 row-span-1">{props.password}</h2>
    </>
  );
};

export default UserList;
