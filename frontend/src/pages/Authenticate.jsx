import React from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Authenticate = () => {
  return (
    <section className="w-full h-dvh bg-noteoo-100 flex items-center justify-center flex-col gap-10 font-[gilroy-light] font-bold p-4">
      {/* <Signin /> */}
      <Signup />
    </section>
  );
};

export default Authenticate;
