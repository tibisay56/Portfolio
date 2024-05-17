import Hero from '@/components/main/Hero'
import Image from "next/image";
import Skills from '@/components/main/Skills'
import Projects from '@/components/main/Projects';
import AboutSection from '@/components/main/AboutSection';
import ContactSection from '@/components/main/ContactSection';


export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className= 'flex flex-col gap-20'>
        <Hero/>
        <AboutSection/>
        <Skills/>
        <Projects/>
        <ContactSection/>
        
      </div> 
    </main>
  );
}
