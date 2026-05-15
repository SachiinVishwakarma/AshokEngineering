import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const phoneNumbers = ["7667376936", "8434870725", "7209823085"];
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}. Your inquiry has been sent!`);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch With <span className="text-orange-600 dark:text-orange-500">Us</span>
          </h2>
          <div className="h-1 w-20 bg-orange-600 dark:bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: OWNERS & SHOP INFO */}
          <div className="space-y-8">
            
            {/* Owners / Proprietors Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Workshop Proprietors
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Owner 1: Umesh */}
                <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-orange-500/30 transition-all flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-orange-600/10 dark:bg-orange-500/10 border border-orange-500/40 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-orange-600 dark:text-orange-500">UV</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Umesh Vishwakarma</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Proprietor</p>
                  </div>
                </div>

                {/* Owner 2: Ashok */}
                <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-orange-500/30 transition-all flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-orange-600/10 dark:bg-orange-500/10 border border-orange-500/40 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-orange-600 dark:text-orange-500">AV</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Ashok Vishwakarma</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Proprietor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Numbers */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-md font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-600 dark:text-orange-500" /> Calling Hotlines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {phoneNumbers.map((num, i) => (
                  <a 
                    key={i} 
                    href={`tel:${num}`} 
                    className="flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-2.5 px-3 rounded-lg font-mono text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500 hover:border-orange-500 transition-colors shadow-sm"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Hours Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-100 dark:border-slate-900">
                <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-200 text-sm">Workshop Address</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">Ashok Engineering Works Shop, Jharkhand, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-100 dark:border-slate-900">
                <Clock className="h-5 w-5 text-orange-600 dark:text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-200 text-sm">Working Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">Mon – Sat: 08:00 AM – 07:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Send A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Full Name</label>
                <input 
                  type="text" required
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Phone Number</label>
                <input 
                  type="tel" required
                  value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Requirement Details</label>
                <textarea 
                  rows="4" required
                  value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="What tool, implement, or repair work do you need?"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-orange-500/10"
              >
                Submit Inquiry <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;