/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PhoneCall, FileSpreadsheet, Hammer, ShieldCheck } from 'lucide-react';

const IconResolver = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case 'PhoneCall':
      return <PhoneCall className={className} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} />;
    case 'Hammer':
      return <Hammer className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    default:
      return <Hammer className={className} />;
  }
};

export default function Process() {
  const steps = [
    {
      step: 1,
      title: "1. Contact Us",
      description: "Call our emergency line or click schedule. Our Seattle-based dispatchers are live 24/7.",
      iconName: "PhoneCall",
      bgClass: "bg-blue-50 border-blue-100 text-blue-600"
    },
    {
      step: 2,
      title: "2. Inspection & Diagnosis",
      description: "A licensed plumber arrives in our mobile warehouse, inspects the issue, and provides a clear flat-rate quote.",
      iconName: "FileSpreadsheet",
      bgClass: "bg-amber-50 border-amber-100 text-amber-600"
    },
    {
      step: 3,
      title: "3. Repair or Installation",
      description: "We work carefully on the spot. We use premium certified brass, fittings, and pipes, completing most tasks same-day.",
      iconName: "Hammer",
      bgClass: "bg-purple-50 border-purple-100 text-purple-600"
    },
    {
      step: 4,
      title: "4. Customer Satisfaction",
      description: "We double-test our work under pressure, clean up completely, and walk you through the fixes with digital reports.",
      iconName: "ShieldCheck",
      bgClass: "bg-emerald-50 border-emerald-100 text-emerald-600"
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-50" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content bar */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 font-mono">
            OUR COMPREHENSIVE RUNTIME
          </span>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            How We Get Your Water Flowing Perfectly
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From the minute you dial our number to the final signed approval card, our process is structured to be completely worry-free and stress-free.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative" id="timeline-steps-wrapper">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-14 left-1/12 right-1/12 h-1 bg-slate-200 z-0 rounded-full"></div>

          {/* Steps list */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((st) => (
              <div key={st.step} className="flex flex-col items-center text-center group" id={`timeline-step-${st.step}`}>
                
                {/* Visual Step Marker Bubble */}
                <div className="relative mb-6">
                  {/* Outer breathing ring */}
                  <div className="absolute -inset-2 bg-white rounded-full border border-slate-100 shadow-sm opacity-100 group-hover:scale-110 transition-transform"></div>

                  <div className={`relative h-20 w-20 rounded-full border flex items-center justify-center p-5 font-bold transition-all ${st.bgClass} shadow-md`}>
                    <IconResolver name={st.iconName} className="h-9 w-9 stroke-[2.2]" />
                    
                    {/* Tiny index tag */}
                    <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-mono font-bold shadow-md">
                      0{st.step}
                    </span>
                  </div>
                </div>

                {/* Text Description Block */}
                <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                  {st.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs px-2">
                  {st.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
