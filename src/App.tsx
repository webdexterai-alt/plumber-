/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import EmergencyBanner from './components/EmergencyBanner';
import ServiceAreas from './components/ServiceAreas';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AppointmentForm from './components/AppointmentForm';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

import { DEFAULT_BUSINESS_INFO, INITIAL_BOOKINGS } from './data';
import { BusinessInfo, Booking } from './types';

export default function App() {
  const [business, setBusiness] = useState<BusinessInfo>(() => {
    const saved = localStorage.getItem('plumber_business_branding');
    return saved ? JSON.parse(saved) : DEFAULT_BUSINESS_INFO;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('plumber_bookings_schedule');
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Persistence side effects
  useEffect(() => {
    localStorage.setItem('plumber_business_branding', JSON.stringify(business));
  }, [business]);

  useEffect(() => {
    localStorage.setItem('plumber_bookings_schedule', JSON.stringify(bookings));
  }, [bookings]);

  // Section scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-choose-us', 'process', 'service-areas', 'testimonials', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = id === 'book-service' ? 'book-service' : id;
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddBooking = (newBookingData: Omit<Booking, 'id' | 'status' | 'createdAt'>) => {
    const newBooking: Booking = {
      ...newBookingData,
      id: `B-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    setBookings([newBooking, ...bookings]);
    return newBooking;
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans" id="plumbing-root-shell">
      
      {/* Dynamic persistent Schema Markup tag injected for maximum SEO crawl performance */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PlumbingService",
          "name": business.name,
          "telephone": business.phone,
          "email": business.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": business.address,
            "addressLocality": business.location.split(',')[0],
            "addressRegion": business.location.split(',')[1]?.trim() || "WA"
          }
        })}
      </script>

      {/* Conditional Administrative overlay dashboard for lead/branding adjustments */}
      {isAdmin && (
        <div className="sticky top-[34px] xl:top-0 z-50 animate-slide-down">
          <AdminPanel
            business={business}
            setBusiness={setBusiness}
            bookings={bookings}
            setBookings={setBookings}
            onClose={() => setIsAdmin(false)}
          />
        </div>
      )}

      {/* Header Navigation */}
      <Header
        business={business}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="flex-grow">
        {/* Core dynamic content sections */}
        <Hero business={business} scrollToSection={scrollToSection} />
        
        <About business={business} scrollToSection={scrollToSection} />
        
        <Services business={business} scrollToSection={scrollToSection} />
        
        <WhyChooseUs />
        
        <Process />
        
        <EmergencyBanner business={business} />
        
        <ServiceAreas business={business} />
        
        <BeforeAfter />
        
        <Testimonials />
        
        <FAQ />
        
        <AppointmentForm onAddBooking={handleAddBooking} />
      </main>

      <Footer business={business} scrollToSection={scrollToSection} />

      {/* High impact floating conversion widget (Direct Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5" id="floating-conversions-dock">
        {/* Chat / Whatsapp floating marker */}
        <a
          href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transform hover:scale-110 active:scale-95 transition-all outline-none"
          title="WhatsApp direct chat"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6.5 w-6.5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.022-.08-.085-.153-.16-.23-.374-.385-.77-.751-1.151-1.124-.13-.127-.279-.196-.464-.17-.184.025-.333.123-.45.244-.226.236-.457.466-.68.705-.084.09-.174.126-.29.07-.468-.225-1.025-.56-1.428-.9-.556-.47-.942-1.002-1.218-1.554-.085-.17-.06-.28.08-.415.228-.222.454-.447.674-.675.141-.146.183-.34.116-.53-.298-.823-.615-1.637-.925-2.457-.066-.176-.184-.287-.373-.306-.182-.016-.339.043-.464.162l-.715.688c-.628.605-.9 1.341-.75 2.158.115.62.408 1.15.772 1.64.675.91 1.487 1.63 2.39 2.22 1.05.69 2.185 1.135 3.42 1.25.753.07 1.4-.1 1.894-.652L17.5 15.3c.09-.092.126-.205.088-.31-.03-.095-.085-.18-.116-.254-.01-.013-.012-.026-.02-.04zM12.03 2.002C6.49 2.01 2.01 6.51 2.002 12.05a10 10 0 001.35 4.97l-1.15 4.21 4.31-1.13a10 10 0 004.99 1.32c5.54 0 10.02-4.5 10.03-10.04a10.03 10.03 0 00-10.03-10.03zm0 18.06a8 8 0 01-4.07-1.12l-.29-.17-2.52.66.67-2.46-.19-.3A8 8 0 014 12.05c0-4.44 3.6-8.04 8.03-8.04s8.04 3.6 8.04 8.04-3.6 8.04-8.04 8.04z" />
          </svg>
        </a>

        {/* Call float bubble */}
        <a
          href={`tel:${business.phone}`}
          className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transform hover:scale-110 active:scale-95 transition-all outline-none"
          title="Direct call operator"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5.5 w-5.5 fill-white text-white"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
