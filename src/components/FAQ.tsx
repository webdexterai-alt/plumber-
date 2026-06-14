/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { ACCORDION_FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 font-mono">
            HAVE QUESTIONS?
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-650 text-sm">
            Everything you need to know about our plumbing crews, billing structures, emergency responses, and guarantee policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordions-group">
          {ACCORDION_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-blue-500 shadow-md' : 'border-slate-100 hover:border-slate-200'
                }`}
                id={faq.id}
              >
                {/* Accordion Trigger row */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-2">
                    <HelpCircle className={`h-5 w-5 flex-shrink-0 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="text-sm sm:text-base font-black text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`p-1 rounded-lg ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Accordion Dropdown Content */}
                <div
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-slate-50' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-slate-50/40 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Banner */}
        <div className="mt-12 text-center py-6 px-4 border border-dashed border-slate-200 bg-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-extrabold text-slate-905">Still have questions or unique plumbing concerns?</span>
            <p className="text-xs text-slate-500 mt-0.5">We are live 24/7. Speak to our staff and request a custom consultation.</p>
          </div>
          <button
            onClick={() => {
              const target = document.getElementById('book-service');
              target?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide shadow"
          >
            Shoot Us A Message
          </button>
        </div>

      </div>
    </section>
  );
}
