import Header from "./components/Header";
import Hero from "./components/Hero";
import bgImage from "./assets/bg-1.png"
import Services from "./components/Services";
import Toolbox from "./components/Toolbox";
import Project from "./components/Project";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed pb-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header/>
      <div className="container mx-auto pt-[88px] md:pt-28 px-3 md:px-5 space-y-10">
        <Hero/>
        <Services/>
        <Toolbox/>
        <Project/>
      </div>
    </div>
  )
}

export default App;