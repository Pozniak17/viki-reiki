import "./App.css";
import Certification from "./components/Certification/Certification/Certification";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Introduce from "./components/Introduce/Introduce";
import Services from "./components/Services/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Introduce />
      <Services />
      <Certification />
    </>
  );
}

export default App;
