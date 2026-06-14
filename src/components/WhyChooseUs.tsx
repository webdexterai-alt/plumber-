/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ShieldCheck,
  HandCoins,
  Zap,
  UserCheck,
  Activity,
  Heart,
  AlarmClock,
  Sparkles
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Licensed & Insured',
      description: 'Fully bonded, licensed plumbers covered by premium $5M liability insurance plans.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden surcharges. Flat upfront quotes provided before any tools touch your pipes.',
      icon: HandCoins,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Fast Response Time',
      description: 'Localized dispatch hubs to guarantee arrival under 45-60 mins for key emergencies.',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'Experienced Technicians',
      description: 'Vetted background-checked masters with ongoing structural skills certifications.',
      icon: UserCheck,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Modern Equipment',
      description: 'High-frequency leak acoustics, thermal diagnostic cameras, and heavy hydro-jets.',
      icon: Activity,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Satisfaction Guarantee',
      description: 'All work backed by our bulletproof double-peace-of-mind service check clearance.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600'
    },
    {
      title: '24/7 Service Live',
      description: 'On-call dispatch operators and emergency plumbers active through federal holidays.',
      icon: AlarmClock,
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'Local Trusted Experts',
      description: 'We are rooted locally in Seattle and belong to the regional Master Builders Association.',
      icon: Sparkles,
      color: 'bg-yellow-50 text-yellow-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-white" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content bar */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 font-mono">
            WHY CLIENTS PICK APEX
          </span>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            Uncompromising Standards. Transparent Solutions.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We deliver top-tier support because we believe local businesses can look, act, and execute with absolute integrity. See why over 5,000 Seattle families trust us implicitly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="features-grid">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-7 hover:bg-white hover:shadow-xl hover:border-slate-200/50 transition-all duration-300 relative"
                id={`why-card-${idx}`}
              >
                {/* Visual accent ring for brand strength */}
                <div className={`p-3 rounded-xl w-12 h-12 flex items-center justify-center ${feat.color} mb-5 group-hover:scale-110 transition-transform shadow-inner`}>
                  <Icon className="h-6 w-6 stroke-[2.2]" />
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Brand guarantee banner */}
        <div className="mt-16 sm:mt-20 border border-emerald-150 rounded-2xl bg-emerald-50/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-3xl sm:text-4xl">🛡️</div>
          <div>
            <h4 className="text-base sm:text-lg font-black text-emerald-950">
              The Apex Iron-Clad 100% Satisfaction Double Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed mt-1">
              If any repair we perform fails within 1 full year, we will return and resolve it with custom parts and labor completely free of charge. If you are not happy with our technician service, we will refund your diagnostic fee instantly. That is how confident we are in our plumbing crew.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
