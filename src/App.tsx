import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <Header />
      <main className="section py-10 sm:py-14 space-y-20">
        <section className="card" id="about"><About /></section>
        <section className="card" id="skills"><Skills /></section>
        <section className="card" id="projects"><Projects /></section>
        <section className="card" id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
