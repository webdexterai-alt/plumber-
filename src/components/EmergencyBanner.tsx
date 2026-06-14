/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Flame, Phone, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BusinessInfo } from '../types';

interface EmergencyProps {
  business: BusinessInfo;
}

export default function EmergencyBanner({ business }: EmergencyProps) {
  const [activeDispatchers, setActiveDispatchers] = useState(4);
  const [activeTrucks, setActiveTrucks] = useState(3);

  // Simple interval to simulate fluctuating team availability for realistic urgency!
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrucks(() => Math.floor(Math.random() * 3) + 2); // fluctuates between 2 and 4
      setActiveDispatchers(() => Math.floor(Math.random() * 2) + 3); // fluctuates between 3 and 4
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="emergency-banner" className="relative py-16 bg-slate-950 text-white overflow-hidden" aria-labelledby="emergency-heading">
      {/* Absolute elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.15),transparent_40%)] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 top-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(30,58,138,0.25),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in">
        <div className="backdrop-blur-md bg-red-950/20 border border-red-500/20 rounded-3xl p-8 sm:p-12 lg:grid lg:grid-cols-12 lg:gap-8 items-center shadow-xl">
          
          <div className="lg:col-span-7 space-y-6">
            {/* Header pill badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-black tracking-widest uppercase">
              <ShieldAlert className="h-3.5 w-3.5 animate-bounce" />
              CRITICAL FIELD DISPATCH LIVE
            </div>
            
            <h2 id="emergency-heading" className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-white font-sans">
              Plumbing Emergency?<br />
              <span className="text-red-500">We're Available 24/7/365</span>
            </h2>

            <p className="text-slate-350 text-xs sm:text-base leading-relaxed font-normal max-w-xl">
              Water pipes do not care about standard office hours. Neither do we. Our line connects directly to live human operators—no robotic trees. Call right now to get a certified plumber dispatched in the {business.location} zone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Blocked sewer drains cleared fast</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Leaky water lines shutoff & repaired</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Burst frozen copper lines replaced</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Cold water heaters fixed same-day</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Massive action button */}
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 px-8 py-4.5 rounded-xl bg-red-650 hover:bg-red-700 text-white font-black text-lg shadow-lg shadow-red-500/20 active:scale-95 transition-all"
                id="emergency-call-btn"
              >
                <Phone className="h-5.5 w-5.5 fill-white animate-bounce" />
                Call Emergency Desk: {business.phone}
              </a>
            </div>
          </div>

          {/* Interactive Urgent Status Card */}
          <div className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 w-full max-w-md relative overflow-hidden shadow-2xl">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-red-400 font-mono mb-4">
                SEATTLE DISTRICT MONITOR
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-300">Live Operators Online</span>
                  </div>
                  <span className="text-lg font-black text-white font-mono">{activeDispatchers} Dispatchers</span>
                </div>

                <div className="flex justify-between items-center bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-300">Available Mobile Trucks</span>
                  </div>
                  <span className="text-lg font-black text-white font-mono">{activeTrucks} Crews Active</span>
                </div>

                <div className="flex justify-between items-center bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
                  <div className="flex items-center gap-3 text-red-500 font-bold">
                    <Flame className="h-4.5 w-4.5 animate-pulse" />
                    <span className="text-xs">Dispatch Priority Queue</span>
                  </div>
                  <span className="text-xs font-black bg-red-500/10 border border-red-500/20 px-2.5 py-1 text-red-400 uppercase rounded font-mono">
                    High/Immediate
                  </span>
                </div>
              </div>

              <div className="mt-5 text-center">
                <span className="text-[10px] text-slate-500 font-mono uppercase">
                  AVERAGE DISPATCH WAIT-TIME STATUS: <strong className="text-emerald-400 font-bold font-mono">14 SECONDS CONNECT</strong>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
