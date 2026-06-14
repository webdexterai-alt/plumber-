/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Flame,
  Droplets,
  Search,
  Wrench,
  Thermometer,
  Bath,
  UtensilsCrossed,
  Building2,
  X,
  Phone,
  CalendarCheck2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { ServiceItem, BusinessInfo } from '../types';
import { SERVICES } from '../data';

interface ServicesProps {
  business: BusinessInfo;
  scrollToSection: (id: string) => void;
}

// Helper to resolve icon name strings into visual Lucide elements
const IconResolver = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case 'Flame':
      return <Flame className={className} />;
    case 'Droplets':
      return <Droplets className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'ThermometerCheck':
    case 'Thermometer':
      return <Thermometer className={className} />;
    case 'Bath':
      return <Bath className={className} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    default:
      return <Wrench className={className} />;
  }
};

export default function Services({ business, scrollToSection }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookNowFromService = (serviceName: string) => {
    setSelectedService(null);
    scrollToSection('book-service');
    // Pre-select service inside the form (or trigger helper via query/field input selection)
    const selectEl = document.getElementById('appointment-service-selector') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = serviceName;
      // Trigger native change event so React form state updates
      const event = new Event('change', { bubbles: true });
      selectEl.dispatchEvent(event);
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 font-mono">
            WHAT WE DO
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mt-3 mb-4">
            Our Elite Suite of Plumbing Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No job is too massive or too microscopic. We support Seattle housing and commercial businesses with premium tooling, upfront prices, and guaranteed satisfaction.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="services-cards-grid">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="flex flex-col bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 relative group"
              id={`service-card-${srv.id}`}
            >
              {/* Highlight bar on hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

              {/* Icon Emblem */}
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <IconResolver name={srv.iconName} className="h-6 w-6 stroke-[2.2]" />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-black text-slate-900 leading-snug mb-3">
                {srv.name}
              </h3>

              {/* Brief copy */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal flex-grow mb-6">
                {srv.shortDescription}
              </p>

              {/* Actions row */}
              <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                <button
                  onClick={() => setSelectedService(srv)}
                  className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 cursor-pointer transition-colors"
                  aria-haspopup="dialog"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleBookNowFromService(srv.name)}
                  className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 hover:text-blue-600 cursor-pointer"
                >
                  Book Unit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Highlight Ribbon */}
        <div className="mt-16 bg-gradient-to-r from-blue-750 to-blue-600 rounded-2xl p-6 sm:p-10 shadow-lg text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 animate-pulse">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-black tracking-tight leading-snug">
                Need Fast, Reliable Emergency Repairs Right Now?
              </h4>
              <p className="text-sm text-blue-100 mt-1 max-w-xl">
                Do not wait for active flooding to ruin your drywall and subflooring structure. Our response team is on call to solve your problems.
              </p>
            </div>
          </div>
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-2 bg-white text-blue-700 font-black px-6 py-3.5 rounded-xl text-sm font-mono tracking-tight hover:bg-blue-50 hover:shadow-lg transition-all"
          >
            <Phone className="h-4.5 w-4.5 fill-blue-700 animate-bounce" />
            Call: {business.phone}
          </a>
        </div>
      </div>

      {/* Interactive Service Details Modal Overlay */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Header band */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-start gap-4 justify-between relative">
              {/* Background accent drops */}
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <IconResolver name={selectedService.iconName} className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 font-extrabold uppercase px-2.5 py-1 rounded-full border border-blue-500/30">
                    Premium Core Service
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1 leading-tight font-sans">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 transition-all cursor-pointer relative z-10"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 font-mono mb-2">
                  SERVICE BREAKDOWN COVERS:
                </h4>
                <ul className="space-y-3">
                  {selectedService.fullDetails.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                      <span className="text-blue-500 font-extrabold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and duration bento banner */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide block">TIMING ESTIMATE</span>
                    <span className="text-sm font-extrabold text-slate-850 block">{selectedService.duration}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 mt-1">
                    <Wrench className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide block">TRANSPARENT PRICING</span>
                    <span className="text-sm font-extrabold text-emerald-700 block">{selectedService.estimatedPrice}</span>
                  </div>
                </div>
              </div>

              {/* Safe customer notes */}
              <p className="text-xs text-slate-400 leading-relaxed">
                *Prices indicated reflect baseline estimates. Actual rates are determined pre-repair on-site with transparent consultation, honoring zero emergency surcharges during peak hours.
              </p>
            </div>

            {/* Modal Footer Controls */}
            <div className="border-t border-gray-100 p-6 bg-slate-50 flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-lg border border-gray-250 hover:bg-gray-100 text-slate-700 text-sm font-semibold text-center"
              >
                Go Back
              </button>
              <button
                onClick={() => handleBookNowFromService(selectedService.name)}
                className="px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm tracking-wide text-center"
              >
                Schedule This Service Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
