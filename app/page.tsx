import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Stack } from "./../components/Stack";
import { LogoAnimation } from "./../components/LogoAnimation";
import { Portfolio } from "./../components/Portfolio";
import { Keymetrics } from "./../components/Keymetrics";
import { Services } from "./../components/Services";
import { Footer } from "./../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
      <Keymetrics />
      <Services />
      <Footer />
    </>
  );
}
