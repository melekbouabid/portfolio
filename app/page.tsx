import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";

/** Server component: it only composes the sections, so it needs no hooks. */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Journey />
      <Contact />
    </>
  );
}
