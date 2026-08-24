import useSEO from "../hooks/useSEO";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import Services from "../components/home/Services";
import Gallery from "../components/home/Gallery";
import Locations from "../components/home/Locations";
import CtaBanner from "../components/home/CtaBanner";

export default function Home() {
  useSEO({
    title: "Amazing Lashes & Spa | Melrose & Medford, MA",
    description:
      "Eyelash extensions, facials, waxing, laser hair removal and microblading in Melrose and Medford, MA. Book online or call today.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <Gallery />
      <Locations />
      <CtaBanner />
    </>
  );
}
