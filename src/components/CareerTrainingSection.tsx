import React, { useState } from 'react';
import { TRAINING_PROGRAMS } from '../data/companyData';
import { TrainingProgram } from '../types';
import { GraduationCap, CheckCircle2, Users, BookOpen, Award, ArrowUpRight, Sparkles, Building2 } from 'lucide-react';

interface CareerTrainingProps {
  onOpenQuoteModal: (division?: 'adhesives' | 'training', programName?: string) => void;
}

export const CareerTrainingSection: React.FC<CareerTrainingProps> = ({ onOpenQuoteModal }) => {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram>(TRAINING_PROGRAMS[0]);

  return (
    <section id="training" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Division 02: Career Development & Placement
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Career-Ready Training & Employability Skills Bootcamps
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Transforming academic graduates into corporate-ready assets. We partner with universities, degree colleges, and corporate organizations across South India to bridge employability and communication gaps.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('training')}
            className="self-start md:self-auto px-4 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Request Institutional Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: "Campus to Corporate",
              highlight: "Final & Pre-Final Batches",
              desc: "Complete placement readiness covering Aptitude, GD mastery, and technical-behavioral interview drills.",
            },
            {
              icon: Award,
              title: "Executive Soft Skills",
              highlight: "Corporate Teams",
              desc: "Workplace communication, assertive negotiation, email etiquette, and client handling skills.",
            },
            {
              icon: BookOpen,
              title: "Interview Whiteboarding",
              highlight: "STEM & Core Grads",
              desc: "Structured problem decomposition, live coding articulation, and answering high-pressure questions.",
            },
            {
              icon: Building2,
              title: "Leadership Presence",
              highlight: "Team Leads & Managers",
              desc: "High-impact stakeholder presentations, constructive feedback methods, and vocal gravitas.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                    {item.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Curriculum & Program Explorer */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              Interactive Training Curriculum & Syllabus Explorer
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select a specialized module to view instructional breakdown, learning deliverables, and verified batch outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Program Selection list */}
            <div className="lg:col-span-4 space-y-2">
              {TRAINING_PROGRAMS.map((prog) => (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedProgram.id === prog.id
                      ? 'border-amber-500 bg-amber-50/50 shadow-sm'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                    {prog.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                    {prog.title}
                  </h4>
                  <span className="text-xs text-slate-500 mt-1 block font-mono">
                    Duration: {prog.duration}
                  </span>
                </button>
              ))}
            </div>

            {/* Program Detail Display */}
            <div className="lg:col-span-8 bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                      {selectedProgram.category} Program
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mt-0.5">
                      {selectedProgram.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono bg-white border border-slate-200 px-3 py-1 rounded text-slate-700 font-semibold">
                    {selectedProgram.duration}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Target Candidates:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium mt-0.5">
                    {selectedProgram.targetAudience}
                  </p>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedProgram.description}
                </p>

                {/* Modules breakdown */}
                <div className="mt-5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                    Core Syllabus Modules & Practical Labs:
                  </span>
                  <div className="space-y-2">
                    {selectedProgram.modules.map((mod, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mt-5 p-3.5 bg-emerald-50/80 rounded-lg border border-emerald-200/60">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-1">
                    Quantified Student / Batch Outcomes:
                  </span>
                  <ul className="space-y-1">
                    {selectedProgram.keyOutcomes.map((outcome, i) => (
                      <li key={i} className="text-xs text-emerald-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  On-campus or corporate in-house delivery options available.
                </span>
                <button
                  onClick={() => onOpenQuoteModal('training', selectedProgram.title)}
                  className="px-4 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-amber-600 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Schedule Batch for This Program
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
