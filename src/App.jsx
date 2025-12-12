import React from "react";
import heroImage from "./assets/HeroImage.png";
import GraphicsProject1 from './assets/GraphicsFolder/GraphicsDesign1.jpg';
import GraphicsProject2 from './assets/GraphicsFolder/GraphicsDesign2.jpg';
import WebDevProject1 from './assets/WebDevFolder/WebDev1.jpg';
import WebDevProject2 from './assets/WebDevFolder/WebDev2.jpg';
import UIUXProject1 from './assets/UIUXFolder/UIUX1.jpg';
import CyberSecProject1 from './assets/CyberSecFolder/CyberSec1.jpg';
import ChatBox from './components/ChatBox.jsx';


// Portfolio Landing Page - Single File React Component (Tailwind CSS)
// Customized for Kareem Adam Olawale

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-green-50 text-gray-900 antialiased">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-8">
        <Hero />
        <Stats />
        <WhyHire />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatBox /> {/* Floating chat box */}
    </div>
  );
}

/* -----------------------------
   Navbar
   ----------------------------- */
function Navbar() {
  return (
    <header className="py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm p-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-md bg-linear-to-r from-blue-800 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">KA</div>
          <div className="text-lg font-semibold">Portfolio</div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#about" className="hover:text-green-600 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-green-600 transition-colors duration-300">Skills</a>
          <a href="#portfolio" className="hover:text-green-600 transition-colors duration-300">Portfolio</a>
          <a href="#testimonials" className="hover:text-green-600 transition-colors duration-300">Testimonial</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="inline-block px-4 py-2 border border-green-500 rounded-md text-sm hover:bg-green-500 hover:text-white transition-all duration-300">Download CV</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md border hover:bg-gray-100 transition-colors duration-300">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

/* -----------------------------
   Hero Section
   ----------------------------- */
function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-12 md:py-20">
      <div className="md:col-span-7 animate-fade-in">
        <p className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 mb-4 shadow-sm">Welcome</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          I have <span className="text-green-600">Creative Design</span> Experience
        </h1>
        <p className="mt-6 text-gray-600 max-w-xl text-lg">
          I'm Kareem Adam Olawale, a creative Graphics Designer, Web Developer, UI/UX Designer, and Cybersecurity Expert. I've been helping businesses solve their problems with my skills for years.
        </p>

        <div className="mt-8 flex items-center space-x-4">
          <a href="#contact" className="inline-block px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">Contact Me</a>
          <a href="#portfolio" className="text-sm hover:underline text-green-600 transition-colors duration-300">View Portfolio →</a>
        </div>

        {/* Social vertical (right in the image) for desktop */}
        <div className="hidden md:block mt-10">
          <div className="flex items-center space-x-4">
            <SocialIcon label="IN" />
            <SocialIcon label="GM" />
          </div>
        </div>
      </div>

      <div className="md:col-span-5 flex justify-center md:justify-end animate-slide-in">
        <div className="relative w-72 h-80 md:w-80 md:h-96">
          <div className="absolute -inset-2 bg-linear-to-r from-green-400 to-blue-500 transform rotate-3 rounded-lg shadow-2xl z-0" />
          <img src={heroImage} alt="hero" className="absolute inset-0 w-full h-full object-cover rounded-lg transform scale-125 hover:scale-150 transition-transform duration-500 z-10" />
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ label }) {
  return (
    <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-sm text-green-600">{label}</div>
  );
}

/* -----------------------------
   Stats
   ----------------------------- */
function Stats() {
  const items = [
    { value: '50+', label: 'Satisfied clients' },
    { value: '100+', label: 'Projects completed' },
    { value: '95+', label: 'Reviews given' },
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {items.map((it) => (
          <div key={it.label} className="py-6">
            <h3 className="text-3xl font-extrabold text-green-600">{it.value}</h3>
            <p className="mt-2 text-gray-600">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------
   Why Hire / Skills
   ----------------------------- */
function WhyHire() {
  const skills = [
    { title: 'Graphics Design', desc: 'Create user interface design with unique & modern ideas' },
    { title: 'Web Development', desc: 'Create digital user products with updated ideas' },
    { title: 'UI/UX Design', desc: 'Create advance design prototype with Figma apps' },
    { title: 'Cybersecurity', desc: 'Ensure security and protect systems from threats' },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-6">
          <p className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Why Hire Me For Your Next <span className="text-green-600">Project?</span></h2>
          <p className="mt-4 text-gray-600 max-w-md">I'm specialist in Graphics Design, Web Development, UI/UX Design, and Cybersecurity. My passion is designing & solving problems through user experience and research.</p>
          <a href="#contact">
            <button className="mt-6 px-5 py-3 bg-green-600 text-white rounded-md">
              Hire Me
            </button>
          </a>
        </div>

        <div className="md:col-span-6 grid gap-4">
          {skills.map((s) => (
            <div key={s.title} className="p-6 bg-white border rounded-lg shadow-sm">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Portfolio
   ----------------------------- */
// Import your local project images
function Portfolio() {
  const projects = [
    { id: 1, title: 'Graphics Design Project 1', img: GraphicsProject1 },
    { id: 2, title: 'Web Dev Project 1', img: WebDevProject1 },
    { id: 3, title: 'UI/UX Design Project 1', img: UIUXProject1 },
    { id: 4, title: 'Cybersecurity Project 1', img: CyberSecProject1 },
    { id: 5, title: 'Graphics Design Project 2', img: GraphicsProject2 },
    { id: 6, title: 'Web Dev Project 2', img: WebDevProject2 },
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">Portfolio</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-4">
            My Creative Works Latest <span className="text-green-600">Projects</span>
          </h3>
          <p className="mt-3 text-gray-600 max-w-lg">
            I have selected and mentioned here some of my latest projects to share with you.
          </p>
        </div>

        <div>
          <button className="px-4 py-2 border rounded-md text-sm">Show More</button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                onError={(e) =>
                (e.target.src =
                  'https://via.placeholder.com/600x400?text=Image+Not+Found')
                }
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="mt-2 text-sm text-gray-600">Brief description for the project goes here.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------
   Testimonials
   ----------------------------- */
function Testimonials() {
  const reviews = [
    { name: 'Raymond Blessing', role: 'Business Owner', text: 'Excellent work on graphics design. Highly recommended!' },
    { name: 'Popoola Adebiyi', role: 'Startup Founder', text: 'Great web development skills and attention to detail.' },
    { name: 'Esther Coker', role: 'Designer', text: 'Impressive UI/UX designs that enhance user experience.' },
  ];

  return (
    <section id="testimonials" className="py-16 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <p className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">Reviews</p>
        <h3 className="text-2xl md:text-3xl font-bold mt-4 text-center">Our Customer Say Something <span className="text-green-600">About Us</span></h3>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-6 bg-white border rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.role}</div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Contact Form
   ----------------------------- */
function Contact() {
  return (
    <section id="contact" className="py-16" bg-green-50>
      <div className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <p className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">Contact</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-4">Let's Discuss Your <span className="text-green-600">Project</span></h3>
          <p className="mt-4 text-gray-600">Let's make something new, different and more meaningful or make thing more visual or conceptual.</p>

          <div className="mt-8 space-y-4">
            <ContactCard icon="phone" title="Call me" desc='+234 901 883 8854' />
            <ContactCard icon="mail" title="Email me" desc='mztawalexy888@gmail.com' />
            <ContactCard icon="map" title="Address" desc='Victory Estate, Ajah, Lagos 106104, Lagos' />
          </div>
        </div>

        <div className="md:col-span-7">
          <form className="bg-white border p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300" placeholder="Full name" />
              <input className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300" placeholder="Your email" />
              <input className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300" placeholder="Phone number" />
              <input className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300" placeholder="Budget" />
            </div>

            <textarea className="border rounded-lg p-3 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300" rows={6} placeholder="Message" />

            <div className="mt-6 text-right">
              <button className="px-8 py-3 bg-linear-to-r from-blue-800 to-blue-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">Submit Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-green-600 font-semibold">{icon === 'phone' ? '📞' : icon === 'mail' ? '✉️' : '📍'}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
    </div>
  );
}

/* -----------------------------
   Footer
   ----------------------------- */
function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600">© 2025. All Rights Reserved</div>
        <div className="text-sm text-gray-600">Designed by Kareem Adam Olawale</div>
      </div>
    </footer>
  );
}
