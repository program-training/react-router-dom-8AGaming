// With God's Help

import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
  useEffect,
} from "react";
import { Task } from "../interfaces/Task";
import axios from "axios";

type ContextValue = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

const TasksContext = createContext<null | ContextValue>(null);
const { Provider } = TasksContext;

type TasksProviderProps = {
  children: ReactNode;
};

const TasksProvider: FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTasks(res.data))
      .catch((error) => console.error(error));
  });
  return <Provider value={{ tasks, setTasks }}>{children}</Provider>;
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useTasks must be used within a TasksProvider");
  return context;
};

export default TasksProvider;
