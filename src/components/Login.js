import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
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
    setAuthenticated(true);
    history.push("/dashboard");
  };
  return (
    <div className="w-screen md:grid md:place-items-center">
      <form
        className="md:grid md:place-items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-fit-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid place-items-center text-xl font-medium text-black p-6">
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
        <button
          type="submit"
          className="bg-button w-100% md:w-auto hover:bg-buttonHover text-white font-bold py-2 px-4 my-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
