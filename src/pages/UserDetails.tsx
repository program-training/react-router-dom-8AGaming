// With God's Help

import { Button, Typography } from "@mui/material";
import { useUsers } from "../utils/GetUsers";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id, users } = useUsers();
  const user = users.find((user) => user.id == id);
  const navigate = useNavigate();
  return (
    <>
      <Typography>{user?.email}</Typography>
      <Typography>
        {user?.address.street}, {user?.address.city}
      </Typography>
      <Typography>{user?.phone}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate(`/${id}/userdetails/tasks/`);
        }}
      >
        Tasks
      </Button>
    </>
  );
};

export default UserDetails;
