import React, { useState } from 'react';
import { COMPANY_INFO, FAQ_ITEMS } from '../data/companyData';
import { QuoteRequestForm } from '../types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onFormSubmitted?: (formData: QuoteRequestForm) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onFormSubmitted }) => {
  const [formData, setFormData] = useState<QuoteRequestForm>({
    division: 'adhesives',
    name: '',
    organization: '',
    email: '',
    phone: '',
    productOrProgram: 'SE-Bind 800 (Hot Melt Spine Glue)',
    quantityOrBatchSize: '500 Kg (20 Bags)',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Company / Institution name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    if (onFormSubmitted) {
      onFormSubmitted(formData);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Connect With Sri Enterprises
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Request Quotation, Sample Batch or Training Consultation
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Reach out directly to our Bengaluru operations desk. For urgent factory press runs or upcoming university campus drive timelines, our team responds within 4 business hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Direct Business Inquiry & Requirement Form
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Official inquiry handled under GSTIN: {COMPANY_INFO.gstin}
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-950">Inquiry Received Successfully</h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our commercial desk at Sri Enterprises will review your specifications for <strong>{formData.organization}</strong> and contact you at {formData.phone} shortly.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Sri%20Enterprises,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.productOrProgram)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg inline-flex items-center gap-1.5"
                  >
                    <span>Notify Us on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        division: 'adhesives',
                        name: '',
                        organization: '',
                        email: '',
                        phone: '',
                        productOrProgram: 'SE-Bind 800 (Hot Melt Spine Glue)',
                        quantityOrBatchSize: '500 Kg (20 Bags)',
                        requirements: '',
                      });
                    }}
                    className="px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Division selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Inquiry Division:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, division: 'adhesives', productOrProgram: 'SE-Bind 800 (Hot Melt Spine Glue)' })}
                      className={`p-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        formData.division === 'adhesives'
                          ? 'bg-slate-950 text-white border-slate-950'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Industrial Adhesives & Chemistry
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, division: 'training', productOrProgram: 'Campus to Corporate Placement Readiness' })}
                      className={`p-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        formData.division === 'training'
                          ? 'bg-slate-950 text-white border-slate-950'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Career Training & Placement Bootcamps
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        errors.name ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / College Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Richkraft Offset / ABC Engg College"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        errors.organization ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.organization && <p className="text-xs text-red-600 mt-1">{errors.organization}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 99453 25192"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        errors.phone ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ops@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {formData.division === 'adhesives' ? 'Target Product / Application' : 'Target Training Program'}
                    </label>
                    <input
                      type="text"
                      value={formData.productOrProgram}
                      onChange={(e) => setFormData({ ...formData, productOrProgram: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {formData.division === 'adhesives' ? 'Estimated Volume (Kg / Bags)' : 'Batch Size / Student Count'}
                    </label>
                    <input
                      type="text"
                      placeholder={formData.division === 'adhesives' ? 'e.g. 500 Kg or 25 Kg sample' : 'e.g. 120 Students'}
                      value={formData.quantityOrBatchSize}
                      onChange={(e) => setFormData({ ...formData, quantityOrBatchSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Requirements or Delivery Timelines
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on your printing machines, substrate gsm, binding speed, or specific placement training objectives..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-400/10"
                  >
                    <span>Submit Official Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    GST-compliant tax invoices provided with every corporate order.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Contact Details & Operating Location */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Bengaluru Headquarters
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-amber-300 font-medium mt-0.5">
                {COMPANY_INFO.tagline}
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Facility Address:</strong>
                    <span>{COMPANY_INFO.address.line1}</span><br />
                    <span>{COMPANY_INFO.address.line2}</span><br />
                    <span>{COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}, Karnataka, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Direct Telephonic Desk:</strong>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 hover:underline font-mono">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Commercial Registration:</strong>
                    <span className="font-mono text-slate-200">GSTIN: {COMPANY_INFO.gstin}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Dispatch & Office Hours:</strong>
                    <span>Monday – Saturday: 9:30 AM to 6:30 PM IST</span>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex-1 py-2.5 text-center text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  Call Office
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Sri%20Enterprises`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Frequently Asked Inquiries
              </h4>
              <div className="space-y-3">
                {FAQ_ITEMS.slice(0, 3).map((faq, index) => (
                  <div key={index} className="border border-slate-200 bg-white rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-3 text-xs font-bold text-slate-900 flex items-center justify-between gap-2 hover:bg-slate-50 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="p-3 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
