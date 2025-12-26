'use client';

import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  Quote,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Calculator,
  RefreshCw
} from 'lucide-react';
import { GradientCTA } from '@/components/ui/layout-components';

// --- SUB-COMPONENT: HERO SECTION ---
const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-slate-900 pb-16 pt-14 sm:pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center pt-16">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-emerald-400 ring-1 ring-white/10 hover:ring-white/20">
              Updated for PPSC 2025 Syllabus. <a href="#" className="font-semibold text-white"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
            From Aspirant to Officer.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Your Journey Starts Here.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            The modern way to prepare for PPSC, FPSC & CSS. Smart tools, verified data, and a focused study environment.
          </p>

          {/* Search Bar */}
          <div className="mt-10 relative max-w-xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-white rounded-lg p-2 shadow-2xl">
                <Search className="h-6 w-6 text-slate-400 ml-3" />
                <input
                  type="text"
                  className="w-full p-4 text-slate-900 placeholder-slate-500 focus:outline-none rounded-lg"
                  placeholder="Search 'Tehsildar Past Papers' or 'Math Formulas'..."
                />
                <button className="bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-800 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Quick Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            <span className="py-1">Trending Now:</span>
            <button className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-emerald-500 hover:text-white transition-all">GK 2024</button>
            <button className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-emerald-500 hover:text-white transition-all">Islamic Studies</button>
            <button className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-emerald-500 hover:text-white transition-all">Math Tricks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: DAILY KNOWLEDGE HUB ---
const DailyKnowledgeHub = () => {
  const [activeTab, setActiveTab] = useState('word');

  const content = {
    word: {
      title: "Ephemeral",
      pronunciation: "/əˈfem(ə)rəl/",
      meaning: "Lasting for a very short time.",
      context: "Usually asked in CSS English Précis & Composition paper.",
      example: "'The joys of political power are often ephemeral.'",
    },
    quote: {
      text: "Nations are born in the hearts of poets, they prosper and die in the hands of politicians.",
      author: "Allama Iqbal",
    },
    fact: {
      text: "The largest coal reserves in Pakistan are located in Tharparkar, estimated at 175 billion tons.",
      category: "Geography of Pakistan",
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Your Daily Dose</h2>
          <p className="text-slate-600 mt-2">Small steps every day lead to big victories.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => setActiveTab('word')} className={`w-full p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 text-left ${activeTab === 'word' ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-slate-100 bg-white hover:bg-slate-50'}`}>
              <div className={`p-3 rounded-xl ${activeTab === 'word' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'}`}><BookOpen className="w-6 h-6" /></div>
              <div><h3 className="font-bold text-slate-900">Word of the Day</h3><p className="text-sm text-slate-500">English Précis</p></div>
            </button>
            <button onClick={() => setActiveTab('quote')} className={`w-full p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 text-left ${activeTab === 'quote' ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500' : 'border-slate-100 bg-white hover:bg-slate-50'}`}>
              <div className={`p-3 rounded-xl ${activeTab === 'quote' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'}`}><Quote className="w-6 h-6" /></div>
              <div><h3 className="font-bold text-slate-900">Motivational Gem</h3><p className="text-sm text-slate-500">Wisdom</p></div>
            </button>
            <button onClick={() => setActiveTab('fact')} className={`w-full p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 text-left ${activeTab === 'fact' ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500' : 'border-slate-100 bg-white hover:bg-slate-50'}`}>
              <div className={`p-3 rounded-xl ${activeTab === 'fact' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'}`}><Lightbulb className="w-6 h-6" /></div>
              <div><h3 className="font-bold text-slate-900">GK Nugget</h3><p className="text-sm text-slate-500">General Knowledge</p></div>
            </button>
          </div>

          {/* Content Card */}
          <div className="lg:col-span-8">
            <div className="h-full bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {activeTab === 'word' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">Vocabulary Builder</span>
                  <h3 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-2">{content.word.title}</h3>
                  <p className="text-xl text-slate-400 font-serif italic mb-8">{content.word.pronunciation}</p>
                  <p className="text-xl text-slate-800 leading-relaxed mb-6">{content.word.meaning}</p>
                  <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500"><p className="text-slate-700 italic">"{content.word.example}"</p></div>
                </div>
              )}
              {activeTab === 'quote' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">Daily Inspiration</span>
                  <blockquote className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">"{content.quote.text}"</blockquote>
                  <div className="mt-8 flex items-center gap-4"><div className="w-12 h-1 bg-emerald-500 rounded-full"></div><p className="text-xl font-bold text-slate-800">{content.quote.author}</p></div>
                </div>
              )}
              {activeTab === 'fact' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-6">Did You Know?</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-snug">{content.fact.text}</h3>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 inline-block"><p className="text-xs text-amber-600 uppercase font-bold">Category</p><p className="font-semibold text-slate-900">{content.fact.category}</p></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: ACADEMIC CALCULATOR ---
const AcademicCalculator = () => {
  const [marks, setMarks] = useState({
    matricObt: '', matricTotal: '',
    interObt: '', interTotal: '',
    bachObt: '', bachTotal: '',
    masterObt: '', masterTotal: '',
  });
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const getScore = (obt: string, tot: string, weight: number) => {
      if (!obt || !tot) return 0;
      return (parseFloat(obt) / parseFloat(tot)) * weight;
    };

    const total = getScore(marks.matricObt, marks.matricTotal, 5) +
      getScore(marks.interObt, marks.interTotal, 7) +
      getScore(marks.bachObt, marks.bachTotal, 11) +
      getScore(marks.masterObt, marks.masterTotal, 17);

    setResult(total.toFixed(2));
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" /><span>Free Tool</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Know Your Merit Position.</h2>
            <p className="text-lg text-slate-600 mb-6">
              In PPSC, your academic record counts for **40 marks**. Before you sit for the exam, know exactly where you stand against the competition.
            </p>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 mt-1" /><span className="font-medium">Instant calculation</span></li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 mt-1" /><span className="font-medium">Based on PPSC general formula</span></li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 mt-1" /><span className="font-medium">Plan your written score target</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 border-b pb-4 mb-6">Academic Aggregator</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 items-center">
                <span className="text-sm font-medium text-slate-700">Matric</span>
                <input type="number" placeholder="Obt" className="border rounded p-2 text-sm" onChange={e => setMarks({ ...marks, matricObt: e.target.value })} />
                <input type="number" placeholder="Total" className="border rounded p-2 text-sm" onChange={e => setMarks({ ...marks, matricTotal: e.target.value })} />
              </div>
              <div className="grid grid-cols-3 gap-2 items-center">
                <span className="text-sm font-medium text-slate-700">Intermediate</span>
                <input type="number" placeholder="Obt" className="border rounded p-2 text-sm" onChange={e => setMarks({ ...marks, interObt: e.target.value })} />
                <input type="number" placeholder="Total" className="border rounded p-2 text-sm" onChange={e => setMarks({ ...marks, interTotal: e.target.value })} />
              </div>
              <div className="grid grid-cols-3 gap-2 items-center">
                <span className="text-sm font-medium text-slate-700">Bachelor</span>
                <input type="number" placeholder="Obt" className="border rounded p-2 text-sm" onChange={e => setMarks({ ...marks, bachObt: e.target.value })} />
                <input type="number" placeholder="Total" className="border rounded p-2 text-sm" onChange={e => setMarks({ ...marks, bachTotal: e.target.value })} />
              </div>
              <div className="grid grid-cols-3 gap-2 items-center">
                <span className="text-sm font-medium text-slate-700">Master</span>
                <input type="number" placeholder="Obt" className="border rounded p-2 text-sm" onChange={e => setMarks({ ...marks, masterObt: e.target.value })} />
                <input type="number" placeholder="Total" className="border rounded p-2 text-sm" onChange={e => setMarks({ ...marks, masterTotal: e.target.value })} />
              </div>
            </div>
            {result ? (
              <div className="mt-8 bg-emerald-50 rounded-xl p-6 text-center">
                <p className="text-sm text-emerald-800 font-medium uppercase">Your Academic Score</p>
                <div className="text-5xl font-bold text-emerald-700 mt-2">{result} <span className="text-xl text-emerald-500">/ 40</span></div>
                <button onClick={() => setResult(null)} className="mt-4 flex items-center justify-center gap-2 mx-auto text-sm text-slate-500 hover:text-slate-900"><RefreshCw className="w-3 h-3" /> Recalculate</button>
              </div>
            ) : (
              <button onClick={calculate} className="w-full mt-8 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all">Calculate Merit</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: SUBJECT GRID ---
const SubjectGrid = () => {
  const subjects = [
    { emoji: "🇵🇰", title: "Pakistan Studies", desc: "History from 712 AD to 2025", link: "/pakistan-studies" },
    { emoji: "📖", title: "Islamic Studies", desc: "Quran, Sunnah & Islamic History", link: "/islamic-studies" },
    { emoji: "📐", title: "Mathematics", desc: "Algebra, Ratios & Series", link: "/mathematics" },
    { emoji: "✍️", title: "English", desc: "Grammar, Vocab & Idioms", link: "/english" },
    { emoji: "🔬", title: "General Science", desc: "EDS, Biology & Physics", link: "/science" },
    { emoji: "📰", title: "Current Affairs", desc: "Global & Domestic Issues", link: "/current-affairs" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Subject Coverage</h2>
          <p className="text-lg text-slate-600">Everything you need, categorized for focused learning.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((sub, idx) => (
            <a key={idx} href={sub.link} className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">{sub.emoji}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{sub.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{sub.desc}</p>
              <div className="flex items-center text-sm font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <HeroSection />
      <DailyKnowledgeHub />
      <AcademicCalculator />
      <SubjectGrid />

      <GradientCTA
        title="Ready to Ace Your Exam?"
        subtitle="No hidden fees. No premium walls. Just education."
        primaryBtnText="Start Learning Now"
        secondaryBtnText="Contact Us"
        theme="emerald"
      />
    </main>
  );
}
