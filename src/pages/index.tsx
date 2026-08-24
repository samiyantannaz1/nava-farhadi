import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import AboutPreview from "@/components/AboutPreview/AboutPreview";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <AboutPreview />
      <ContactCTA/>
    </>
  );
}