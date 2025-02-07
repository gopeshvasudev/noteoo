import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Header />

      <div className="w-full h-[90vh] flex">
        <Sidebar />

        <main className="flex-1"></main>
      </div>
    </>
  );
};

export default Home;
