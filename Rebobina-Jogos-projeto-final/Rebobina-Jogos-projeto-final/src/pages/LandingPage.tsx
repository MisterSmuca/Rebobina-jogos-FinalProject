import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChamadaFinal from "../sections/ChamadaFinal";
import Hero from "../sections/Hero";
import Jogos from "../sections/Jogos";
import Sobre from "../sections/Sobre";

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Jogos />
        <Sobre />
        <ChamadaFinal />
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;
