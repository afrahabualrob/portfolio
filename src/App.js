import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import MainPage from "./component/MainPage";
import Projects from "./component/Projects";
function App() {
  return (
    <>
      <div style={{ background: "#202020" }}>
        <Navbar />

        <MainPage />
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects/>
      <Footer />
    </>
  );
}

export default App;
