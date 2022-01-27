import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditUser = (props) => {
  // Regex for editing - this is temp
  const USERNAME = /^[a-z0-9_-]{3,15}$/;
  const PASSWORD =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  // React hook form stuff
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  // Push updates to the db on form submit / handlesubmit
  const onSubmit = async (data) => {
    data.email = props.email;
    await fetch("http://127.0.0.1:5000/edit", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.setRefetch(!props.refetch);
    props.toggleModal();
  };

  // Another way to do it
  // const onSubmit = (data) => {
  //   data.email = props.email;
  //   fetch("http://127.0.0.1:5000/edit", {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //     props.setRefetch(!props.refetch);
  //     props.toggleModal();
  //     console.log("set didsubmit changed!");
  //   }).catch((error) => {
  //     console.log(error)
  //   });
  // };

  //set field values
  useEffect(() => {
    setValue("username", props.username);
    setValue("password", props.password);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-fit-content"
    >
      <h2 className="w-fit-content mx-auto text-xl font-medium text-black p-6">
        Edit "{props.email}"
      </h2>
      <label
        htmlFor="username"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {" "}
        Username
        <input
          id="username"
          className="w-100% md:w-fit-content block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={props.username}
          {...register("username", {
            pattern: {
              value: USERNAME,
              message: "Please enter a valid username",
            },
          })}
        />
        {errors["username"] && (
          <p className="text-red-500">{errors["username"].message}</p>
        )}
      </label>
      <label
        htmlFor="password"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {" "}
        Password
        <input
          id="password"
          className="w-100% md:w-fit-content block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={props.password}
          {...register("password", {
            pattern: {
              value: PASSWORD,
              message: "Please enter a valid password",
            },
          })}
        />
        {errors["password"] && (
          <p className="text-red-500">{errors["password"].message}</p>
        )}
      </label>
      <button
        type="submit"
        className="bg-button w-100% hover:bg-buttonHover text-white font-bold py-2 px-4 my-4 rounded "
      >
        Submit and close
      </button>
    </form>
  );
};

export default EditUser;
