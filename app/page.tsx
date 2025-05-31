import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Stack } from "./../components/Stack";
import { LogoAnimation } from "./../components/LogoAnimation";
import { Portfolio } from "./../components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
    </>
  );
}
