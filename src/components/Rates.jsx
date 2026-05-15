import React from 'react';
import { Tag, BadgePercent, CheckCircle, Info, Flame } from 'lucide-react';

const Rates = () => {
  // Baseline estimation pricing structure
  const standardRates = [
    { name: 'Hydraulic Tipping Trolley', spec: 'Premium Lift Jack / 10-Ton', baseline: 'Starting from ₹1,10,000*' },
    { name: 'Standard Tractor Trolley', spec: 'Non-tipping / Heavy Axle', baseline: 'Starting from ₹1,00,000*' },
    { name: 'Puddle Cage Wheels (Pair)', spec: 'Heavy Angle Iron Frame', baseline: 'Starting from ₹17,000*' },
    { name: '9-Tyne Rigid Cultivator', spec: 'Forged Tines / Channel Frame', baseline: 'Starting from ₹28,000*' },
    { name: 'Custom Structural Welding', spec: 'Per Kilogram / Material dependent', baseline: 'Competitive Market Rates' },
  ];

  return (
    <section id="rates" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Transparent <span className="text-orange-600 dark:text-orange-500">Rates & Special Offers</span>
          </h2>
          <div className="h-1 w-20 bg-orange-600 dark:bg-orange-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
            Get premium industrial-grade steel fabrication at honest, highly competitive manufacturing rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT 2 COLUMNS: PROFESSIONAL RATES TABLE */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Tag className="h-5 w-5 text-orange-600 dark:text-orange-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Estimated Baseline Pricing</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                    <th className="pb-4 font-semibold">Equipment / Work Type</th>
                    <th className="pb-4 font-semibold hidden sm:table-cell">General Specifications</th>
                    <th className="pb-4 font-semibold text-right">Estimated Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                  {standardRates.map((rate, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50/50 dark:hover:bg-slate-950/30 transition-colors">
                      <td className="py-4 pr-4">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">{rate.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 sm:hidden mt-0.5">{rate.spec}</div>
                      </td>
                      <td className="py-4 pr-4 text-sm text-slate-600 dark:text-slate-400 hidden sm:table-cell">
                        {rate.spec}
                      </td>
                      <td className="py-4 text-right font-mono font-bold text-orange-600 dark:text-orange-400 text-sm sm:text-base whitespace-nowrap">
                        {rate.baseline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Disclaimer notice box */}
            <div className="mt-6 flex items-start gap-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-xs text-amber-800 dark:text-amber-400 leading-relaxed">
              <Info className="h-4 w-4 shrink-0 mt-0.5" />
              <p>
                *Rates displayed are approximate starting estimates based on standard material configurations. Final quotations can vary dynamically based on customized dimensions, gauge thickness requirements, and structural steel market updates.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: OFFERS & PACKAGES */}
          <div className="space-y-6">
            
            {/* Discount Card 1: Bulk/Pre-Season Deal */}
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group">
              {/* Decorative Background Icon styling */}
              <BadgePercent className="absolute -right-8 -bottom-8 h-32 w-32 opacity-15 rotate-12 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="flex justify-between items-start mb-4">
                <span className="bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Seasonal Campaign
                </span>
                <Flame className="h-5 w-5 text-amber-200 animate-bounce" />
              </div>

              <h4 className="text-2xl font-black tracking-tight">Pre-Harvest Advance Deals</h4>
              <p className="text-orange-100 text-xs mt-2 leading-relaxed">
                Book or deposit your requirements early for Tractor Trolleys and Cultivators ahead of the seasonal rush to lock in special production priorities.
              </p>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold tracking-tight">Flat 5% OFF</span>
                <span className="text-xs text-orange-200">on custom advance bookings</span>
              </div>
            </div>

            {/* Discount Card 2: Combo Deal Package */}
            <div className="bg-white dark:bg-slate-900 border-2 border-orange-500/30 dark:border-orange-500/20 rounded-2xl p-6 shadow-xl relative">
              <span className="absolute -top-3 right-4 bg-orange-600 text-white text-xs font-bold uppercase px-3 py-0.5 rounded-md tracking-wider">
                Best Value
              </span>

              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Agricultural Combo Bundle</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">Order your structural implements together to save highly on transportation and raw assembly labor costs.</p>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Order Trolley + Cultivator together</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Free initial on-site tool alignment checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Special discount on companion Cage Wheels</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-500">Contact owners for pricing</span>
                <a href="#contact" className="text-xs font-bold text-orange-600 dark:text-orange-500 hover:underline">
                  Claim Deal &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Rates;