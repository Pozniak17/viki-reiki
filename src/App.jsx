import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MyStory from "./pages/MyStory/MyStory";
import NotFound from "./pages/NotFound/NotFound";
import ReikiSessions from "./pages/ReikiSessions/ReikiSessions";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="story" element={<MyStory />} />
        <Route path="sessions" element={<ReikiSessions />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
