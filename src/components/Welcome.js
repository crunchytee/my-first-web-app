import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="grid place-items-center m-10">
      <div className="w-fit-content items-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="block p-6 w-fit-content">
            This is the welcome page. Welcome to my page. I hope you like it
            here.{" "}
            <a className="underline text-blue-600">
              <Link to="/login">Log In</Link>
            </a>
          </h1>
          <h1 className="block p-6 w-fit-content">
            Looking for the{" "}
            <a className="underline text-blue-600">
              <Link to="/dashboard">Dashboard?</Link>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
