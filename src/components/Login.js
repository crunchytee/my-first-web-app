import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import LoginContext from "../LoginContext";

const Login = () => {
  const USERNAME = /admin/;
  const PASWORD = /password/;
  const { authenticated, setAuthenticated } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    // fetch("http://127.0.0.1:5000/signup", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
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
          Log In
        </div>
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
                message: "Invalid username. Try 'admin'",
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
                value: PASWORD,
                message: "Invalid password. Try 'password'",
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
    </div>
  );
};

export default Login;
