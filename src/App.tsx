/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DivisionType } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DualExpertiseSection } from './components/DualExpertiseSection';
import { AdhesiveCatalog } from './components/AdhesiveCatalog';
import { AdhesiveCalculator } from './components/AdhesiveCalculator';
import { CareerTrainingSection } from './components/CareerTrainingSection';
import { VerifiedCredentials } from './components/VerifiedCredentials';
import { ClientProofSection } from './components/ClientProofSection';
import { ContactSection } from './components/ContactSection';
import { InquiryModal } from './components/InquiryModal';
import { VSCodeSnippetModal } from './components/VSCodeSnippetModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentFilter, setCurrentFilter] = useState<DivisionType>('all');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<'adhesives' | 'training'>('adhesives');
  const [selectedProductName, setSelectedProductName] = useState<string>('');

  const handleOpenQuoteModal = (division: 'adhesives' | 'training' = 'adhesives', productName: string = '') => {
    setSelectedDivision(division);
    setSelectedProductName(productName);
    setIsQuoteModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-400/30 selection:text-slate-950">
      
      {/* 3-Zone Navigation Header */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenCodeGuide={() => setIsCodeModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Exact Tagline and Positioning */}
        <Hero
          currentFilter={currentFilter}
          onSelectFilter={setCurrentFilter}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Dual Expertise Section: Adhesives & Career Development */}
        {(currentFilter === 'all') && (
          <DualExpertiseSection
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateSection={handleNavigateSection}
          />
        )}

        {/* Division 1: Industrial Adhesive Products & Specs */}
        {(currentFilter === 'all' || currentFilter === 'adhesives') && (
          <>
            <AdhesiveCatalog
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <AdhesiveCalculator
              onOpenQuoteModal={handleOpenQuoteModal}
            />
          </>
        )}

        {/* Division 2: Career Development & Placement Training */}
        {(currentFilter === 'all' || currentFilter === 'training') && (
          <CareerTrainingSection
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {/* Proof of Results & Real Client Quotes */}
        <ClientProofSection />

        {/* Verified Business Credentials & Tax Invoice Information */}
        <VerifiedCredentials />

        {/* Contact, Inquiries & FAQ */}
        <ContactSection />
      </main>

      {/* Corporate Quiet Footer */}
      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenCodeGuide={() => setIsCodeModalOpen(true)}
      />

      {/* Inquiry & Quotation Modal */}
      <InquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialDivision={selectedDivision}
        initialProductName={selectedProductName}
      />

      {/* VS Code Code & Export Modal */}
      <VSCodeSnippetModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />

    </div>
  );
}
