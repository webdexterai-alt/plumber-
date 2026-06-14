/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, CheckCircle, Quote, Users, Filter } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { label: 'All Reviews', id: 'all' },
    { label: 'Emergency', id: 'emergency' },
    { label: 'Leak Detection', id: 'leak' },
    { label: 'Commercial', id: 'commercial' },
    { label: 'Water Heaters / Tankless', id: 'heater' }
  ];

  // Map keywords to reviews for easy category filtering
  const filteredReviews = TESTIMONIALS.filter((rev) => {
    if (filter === 'all') return true;
    const desc = (rev.serviceType + ' ' + rev.text).toLowerCase();
    if (filter === 'emergency') return desc.includes('emergency') || desc.includes('burst');
    if (filter === 'leak') return desc.includes('leak') || desc.includes('detection');
    if (filter === 'commercial') return desc.includes('commercial') || desc.includes('maintenance') || desc.includes('restaurant');
    if (filter === 'heater') return desc.includes('heater') || desc.includes('tankless');
    return true;
  });

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 font-mono mb-3">
              TESTIMONIALS
            </span>
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Real Experiences from Real Local Homeowners
            </h2>
          </div>

          <div className="lg:col-span-6 flex items-center justify-start lg:justify-end gap-5">
            <div className="text-right">
              <span className="block text-4xl font-extrabold text-slate-900 tracking-tight font-mono">4.9 / 5.0</span>
              <span className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
                OVERALL AGGREGATE RATING
              </span>
            </div>
            
            <div className="h-12 w-0.5 bg-slate-200"></div>

            <div>
              <div className="flex items-center text-yellow-400 gap-0.5">
                <Star className="h-5 w-5 fill-yellow-400 stroke-none" />
                <Star className="h-5 w-5 fill-yellow-400 stroke-none" />
                <Star className="h-5 w-5 fill-yellow-400 stroke-none" />
                <Star className="h-5 w-5 fill-yellow-400 stroke-none" />
                <Star className="h-5 w-5 fill-yellow-400 stroke-none" />
              </div>
              <span className="block text-xs font-bold text-slate-700 mt-1 font-mono">
                Based on 500+ Verified Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Categories filters tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200/60" id="reviews-filter-tabs">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 font-mono flex items-center gap-2 mr-2">
            <Filter className="h-3.5 w-3.5" /> Filter Feed:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white border border-slate-100 text-slate-600 hover:bg-slate-100/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feed grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-feed-grid">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-slate-150 transition-all relative group"
                id={`testimonial-${rev.id}`}
              >
                {/* Accent design quote */}
                <span className="absolute right-6 top-6 text-slate-100 group-hover:text-blue-50 transition-colors">
                  <Quote className="h-10 w-10 stroke-[3]" />
                </span>

                <div className="space-y-4">
                  {/* Star row */}
                  <div className="flex text-yellow-400 gap-0.5" aria-label={`Rating: ${rev.rating} stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4.5 w-4.5 ${
                          i < Math.floor(rev.rating) ? 'fill-yellow-400 stroke-none' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Body copy */}
                  <p className="text-slate-650 text-sm leading-relaxed font-normal">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author profile block */}
                <div className="flex items-center gap-3 border-t border-slate-50 pt-5 mt-6">
                  <img
                    src={rev.avatar}
                    alt={`${rev.name} avatar`}
                    className="h-10 w-10 rounded-full object-cover select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-slate-900 leading-none">{rev.name}</span>
                      {rev.verified && (
                        <CheckCircle className="h-3.5 w-3.5 fill-blue-500 text-white" title="Verified Customer" />
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1 font-medium">{rev.role}</span>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="mt-4 pt-2 border-t border-slate-50 flex justify-between items-center text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  <span>SERVICE:</span>
                  <span className="text-blue-600 truncate max-w-[180px] font-mono leading-none">{rev.serviceType}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-slate-450 border border-dashed border-gray-250 rounded-2xl bg-white">
              <span className="text-3xl">📭</span>
              <p className="text-sm font-bold mt-2">No matching reviews in this group feeds.</p>
              <button onClick={() => setFilter('all')} className="mt-2 text-xs font-black text-blue-600 hover:underline">
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
