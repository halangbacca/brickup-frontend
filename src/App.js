import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages//Home/Home";
import NewTask from "./components/pages//NewTask/NewTask";
import Tasks from "./components/pages//Tasks/Tasks";
import Task from "./components/pages/Task/Task";

import Container from "./components/layout/Container/Container";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/task/:id" element={<Task />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
