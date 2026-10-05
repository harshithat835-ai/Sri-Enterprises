import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (division?: 'adhesives' | 'training', productName?: string) => void;
  onOpenCodeGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenCodeGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Dual Expertise', href: '#dual-expertise' },
    { label: 'Adhesive Solutions', href: '#adhesives' },
    { label: 'Career Training', href: '#training' },
    { label: 'Adhesive Estimator', href: '#calculator' },
    { label: 'Credentials & GST', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single element Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            {/* SE Distinctive Monogram */}
            <div className="w-11 h-11 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xl tracking-tight shadow-sm group-hover:bg-amber-600 transition-colors">
              <span className="font-mono">SE</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-950 font-serif leading-none">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase mt-1">
                Industries & Careers
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCodeGuide}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
              title="View VS Code project code and deployment files"
            >
              VS Code Code & Export
            </button>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-amber-600 rounded-lg transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5"
            >
              <span>Get Quotation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-slate-950 rounded-md"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeGuide();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-slate-800 border border-slate-300 rounded-lg"
            >
              VS Code Code Files & Setup
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-amber-600 rounded-lg"
            >
              Request Quote or Training Proposal
            </button>
          </div>
          <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
            <span>Bengaluru Office: {COMPANY_INFO.phone}</span>
            <span className="font-mono">GSTIN: {COMPANY_INFO.gstin}</span>
          </div>
        </div>
      )}
    </header>
  );
};
