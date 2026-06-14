/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowLeftRight, Wrench, Clock, ShieldCheck } from 'lucide-react';
import { BEFORE_AFTER_GALLERY } from '../data';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProject = BEFORE_AFTER_GALLERY[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="before-after" className="py-20 sm:py-28 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 font-mono">
            PROJECT TRANSFORMATIONS
          </span>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mt-3 mb-4">
            Our Work Speaks For Itself
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Witness the immaculate quality of our plumbing work. Scroll on our comparison module below to see real results before and after Apex arrived.
          </p>
        </div>

        {/* Gallery Slider & Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="before-after-display-module">
          
          {/* Slider Column */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Interactive Slider Bracket */}
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 select-none cursor-ew-resize"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              id="before-after-slider-container"
            >
              {/* After Image (Full background) */}
              <img
                src={activeProject.afterImg}
                alt="Repaired copper pipe"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 right-4 bg-emerald-600/90 text-white text-xs font-mono font-bold px-3 py-1 rounded-full shadow z-10 select-none">
                AFTER REPAIR
              </span>

              {/* Before Image (Slices horizontally based on sliderPosition value) */}
              <div
                className="absolute inset-y-0 left-0 right-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeProject.beforeImg}
                  alt="Leaking pipe under sink"
                  className="absolute inset-o h-full object-cover pointer-events-none select-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width || '100vw', maxWidth: 'none' }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 bg-red-650/90 text-white text-xs font-mono font-bold px-3 py-1 rounded-full shadow z-10 select-none">
                  BEFORE LEAK
                </span>
              </div>

              {/* Slider Handle separator line */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-lg cursor-ew-resize z-20 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center border border-white transform -translate-x-1/2">
                  <ArrowLeftRight className="h-4 w-4 stroke-[2.5]" />
                </div>
              </div>
            </div>

            <span className="text-xs text-slate-400 font-mono uppercase tracking-widest mt-4 flex items-center gap-1.5">
              ← Drag or swipe the handle to compare →
            </span>
          </div>

          {/* Info details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold">
              <Sparkles className="h-3.5 w-3.5 stroke-[2.3]" />
              CASE STUDY: COMPLETED RESIDENTIAL PROJECT
            </div>

            <h3 className="text-2xl font-black text-slate-900 leading-tight">
              {activeProject.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {activeProject.description}
            </p>

            {/* Case study specifications */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-50 text-red-600 font-bold text-xs mt-0.5">⚠️</div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Immediate Challenge</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-605 font-bold text-xs mt-0.5">🛠️</div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Apex Solution</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs mt-0.5">⏱️</div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 font-sans">Speed & Dispatch</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Arrived within 38 minutes of the phone call. Completed repairs in under {activeProject.duration}.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
