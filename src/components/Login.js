import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm({ mode: "onBlur" });
const history = useHistory();
const onSubmit = (data) => {
  console.log(data);
  history.push("/success");
};

const Login = () => {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      ></form>
    </div>
  );
};

export default Login;
