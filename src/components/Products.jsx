import React from 'react';
import trolly from '../assets/trolly.jpg'; // Replace with actual paths to your images
import  cage  from '../assets/cagewheel.jpg';
import  cultivator  from '../assets/cultivator.png';
const Products = () => {
  const products = [
    {
      name: 'Tractor Trolley',
      desc: 'Heavy duty channel frame construction with premium hydraulic tipping assemblies.',
      img: trolly
    },
    { 
      name: 'Cage Wheel',
      desc: 'Anti-slip design built with hard-wearing structural angle bars for wet field traction.',
      img: cage
    },
    {
      name: 'Cultivator',
      desc: 'Multi-row adjustable tilling assemblies engineered for high stress resistance.',
      img: cultivator
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Featured <span className="text-orange-500">Products</span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4">Rugged agricultural equipment built directly in our facility using top-grade structural steel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <div key={idx} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col group">
              <div className="h-56 overflow-hidden relative bg-slate-950">
                <img 
                  src={prod.img} 
                  alt={prod.name}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500 mix-blend-luminosity hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-orange-500 transition-colors">{prod.name}</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{prod.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <span className="text-xs uppercase tracking-wider text-orange-500 font-semibold">Custom Made To Order</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;