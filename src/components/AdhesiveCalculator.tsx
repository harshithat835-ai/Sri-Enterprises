import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, RotateCcw, Box, BookOpen, Layers } from 'lucide-react';

interface CalculatorProps {
  onOpenQuoteModal: (division?: 'adhesives' | 'training', productName?: string) => void;
}

export const AdhesiveCalculator: React.FC<CalculatorProps> = ({ onOpenQuoteModal }) => {
  const [appType, setAppType] = useState<'spine' | 'side' | 'carton' | 'lamination'>('spine');
  const [productionUnits, setProductionUnits] = useState<number>(25000);
  const [spineThicknessMm, setSpineThicknessMm] = useState<number>(12); // mm
  const [spineLengthCm, setSpineLengthCm] = useState<number>(24); // cm
  const [glueFilmGsm, setGlueFilmGsm] = useState<number>(180); // g/m2 for spine or dry weight

  // Calculations
  const calculateRequirements = () => {
    let gramsPerUnit = 0;

    if (appType === 'spine') {
      // Area = spine thickness (cm) * spine length (cm)
      const areaCm2 = (spineThicknessMm / 10) * spineLengthCm;
      // Normal EVA film thickness ~0.8mm to 1.2mm -> approx 1.8g to 4g per book depending on spine
      gramsPerUnit = (areaCm2 * 0.12); // realistic empirical factor for book spine
      if (gramsPerUnit < 0.8) gramsPerUnit = 0.8;
    } else if (appType === 'side') {
      // 2 sides x 4mm glue strip x length
      const sideStripCm2 = 2 * 0.4 * spineLengthCm;
      gramsPerUnit = sideStripCm2 * 0.05;
    } else if (appType === 'carton') {
      // Flap gluing: 2 flap strips
      gramsPerUnit = 0.9;
    } else {
      // Lamination: Film-to-paper dry pick up ~ 5 to 7 gsm
      gramsPerUnit = 1.4; // avg sheet A4/A3
    }

    const totalKg = (productionUnits * gramsPerUnit) / 1000;
    const bags25Kg = Math.ceil(totalKg / 25);
    const drums200Kg = (totalKg / 200).toFixed(1);

    return {
      gramsPerUnit: gramsPerUnit.toFixed(2),
      totalKg: Math.round(totalKg),
      bags25Kg: bags25Kg,
      drums200Kg: drums200Kg,
    };
  };

  const results = calculateRequirements();

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Industrial Utility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Adhesive Quantity & Batch Consumption Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            For commercial offset printers, binderies, and packaging lines. Estimate exact adhesive requirements in kilograms and 25 kg bags or 200 kg barrels for your upcoming press run.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Select Application */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Application Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'spine', label: 'Perfect Spine', icon: BookOpen },
                  { id: 'side', label: 'Side Crease', icon: Layers },
                  { id: 'carton', label: 'Carton Sealing', icon: Box },
                  { id: 'lamination', label: 'Lamination', icon: Layers },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setAppType(item.id as any)}
                      className={`p-3 rounded-lg border text-left flex flex-col items-start gap-2 transition-all cursor-pointer ${
                        appType === item.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${appType === item.id ? 'text-amber-400' : 'text-slate-500'}`} />
                      <span className="text-xs font-semibold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Production Volume */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-bold uppercase tracking-wider">2. Production Run Volume</span>
                <span className="font-mono text-amber-400 font-bold text-sm">
                  {productionUnits.toLocaleString()} units
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="250000"
                step="1000"
                value={productionUnits}
                onChange={(e) => setProductionUnits(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>1,000</span>
                <span>50,000</span>
                <span>150,000</span>
                <span>250,000+</span>
              </div>
            </div>

            {/* Step 3: Geometry (Spine thickness and length) */}
            {appType === 'spine' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">
                    Spine Thickness (mm):
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="2"
                      max="60"
                      value={spineThicknessMm}
                      onChange={(e) => setSpineThicknessMm(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                    />
                    <span className="text-xs text-slate-400">mm</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">
                    Book Spine Height / Cut Length:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="10"
                      max="50"
                      value={spineLengthCm}
                      onChange={(e) => setSpineLengthCm(Math.max(5, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                    />
                    <span className="text-xs text-slate-400">cm</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
              <span>Formula calibrated for EVA & synthetic hot-melts</span>
              <button
                onClick={() => {
                  setProductionUnits(25000);
                  setSpineThicknessMm(12);
                  setSpineLengthCm(24);
                }}
                className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Recommended Batch Calculation
              </span>
              <h3 className="mt-1 text-2xl font-bold text-white">
                Estimated Material Requirements
              </h3>

              <div className="mt-6 space-y-4">
                
                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
                  <span className="text-xs text-slate-400">Estimated Total Adhesive Weight</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-extrabold font-mono text-amber-400 tabular-nums">
                      {results.totalKg}
                    </span>
                    <span className="text-base font-semibold text-slate-300">Kilograms (Kg)</span>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">
                    (~{results.gramsPerUnit} grams per unit processed)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
                    <span className="text-xs text-slate-400">Standard 25 Kg Bags</span>
                    <p className="text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                      {results.bags25Kg} <span className="text-xs font-normal text-slate-400">bags</span>
                    </p>
                  </div>
                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
                    <span className="text-xs text-slate-400">200 Kg Drum Equivalent</span>
                    <p className="text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                      {results.drums200Kg} <span className="text-xs font-normal text-slate-400">drums</span>
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-amber-400/10 rounded-lg border border-amber-400/20 text-xs text-amber-200">
                  <p>
                    <strong>Local Delivery Assurance:</strong> Stock dispatched directly from Sri Enterprises B.T.M Layout, Bengaluru warehouse within 24 hours.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={() => onOpenQuoteModal('adhesives', `Adhesive Order: ${results.totalKg} Kg (${results.bags25Kg} x 25Kg Bags) for ${productionUnits.toLocaleString()} units`)}
                className="w-full py-3.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/10"
              >
                <span>Request Price Quote for {results.totalKg} Kg</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
