import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import EditUser from "./EditUser";

const UserList = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="grid grid-cols-3 grid-rows-auto col-span-3 row-span-1">
      <h2 className="">{props.email}</h2>
      <button className="text-left" onClick={toggleModal}>
        {props.username}
      </button>
      <button className="text-left" onClick={toggleModal}>
        {props.password}
      </button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false}>
        <EditUser
          email={props.email}
          username={props.username}
          password={props.password}
          toggleModal={toggleModal}
          refetch={props.refetch}
          setRefetch={props.setRefetch}
        />
      </Modal>
    </div>
  );
};

export default UserList;
