import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "../../redux/auth/auth-operations";

import useIsLogin from "../../shared/hooks/useLogin";

import LoginForm from "../../modules/LoginForm";

const LoginPage = () => {

  const dispatch = useDispatch();

  const isLogin = useIsLogin();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  const handleSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="container">
      <h2>Login:</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
