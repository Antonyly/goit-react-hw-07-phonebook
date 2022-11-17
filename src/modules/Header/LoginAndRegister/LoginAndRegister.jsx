import { NavLink } from "react-router-dom";
import s from "./LoginRegister.module.css";

const LoginAndRegister = () => {
  const linkActive = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };
  return (
    <div className={s.wrapper}>
      <NavLink to={"/login"} className={linkActive}>
        Login
      </NavLink>
      <NavLink to={"/register"} className={linkActive}>
        Register
      </NavLink>
    </div>
  );
};
export default LoginAndRegister;
