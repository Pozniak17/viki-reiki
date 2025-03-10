import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
