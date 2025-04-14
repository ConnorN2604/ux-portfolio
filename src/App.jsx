import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    document.documentElement.classList.add("dark");
  }, []);

  const navLinks = [
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "U-M GPT Redesign",
      image: "/image.png",
      alt: "Screenshot of the U-M GPT Redesign home page mocked up on a PC",
      link: "https://www.figma.com/design/909GSkZakIttQAuYsv492r/U-MGPT%3A-Final-Design-%2B-Deck?node-id=0-1",
      linkText: "VIEW DESIGN + SLIDE DECK →",
    },
    {
      title: "ClubHouse - Michigan Student Org App",
      image: "/image-2.png",
      alt: "Screenshot of home page of ClubHouse mobile app project",
      link: "https://www.figma.com/design/cpHZNIFWloOGaP6fwUsaAB/Project-1---Connor-Nolan?node-id=1-2",
      linkText: "VIEW DESIGN AND PROTOTYPE →",
    },
  ];

  const contactLinks = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/connornolan26",
      color: "text-[#1e90ff]",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/connor.nolan2604/",
      color:
        "bg-gradient-to-r from-[#505bd1] via-[#fec45d] via-[#e93e59] to-[#da2e78] bg-clip-text text-transparent",
    },
  ];

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen scroll-smooth">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 bg-[#fec45d] text-black px-4 py-2 font-semibold rounded transform transition-transform duration-200 -translate-y-20 focus:translate-y-20 focus:outline-none"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-white/10 py-4 sm:py-6 px-6 md:px-[180px]">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold">Connor Nolan</h1>
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-base font-medium hover:text-[#fec45d] hover:underline underline-offset-4 decoration-[#fec45d]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
            <button
              className="sm:hidden text-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="mt-4 flex flex-col sm:hidden gap-4">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-base font-medium hover:text-[#fec45d] hover:underline underline-offset-4 decoration-[#fec45d]"
              >
                {link.title}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="px-6 md:px-[180px] flex flex-col gap-[120px] pt-12 pb-28">
        <section
          id="main-content"
          className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-10 scroll-mt-20"
          data-aos="fade-up"
        >
          <div className="w-full max-w-[320px]">
            <img
              src="/IMG_2180.jpg"
              alt="Connor Nolan Smiling in front of a tree"
              className="w-full h-[400px] object-cover object-[70%] rounded-lg border border-white/20 shadow-md"
            />
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[28px] leading-[39.2px] font-medium">
              <span className="text-[#fec45d]">UX Designer & Developer</span> crafting accessible, research-driven digital experiences.
            </p>
            <p className="text-[28px] leading-[39.2px] font-medium">
              2nd-year UX Design & Research student at U-M, combining design thinking, technical execution, and a passion for social impact.
            </p>
            <a
              href="https://docs.google.com/document/d/1uFUDKYxf9eQ6CqSpzd9fAUdW88HRwtiXI0YsM81fW98/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#fec45d] hover:underline underline-offset-4 decoration-[#fec45d]"
            >
              CHECK MY RESUME →
            </a>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20" data-aos="fade-up">
          <h2 className="text-[48px] sm:text-[64px] font-medium mb-8">Selected Projects</h2>
          <div className="flex flex-col md:flex-row gap-12">
            {projects.map((project, i) => (
              <div key={i} className="flex flex-col gap-4 w-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-md">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </a>
                <h3 className="text-2xl font-medium">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#fec45d] hover:underline underline-offset-4 decoration-[#fec45d]"
                >
                  {project.linkText}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-20" data-aos="fade-up">
          <h2 className="text-[48px] sm:text-[64px] font-medium mb-8">About Me</h2>
          <p className="max-w-[620px] text-lg leading-[27px] font-medium mb-6">
            I’m passionate about designing accessible, human-centered digital products that create real impact.
            <br /><br />
            At the University of Michigan, I’m pursuing a degree in UX Design & Research with a minor in Entrepreneurship. Through hands-on projects and student orgs like <strong>Tech for Social Good, Michigan Open UX</strong> and <strong>Reach Consulting Group</strong>, I’ve gained real-world experience in building design systems, conducting user research, wireframing, prototyping, and usability testing.
            <br /><br />
            I’m always exploring new ways to combine thoughtful design, technical execution, and community service — with the goal of building products that serve people meaningfully and inclusively.
          </p>
          <a
            href="https://docs.google.com/document/d/1uFUDKYxf9eQ6CqSpzd9fAUdW88HRwtiXI0YsM81fW98/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#fec45d] hover:underline underline-offset-4 decoration-[#fec45d]"
          >
            CHECK MY RESUME →
          </a>
        </section>

        <section id="contact" className="scroll-mt-20" data-aos="fade-up">
          <h2 className="text-[48px] sm:text-[64px] font-medium mb-8">Contact</h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <a
              href="mailto:cpn@umich.edu"
              className="text-xl font-medium hover:text-[#fec45d] hover:underline underline-offset-4 decoration-[#fec45d]"
            >
              Send me an email →
            </a>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg font-medium hover:underline underline-offset-4 decoration-[#fec45d] ${link.color}`}
                >
                  {link.title} →
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
