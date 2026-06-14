/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Settings, ShieldCheck, Clock } from 'lucide-react';
import { BusinessInfo } from '../types';

interface HeaderProps {
  business: BusinessInfo;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Header({
  business,
  isAdmin,
  setIsAdmin,
  activeSection,
  scrollToSection
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-choose-us' },
    { label: 'Our Process', id: 'process' },
    { label: 'Service Areas', id: 'service-areas' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'FAQs', id: 'faq' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 justify-center sm:justify-start">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium text-white">{business.businessHours}</span>
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:inline-flex items-center gap-1">
              Serving: <strong className="text-white font-normal">{business.location}</strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">License State No: <strong className="text-white font-medium">#APEXIP983K</strong></span>
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isAdmin
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
              id="admin-override-toggle"
            >
              <Settings className="h-3 w-3 animate-spin-slow" />
              {isAdmin ? 'Admin Dashboard active' : 'Owner / Developer Mode'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-5'
        }`}
        id="main-app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="flex items-center gap-2.5 cursor-pointer select-none"
              onClick={() => scrollToSection('home')}
              id="brand-logo-container"
            >
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-blue-500/20 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-sans text-slate-900 tracking-tight block leading-tight">
                  {business.name.split(' ')[0]}
                  <span className="text-blue-600 font-light font-sans tracking-wide">
                    {business.name.slice(business.name.indexOf(' '))}
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block -mt-1 font-mono">
                  TRUSTED LOCAL PLUMBERS
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-semibold tracking-wide transition-colors cursor-pointer py-1 border-b-2 hover:text-blue-600 ${
                    activeSection === item.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:border-blue-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right side CTAs */}
            <div className="hidden sm:flex items-center gap-x-4">
              {/* Phone CTA */}
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border border-blue-150 group"
                id="header-phone-cta"
              >
                <div className="p-1 rounded bg-blue-600 text-white group-hover:scale-110 transition-transform">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-blue-500 uppercase font-mono font-bold leading-none tracking-wider">
                    Call 24/7 Live
                  </span>
                  <span className="text-sm font-extrabold font-mono tracking-tight text-blue-900 block mt-0.5">
                    {business.phone}
                  </span>
                </div>
              </a>

              {/* Book Now Button */}
              <button
                onClick={() => scrollToSection('book-service')}
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-500/10 hover:bg-blue-700 hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
                id="header-booking-cta"
              >
                Book Service
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Overlay type menu) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-80 max-w-full bg-white h-screen shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                <span className="text-lg font-black text-slate-900">
                  {business.name}
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded bg-gray-50 text-slate-500 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-y-4 py-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-base font-bold py-2 px-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Side Drawer Footer Details */}
            <div className="border-t border-gray-100 pt-6 flex flex-col gap-3">
              <a
                href={`tel:${business.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold shadow-md transition-all text-sm font-mono tracking-wide"
              >
                <Phone className="h-4 w-4" />
                Call Now: {business.phone}
              </a>
              <a
                href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold shadow-md transition-all text-sm font-mono tracking-wide"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                WhatsApp Us
              </a>
              <button
                onClick={() => handleNavClick('book-service')}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-center font-bold text-sm tracking-wide"
              >
                Book Onsite Service
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
