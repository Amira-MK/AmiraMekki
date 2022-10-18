import './App.css';
import Header from "./components/header/header";
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
