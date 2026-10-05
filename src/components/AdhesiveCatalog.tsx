import React, { useState } from 'react';
import { ADHESIVE_PRODUCTS } from '../data/companyData';
import { AdhesiveProduct } from '../types';
import { ArrowUpRight, Check, Droplets, Gauge, Thermometer, Box, Filter } from 'lucide-react';

interface AdhesiveCatalogProps {
  onOpenQuoteModal: (division?: 'adhesives' | 'training', productName?: string) => void;
}

export const AdhesiveCatalog: React.FC<AdhesiveCatalogProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<AdhesiveProduct | null>(ADHESIVE_PRODUCTS[0]);

  const categories = [
    'All',
    'Printing & Binding',
    'Packaging & Carton',
    'Lamination & Film',
    'Specialty Adhesives',
  ];

  const filteredProducts = selectedCategory === 'All'
    ? ADHESIVE_PRODUCTS
    : ADHESIVE_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="adhesives" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Division 01: Industrial Chemistry & Adhesion
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              High-Performance Industrial Adhesives for Printing & Packaging
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Manufactured and distributed to meet strict press speeds, fiber tear requirements, and zero-failure spine binding standards for printers in Bengaluru and nationwide.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('adhesives')}
            className="self-start md:self-auto px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-amber-600 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Request Custom Batch Formulation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 pb-4 border-b border-slate-200">
          <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Filter by Application:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between transition-all hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-amber-700">{product.category}</span>
                  <span className="font-mono text-slate-400">{product.packagingOptions}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {product.name}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3">
                  {product.description}
                </p>

                {/* Technical specs compact table */}
                <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Gauge className="w-3.5 h-3.5 text-amber-600" />
                      Viscosity:
                    </span>
                    <span className="font-mono font-medium text-slate-900 text-right">{product.viscosity}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Thermometer className="w-3.5 h-3.5 text-amber-600" />
                      App Temp:
                    </span>
                    <span className="font-mono font-medium text-slate-900 text-right">{product.applicationTemp}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Droplets className="w-3.5 h-3.5 text-amber-600" />
                      Open Time:
                    </span>
                    <span className="font-mono font-medium text-slate-900 text-right">{product.openTime}</span>
                  </div>
                </div>

                {/* Key Substrates */}
                <div className="mt-3 pt-3 border-t border-slate-200/60">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Compatible Substrates:
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {product.suitableSubstrates.map((sub, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Advantage */}
                <div className="mt-3 p-2.5 bg-amber-50 rounded-lg border border-amber-200/60 text-xs text-amber-900">
                  <span className="font-bold">Impact: </span>
                  {product.keyBenefit}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2">
                <button
                  onClick={() => onOpenQuoteModal('adhesives', product.name)}
                  className="w-full py-2 px-3 text-xs font-bold text-white bg-slate-900 hover:bg-amber-600 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Request Quote & Sample</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Technical Guarantee strip */}
        <div className="mt-12 bg-slate-900 text-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">
              Need on-site viscosity testing or roller speed calibration?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Sri Enterprises technical engineers visit printing & packaging presses across Bengaluru to test bond pull strength on your own paper substrates.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('adhesives', 'On-Site Machine Calibration & Trial')}
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Book On-Site Technical Trial
          </button>
        </div>

      </div>
    </section>
  );
};
