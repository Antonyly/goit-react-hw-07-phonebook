import { NavLink } from "react-router-dom";
import useIsLogin from "../../shared/hooks/useLogin";
import UserMenu from "./UserMenu";
import LoginAndRegister from "./LoginAndRegister";
import { useTheme } from "../../shared/hooks/useTheme";

import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import s from "./header.module.css";

const Header = () => {
  const {theme, setTheme} = useTheme();
  const isLogin = useIsLogin();

  const linkActive = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };

  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

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
          {theme === 'dark' ? <div className={s.dark} onClick={handleLightThemeClick}>
            <NightlightOutlinedIcon/>
          </div> : <div className={s.light} onClick={handleDarkThemeClick}>
            <WbSunnyOutlinedIcon/>
          </div>}
          {isLogin ? <UserMenu /> : <LoginAndRegister />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
