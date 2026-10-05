import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (division?: 'adhesives' | 'training') => void;
  onOpenCodeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onOpenCodeGuide }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg font-mono">
                SE
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Delivering high-performance industrial adhesives for the commercial printing & packaging sector, while empowering emerging students and professionals through career-ready placement bootcamps.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified GSTIN: <strong className="font-mono text-slate-200">{COMPANY_INFO.gstin}</strong></span>
            </div>
          </div>

          {/* Division 1: Industrial Adhesives */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Industrial Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#adhesives" className="hover:text-amber-400 transition-colors">Hot Melt Spine Glues</a></li>
              <li><a href="#adhesives" className="hover:text-amber-400 transition-colors">Side Creasing Adhesives</a></li>
              <li><a href="#adhesives" className="hover:text-amber-400 transition-colors">BOPP & Film Lamination</a></li>
              <li><a href="#adhesives" className="hover:text-amber-400 transition-colors">Carton & Box Dispersions</a></li>
              <li><a href="#adhesives" className="hover:text-amber-400 transition-colors">Jelly Cake Hardcase Glues</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors text-amber-400/90 font-medium">Adhesive Batch Estimator</a></li>
            </ul>
          </div>

          {/* Division 2: Career Training */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Career Development
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#training" className="hover:text-amber-400 transition-colors">Campus Placement Bootcamps</a></li>
              <li><a href="#training" className="hover:text-amber-400 transition-colors">Executive Soft Skills</a></li>
              <li><a href="#training" className="hover:text-amber-400 transition-colors">Group Discussion Labs</a></li>
              <li><a href="#training" className="hover:text-amber-400 transition-colors">Interview Whiteboarding</a></li>
              <li><a href="#training" className="hover:text-amber-400 transition-colors">Corporate Leadership Training</a></li>
              <li><a href="#training" className="hover:text-amber-400 transition-colors">Curriculum Diagnostic Tests</a></li>
            </ul>
          </div>

          {/* Registered Facility & Quick Action */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Registered Office
            </h4>
            <div className="space-y-2 text-xs text-slate-400 leading-snug">
              <p>{COMPANY_INFO.address.line1}</p>
              <p>{COMPANY_INFO.address.line2}</p>
              <p>{COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}</p>
              <p className="pt-1">
                Direct: <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 hover:underline">{COMPANY_INFO.phone}</a>
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <button
                onClick={onOpenCodeGuide}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>VS Code Code Export</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Bengaluru, Karnataka</span>
            <span aria-hidden="true">·</span>
            <span>Commercial Tax Invoice Compliant</span>
            <span aria-hidden="true">·</span>
            <span>State Code 29</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
