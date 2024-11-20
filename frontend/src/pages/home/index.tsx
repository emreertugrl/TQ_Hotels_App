import Container from "../../components/container";
import Filter from "./Filter";
import Hero from "./Hero";
import List from "./List";

const Home = () => {
  return (
    <Container design="my-5">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-4 max-lg:mt-10 gap-5">
        <Filter />
        <List />
      </div>
    </Container>
  );
};

export default Home;
