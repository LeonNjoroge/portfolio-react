import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import {Tools} from "./components/Tools"
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      < Tools />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
