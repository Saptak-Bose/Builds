import type { NextPage } from "next";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
};

export default Home;
