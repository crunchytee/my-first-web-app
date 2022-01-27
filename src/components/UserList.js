import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

const UserList = (props) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  function toggleEditModal() {
    setIsEditOpen(!isEditOpen);
  }

  function toggleDeleteModal() {
    setIsDeleteOpen(!isDeleteOpen);
  }

  return (
    <div className="grid grid-cols-4 grid-rows-auto col-span-4 row-span-1">
      <h2 className="">{props.email}</h2>
      <button className="text-left" onClick={toggleEditModal}>
        {props.username}
      </button>
      <button className="text-left" onClick={toggleEditModal}>
        {props.password}
      </button>
      <Modal
        isOpen={isEditOpen}
        onRequestClose={toggleEditModal}
        ariaHideApp={false}
      >
        <EditUser
          email={props.email}
          username={props.username}
          password={props.password}
          toggleModal={toggleEditModal}
          refetch={props.refetch}
          setRefetch={props.setRefetch}
        />
      </Modal>
      <button className="text-left" onClick={toggleDeleteModal}>
        Delete User
      </button>
      <Modal
        isOpen={isDeleteOpen}
        onRequestClose={toggleDeleteModal}
        ariaHideApp={false}
      >
        <DeleteUser
          email={props.email}
          toggleModal={toggleDeleteModal}
          refetch={props.refetch}
          setRefetch={props.setRefetch}
        />
      </Modal>
    </div>
  );
};

export default UserList;
