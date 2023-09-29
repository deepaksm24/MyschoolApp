import React, { useEffect } from "react";
import { GetCurrentuser } from "../api/users";
// import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { Hideloading, ShowLoading } from "../redux/loadersSlice";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";

function ProtecdRoute({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { loading } = useSelector((state) => state.loaders);

  const { user } = useSelector((state) => state.users);
  // const [user, setUser] = useState(null);

  const getCurrentUser = async () => {
    try {
      dispatch(ShowLoading());

      const response = await GetCurrentuser();

      dispatch(Hideloading());

      if (response.success) {
        //setUser(response.data);
        dispatch(SetUser(response.data));

        // message.success("Login succesful");
      } else {
        //setUser(null);
        dispatch(SetUser(null));
        // message.error(response.message);
      }
    } catch (error) {
      //setUser(null);
      dispatch(SetUser(null));
      dispatch(Hideloading);
      return error.message;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    user && (
      <div>
        
        <div className="content m-1 p-1">{children}</div>
      </div>
    )
  );
}

export default ProtecdRoute;
