import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import LoginContext from "../LoginContext";
import Modal from "react-modal/lib/components/Modal";

const Login = () => {
  const USERNAME = /admin/;
  const PASWORD = /password/;
  const { authenticated, setAuthenticated } = useContext(LoginContext); // eslint-disable-line no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Nothing!");

  // React hook form initiation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  // Setup history for submit
  const history = useHistory();

  // Handle submit
  const onSubmit = async (data) => {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Response status: ${response.status}`);

    // Reroute on success/unsuccess.
    // This is great but it doesn't work when the request doesn't return a response at all (server not online)
    if (response.status === 200) {
      setAuthenticated(true);
      history.push("/dashboard");
    } else if (response.status === 401) {
      history.push("/login");
      setErrorMessage(
        "That wasn't quite right. Are you who you say you are, or are you just forgetting your credentials?"
      );
      toggleModal();
    } else {
      setErrorMessage("Something went wrong on our end...");
      toggleModal();
    }
  };
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className="md:w-fit-content md:mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-fit-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-fit-content mx-auto text-xl font-medium text-black p-6">
          Log In
        </div>
        <label
          htmlFor="email-address"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email Address
          <input
            id="email-address"
            className="w-100% md:w-fit-content block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email Address"
            {...register("email-address", {
              required: "Email Address required",
              // There is no pattern
              // pattern: {
              //   value: USERNAME,
              //   message: "Invalid email address",
              // },
            })}
          />
          {errors["email-address"] && (
            <p className="text-red-500">{errors["email-address"].message}</p>
          )}
        </label>
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
          <input
            id="password"
            className="w-100% md:w-fit-content block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            {...register("password", {
              required: "Password required",
              //There is no pattern
              // pattern: {
              //   value: PASWORD,
              //   message: "Invalid password. Try 'password'",
              // },
            })}
          />
          {errors["password"] && (
            <p className="text-red-500">{errors["password"].message}</p>
          )}
        </label>
        <div className="mx-auto md:w-fit-content">
          <button
            type="submit"
            className="bg-button w-100% hover:bg-buttonHover text-white font-bold py-2 px-4 my-4 rounded "
          >
            Submit
          </button>
        </div>
        <p>
          First time here?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </form>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
      >
        <div className="w-fit-content mx-auto text-xl font-medium text-black p-6">
          {errorMessage}
        </div>
        <div className="mx-auto md:w-fit-content">
          <button
            onClick={toggleModal}
            className="bg-button w-100% hover:bg-buttonHover text-white font-bold py-2 px-4 my-4 rounded "
          >
            Try Again
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
