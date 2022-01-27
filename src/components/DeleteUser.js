import { useState } from "react/cjs/react.development";

const DeleteUser = (props) => {
  // Push updates to the db on form submit / handlesubmit
  const onSubmit = async () => {
    await fetch("http://127.0.0.1:5000/delete", {
      method: "DELETE",
      body: JSON.stringify({ email: props.email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.setRefetch(!props.refetch);

    props.toggleModal();
  };

  return (
    <>
      <h2 className="w-fit-content mx-auto text-xl font-medium text-black p-6">
        Really delete "{props.email}"?
      </h2>
      <button
        onClick={props.toggleModal}
        className="bg-button w-100% hover:bg-buttonHover text-white font-bold py-2 px-4 my-4 rounded "
      >
        Cancel
      </button>
      <button
        onClick={onSubmit}
        className="bg-button w-100% hover:bg-buttonHover text-white font-bold py-2 px-4 my-4 rounded "
      >
        Submit and close
      </button>
    </>
  );
};

export default DeleteUser;
