import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import LoginContext from "../LoginContext";

const Signup = () => {
  const USERNAME = /^[a-z0-9_-]{3,15}$/;
  const PASSWORD =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const EMAIL_ADDRESS = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const { authenticated, setAuthenticated } = useContext(LoginContext); // eslint-disable-line no-unused-vars
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const history = useHistory();
  const onSubmit = async (data) => {
    console.log(data);
    await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setAuthenticated(true);
    history.push("/dashboard");
  };
  return (
    <div className="md:w-fit-content md:mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-fit-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-fit-content mx-auto text-xl font-medium text-black p-6">
          Sign Up
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
              required: "Email address required",
              pattern: {
                value: EMAIL_ADDRESS,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors["email-address"] && (
            <p className="text-red-500">{errors["email-address"].message}</p>
          )}
        </label>

        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
          <input
            id="username"
            className="w-100% md:w-fit-content block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
            {...register("username", {
              required: "Username required",
              pattern: {
                value: USERNAME,
                message:
                  "Invalid username. Try an alphanumeric string that may include _ and - having a length of 3 to 16 characters.",
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
          Password
          <input
            id="password"
            className="w-100% md:w-fit-content block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            {...register("password", {
              required: "Password required",
              pattern: {
                value: PASSWORD,
                message:
                  "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
              },
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
