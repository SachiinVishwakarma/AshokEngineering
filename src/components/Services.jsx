import React from 'react';
import { Truck, Disc, Settings, ShieldAlert, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Tractor Trolley Making', desc: 'Custom structural manufacturing of high-capacity structural agricultural trailers.', icon: Truck },
    { title: 'Cage Wheel Manufacturing', desc: 'Durable, accurately weighted heavy-duty puddle wheels for multi-terrain tractors.', icon: Disc },
    { title: 'Cultivator Fabrication', desc: 'Precision tines and heavy frames designed for rigorous, deep-soil conditioning.', icon: Settings },
    { title: 'Welding Works', desc: 'High-strength ARC, MIG, and gas structural welding jobs tailored to standard industrial specs.', icon: ShieldAlert },
    { title: 'Repairing Works', desc: 'Complete structural overhaul, re-alignment, and maintenance of agricultural machinery.', icon: Wrench },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Our Professional <span className="text-orange-500">Services</span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4">We specialize in precise engineering solutions built to withstand tough agricultural environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="bg-orange-500/10 p-3 rounded-lg w-fit group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mt-6 mb-3 text-slate-100 group-hover:text-orange-500 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;