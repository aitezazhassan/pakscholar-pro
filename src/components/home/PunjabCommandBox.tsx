'use client';

import React, { useState } from 'react';
import { Compass, ArrowRight, MapPin, Building2, Users } from 'lucide-react';
import Link from 'next/link';
import { AppleBadge } from '@/components/ui/AppleBadge';

export function PunjabCommandBox() {
  const [activeProvince, setActiveProvince] = useState<'punjab' | 'sindh' | 'kpk' | 'balochistan'>('punjab');

  const provinceData = {
    punjab: {
      name: 'Punjab',
      capital: 'Lahore',
      population: '127.68M',
      area: '205,344 km²',
      literacy: '66.3%',
      assemblySeats: '371 Seats',
      governor: 'Sardar Saleem Haider Khan',
      chiefMinister: 'Maryam Nawaz Sharif',
      districts: '42 Districts',
    },
    sindh: {
      name: 'Sindh',
      capital: 'Karachi',
      population: '55.69M',
      area: '140,914 km²',
      literacy: '61.8%',
      assemblySeats: '168 Seats',
      governor: 'Kamran Tessori',
      chiefMinister: 'Murad Ali Shah',
      districts: '30 Districts',
    },
    kpk: {
      name: 'Khyber Pakhtunkhwa',
      capital: 'Peshawar',
      population: '40.85M',
      area: '101,741 km²',
      literacy: '55.1%',
      assemblySeats: '145 Seats',
      governor: 'Faisal Karim Kundi',
      chiefMinister: 'Ali Amin Gandapur',
      districts: '36 Districts',
    },
    balochistan: {
      name: 'Balochistan',
      capital: 'Quetta',
      population: '14.89M',
      area: '347,190 km²',
      literacy: '43.8%',
      assemblySeats: '65 Seats',
      governor: 'Sheikh Jaffar Khan Mandokhail',
      chiefMinister: 'Sarfraz Bugti',
      districts: '36 Districts',
    },
  };

  const curr = provinceData[activeProvince];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header with Province Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-[#0F5132] dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base text-zinc-900 dark:text-white tracking-tight">
                  Provincial Almanac
                </h3>
                <AppleBadge variant="neutral" size="sm">
                  Official Data
                </AppleBadge>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">PPSC High-Yield Administrative Data</p>
            </div>
          </div>

          {/* Clean Segmented Control */}
          <div className="flex items-center p-0.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-black/[0.04] dark:border-white/[0.06] text-xs font-medium">
            {(['punjab', 'sindh', 'kpk', 'balochistan'] as const).map((prov) => (
              <button
                key={prov}
                onClick={() => setActiveProvince(prov)}
                className={`px-3 py-1 rounded-lg capitalize transition-all duration-150 ${
                  activeProvince === prov
                    ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm font-semibold'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {prov}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Data Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
          <div className="p-3 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-black/[0.04] dark:border-white/[0.05]">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block mb-0.5">Population</span>
            <span className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">{curr.population}</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-black/[0.04] dark:border-white/[0.05]">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block mb-0.5">Total Area</span>
            <span className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">{curr.area}</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-black/[0.04] dark:border-white/[0.05]">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block mb-0.5">Literacy</span>
            <span className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">{curr.literacy}</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-black/[0.04] dark:border-white/[0.05]">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block mb-0.5">Districts</span>
            <span className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">{curr.districts}</span>
          </div>
        </div>

        {/* Key Officials Bar */}
        <div className="p-3 rounded-xl bg-[#FBFBFD] dark:bg-zinc-800/40 border border-black/[0.05] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium text-[11px]">Chief Minister:</span>
            <span className="text-zinc-900 dark:text-white font-semibold">{curr.chiefMinister}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium text-[11px]">Governor:</span>
            <span className="text-zinc-900 dark:text-white font-semibold">{curr.governor}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium text-[11px]">Capital:</span>
            <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">{curr.capital}</span>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <span className="text-[11px]">Pakistan Bureau of Statistics 2024–2025</span>
        <Link
          href="/subjects/pakistan-studies"
          className="inline-flex items-center gap-1.5 font-medium text-[#0F5132] dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors group"
        >
          <span>Pakistan Studies Questions</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
