import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Authenticate = () => {
  const navigate = useNavigate();

  const token = useSelector((store) => store.token.token);
  const isSigninFormVisible = useSelector(
    (store) => store.app.isSigninFormVisible
  );

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <section className="w-full h-dvh bg-noteoo-100 flex items-center justify-center flex-col gap-10 font-[gilroy-light] font-bold p-4">
      {isSigninFormVisible ? <Signin /> : <Signup />}
    </section>
  );
};

export default Authenticate;
