// With God's Help
import { Navigate, useNavigate, useParams } from "react-router-dom";
import GetUsers, { useUsers } from "../utils/GetUsers";

const Home = () => {
  const navigate = useNavigate();
  const { users, setId } = useUsers();
  return (
    <div>
      {users.map((user) => (
        <div
          onClick={() => {
            if (!user) return <Navigate replace to={"/"} />;
            else {
              setId(user.id);
              navigate(`/${user.id}/userdetails/`);
            }
          }}
          key={user.id}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Home;
