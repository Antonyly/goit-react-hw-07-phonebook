import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { initialState } from "./initialState";
import { fields } from "./fields";

import useForm from "../../shared/hooks/useForm";
import useIsLogin from "../../shared/hooks/useLogin";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";

import s from "./RegisterForm.module.css";

const RegisterForm = ({ onSubmit }) => {

  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const isLogin = useIsLogin();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  const { name, email, password } = state;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField value={password} onChange={handleChange} {...fields.password} />
      <Button text="Register" />
    </form>
  );
};

RegisterForm.defaultProps = {
  onSubmit: () => {},
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
