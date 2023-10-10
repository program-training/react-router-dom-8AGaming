// With God's Help

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../utils/GetUsers";
import { useTasks } from "../utils/GeTasks";

const UserTasks = () => {
  const { id } = useUsers();
  const { tasks } = useTasks();
  const task = tasks.find((task) => task.id == id);
  const navigate = useNavigate();
  return (
    <>
      <div id='task'>
        <Typography>Task Title: {task?.title}</Typography>
        <Typography>
          {task?.completed ? "Completed!" : "Not Completed"}
        </Typography>
      </div>
    </>
  );
};

export default UserTasks;
