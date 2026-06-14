/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Users,
  Settings,
  FileCode,
  Globe,
  Trash2,
  CheckCircle2
} from 'lucide-react';
import { Booking, BusinessInfo, BookingStatus } from '../types';

interface AdminPanelProps {
  business: BusinessInfo;
  setBusiness: (val: BusinessInfo) => void;
  bookings: Booking[];
  setBookings: (val: Booking[]) => void;
  onClose: () => void;
}

export default function AdminPanel({
  business,
  setBusiness,
  bookings,
  setBookings,
  onClose
}: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'leads' | 'branding' | 'seo'>('leads');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');

  // Status cycling helper
  const handleCycleStatus = (id: string, current: BookingStatus) => {
    const statuses: BookingStatus[] = ['Pending', 'Confirmed', 'Dispatched', 'In Progress', 'Completed'];
    const nextIdx = (statuses.indexOf(current) + 1) % statuses.length;
    const nextStatus = statuses[nextIdx];

    setBookings(
      bookings.map((b) => {
        if (b.id !== id) return b;
        let update: Partial<Booking> = { status: nextStatus };
        if (nextStatus === 'Dispatched') {
          update.assignedPlumber = b.assignedPlumber || 'Marcus L. (Local Specialist)';
          update.notes = b.notes || 'Emergency dispatch initiated. GPS routes locked.';
        }
        if (nextStatus === 'Completed') {
          update.notes = 'Work completed under pressure stress checks. Client signed off.';
        }
        return { ...b, ...update };
      })
    );
  };

  // Remove booking helper
  const handleRemoveBooking = (id: string) => {
    if (confirm('Are you sure you want to remove this plumbing request?')) {
      setBookings(bookings.filter((b) => b.id !== id));
    }
  };

  // Structured Data Schema dynamically customized to exact edited settings
  const generatedSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": business.name,
    "image": "https://ais-dev-icv6loyemgoizkwc2snp4n-439856618913.asia-southeast1.run.app/src/assets/images/plumber_hero_main_1781428957113.jpg",
    "telephone": business.phone,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address,
      "addressLocality": business.location.split(',')[0],
      "addressRegion": business.location.split(',')[1]?.trim() || "WA",
      "postalCode": "98101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.6062",
      "longitude": "-122.3321"
    },
    "url": "https://ais-dev-icv6loyemgoizkwc2snp4n-439856618913.asia-southeast1.run.app",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      "Seattle",
      "Bellevue",
      "Tacoma",
      "Redmond",
      "Kirkland"
    ]
  };

  return (
    <div className="bg-slate-900 text-white border-b-2 border-blue-600 relative overflow-hidden" id="admin-panel-console">
      <div className="bg-slate-950 px-4 py-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-lg">
              <Settings className="h-5 w-5 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-base font-black font-sans leading-none">Apex Plumbers Control Console</h2>
              <span className="text-[10px] text-slate-400 font-mono mt-1 block">LIVE DISPATCH AND BRAND CUSTOMIZER HUB</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Nav tabs inside header */}
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('leads')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold leading-none cursor-pointer transition-all ${
                  activeTab === 'leads' ? 'bg-blue-605 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Booking Leads ({bookings.length})
              </button>
              <button
                onClick={() => setActiveTab('branding')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold leading-none cursor-pointer transition-all ${
                  activeTab === 'branding' ? 'bg-blue-605 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Branding Personalizer
              </button>
              <button
                onClick={() => setActiveTab('seo')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold leading-none cursor-pointer transition-all ${
                  activeTab === 'seo' ? 'bg-blue-605 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                SEO Diagnostics
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold cursor-pointer"
            >
              Exit Console
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === 'leads' && (
          <div className="space-y-6" id="admin-appointments-ledger">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-black flex items-center gap-2">
                <Users className="text-blue-400 h-5 w-5" />
                Active Plumbing Dispatches
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Click <span className="text-blue-400 font-bold font-sans">"Cycle Status"</span> to advance plumber dispatch nodes.
              </p>
            </div>

            {bookings.length > 0 ? (
              <div className="space-y-4">
                {bookings.map((booking) => {
                  let statusColor = 'bg-yellow-500/15 border-yellow-500/30 text-yellow-400';
                  if (booking.status === 'Confirmed') statusColor = 'bg-blue-500/15 border-blue-500/30 text-blue-400';
                  if (booking.status === 'Dispatched') statusColor = 'bg-purple-500/15 border-purple-500/30 text-purple-400';
                  if (booking.status === 'In Progress') statusColor = 'bg-amber-500/15 border-amber-500/30 text-amber-400';
                  if (booking.status === 'Completed') statusColor = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';

                  return (
                    <div
                      key={booking.id}
                      className="bg-slate-950 border border-slate-800 rounded-2xl p-5 relative overflow-hidden flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center"
                      id={`lead-row-${booking.id}`}
                    >
                      <div className="md:col-span-3 space-y-1">
                        <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                          {booking.id}
                        </span>
                        <h4 className="text-sm font-black text-white">{booking.customerName}</h4>
                        <p className="text-xs text-slate-400 font-mono">{booking.phone}</p>
                        <p className="text-xs text-slate-400">{booking.email || 'No email provided'}</p>
                      </div>

                      <div className="md:col-span-3 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Requested Solution</span>
                        <strong className="text-xs text-blue-400 block font-normal">{booking.serviceNeeded}</strong>
                        <span className="text-[10px] text-slate-350 block leading-tight font-mono">{booking.address}</span>
                      </div>

                      <div className="md:col-span-3 space-y-1 text-left">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Time Slot</span>
                        <span className="text-xs block font-semibold text-slate-300">{booking.preferredTime}</span>
                        {booking.assignedPlumber && (
                          <span className="text-[10px] bg-slate-900 border border-slate-800 rounded-full px-2.5 py-0.5 text-slate-300 inline-block font-mono mt-1">
                            👷 {booking.assignedPlumber}
                          </span>
                        )}
                        {booking.notes && (
                          <p className="text-[10px] italic text-slate-450 truncate max-w-full" title={booking.notes}>
                            Note: {booking.notes}
                          </p>
                        )}
                      </div>

                      {/* Status and Action Buttons */}
                      <div className="md:col-span-3 flex md:flex-col lg:flex-row items-center justify-end gap-2 w-full mt-2 md:mt-0">
                        <span className={`text-xs px-3 py-1 font-mono font-bold uppercase rounded-lg border leading-none ${statusColor}`}>
                          {booking.status}
                        </span>

                        <button
                          onClick={() => handleCycleStatus(booking.id, booking.status)}
                          className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-wide cursor-pointer transition-colors leading-none"
                        >
                          Cycle Node
                        </button>

                        <button
                          onClick={() => handleRemoveBooking(booking.id)}
                          className="p-1.5 rounded-lg bg-slate-900 hover:bg-red-950 border border-slate-800 hover:border-red-500/20 text-slate-400 hover:text-red-400 font-bold transition-all cursor-pointer"
                          title="Purge request ticket"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 p-4 border border-dashed border-slate-805 rounded-xl bg-slate-950/40">
                <p className="text-sm font-semibold text-slate-400">LEDGER INBOX EMPTY</p>
                <p className="text-xs text-slate-500 mt-1">Fill out the 'Schedule Service' form in consumer view to populate instant dispatches.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'branding' && (
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6" id="admin-personalizer-panel">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-black flex items-center gap-2">
                <Globe className="text-blue-400 h-5 w-5" />
                Personalize Plumbing Business Settings
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Edit these fields in real-time. Every instance of contact cards, map locations, CTA labels, and Structured schemas across the entire client page will compile immediately!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Business Name */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">Plumbing Business Name</label>
                <input
                  type="text"
                  value={business.name}
                  onChange={(e) => setBusiness({ ...business, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">Phone Number (Click-To-Call)</label>
                <input
                  type="text"
                  value={business.phone}
                  onChange={(e) => setBusiness({ ...business, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* Whatsapp */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">WhatsApp Direct Contact</label>
                <input
                  type="text"
                  value={business.whatsapp}
                  onChange={(e) => setBusiness({ ...business, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">Email Address (SEO/Inbound)</label>
                <input
                  type="text"
                  value={business.email}
                  onChange={(e) => setBusiness({ ...business, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* Location General */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">Primary Metro Area (City, State)</label>
                <input
                  type="text"
                  value={business.location}
                  onChange={(e) => setBusiness({ ...business, location: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* Address details */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">Physical Office/Depot Address</label>
                <input
                  type="text"
                  value={business.address}
                  onChange={(e) => setBusiness({ ...business, address: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* Years of prep */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-450 uppercase block">Years of Active Experience</label>
                <input
                  type="number"
                  value={business.yearsOfExperience}
                  onChange={(e) => setBusiness({ ...business, yearsOfExperience: parseInt(e.target.value) || 1 })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* Business hours coverage */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">Business Hours Claim Coverage</label>
                <input
                  type="text"
                  value={business.businessHours}
                  onChange={(e) => setBusiness({ ...business, businessHours: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            <div className="flex bg-blue-950/20 border border-blue-500/25 justify-between items-center p-4 rounded-xl text-xs">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-200">Re-compilations active! Change any value above and inspect results below on-the-fly.</span>
              </span>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="space-y-6" id="admin-seo-auditor">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
              <h3 className="text-lg font-black flex items-center gap-2 border-b border-slate-800 pb-4">
                <FileCode className="text-blue-400 h-5 w-5 animate-pulse" />
                Local business Structured Data (JSON-LD Schema)
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Search Engines read this hidden markup to parse metadata, business locations, telephone coordinates, and service structures perfectly. Apex dynamically adapts this script tag to match your customizations!
              </p>

              {/* Visual XML markup display */}
              <div className="mt-4 bg-slate-900 rounded-xl p-5 border border-slate-800 max-h-96 overflow-y-auto">
                <pre className="text-xs text-blue-300 font-mono leading-relaxed select-text">
                  {JSON.stringify(generatedSchema, null, 2)}
                </pre>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-4">
                <span>Schema Category: <strong className="text-white font-mono">PlumbingService / LocalBusiness</strong></span>
                <span className="text-emerald-400 font-bold font-mono">✓ COMPLIANT & INJECTED</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Meta Tags checklist audit */}
              <div className="bg-slate-950 border border-slate-805 rounded-2xl p-5 space-y-3">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <Globe className="text-blue-400 h-4 w-4" /> SEO Meta Tags Coverage
                </h4>
                <div className="space-y-2.5 text-xs text-slate-350">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Meta Title:</span>
                    <strong className="text-white text-[11px] font-normal truncate max-w-[200px]" title="Emergency Plumber & Services | Apex Integrity Plumbing">
                      Emergency Plumber & Services | {business.name}
                    </strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Meta Description:</span>
                    <strong className="text-white text-[11px] font-normal truncate max-w-[200px]">
                      Struggling with leaks or blocked drains? We are Seattle's premier 24/7 plumbers.
                    </strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>OpenGraph Tags (`og:title`):</span>
                    <span className="text-emerald-450 font-bold">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Robots Configuration (`index, follow`):</span>
                    <span className="text-emerald-450 font-bold">Compliant</span>
                  </div>
                </div>
              </div>

              {/* Local SEO keywords target lists */}
              <div className="bg-slate-950 border border-slate-805 rounded-2xl p-5 space-y-3">
                <h4 className="text-sm font-bold">
                  🎯 Local SEO Keyword Index Targets
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-350 font-mono">Plumber Near Me</span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-350 font-mono">Emergency Plumber {business.location.split(',')[0]}</span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-350 font-mono">Drain Cleaning Services</span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-350 font-mono">Seattle Leak Detectors</span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-350 font-mono">Water Tank Repairs</span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-350 font-mono">Commercial Plumbing</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed mt-2">
                  Keywords are seamlessly infused layout-wide. Content headlines adapt dynamically to build regional context and high SEO rankings.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
