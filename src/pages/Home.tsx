import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import EngineeringMindset from "../sections/EngineeringMindset";
import CurrentlyExploring from "../sections/CurrentlyExploring";
import ContactCTA from "../sections/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <EngineeringMindset/>
      <CurrentlyExploring />
      <ContactCTA />
    </>
  );
};

export default Home;