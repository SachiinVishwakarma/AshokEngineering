import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const Home = () => {
  const phoneNumbers = ["7667376936", "8434870725", "7209823085"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden">
      {/* Heavy Industrial Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200')` }}
      />
      {/* Orange/Dark Gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 text-center z-10 space-y-8">
        <span className="inline-block text-orange-500 font-semibold tracking-widest text-sm uppercase bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/30">
          Heavy Duty Fabrication Specialist
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
          Ashok Engineering <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Workshop</span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
          Trusted Fabrication & Welding Services. Delivering high-quality agricultural implements and robust custom steel structures built to last.
        </p>

        {/* Dynamic Hotline Boxes */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-2xl backdrop-blur-sm">
          {phoneNumbers.map((num, idx) => (
            <a
              key={idx}
              href={`tel:${num}`}
              className="flex items-center justify-center gap-3 bg-slate-950 hover:bg-orange-600 border border-slate-700 hover:border-orange-500 p-3 rounded-lg text-slate-200 hover:text-white transition-all duration-300 group shadow-md"
            >
              <Phone className="h-4 w-4 text-orange-500 group-hover:text-white transition-colors" />
              <span className="font-mono font-semibold tracking-wider">{num}</span>
            </a>
          ))}
        </div>

        <div className="pt-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            View Services
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;