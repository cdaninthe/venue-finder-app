import { createContext } from "react";

// NC
const UserContext = createContext({
    user: '',
    setUser: () => {},
  });

export default UserContext;