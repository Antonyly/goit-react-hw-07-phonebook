import { NavLink } from "react-router-dom";
import useIsLogin from "../../shared/hooks/useLogin";
import UserMenu from "./UserMenu";
import LoginAndRegister from "./LoginAndRegister";

import s from "./header.module.css";

const Header = () => {
  const isLogin = useIsLogin();

  const linkActive = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };


  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          {isLogin ? (
            <NavLink to={"/contacts"} className={linkActive}>
              Contacts
            </NavLink>
          ) : (
            <NavLink to={"/"} className={linkActive}>
              Home
            </NavLink>
          )}
          {isLogin ? <UserMenu /> : <LoginAndRegister />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
