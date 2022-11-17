import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/auth/auth-operations";
import RegisterForm from "../../modules/RegisterForm";

const RegisterPage = () => {

  const dispath = useDispatch();

  const handleSubmit = (data) => {
    dispath(signupUser(data));
  };

  return (
    <div className="container">
      <h2>Register:</h2>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};
export default RegisterPage;
