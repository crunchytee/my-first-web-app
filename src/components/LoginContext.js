import { createContext } from "react";

const LoginContext = createContext([
  { authenticated: false, username: null, data: { "favorite color": null } },
  () => {},
]);

export default LoginContext;
