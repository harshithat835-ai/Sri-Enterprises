import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Copy, Check, MapPin, Phone, Mail, FileText, CheckCircle, ExternalLink } from 'lucide-react';

export const VerifiedCredentials: React.FC = () => {
  const [copiedGst, setCopiedGst] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopy = (text: string, type: 'gst' | 'address') => {
    navigator.clipboard.writeText(text);
    if (type === 'gst') {
      setCopiedGst(true);
      setTimeout(() => setCopiedGst(false), 2000);
    } else {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <section id="credentials" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Government & Tax Verified Enterprise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Registered Company Credentials & Facility Details
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Sri Enterprises operates as a fully registered, GST-compliant supplier and vocational partner. All industrial supply and corporate training contracts are backed by official tax invoices and formal Service Level Agreements.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Credentials Card (Styled like an official Tax Document Certificate) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-slate-900" />

            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-white font-mono font-bold text-2xl flex items-center justify-center">
                    SE
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                      {COMPANY_INFO.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {COMPANY_INFO.tagline}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Active GST Registration
                </span>
              </div>

              {/* Data Table */}
              <div className="mt-8 space-y-4">
                
                {/* GSTIN row */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                      Goods & Services Tax Identification Number (GSTIN)
                    </span>
                    <span className="text-lg font-mono font-extrabold text-slate-950 tracking-wider">
                      {COMPANY_INFO.gstin}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_INFO.gstin, 'gst')}
                    className="self-start sm:self-center px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedGst ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedGst ? 'Copied' : 'Copy GSTIN'}</span>
                  </button>
                </div>

                {/* Registered Address row */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">
                      Registered Operational Office & Facility
                    </span>
                    <p className="text-sm font-medium text-slate-900 leading-snug">
                      {COMPANY_INFO.address.line1}<br />
                      {COMPANY_INFO.address.line2}<br />
                      {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}, Karnataka
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_INFO.address.fullFormatted, 'address')}
                    className="self-start sm:self-center px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? 'Copied' : 'Copy Address'}</span>
                  </button>
                </div>

                {/* Direct Line & Dispatch row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                      Direct Operational Mobile
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-sm font-mono font-bold text-amber-700 hover:underline mt-0.5 block"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                      State Jurisdiction & Code
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-900 mt-0.5 block">
                      State Code 29 (Karnataka)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <span>B2B Invoicing · Input Tax Credit (ITC) Eligible</span>
              <span className="font-mono">HSN Codes: 3506 (Adhesives) / 9992 (Education)</span>
            </div>

          </div>

          {/* Business Model & Operations summary */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Print & Corporate Ecosystem
              </span>
              <h4 className="text-xl font-bold mt-1">
                Trusted by Printing Presses & Universities
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                As recorded in commercial tax invoices for leading printing presses like Richkraft Offset Printers, Sri Enterprises maintains consistent supply rhythms, preventing press line stoppages with dedicated Bengaluru buffer inventories.
              </p>

              <div className="mt-6 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Immediate tax invoice generation for all B2B shipments</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Doorstep delivery across Bengaluru industrial zones (Peenya, BTM, Bommasandra, Electronic City)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Structured institutional MOUs with engineering and degree colleges</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Direct Inquiries & Sample Requests
                </span>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Looking for custom adhesive formulations or planning upcoming campus placement bootcamps?
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Speak directly with our technical operations desk or training coordinator.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Sri%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20products/training`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
