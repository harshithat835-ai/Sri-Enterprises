import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteRequestForm } from '../types';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDivision?: 'adhesives' | 'training';
  initialProductName?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialDivision = 'adhesives',
  initialProductName = '',
}) => {
  const [formData, setFormData] = useState<QuoteRequestForm>({
    division: initialDivision,
    name: '',
    organization: '',
    email: '',
    phone: '',
    productOrProgram: initialProductName || (initialDivision === 'adhesives' ? 'SE-Bind 800 (Hot Melt Spine Glue)' : 'Campus to Corporate Placement Readiness'),
    quantityOrBatchSize: initialDivision === 'adhesives' ? '500 Kg' : '60 Students Batch',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData((prev) => ({
        ...prev,
        division: initialDivision,
        productOrProgram: initialProductName || (initialDivision === 'adhesives' ? 'SE-Bind 800 (Hot Melt Spine Glue)' : 'Campus to Corporate Placement Readiness'),
      }));
    }
  }, [isOpen, initialDivision, initialProductName]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.organization.trim()) errs.organization = 'Company or College name required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-amber-500 text-slate-950 font-bold font-mono text-sm flex items-center justify-center">
              SE
            </span>
            <div>
              <h3 className="text-base font-bold text-white">
                {formData.division === 'adhesives' ? 'Industrial Adhesive Quotation' : 'Training Cohort Consultation'}
              </h3>
              <p className="text-[11px] text-slate-300">
                Official inquiry handled under GSTIN: {COMPANY_INFO.gstin}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-2xl font-bold text-slate-900">Quotation Request Logged</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. A dedicated technical representative from Sri Enterprises (BTM Layout 2nd Stage, Bengaluru) will contact you at <strong>{formData.phone}</strong> with specifications and pricing.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Sri%20Enterprises,%20I%20requested%20a%20quote%20for%20${encodeURIComponent(formData.productOrProgram)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg inline-flex items-center gap-1.5"
                >
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Division switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, division: 'adhesives', productOrProgram: 'SE-Bind 800 (Hot Melt Spine Glue)' })}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-all ${
                    formData.division === 'adhesives'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Industrial Adhesives
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, division: 'training', productOrProgram: 'Campus to Corporate Placement Readiness' })}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-all ${
                    formData.division === 'training'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Career Training
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3 py-2 text-xs border rounded-lg ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / College Name *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className={`w-full px-3 py-2 text-xs border rounded-lg ${errors.organization ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="e.g. Richkraft Offset"
                  />
                  {errors.organization && <p className="text-[11px] text-red-600 mt-0.5">{errors.organization}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3 py-2 text-xs border rounded-lg ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="+91 99453..."
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3 py-2 text-xs border rounded-lg ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product / Program Selected
                </label>
                <input
                  type="text"
                  value={formData.productOrProgram}
                  onChange={(e) => setFormData({ ...formData, productOrProgram: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Volume / Batch Size / Details
                </label>
                <textarea
                  rows={2}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                  placeholder="Specify machine model, paper gsm, expected delivery dates, or training schedule..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Request to Sri Enterprises Desk</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
