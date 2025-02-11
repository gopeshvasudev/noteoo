import { GiNotebook } from "react-icons/gi";
import { useForm } from "react-hook-form";

import useCreateNote from "../hooks/useCreateNote";

const CreateNote = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { handler, loading } = useCreateNote(reset);

  const content = watch("content", "");
  const contentLength = content.length;

  return (
    <>
      <section className="w-full h-full overflow-y-auto overflow-x-hidden flex justify-center tracking-wide">
        <div className="w-full sm:w-[600px]">
          <form
            onSubmit={handleSubmit(handler)}
            method="post"
            className="w-full p-3 bg-noteoo-200 rounded-lg flex flex-col gap-4 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-[gilroy-bold] mb-2 flex items-center gap-1 justify-center text-center">
              <span>
                <GiNotebook />
              </span>
              Create new Note
            </h2>

            <div className="input-field">
              <label htmlFor="title" className="text-lg">
                Note title
              </label>

              <input
                type="text"
                id="title"
                className="w-full bg-noteoo-100 p-2 outline-none border-2 border-noteoo-300 rounded-lg"
                placeholder="Enter your Note title...."
                {...register("title", { required: "Title is required" })}
                aria-label="Note title"
              />

              {errors.title && (
                <p className="text-sm text-red-600 pl-1">
                  {errors.title?.message}
                </p>
              )}
            </div>

            <div className="input-field">
              <label htmlFor="content" className="text-lg">
                Note content
              </label>

              <textarea
                id="content"
                placeholder="Enter your Note content...."
                className={`block border-2 border-noteoo-300 w-full h-[280px] rounded-lg resize-none p-2 bg-noteoo-100 outline-none overflow-y-auto ${
                  contentLength === 5000 && "opacity-90"
                }`}
                maxLength={5000}
                {...register("content", { required: "Content is required" })}
                aria-label="Note content"
              ></textarea>

              <div
                className={`w-full flex items-center text-sm text-zinc-500 ${
                  errors.content ? "justify-between" : "justify-end"
                }`}
              >
                {errors.content && (
                  <p className="text-sm text-red-600 pl-1">
                    {errors.content?.message}
                  </p>
                )}

                <p>
                  <span className="text-black">{contentLength}</span>/5000
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="px-2 py-3 bg-noteoo-300 text-sm tracking-widest rounded-lg cursor-pointer outline-none duration-300 hover:bg-noteoo-400"
              disabled={loading}
            >
              {loading ? "Loading...." : "Create"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateNote;
