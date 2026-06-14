/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Hammer, Send, CheckCircle2, User, Phone, Mail, FileText } from 'lucide-react';
import { ServiceItem, Booking } from '../types';
import { SERVICES } from '../data';

interface AppointmentProps {
  onAddBooking: (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => Booking;
}

export default function AppointmentForm({ onAddBooking }: AppointmentProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    serviceNeeded: SERVICES[0].name,
    preferredDate: '',
    preferredTime: '08:00 AM - 12:00 PM',
    address: '',
    message: ''
  });

  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    'Immediate Dispatch (Emergency)',
    '08:00 AM - 12:00 PM (Morning)',
    '12:00 PM - 04:00 PM (Afternoon)',
    '04:00 PM - 08:00 PM (Evening)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone || !formData.address) {
      alert('Please fill out Name, Phone Number, and Address fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write delay
    setTimeout(() => {
      const newBooking = onAddBooking(formData);
      setConfirmedBooking(newBooking);
      setIsSubmitting(false);

      // Reset form fields
      setFormData({
        customerName: '',
        phone: '',
        email: '',
        serviceNeeded: SERVICES[0].name,
        preferredDate: '',
        preferredTime: '08:00 AM - 12:00 PM',
        address: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="book-service" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="booking-heading">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Header left Column */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 font-mono">
              ONLINE RESERVATIONS
            </span>
            <h2 id="booking-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Schedule Your Service Appointment Instantly
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Plan ahead or request standard repairs. Provide your details and core symptoms, and our office manager will match you with our certified plumber team.
            </p>

            {/* Quick trust metrics */}
            <div className="space-y-4 pt-6 border-t border-slate-800 w-full">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <CheckCircle2 className="h-4.5 w-4.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200">Guaranteed response confirmation under 15 minutes</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <CheckCircle2 className="h-4.5 w-4.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200">Zero surcharge assessments during work weeks</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <CheckCircle2 className="h-4.5 w-4.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200">All parts & installations double-guaranteed for 1 year</span>
              </div>
            </div>
          </div>

          {/* Form container / Confirmation Panel Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 border border-slate-850 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500"></div>

              {!confirmedBooking ? (
                /* Primary Appointment Booking Form */
                <form onSubmit={handleSubmit} className="space-y-5" id="booking-scheduler-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-extrabold text-slate-400 font-mono flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-blue-400" /> Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-extrabold text-slate-400 font-mono flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-blue-400" /> Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(206) 555-0100"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-extrabold text-slate-400 font-mono flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-blue-400" /> Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Service Block */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-extrabold text-slate-400 font-mono flex items-center gap-1.5">
                        <Hammer className="h-3.5 w-3.5 text-blue-400" /> Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="appointment-service-selector"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.name} className="bg-slate-950 text-white">
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-extrabold text-slate-400 font-mono flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-blue-400" /> Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>

                    {/* Preferred Time block */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-extrabold text-slate-400 font-mono flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-blue-400" /> Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts} className="bg-slate-950 text-white">
                            {ts}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-extrabold text-slate-400 font-mono flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-blue-400" /> Service Location Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street Address, City, ZIP (e.g. 1822 11th Ave, Seattle, WA)"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Message details */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-extrabold text-slate-400 font-mono flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-blue-400" /> Tell Us About The Issue
                    </label>
                    <textarea
                      placeholder="Describe symptoms briefly (e.g., sink is leaking, toilet wont flush properly, water heater is cold)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  {/* Schedule Service button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-blue-600 text-white font-black hover:bg-blue-750 transition-all font-sans tracking-wide shadow-xl shadow-blue-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    id="submit-schedule-service-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4.5 w-4.5 rounded-full border-2 border-white/40 border-t-white animate-spin"></span>
                        Registering Ticket on Grid...
                      </>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5" />
                        Schedule Service Now
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Post-Submission Custom success panel */
                <div className="text-center py-8 space-y-6 animate-fade-in" id="booking-confirmation-alert">
                  <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner animate-[scale_0.3s_ease]">
                    <CheckCircle2 className="h-10 w-10 stroke-[2.2]" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                      TICKET SUBMISSION COMPLETE!
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      Booking Ticket Confirmed #{confirmedBooking.id}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
                      Thank you, <strong className="text-white">{confirmedBooking.customerName}</strong>! In accordance with our service mandate, a regional dispatcher is allocating resources to your ticket. We will update you shortly by phone call.
                    </p>
                  </div>

                  {/* Summary receipt card */}
                  <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2.5 font-mono text-slate-350">
                    <div className="flex justify-between border-b border-slate-800/65 pb-2">
                      <span>SERVICE ASSIGNED:</span>
                      <strong className="text-white font-mono">{confirmedBooking.serviceNeeded}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/65 pb-2">
                      <span>DATING FRAME:</span>
                      <strong className="text-white font-mono">{confirmedBooking.preferredDate || 'Same-day'}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/65 pb-2">
                      <span>VISIT SLOT:</span>
                      <strong className="text-white font-mono">{confirmedBooking.preferredTime}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>GRID STATUS:</span>
                      <strong className="text-yellow-400 font-mono">PENDING PHONE REVIEW</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => setConfirmedBooking(null)}
                    className="px-6 py-2.5 rounded-lg border border-slate-800 hover:bg-slate-900 text-slate-300 text-xs font-bold leading-none cursor-pointer"
                  >
                    Schedule Another Plumbing Ticket
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
