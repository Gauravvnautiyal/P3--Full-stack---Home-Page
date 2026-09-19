import Navbar from "./Navbar";
import Hero from "./Hero";
import Articles from "./Articles";
import Tutorials from "./Tutorials";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Articles />
        <Tutorials />
      </main>

      <Footer />
    </div>
  );
}

export default App;