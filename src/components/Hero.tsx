import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { DivisionType } from '../types';
import { ArrowRight, ShieldCheck, Factory, GraduationCap, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_industrial_facility_1791150525877.jpg';

interface HeroProps {
  currentFilter: DivisionType;
  onSelectFilter: (filter: DivisionType) => void;
  onOpenQuoteModal: (division?: 'adhesives' | 'training') => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentFilter,
  onSelectFilter,
  onOpenQuoteModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sri Enterprises Industrial Facility"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-90 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verified Business Ribbon (Quiet, unboxed text with separators) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-300 mb-6">
          <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide uppercase text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Verified Enterprise
          </span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>B.T.M Layout, Bengaluru</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="font-mono text-slate-300">GSTIN: {COMPANY_INFO.gstin}</span>
        </div>

        {/* Tagline requested by user: “Bonding Industries, Building Futures” */}
        <div className="inline-block mb-4">
          <p className="text-amber-400 font-semibold text-sm sm:text-base tracking-widest uppercase">
            {COMPANY_INFO.tagline}
          </p>
        </div>

        {/* Clear Positioning Headline requested by user */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl text-balance">
          {COMPANY_INFO.clearPositioning}
        </h1>

        {/* One-line clarity requested by user */}
        <p className="mt-5 text-lg sm:text-xl text-slate-200 font-medium max-w-3xl leading-relaxed">
          {COMPANY_INFO.oneLineClarity}
        </p>

        {/* Introduction requested by user */}
        <div className="mt-4 p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            {COMPANY_INFO.introduction}
          </p>
        </div>

        {/* Action Controls & Interactive Division Selector */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={() => onOpenQuoteModal('adhesives')}
            className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
          >
            <span>Request Adhesive Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onOpenQuoteModal('training')}
            className="px-6 py-3.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Training Consultation</span>
            <GraduationCap className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Interactive Division Quick Selector */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Browse Sri Enterprises Core Divisions:
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start sm:self-auto">
              <button
                onClick={() => onSelectFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  currentFilter === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                All Divisions
              </button>
              <button
                onClick={() => onSelectFilter('adhesives')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                  currentFilter === 'adhesives'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Factory className="w-3.5 h-3.5" />
                <span>Industrial Adhesives</span>
              </button>
              <button
                onClick={() => onSelectFilter('training')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                  currentFilter === 'training'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Career Training</span>
              </button>
            </div>
          </div>

          {/* Quick Quantitative Proof Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-slate-300">
            <div className="border-l-2 border-amber-400 pl-3 py-1">
              <p className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">100%</p>
              <p className="text-xs text-slate-400">Industrial Batch Quality</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-3 py-1">
              <p className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">9.5+ N/cm</p>
              <p className="text-xs text-slate-400">Page Pull Spine Strength</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-3 py-1">
              <p className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">94%</p>
              <p className="text-xs text-slate-400">Placement Mock Clearance</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-3 py-1">
              <p className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">BTM 2nd Stage</p>
              <p className="text-xs text-slate-400">Bengaluru Facility & Stock</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
