import Footer from './components/Footer';
import GotoTop from './components/GotoTop';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Blog />
      </div>
      <GotoTop />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
