// With God's Help

import axios from "axios";
import {
  useEffect,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";
import { User } from "../interfaces/User";

type GetUsersResponse = {
  data: User[];
};

type ContextValue = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
};

const UsersContext = createContext<null | ContextValue>(null);
const { Provider } = UsersContext;

type UsersProviderProps = {
  children: ReactNode;
};

const UsersProvider: FC<UsersProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    axios
      .get<GetUsersResponse>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error(error));
  });
  return <Provider value={{ users, setUsers, id, setId }}>{children}</Provider>;
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) throw new Error("useUsers must be used within a UsersProvider");
  return context;
};

export default UsersProvider;
