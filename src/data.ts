/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BusinessInfo, ServiceItem, Testimonial, FAQItem, BeforeAfterProject, Booking } from './types';

export const DEFAULT_BUSINESS_INFO: BusinessInfo = {
  name: "Apex Integrity Plumbing",
  tagline: "Professional Plumbing Services You Can Trust",
  industry: "Plumbing Services",
  location: "Seattle, WA",
  phone: "+1 (206) 555-0199",
  whatsapp: "+1 (206) 555-0155",
  email: "emergency@apexplumbingseattle.com",
  yearsOfExperience: 15,
  serviceArea: "Greater Seattle Area, Bellevue, Tacoma, Redmond, Kirkland, & Everett",
  businessHours: "24/7 Emergency Service, 365 Days a Year",
  address: "400 Pine St, Suite 300, Seattle, WA 98101",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "emergency",
    name: "24/7 Emergency Plumbing",
    shortDescription: "Burst pipes, active flooding leaks, and urgent sewer backflows requiring immediate plumber dispatch.",
    fullDetails: [
      "Rapid deployment of background-checked, fully licensed emergency plumbers.",
      "Arrives fully prepped in a stocked service truck containing spare pipes, valves, and dry-vacs.",
      "Instant shutoff procedure to mitigate active flooding, water damage, and structurally compromising dampness.",
      "Covers burst frozen lines, high-pressure pipe ruptures, sewage backflows, and main valve failures."
    ],
    iconName: "Flame",
    estimatedPrice: "Starting at $149 (Emergency Callout + Diagnostic)",
    duration: "45-60 min arrival time"
  },
  {
    id: "drain-cleaning",
    name: "Advanced Drain Cleaning",
    shortDescription: "Complete removal of persistent organic clogs, hair buildups, grease blocks, and scale inside drains.",
    fullDetails: [
      "Hydro-jetting technology utilizing high-velocity water streams to clean pipe walls entirely.",
      "Organic camera-assisted line checking to localize obstruction depth and evaluate pipe structural safety.",
      "Elimination of nasty sink odors caused by decomposing food oils or biological scale.",
      "Preventative treatments to keep root intrusions from cracking external drain runs."
    ],
    iconName: "Droplets",
    estimatedPrice: "$99 - $299",
    duration: "1 - 2 hours"
  },
  {
    id: "leak-detection",
    name: "Acoustic & Thermal Leak Detection",
    shortDescription: "Pinpointing invisible leaks early behind drywall, beneath hardwood, or under concrete slabs.",
    fullDetails: [
      "State-of-the-art electro-acoustic microphones to listen for structural water escape vibrations.",
      "Infrared thermal imaging devices that trace warm or cold water footprints behind barriers without drilling.",
      "Saves homeowners thousands of dollars by identifying the precise leak location before excavation.",
      "Comprehensive digital pressure testing on domestic supply networks."
    ],
    iconName: "Search",
    estimatedPrice: "Starting at $180",
    duration: "1 - 1.5 hours"
  },
  {
    id: "pipe-repair",
    name: "Pipe Repair & Replacement",
    shortDescription: "Full service piping support for copper, PEX, and cast-iron lines, up to complete home repiping.",
    fullDetails: [
      "Surgical cutting and replacement of pinpoint leaks with top-tier premium components (PEX/Copper).",
      "Full-home copper-to-PEX upgrades to eliminate recurring scale blockages and low water pressure issues.",
      "Trenchless main line water repair techniques that preserve your front lawn landscaping.",
      "Heavy-duty insulation installations to safeguard pipes from extreme freezing-burst winter weather."
    ],
    iconName: "Wrench",
    estimatedPrice: "Custom quote based on scope ($150+)",
    duration: "Varies (2 hours to Multi-day for whole house)"
  },
  {
    id: "water-heaters",
    name: "Water Heater Services",
    shortDescription: "Repair, maintenance and premium installation of energy-efficient tankless or standard hot water systems.",
    fullDetails: [
      "Authorized factory-certified installers of top brands (Rinnai, Rheem, Navien).",
      "Comprehensive diagnostic for flame assemblies, heating elements, thermopiles, and anode rod safety.",
      "Tank flushing to extract calcified lime buildup, restoring heating speed and system durability.",
      "High-efficiency Tankless Water Heater conversions providing unlimited, instant hot water on tap."
    ],
    iconName: "ThermometerCheck",
    estimatedPrice: "$120 (Repairs) / $1,800+ (New System)",
    duration: "2 - 5 hours"
  },
  {
    id: "bathroom",
    name: "Bathroom Plumbing & Fixtures",
    shortDescription: "Clogged toilet repairs, luxury shower installation, faucet upgrades, and tub re-pipings.",
    fullDetails: [
      "Installation of modern heavy-flow, water-saving smart toilets with immaculate silicone sealing.",
      "Anti-scald shower thermostatic mixing valve replacement ensuring safe water temperatures.",
      "Custom marble vanity undermount sink plumbing and designer faucet setups.",
      "Professional diagnosis of slow bathtub draining and structural bathroom damp issues."
    ],
    iconName: "Bath",
    estimatedPrice: "$120 - $450",
    duration: "1 - 3 hours"
  },
  {
    id: "kitchen",
    name: "Kitchen Plumbing & Disposal",
    shortDescription: "Premium waste disposal units, direct dishwasher connections, and refrigerator water supply line routing.",
    fullDetails: [
      "Industrial-strength garbage disposal unit installations with safety overload protection.",
      "Under-sink multi-faucet pull-out installations with built-in filtration bypass units.",
      "Hookups of commercial-range double sinks and safe dishwasher drain high-looping.",
      "Direct copper/braided steel lines to smart-refrigerator ice makers and water servers."
    ],
    iconName: "UtensilsCrossed",
    estimatedPrice: "$95 - $280",
    duration: "1 - 2 hours"
  },
  {
    id: "commercial",
    name: "Commercial & Industrial Plumbing",
    shortDescription: "High-capacity drainage, grease trap flushing, and code compliance checks for restaurants and offices.",
    fullDetails: [
      "Specialized off-hours dispatch to avoid disrupting your business trade or standard staff schedule.",
      "Scheduled massive vacuum grease interceptor pumpings and food-grade bio-remediation drain cleaning.",
      "Backflow preventer certified testing (RPZ valves) conforming strictly to municipal utility standards.",
      "Commercial boiler installations, sensor-operated flushometer toilets, and water pressure balancing."
    ],
    iconName: "Building2",
    estimatedPrice: "Custom commercial rates / bids",
    duration: "Flexible scheduled hours"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Sarah Jenkins",
    role: "Homeowner in Seattle",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "At 2:00 AM on a Sunday, my water heater burst and was flooding our lower level. I called Apex Integrity Plumbing, and they arrived in exactly 38 minutes! The plumber was incredibly calm and polite, immediately shut off the main water valve, and had the system completely replaced by morning. Absolute lifesavers!",
    serviceType: "Emergency Burst Pipe & Water Heater Replacement",
    date: "June 2, 2026",
    verified: true
  },
  {
    id: "rev-2",
    name: "Marcus Sterling",
    role: "Property Manager, CapHill Rentals",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a property manager, having a reliable plumbing partner is absolutely crucial. Apex handles all 14 of our apartment properties in the Capitol Hill area. They are extremely responsive, write transparent electronic reports with clear pictures, and their prices are heavily competitive in Seattle. True professionals through and through.",
    serviceType: "Commercial Scheduled & Emergency Maintenance",
    date: "May 28, 2026",
    verified: true
  },
  {
    id: "rev-3",
    name: "Dr. Amanda Zhao",
    role: "Residential Homeowner",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "A persistent leak was dampening our hardwood floors near the kitchen islands, but two other companies came and wanted to rip out my whole solid-oak cabinetry. Apex's technician brought an acoustic microphone and a flir thermal camera, pointed to a single tile area and repaired the leaky subfloor copper coupling within an hour. They saved my gorgeous kitchen and thousands in cabinetry costs!",
    serviceType: "Acoustic & Thermal Leak Detection",
    date: "May 15, 2026",
    verified: true
  },
  {
    id: "rev-4",
    name: "David K. Vance",
    role: "Local Business Owner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The main kitchen drain at our restaurant slowed down on a busy Friday night. Apex dispatched a tech with a powerful hydro-jet system. They worked fast, cleared the grease blockage, and did it safely without interfering with our service. Highly recommend their professional team!",
    serviceType: "Commercial Hydro-Jet Drain Cleaning",
    date: "May 10, 2026",
    verified: true
  },
  {
    id: "rev-5",
    name: "Rebecca Thorne",
    role: "Suburban Homeowner",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    text: "We upgraded our 15-year-old water heater to a new tankless model. The quote from Apex was very fair, and the installation looks like a work of art! Beautiful copper pipe bends, clean conduit work, and infinite hot water. The team also took away the massive rusty old tank and swept clean the garage floor. Extremely tidy!",
    serviceType: "High-Efficiency Tankless Installation",
    date: "April 22, 2026",
    verified: true
  },
  {
    id: "rev-6",
    name: "Jason Ramirez",
    role: "Home Renovation Customer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I hired Apex to reroute the plumbing during a master bathroom remodeling project. They were prompt, worked seamlessly with my tile contractor, and gave solid advice on modern wall-hung toilet frames. Superb craftsmanship and polite desk support when calling to confirm bookings.",
    serviceType: "Bathroom Remodel & Layout Piping Route",
    date: "March 11, 2026",
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you offer emergency plumbing services?",
    answer: "Yes, we are fully available 24/7, 365 days a year—including holidays and late-night hours. We understand that plumbing emergencies cannot wait, so we keep staff on-call specifically for rapid response dispatch.",
    category: "emergency"
  },
  {
    id: "faq-2",
    question: "How quickly can a plumber arrive?",
    answer: "For active flooding, burst pipes, and structural plumbing crises, our typical response and arrival time is between 45 to 60 minutes across our designated service areas. We will update you with a tracker link and dispatcher status by SMS.",
    category: "emergency"
  },
  {
    id: "faq-3",
    question: "Are your plumbers licensed and covered?",
    answer: "Absolutely. Every single plumber on our field crew is fully licensed (State Plumbing Lic. #APEXIP983K), bonded, and carries extensive commercial liability insurance. We also enforce strict safety checks and regular skills training.",
    category: "general"
  },
  {
    id: "faq-4",
    question: "Do you provide free estimates?",
    answer: "Yes! We believe in transparent customer relations. We will look at your plumbing issue, explain our planned approach, and offer a firm, written estimate with transparent flat-rate pricing before a single wrench is turned.",
    category: "pricing"
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer: "For your convenience, we accept all primary methods: all major credit and debit cards (Visa, MasterCard, Amex), cash, bank checks, Apple Pay, and Google Pay. We also offer flexible financing plans for large-scale home repipings.",
    category: "pricing"
  },
  {
    id: "faq-6",
    question: "Do you work on commercial properties?",
    answer: "Yes, we have a specialized division handling high-capacity industrial systems. This covers restaurants, corporate offices, public venues, medical clinics, and industrial warehousing locations.",
    category: "general"
  },
  {
    id: "faq-7",
    question: "Can you detect hidden leaks without opening walls?",
    answer: "Definitely. We use highly advanced, non-destructive tools: high-frequency ground acoustic microphones to 'listen' for moisture flows, sewer line cameras, and FLIR thermal infrared trackers to isolate leaks cleanly without unnecessary drilling.",
    category: "technical"
  },
  {
    id: "faq-8",
    question: "Do you install tankless water heaters?",
    answer: "Yes, we are gold-grade certified installers for modern tankless systems. We can safely remove your old storage water tank, expand your gas or electric flow connections, and mount a wall-honed tankless model providing continuous hot water.",
    category: "technical"
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Request Service",
    description: "Call, WhatsApp, or click submit on our form to share your plumbing issue. Our dispatcher is live 24/7.",
    iconName: "PhoneCall"
  },
  {
    step: 2,
    title: "On-Site Evaluation",
    description: "A licensed local plumber inspects the problem and presents a clear, flat-rate quote. Inspection is thorough and clean.",
    iconName: "FileSpreadsheet"
  },
  {
    step: 3,
    title: "Precision Action",
    description: "Using top-grade specialized tools and parts, we solve the problem on the spot from our fully-stocked warehouse truck.",
    iconName: "Hammer"
  },
  {
    step: 4,
    title: "Signoff & Lifetime Support",
    description: "We clean our workspace completely, walk you through the repairs, issue digital receipts, and back it with our double guarantee.",
    iconName: "ShieldCheck"
  }
];

export const SERVICE_AREAS_LIST = [
  { name: "Downtown Seattle", zip: "98101, 98104, 98121", eta: "45 mins" },
  { name: "Bellevue", zip: "98004, 98005, 98007", eta: "50 mins" },
  { name: "Tacoma", zip: "98402, 98403, 98405", eta: "60 mins" },
  { name: "Redmond", zip: "98052, 98053", eta: "55 mins" },
  { name: "Kirkland", zip: "98033, 98034", eta: "50 mins" },
  { name: "West Seattle", zip: "98116, 98126, 98136", eta: "45 mins" },
  { name: "Ballard & Fremont", zip: "98107, 98117, 98103", eta: "40 mins" },
  { name: "Renton & Kent", zip: "98055, 98030, 98032", eta: "55 mins" }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: "B-2101",
    customerName: "Robert Miller",
    phone: "(206) 555-0922",
    email: "robbie.miller@outlook.com",
    serviceNeeded: "Advanced Drain Cleaning",
    preferredDate: "2026-06-15",
    preferredTime: "10:00 AM - 12:00 PM",
    address: "2441 E Madison St, Seattle, WA 98112",
    message: "Main kitchen sink and dishwasher are backing up greywater when running. Tried liquid declogger, did not work.",
    status: "Pending",
    createdAt: "2026-06-14T01:30:00-07:00"
  },
  {
    id: "B-2098",
    customerName: "Julia Sandburg",
    phone: "(206) 555-0744",
    email: "julia.sand@gmail.com",
    serviceNeeded: "Bathroom Plumbing & Fixtures",
    preferredDate: "2026-06-14",
    preferredTime: "Immediate Dispatch (Emergency)",
    address: "1822 11th Ave, Seattle, WA 98122",
    message: "Toilet is overflowing from base pipe. Needs Urgent shutoff and sealing immediately. Water spilling onto tiles.",
    status: "Dispatched",
    createdAt: "2026-06-14T02:00:00-07:00",
    assignedPlumber: "Dave K. (Crew Lead #4)",
    notes: "Plumber loaded sealing wax rings and fresh pressure-valves. ETA is 11 mins."
  },
  {
    id: "B-2095",
    customerName: "Hale Real Estate",
    phone: "(425) 555-9100",
    email: "service@halerealestate.com",
    serviceNeeded: "Water Heater Services",
    preferredDate: "2026-06-12",
    preferredTime: "02:00 PM - 04:00 PM",
    address: "10400 NE 4th St, Bellevue, WA 98004",
    message: "Fitted a luxury Navien NPE-240A2 Tankless unit on behalf of real estate buyer. Completed exhaust venting layout.",
    status: "Completed",
    createdAt: "2026-06-11T14:15:00-07:00",
    assignedPlumber: "Sarah G. (Master Plumber)",
    notes: "System booted flawlessly. Hot output is 120F stable. Customer signed off digital copy of gas pressure inspection card."
  }
];

export const ACCORDION_FAQS = FAQS;

export const BEFORE_AFTER_GALLERY: BeforeAfterProject[] = [
  {
    id: "proj-1",
    title: "Urgent Copper Pipe Repiping Under Cabinet",
    description: "Critical leak in the high-pressure supply line, threatening structural wooden subflooring. Replaced with seamless high-grade parts.",
    beforeImg: "/src/assets/images/before_leaking_pipe_1781428986946.jpg",
    afterImg: "/src/assets/images/after_repaired_pipe_1781429003840.jpg",
    duration: "45 minutes active work",
    challenge: "High system water pressure causing ongoing micro-spraying and fast waterlogging. Tiny clearance space to use heat solder.",
    solution: "We turned off the street valve, drained the line, cut out the calcified copper coupling, and fitted high-durability modern fittings, testing with a 90 PSI load."
  }
];
