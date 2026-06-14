/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { BusinessInfo } from '../types';

interface FooterProps {
  business: BusinessInfo;
  scrollToSection: (id: string) => void;
}

export default function Footer({ business, scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-900 pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand/About description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                {business.name}
              </span>
            </div>

            <p className="text-slate-500 leading-relaxed text-xs">
              Seattle's pre-eminent residential and commercial plumbing contracting company. Backed by {business.yearsOfExperience} years of structural excellence, 24/7 operators, and the absolute Double Guarantee.
            </p>

            {/* Social links row */}
            <div className="flex items-center gap-3 pt-2" id="footer-social-icons">
              <a href={business.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-500 text-slate-400 rounded-lg transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={business.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-500 text-slate-400 rounded-lg transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={business.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-500 text-slate-400 rounded-lg transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={business.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-500 text-slate-400 rounded-lg transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick shortcuts links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              QUICKLINKS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Top Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Services List
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Differentiators
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('service-areas')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Coverage Zips
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer text-left">
                  FAQs Accordion
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services items list */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              OUR SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left">
                  24/7 Emergency Repairs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left">
                  Acoustic Leak Detection
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left">
                  Hydro-Jet Drain Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left">
                  Pipe Repipings & Repairs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left">
                  Tankless Water Heaters
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left">
                  Commercial Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support coordinates contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              CONTACT INFO
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <a href={`tel:${business.phone}`} className="hover:text-white transition-colors font-mono font-bold">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span>24/7 Live Desk Coverage</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Banner segment */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-550 text-xs">
          <div>
            <span>© {currentYear} <strong>{business.name}</strong>. All rights reserved. Registered Plumbing Lic. #APEXIP983K.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>|</span>
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-1 hover:text-white font-bold transition-colors cursor-pointer"
            >
              Back To Top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
