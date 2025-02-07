import { useSelector } from "react-redux";

import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { Toaster } from "react-hot-toast";

const Authenticate = () => {
  const isSigninFormVisible = useSelector(
    (store) => store.app.isSigninFormVisible
  );

  return (
    <section className="w-full h-dvh bg-noteoo-100 flex items-center justify-center flex-col gap-10 font-[gilroy-light] font-bold p-4">
      <Toaster />
      {isSigninFormVisible ? <Signin /> : <Signup />}
    </section>
  );
};

export default Authenticate;
