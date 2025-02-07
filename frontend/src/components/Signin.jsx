import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { setIsSigninFormVisible } from "../store/reducers/app.slice";
import useSigninHandler from "../hooks/useSigninHandler";

const Signin = () => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handler, loading } = useSigninHandler(reset);

  const toggleFormHandler = () => dispatch(setIsSigninFormVisible(false));

  return (
    <form
      onSubmit={handleSubmit(handler)}
      className="w-full sm:w-[600px] p-4 bg-noteoo-200 rounded-lg flex flex-col gap-4 tracking-wider shadow-xl text-zinc-800"
    >
      <div className="mb-5">
        <h1 className="text-5xl text-center font-[gilroy-bold] mb-1">
          Noteoo
        </h1>

        <h2 className="text-lg text-center leading-[1.1] text-zinc-700">
        Hello again! Ready to jot down something new?
        </h2>
      </div>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border-2 border-noteoo-300 rounded-lg p-2 outline-none focus:border-blue-400 focus:shadow-[0px_0px_10px_#BB9AB1]"
        {...register("email", { required: true })}
      />

      {errors?.email && (
        <p className="text-sm text-red-600 leading-0 mb-3 pl-1">
          Email is required
        </p>
      )}

      <input
        type="password"
        placeholder="Enter your password"
        className="w-full border-2 border-noteoo-300 rounded-lg p-2 outline-none focus:border-blue-400 focus:shadow-[0px_0px_10px_#BB9AB1]"
        {...register("password", { required: true })}
      />

      {errors?.password && (
        <p className="text-sm text-red-600 leading-0 mb-3 pl-1">
          Password is required
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-noteoo-400 text-white rounded-lg p-3 tracking-widest cursor-pointer duration-300 hover:bg-noteoo-500 mt-2"
      >
        {loading ? "Loading...." : "Sign in"}
      </button>

      <p
        onClick={toggleFormHandler}
        className="text-sm text-center text-noteoo-500 cursor-pointer outline-none focus:bg-noteoo-500"
      >
        Don't have an account?
        <span className="text-zinc-900"> Sign up now.</span>
      </p>
    </form>
  );
};

export default Signin;
