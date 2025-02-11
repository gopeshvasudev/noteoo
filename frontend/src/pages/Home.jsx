import NoteCard from "../components/noteCard";

const Home = () => {
  return (
    <section className="flex flex-col gap-2 w-full h-full">
      <div className="overflow-y-auto w-full h-[100%] flex flex-wrap items-start justify-center gap-5 pb-2">
        <NoteCard />
      </div>
    </section>
  );
};

export default Home;
