'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ArrowRight, BarChart3, Users, BookOpen, Shield } from 'lucide-react';
import Link from 'next/link';

export function PunjabCommandBox() {
  const [activeProvince, setActiveProvince] = useState<'punjab' | 'sindh' | 'kpk' | 'balochistan'>('punjab');

  const provinceData = {
    punjab: {
      name: 'Punjab',
      capital: 'Lahore',
      population: '127.68 Million',
      area: '205,344 km²',
      literacy: '66.3%',
      assemblySeats: '371 Seats',
      governor: 'Sardar Saleem Haider Khan',
      chiefMinister: 'Maryam Nawaz Sharif',
      districts: '42 Districts',
      code: 'PB-01',
    },
    sindh: {
      name: 'Sindh',
      capital: 'Karachi',
      population: '55.69 Million',
      area: '140,914 km²',
      literacy: '61.8%',
      assemblySeats: '168 Seats',
      governor: 'Kamran Tessori',
      chiefMinister: 'Murad Ali Shah',
      districts: '30 Districts',
      code: 'SD-02',
    },
    kpk: {
      name: 'Khyber Pakhtunkhwa',
      capital: 'Peshawar',
      population: '40.85 Million',
      area: '101,741 km²',
      literacy: '55.1%',
      assemblySeats: '145 Seats',
      governor: 'Faisal Karim Kundi',
      chiefMinister: 'Ali Amin Gandapur',
      districts: '36 Districts',
      code: 'KP-03',
    },
    balochistan: {
      name: 'Balochistan',
      capital: 'Quetta',
      population: '14.89 Million',
      area: '347,190 km²',
      literacy: '43.8%',
      assemblySeats: '65 Seats',
      governor: 'Sheikh Jaffar Khan Mandokhail',
      chiefMinister: 'Sarfraz Bugti',
      districts: '36 Districts',
      code: 'BL-04',
    },
  };

  const curr = provinceData[activeProvince];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header with Province Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white tracking-tight flex items-center gap-2">
                Pakistan Command Center
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-emerald-500/20">
                  HUD TELEMETRY
                </span>
              </h3>
              <p className="text-xs text-zinc-400">PPSC Province Encyclopedia & Official Stats</p>
            </div>
          </div>

          {/* Quick Province Selector Pills */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-950/80 border border-white/5 font-mono text-xs">
            {(['punjab', 'sindh', 'kpk', 'balochistan'] as const).map((prov) => (
              <button
                key={prov}
                onClick={() => setActiveProvince(prov)}
                className={`px-2.5 py-1 rounded-lg capitalize transition-all duration-200 ${
                  activeProvince === prov
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {prov}
              </button>
            ))}
          </div>
        </div>

        {/* HUD Data Grid with Monospace Telemetry */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-white/5">
            <span className="text-[10px] font-mono text-zinc-500 block mb-0.5">POPULATION</span>
            <span className="text-sm font-bold font-mono text-emerald-400">{curr.population}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-white/5">
            <span className="text-[10px] font-mono text-zinc-500 block mb-0.5">TOTAL AREA</span>
            <span className="text-sm font-bold font-mono text-white">{curr.area}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-white/5">
            <span className="text-[10px] font-mono text-zinc-500 block mb-0.5">LITERACY RATE</span>
            <span className="text-sm font-bold font-mono text-amber-400">{curr.literacy}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-white/5">
            <span className="text-[10px] font-mono text-zinc-500 block mb-0.5">ADMIN UNITS</span>
            <span className="text-sm font-bold font-mono text-cyan-400">{curr.districts}</span>
          </div>
        </div>

        {/* Key Officials Bar */}
        <div className="p-3 rounded-xl bg-zinc-950/50 border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono text-[11px]">CHIEF MINISTER:</span>
            <span className="text-zinc-200 font-semibold">{curr.chiefMinister}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono text-[11px]">GOVERNOR:</span>
            <span className="text-zinc-200 font-semibold">{curr.governor}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono text-[11px]">CAPITAL:</span>
            <span className="text-emerald-400 font-mono">{curr.capital}</span>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
        <span className="text-zinc-500 font-mono text-[11px]">Source: Pakistan Bureau of Statistics 2024–2025</span>
        <Link
          href={`/subjects/pakistan-studies`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
        >
          <span>View Full Province Profile & Past Questions</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
