/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BusinessInfo {
  name: string;
  tagline: string;
  industry: string;
  location: string;
  phone: string;
  whatsapp: string;
  email: string;
  yearsOfExperience: number;
  serviceArea: string;
  businessHours: string;
  address: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export type BookingStatus = 'Pending' | 'Confirmed' | 'Dispatched' | 'In Progress' | 'Completed';

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  message: string;
  status: BookingStatus;
  createdAt: string;
  notes?: string;
  assignedPlumber?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDetails: string[];
  iconName: string;
  estimatedPrice: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  serviceType: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'emergency' | 'technical';
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  duration: string;
  challenge: string;
  solution: string;
}
