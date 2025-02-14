import "./App.css";
import Certification from "./components/Certification/Certification/Certification";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Introduce from "./components/Introduce/Introduce";
import Services from "./components/Services/Services/Services";
import Video from "./components/Video/Video";
import Steps from "./components/Steps/Steps";
import FAQs from "./components/FAQs/FAQs/FAQs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Introduce />
      <Services />
      <Certification />
      <Video />
      <Steps />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
