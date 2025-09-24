import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
    return (
        <div className="app">
            <Nav />
            <Hero />
            <Projects />
            <AboutMe />
            <Technologies />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
