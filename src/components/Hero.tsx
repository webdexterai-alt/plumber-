/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, Clock, Zap, Star } from 'lucide-react';
import { BusinessInfo } from '../types';

interface HeroProps {
  business: BusinessInfo;
  scrollToSection: (id: string) => void;
}

export default function Hero({ business, scrollToSection }: HeroProps) {
  const heroImgUrl = "/src/assets/images/plumber_hero_main_1781428957113.jpg";

  const trustBadges = [
    { text: 'Licensed & Bonded', icon: ShieldCheck },
    { text: '24/7 Emergency Dispatch', icon: Clock },
    { text: '60-Min Arrival Guarantee', icon: Zap },
    { text: '100% Upfront Pricing', icon: Star },
  ];

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden py-16 sm:py-24">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImgUrl}
          alt="Professional Plumber Repairing Pipe under sink"
          className="w-full h-full object-cover object-center opacity-40 select-none pointer-events-none scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tagline micro badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping"></span>
              24/7 Emergency Plumber in {business.location}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6 font-sans">
              Professional Plumbing <br className="hidden sm:inline" />
              Services <span className="text-blue-500 underline decoration-blue-500/40 decoration-wavy underline-offset-8">You Can Trust</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl font-sans">
              Fast, Reliable, and Honest Plumbing Solutions for Homes and Businesses in the {business.location} and surrounding areas. Available 24 hours a day, 365 days a year.
            </p>

            {/* CTA action cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Phone CTA */}
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-base shadow-xl shadow-blue-600/20 transition-all hover:translate-y-[-2px]"
                id="hero-call-now-btn"
              >
                <Phone className="h-5 w-5 fill-white-pulse" />
                Call Now: {business.phone}
              </a>

              {/* Book Appointment CTA */}
              <button
                onClick={() => scrollToSection('book-service')}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-white font-bold text-base transition-all hover:translate-y-[-2px] cursor-pointer"
                id="hero-book-now-btn"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </button>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-600 text-white font-bold text-base hover:bg-emerald-750 transition-all hover:translate-y-[-2px]"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                WhatsApp Us
              </a>
            </div>

            {/* Built Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full border-t border-slate-800 pt-8" id="hero-trust-badges">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="p-1 rounded bg-blue-500/10 text-blue-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-300">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prompt Dispatcher Badge Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-up">
            <div className="backdrop-blur-md bg-slate-950/60 border border-slate-800 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-red-600 text-white text-[11px] uppercase tracking-widest font-black px-3.5 py-1.5 rounded-lg shadow-lg shadow-red-500/15 animate-pulse">
                Live Status
              </div>

              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                ACTIVE PLUMBING DISPATCH
              </h3>

              <div className="flex items-center gap-x-4 mb-6 pb-6 border-b border-slate-800/60">
                <div className="h-14 w-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Clock className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono tracking-wider block">CURRENT RESPONSE TIME</span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">Under 45 Minutes</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <p className="flex items-start gap-2.5">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span>
                  <span><strong>On-Site Dispatch Tracker:</strong> Provided instantly upon dispatching a service technician.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span>
                  <span><strong>Zero Callout Surcharge:</strong> For residential diagnostics within {business.location} metro limits.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span>
                  <span><strong>Stocked Vehicles:</strong> Trucks are loaded with 400+ premium pipes and brass hardware assets to ensure same-day repair.</span>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Google Verified Reviews:</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-bold">★★★★★</span>
                  <span className="text-white font-bold">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
