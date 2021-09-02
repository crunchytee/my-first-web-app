import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import LoginContext from "./LoginContext";

const Login = () => {
  const USERNAME = /admin/;
  const PASWORD = /password/;
  const [loginContext, setLoginContext] = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    history.push("/dashboard");
    setLoginContext({ authenticated: true });
  };
  return (
    <div className="grid place-items-center h-screen w-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-xl font-medium text-black p-6 block mx-36">
          Log In
        </div>
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
          <input
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-36 my-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
