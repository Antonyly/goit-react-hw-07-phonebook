import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCurrentUser } from "./redux/auth/auth-operations";

import Header from "./modules/Header";
import UserRoutes from "./UserRoutes";

import "./index.css";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);



  return (
    <>
      <div >
      <Header />
          
      <UserRoutes />
      </div>
    </>
  );
};

export default App;
