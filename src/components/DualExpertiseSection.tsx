import React from 'react';
import { ArrowRight, Factory, GraduationCap, CheckCircle, PackageCheck, Users } from 'lucide-react';
import adhesiveImg from '../assets/images/adhesive_solutions_craft_1791150540642.jpg';
import trainingImg from '../assets/images/career_skills_training_1791150554807.jpg';

interface DualExpertiseProps {
  onOpenQuoteModal: (division?: 'adhesives' | 'training') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const DualExpertiseSection: React.FC<DualExpertiseProps> = ({
  onOpenQuoteModal,
  onNavigateSection,
}) => {
  return (
    <section id="dual-expertise" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Our Core Competencies
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Dual Expertise: Engineering Industrial Adhesion & Building Professional Careers
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            At Sri Enterprises, we bridge two vital pillars of modern enterprise growth: ensuring manufacturing efficiency on printing & packaging floors, and equipping emerging talent with high-impact workplace skills.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Pillar 1: Industrial Solutions */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
              <img
                src={adhesiveImg}
                alt="Sri Enterprises Industrial Adhesive Manufacturing & Supply"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-slate-900/90 backdrop-blur px-3 py-1 rounded">
                  <Factory className="w-3.5 h-3.5 text-amber-400" />
                  Industrial Solutions
                </span>
                <span className="text-xs font-mono text-slate-200">B2B Manufacturing</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Reliable Industrial Adhesives for Printing & Packaging
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Formulations specifically calibrated for high-speed automated binding machines, commercial offset presses, carton gluers, and precision lamination lines.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>High-Yield Hot Melt Adhesives:</strong> Perfect spine binding with zero cracking across temperature fluctuations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Water-Borne Film & Paper Lamination:</strong> Crystal clarity on BOPP, MetPET, and high-gloss boards without tunneling.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Local Bengaluru Warehouse:</strong> Rapid replenishment, drum deliveries, and on-site viscosity calibration.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigateSection('adhesives')}
                  className="text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenQuoteModal('adhesives')}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Order Sample / Quote
                </button>
              </div>
            </div>
          </div>

          {/* Pillar 2: Career Development & Training */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
              <img
                src={trainingImg}
                alt="Sri Enterprises Career Training and Soft Skills Program"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-slate-900/90 backdrop-blur px-3 py-1 rounded">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                  Career Development
                </span>
                <span className="text-xs font-mono text-slate-200">Colleges & Corporates</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Career-Ready Placement & Soft Skills Training Programs
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Transformative training frameworks that empower students and early professionals with the communication, reasoning, and interview gravitas to excel in hiring rounds.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Campus Placement Bootcamps:</strong> Aptitude mastery, Group Discussion (GD) drills, and behavioral interview simulations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Corporate Workplace Soft Skills:</strong> Assertive business communication, cross-team presentation, and emotional intelligence.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Proven Academic Results:</strong> High participant clearance across IT, manufacturing, and BFSI recruitment drives.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigateSection('training')}
                  className="text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View Curriculum & Modules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenQuoteModal('training')}
                  className="px-4 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Book College Cohort
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
