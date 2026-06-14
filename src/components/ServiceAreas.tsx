/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Search, Navigation, CheckCircle2, Clock, Map } from 'lucide-react';
import { SERVICE_AREAS_LIST } from '../data';
import { BusinessInfo } from '../types';

interface ServiceAreasProps {
  business: BusinessInfo;
}

export default function ServiceAreas({ business }: ServiceAreasProps) {
  const [zipInput, setZipInput] = useState('');
  const [etaResult, setEtaResult] = useState<{ name: string; zip: string; eta: string } | null>(null);
  const [zipChecked, setZipChecked] = useState(false);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    // Search for match in our list
    const found = SERVICE_AREAS_LIST.find((area) =>
      area.zip.split(', ').some((z) => z.trim() === cleanZip)
    );

    if (found) {
      setEtaResult(found);
    } else {
      setEtaResult(null);
    }
    setZipChecked(true);
  };

  return (
    <section id="service-areas" className="py-20 sm:py-28 bg-white" aria-labelledby="service-areas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 font-mono mb-3">
              SERVICE REGIONS
            </span>
            <h2 id="service-areas-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Our 24-Hour Emergency Plumbing Dispatch Footprint
            </h2>
            <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
              We deploy our mobile plumber crews and service vehicles strategically throughout {business.location} and neighbouring metro areas to ensure we never stall in traffic during a plumbing crisis under your roof.
            </p>
          </div>

          {/* Interactive zip search widget */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h3 className="text-sm uppercase font-extrabold tracking-wider text-slate-700 font-mono mb-4 flex items-center gap-2">
              <Navigation className="h-4 w-4 text-blue-600" />
              ZIP CODE ETA CHECKER
            </h3>

            <form onSubmit={handleZipCheck} className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Enter 5-digit zip code (e.g. 98117)"
                value={zipInput}
                onChange={(e) => {
                  setZipInput(e.target.value);
                  setZipChecked(false);
                }}
                className="flex-grow px-4 py-3 bg-white border border-gray-250 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-mono"
                maxLength={5}
                pattern="[0-9]*"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm tracking-wide flex items-center justify-center cursor-pointer hover:bg-blue-700"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>

            {/* Results Block */}
            {zipChecked && (
              <div className="p-4 rounded-xl border transition-all animate-fade-in bg-slate-900 text-white border-slate-805">
                {etaResult ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                      <span>WE SERVE THIS ZIP CODE!</span>
                    </div>
                    <p className="text-xs text-slate-350">
                      Located in <strong className="text-white font-bold">{etaResult.name}</strong>
                    </p>
                    <div className="flex items-center gap-2.5 pt-2 border-t border-slate-800">
                      <Clock className="h-4 w-4 text-blue-400" />
                      <span className="text-xs">Estimated dispatcher arrival: <strong className="text-blue-300 font-mono">{etaResult.eta}</strong></span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 text-center py-2">
                    <p className="text-sm font-semibold text-amber-400">OUT OF IMMEDIATE COVERAGE</p>
                    <p className="text-xs text-slate-400">
                      Please dial <strong className="text-white">{business.phone}</strong> so our dispatcher can check if a roaming truck can be rerouted to your sector.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Areas Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel: Locations card grid list */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4" id="service-areas-grid">
            {SERVICE_AREAS_LIST.map((area) => (
              <div
                key={area.name}
                onMouseEnter={() => setHoveredZone(area.name)}
                onMouseLeave={() => setHoveredZone(null)}
                className={`p-5 rounded-2xl border transition-all cursor-crosshair flex flex-col justify-between ${
                  hoveredZone === area.name
                    ? 'border-blue-500 bg-blue-50/40 shadow-md scale-[1.02]'
                    : 'border-slate-100 bg-slate-50'
                }`}
                id={`area-card-${area.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className={`h-4 w-4 ${hoveredZone === area.name ? 'text-blue-600' : 'text-slate-400'}`} />
                      <h4 className="text-sm sm:text-base font-black text-slate-900">{area.name}</h4>
                    </div>
                    <span className="text-[10px] font-mono bg-blue-500/10 text-blue-600 font-semibold px-2 py-0.5 rounded-full">
                      ACTIVE
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono block mt-2">
                    Zips: {area.zip}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 pt-4 border-t border-slate-150/40 mt-4 text-xs font-semibold text-slate-700">
                  <Clock className="h-3.5 w-3.5 text-blue-500" />
                  <span>Avg Response: <strong className="text-blue-600 font-mono font-bold">{area.eta}</strong></span>
                </div>
              </div>
            ))}
          </div>

          {/* Right panel: Premium Custom interactive SVG map representing local sectors */}
          <div className="lg:col-span-6 bg-slate-950 rounded-3xl border border-slate-900 p-6 sm:p-8 text-center shadow-xl">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-blue-400 font-mono mb-4 flex items-center justify-center gap-2">
              <Map className="h-4 w-4" />
              LIVE DISPATCH VECTOR COVERAGE
            </h3>
            
            {/* Interactive vector SVG representing Bellevue, Seattle Downtown, Everett, Kent, etc. */}
            <div className="relative aspect-video w-full rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-850 p-4">
              <svg viewBox="0 0 400 240" className="w-full h-full text-slate-800">
                {/* Simulated bay/water area */}
                <path d="M 0,0 L 130,0 C 140,80 110,140 120,240 L 0,240 Z" fill="#1e293b" opacity="0.4" />
                {/* Regional service zones represented as customized polygonal shapes */}
                <g stroke="#ffffff" strokeWidth="1" cursor="pointer">
                  {/* Seattle Downtown Zone */}
                  <polygon
                    points="140,40 180,45 190,90 145,100"
                    fill={hoveredZone === 'Downtown Seattle' ? '#2563eb' : '#0f172a'}
                    stroke={hoveredZone === 'Downtown Seattle' ? '#ef4444' : '#1e293b'}
                    onMouseEnter={() => setHoveredZone('Downtown Seattle')}
                    onMouseLeave={() => setHoveredZone(null)}
                  />
                  {/* Bellevue Zone */}
                  <polygon
                    points="220,50 280,45 290,110 215,95"
                    fill={hoveredZone === 'Bellevue' ? '#2563eb' : '#0f172a'}
                    stroke={hoveredZone === 'Bellevue' ? '#ef4444' : '#1e293b'}
                    onMouseEnter={() => setHoveredZone('Bellevue')}
                    onMouseLeave={() => setHoveredZone(null)}
                  />
                  {/* Tacoma / South Area Zone */}
                  <polygon
                    points="150,150 250,145 280,225 140,210"
                    fill={hoveredZone === 'Tacoma' ? '#2563eb' : '#0f172a'}
                    stroke={hoveredZone === 'Tacoma' ? '#ef4444' : '#1e293b'}
                    onMouseEnter={() => setHoveredZone('Tacoma')}
                    onMouseLeave={() => setHoveredZone(null)}
                  />
                  {/* Redmond / Kirkland Zone */}
                  <polygon
                    points="218,10 290,15 310,50 240,48"
                    fill={hoveredZone === 'Redmond' ? '#2563eb' : '#0f172a'}
                    stroke={hoveredZone === 'Redmond' ? '#ef4444' : '#1e293b'}
                    onMouseEnter={() => setHoveredZone('Redmond')}
                    onMouseLeave={() => setHoveredZone(null)}
                  />
                  {/* Ballard & Fremont Zone */}
                  <polygon
                    points="130,10 195,12 210,40 142,38"
                    fill={hoveredZone === 'Ballard & Fremont' ? '#2563eb' : '#0f172a'}
                    stroke={hoveredZone === 'Ballard & Fremont' ? '#ef4444' : '#1e293b'}
                    onMouseEnter={() => setHoveredZone('Ballard & Fremont')}
                    onMouseLeave={() => setHoveredZone(null)}
                  />
                </g>

                {/* Simulated map points */}
                <g fill="#3b82f6" stroke="#93c5fd" strokeWidth="1">
                  {/* Active mobile plumber points */}
                  <circle cx="160" cy="70" r="3" className="animate-ping" style={{ transformOrigin: '160px 70px' }} />
                  <circle cx="160" cy="70" r="2.5" />

                  <circle cx="250" cy="75" r="3" className="animate-ping" style={{ transformOrigin: '250px 75px' }} />
                  <circle cx="250" cy="75" r="2.5" />

                  <circle cx="180" cy="180" r="3" className="animate-ping" style={{ transformOrigin: '180px 180px' }} />
                  <circle cx="180" cy="180" r="2.5" />
                </g>

                {/* Labels of sectors */}
                <g fill="#94a3b8" fontSize="8" fontFamily="monospace">
                  <text x="10" y="110" fill="#475569">Puget Sound</text>
                  <text x="145" y="80" fill="white" fontWeight="bold">Downtown</text>
                  <text x="235" y="75" fill="white" fontWeight="bold">Bellevue</text>
                  <text x="180" y="190" fill="white" fontWeight="bold">Tacoma Core</text>
                  <text x="150" y="25" fill="white">North Seattle</text>
                </g>
              </svg>

              {/* Status HUD displaying current hovered zone stats! */}
              <div className="absolute right-4 bottom-4 left-4 bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3 text-left">
                {hoveredZone ? (
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-blue-400 font-mono">SECTOR DETECTED ON SCOPE</span>
                    <h5 className="text-xs sm:text-sm font-black text-white mt-0.5">{hoveredZone}</h5>
                    <p className="text-[11px] text-slate-400 font-mono mt-1">
                      Priority Dispatch Status: <span className="text-emerald-400 font-bold">READY (45-60 min response)</span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 font-mono">MAP INTERACTIVE STATUS</span>
                    <p className="text-xs text-slate-400 mt-0.5">Hover or tap any sector division block on the grid map scope above.</p>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mt-4">
              Our GPS fleet tracking coordinates telemetry guides dispatchers dynamically to avoid Seattle bottlenecks, matching emergency plumbers closest to your location.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
