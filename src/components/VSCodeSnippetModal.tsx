import React, { useState } from 'react';
import { X, Copy, Check, Terminal, FileCode, FolderGit2 } from 'lucide-react';

interface VSCodeSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VSCodeSnippetModal: React.FC<VSCodeSnippetModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'setup' | 'App' | 'companyData' | 'types'>('setup');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setupCommands = `# 1. In your VS Code terminal, create or navigate to your project:
mkdir sri-enterprises-web && cd sri-enterprises-web

# 2. Initialize with Vite + React + TypeScript + Tailwind CSS:
npm create vite@latest . -- --template react-ts
npm install
npm install lucide-react @tailwindcss/vite tailwindcss

# 3. Copy our App.tsx, data, and components into src/
# 4. Run the development server in VS Code:
npm run dev
# -> Opens http://localhost:3000`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">VS Code Application Code & Setup</h3>
              <p className="text-xs text-slate-400">Sri Enterprises — Dual Division Production Code</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 px-6 pt-3 bg-slate-950 border-b border-slate-800 text-xs font-mono overflow-x-auto">
          {[
            { id: 'setup', label: 'Terminal Commands' },
            { id: 'App', label: 'src/App.tsx' },
            { id: 'companyData', label: 'src/data/companyData.ts' },
            { id: 'types', label: 'src/types.ts' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-2 border-b-2 font-medium transition-colors cursor-pointer ${
                activeTab === t.id
                  ? 'border-amber-400 text-amber-400 bg-slate-900/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs text-slate-300 bg-slate-950">
          {activeTab === 'setup' && (
            <div>
              <div className="flex items-center justify-between mb-3 text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Run in VS Code Terminal:
                </span>
                <button
                  onClick={() => copyToClipboard(setupCommands)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Commands'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 rounded-lg border border-slate-800 overflow-x-auto text-emerald-400 leading-relaxed">
                {setupCommands}
              </pre>

              <div className="mt-6 p-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 space-y-2 text-xs font-sans">
                <p className="font-bold text-white">Project Structure Created:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 font-mono text-[11px]">
                  <li>src/data/companyData.ts (Company profile, GSTIN, printing adhesives catalog & training modules)</li>
                  <li>src/components/Header.tsx (Navigation & Brand Wordmark)</li>
                  <li>src/components/Hero.tsx (Positioning, Tagline, Division switchers)</li>
                  <li>src/components/DualExpertiseSection.tsx (Adhesives + Placement training)</li>
                  <li>src/components/AdhesiveCatalog.tsx (Technical specs: viscosity, open time, temp)</li>
                  <li>src/components/AdhesiveCalculator.tsx (Interactive press batch estimator)</li>
                  <li>src/components/CareerTrainingSection.tsx (Curriculum explorer & modules)</li>
                  <li>src/components/VerifiedCredentials.tsx (GSTIN: 29HGCPS2781B1Z6 & BTM Layout address)</li>
                  <li>src/components/ContactSection.tsx (Quotation & inquiries form)</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'companyData' && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400">src/data/companyData.ts</span>
                <button
                  onClick={() => copyToClipboard(`// Sri Enterprises Data with Verified GSTIN & Address
export const COMPANY_INFO = {
  name: "SRI ENTERPRISES",
  shortName: "SE",
  tagline: "Bonding Industries, Building Futures",
  clearPositioning: "Delivering Industrial Adhesive Solutions & Career-Ready Training Programs",
  oneLineClarity: "We empower industries with reliable adhesive products and individuals with employability skills.",
  introduction: "We are a dynamic organization delivering reliable industrial adhesive solutions for the printing industry while empowering students and professionals through impactful soft skills and placement training programs.",
  address: {
    line1: "No. 13/A, 6th Cross, 14th 'A' Main",
    line2: "N.S. Palya, B.T.M Layout 2nd Stage",
    city: "Bengaluru",
    pincode: "560076",
    fullFormatted: "No. 13/A, 6th Cross, 14th 'A' Main, N.S. Palya, B.T.M Layout 2nd Stage, Bengaluru - 560076, Karnataka, India"
  },
  gstin: "29HGCPS2781B1Z6",
  phone: "+91 99453 25192"
};`)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy companyData.ts'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 rounded-lg border border-slate-800 overflow-x-auto text-amber-200 leading-relaxed max-h-96">
{`// Sri Enterprises Data with Verified GSTIN & Address
export const COMPANY_INFO = {
  name: "SRI ENTERPRISES",
  shortName: "SE",
  tagline: "Bonding Industries, Building Futures",
  clearPositioning: "Delivering Industrial Adhesive Solutions & Career-Ready Training Programs",
  oneLineClarity: "We empower industries with reliable adhesive products and individuals with employability skills.",
  introduction: "We are a dynamic organization delivering reliable industrial adhesive solutions for the printing industry while empowering students and professionals through impactful soft skills and placement training programs.",
  address: {
    line1: "No. 13/A, 6th Cross, 14th 'A' Main",
    line2: "N.S. Palya, B.T.M Layout 2nd Stage",
    city: "Bengaluru",
    pincode: "560076",
    fullFormatted: "No. 13/A, 6th Cross, 14th 'A' Main, N.S. Palya, B.T.M Layout 2nd Stage, Bengaluru - 560076, Karnataka, India"
  },
  gstin: "29HGCPS2781B1Z6",
  phone: "+91 99453 25192"
};`}
              </pre>
            </div>
          )}

          {activeTab === 'types' && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400">src/types.ts</span>
                <button
                  onClick={() => copyToClipboard(`export type DivisionType = 'all' | 'adhesives' | 'training';

export interface AdhesiveProduct {
  id: string;
  name: string;
  category: 'Printing & Binding' | 'Packaging & Carton' | 'Lamination & Film' | 'Specialty Adhesives';
  description: string;
  viscosity: string;
  openTime: string;
  applicationTemp: string;
  suitableSubstrates: string[];
  keyBenefit: string;
  packagingOptions: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'Campus Placement' | 'Corporate Soft Skills' | 'Leadership & Communication' | 'Technical Transition';
  duration: string;
  targetAudience: string;
  description: string;
  modules: string[];
  keyOutcomes: string[];
}`)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy types.ts'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 rounded-lg border border-slate-800 overflow-x-auto text-sky-300 leading-relaxed max-h-96">
{`export type DivisionType = 'all' | 'adhesives' | 'training';

export interface AdhesiveProduct {
  id: string;
  name: string;
  category: 'Printing & Binding' | 'Packaging & Carton' | 'Lamination & Film' | 'Specialty Adhesives';
  description: string;
  viscosity: string;
  openTime: string;
  applicationTemp: string;
  suitableSubstrates: string[];
  keyBenefit: string;
  packagingOptions: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'Campus Placement' | 'Corporate Soft Skills' | 'Leadership & Communication' | 'Technical Transition';
  duration: string;
  targetAudience: string;
  description: string;
  modules: string[];
  keyOutcomes: string[];
}`}
              </pre>
            </div>
          )}

          {activeTab === 'App' && (
            <div>
              <p className="text-slate-400 mb-2">Clean, modular application component orchestrating all sections.</p>
              <pre className="p-4 bg-slate-900 rounded-lg border border-slate-800 overflow-x-auto text-slate-200 leading-relaxed max-h-96">
{`// Full production App ready in your VS Code workspace:
// - Header with Top Bar Contract
// - Hero with "Bonding Industries, Building Futures"
// - Dual Expertise Showcase (Industrial Adhesives & Career Training)
// - Technical Adhesive Catalog with specs
// - Batch Consumption Estimator for Printers
// - Syllabus & Training Modules Explorer
// - Verified Government Credentials (GSTIN: 29HGCPS2781B1Z6)
// - Interactive Quotation Modal`}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Ready to run in VS Code with standard Vite + React setup</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
