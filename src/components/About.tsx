/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Users, ShieldCheck, Heart, Clock } from 'lucide-react';
import { BusinessInfo } from '../types';

interface AboutProps {
  business: BusinessInfo;
  scrollToSection: (id: string) => void;
}

export default function About({ business, scrollToSection }: AboutProps) {
  const teamImgUrl = "/src/assets/images/plumber_team_van_1781428971468.jpg";

  const stats = [
    { label: 'Licensed Jobs Completed', value: '10,000+', icon: Award, color: 'text-blue-600 bg-blue-50' },
    { label: 'Happy Local Customers', value: '5,000+', icon: Users, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Years of Experience', value: `${business.yearsOfExperience}+ Years`, icon: ShieldCheck, color: 'text-amber-600 bg-amber-50' },
    { label: 'Emergency Dispatches', value: '24/7 Available', icon: Clock, color: 'text-red-600 bg-red-50' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 font-mono mb-3">
              ABOUT OUR COMPANY
            </span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Trusted, Professional Plumbing Leaders in the {business.location} Metroplex
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
              Founded over <strong className="text-slate-900 font-semibold">{business.yearsOfExperience} years ago</strong>, {business.name} has grown from a single plumbing truck into a gold-standard local business. We have served thousands of residential homes and commercial operations with a simple, solid promise: absolute honesty, flat-rate pricing, and flawless workmanship.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-4 py-1.5 mb-8 text-slate-850 italic font-medium bg-slate-50/50 pr-4 rounded-r-lg max-w-xl">
              "Our mission is simple: to deliver pristine plumbing repairs quickly, transparently, and cleanly. We treat your family's home with the same safety standards and cleanliness we would expect in our own."
              <span className="block text-xs font-mono font-bold tracking-wide text-slate-500 uppercase not-italic mt-2">
                — CEO & Master Plumber, {business.name}
              </span>
            </blockquote>

            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Our Commitment to Customer Satisfaction
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Every job begins with a comprehensive, clean diagnosis and a upfront estimate. Our technicians wear shoe protectors (booties), lay down sanitary protective sheets over your kitchen or bathroom cabinet floors, and sweep the job area spotless before checking off the invoice. We don't consider the work done until you are 100% happy with our solution.
            </p>

            <button
              onClick={() => scrollToSection('book-service')}
              className="px-6 py-3 rounded-lg bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-slate-800 transition-colors shadow-lg active:scale-95 cursor-pointer"
            >
              Meet Our Team & Book Now
            </button>
          </div>

          {/* Visual Showcase & Stats Grid Column */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Image with decorative border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 z-10 aspect-[4/3] group">
                <img
                  src={teamImgUrl}
                  alt={`${business.name} Team plumbing service van`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
              </div>

              {/* Decorative design block */}
              <div className="absolute -bottom-6 -left-6 h-56 w-56 bg-blue-500/5 rounded-2xl -z-0 pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 h-36 w-36 bg-blue-600/10 rounded-full -z-0 pointer-events-none blur-xl"></div>
            </div>

            {/* Statistics Bento Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8" id="about-stats-container">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-5 bg-slate-50 border border-slate-100/80 rounded-xl shadow-sm text-center transform hover:scale-[1.02] transition-transform"
                    id={`stat-card-${idx}`}
                  >
                    <div className={`p-2.5 rounded-lg ${stat.color} mb-3 shadow-inner`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 mt-1">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
