import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/companyData';
import { Quote, Building, GraduationCap, CheckCircle } from 'lucide-react';

export const ClientProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Validated Results & Partnership Evidence
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Trusted by Commercial Presses, Packaging Plants & Academia
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Hear from plant directors who depend on our adhesive chemistry and academic deans whose students secured coveted career offers through our placement bootcamps.
          </p>
        </div>

        {/* Testimonials Bento Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Division pill alternative: clean unboxed text */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  <span className="font-semibold text-amber-700 flex items-center gap-1.5">
                    {item.division === 'Industrial Adhesives' ? (
                      <Building className="w-3.5 h-3.5" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5" />
                    )}
                    {item.division}
                  </span>
                  <span className="text-emerald-700 font-medium text-[11px]">Verified Partner</span>
                </div>

                <Quote className="w-6 h-6 text-amber-500/40 mb-3" />

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>

                {/* Quantified impact banner */}
                <div className="mt-4 p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-900 font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900">{item.client}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
