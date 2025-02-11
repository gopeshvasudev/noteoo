import { GiNotebook } from "react-icons/gi";

const CreateNote = () => {
  return (
    <>
      <section className="w-full h-full overflow-y-auto overflow-x-hidden flex justify-center tracking-wide">
        <div className="w-full sm:w-[600px]">
          <form
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
              />
            </div>

            <div className="input-field">
              <label htmlFor="content" className="text-lg">
                Note content
              </label>

              <textarea
                id="content"
                placeholder="Enter your Note content...."
                className="block border-2 border-noteoo-300 w-full h-[280px] rounded-lg resize-none p-2 bg-noteoo-100 outline-none overflow-y-auto"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-2 py-3 bg-noteoo-300 text-sm tracking-widest rounded-lg cursor-pointer outline-none duration-300 hover:bg-noteoo-400"
            >
              Create
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateNote;
