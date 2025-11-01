import Benefits from "../../components/Benefits/Benefits";
import Certification from "../../components/Certification/Certification/Certification";
import FAQs from "../../components/FAQs/FAQs/FAQs";
import Hero from "../../components/Hero/Hero";
import Introduce from "../../components/Introduce/Introduce";
import Registation from "../../components/Registation/Registration/Registation";
import Services from "../../components/Services/Services/Services";

// ads
import Steps from "../../components/Steps/Steps";
import Video from "../../components/Video/Video";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduce />
      <Services />
      <Benefits />
      <Certification />
      <Video />
      <Steps />
      <FAQs />
      <Registation />
    </>
  );
}
