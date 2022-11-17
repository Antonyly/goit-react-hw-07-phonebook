import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../../../redux/auth/auth-operations";
import { userData } from "../../../redux/auth/auth-selector";

import s from "./UserMenu.module.css";

const UserMenu = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  const user = useSelector(userData).user;
  const { email } = user;

  return (
    <div className={s.wrapper}>
      <p className={s.email}>{email}</p>
      <button onClick={handleClick} className={s.btn} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
