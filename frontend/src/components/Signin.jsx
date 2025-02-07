import { useForm } from "react-hook-form";

const Signin = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full sm:w-[600px] p-4 bg-noteoo-200 rounded-lg flex flex-col gap-4 tracking-wider shadow-xl"
    >
      <div className="mb-5">
        <h2 className="text-2xl text-center">Welcome back to</h2>

        <h1 className="text-5xl text-center font-[gilroy-bold] leading-[.7]">
          Noteoo
        </h1>
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
        className="bg-noteoo-400 text-white rounded-lg p-3 tracking-widest cursor-pointer duration-300 hover:bg-noteoo-500 mt-2"
      >
        Sign in
      </button>

      <p className="text-sm text-center text-noteoo-500 cursor-pointer">
        Don't have an account?
        <span className="text-zinc-900"> Sign up now.</span>
      </p>
    </form>
  );
};

export default Signin;
