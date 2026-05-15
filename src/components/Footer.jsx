import React from 'react';
import { Hammer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding block */}
        <div className="flex items-center gap-2">
          <Hammer className="h-6 w-6 text-orange-500" />
          <span className="font-bold text-lg tracking-wider text-slate-200">
            ASHOK <span className="text-orange-500">ENGINEERING</span> WORK SHOP
          </span>
        </div>

        {/* Info text */}
        <div className="text-center md:text-right text-sm space-y-1">
          <p>© {new Date().getFullYear()} Ashok Engineering Works Shop. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Hotlines: 7667376936 | 8434870725 | 7209823085</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;