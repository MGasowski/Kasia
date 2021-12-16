import Features from "../components/Features";
import Packages from "../components/Packages";
import Spacer from "../components/Spacer";
import Team from "../components/TeamSection";
import Landing from "./Landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Spacer />
      <Features />
      <Packages />
      <Team />
    </>
  );
};

export default Home;
