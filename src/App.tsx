import Header from "./components/Header";
import Hero from "./components/Hero";
import bgImage from "./assets/bg-1.png"
import About from "./components/About";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header/>
      <div className="container mx-auto pt-[88px] md:pt-28 px-3 md:px-5 space-y-10">
        <Hero/>
        <About/>
      </div>
    </div>
  )
}

export default App;