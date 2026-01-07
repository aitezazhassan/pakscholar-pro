import { BookOpen, GraduationCap, Target, Library, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { HubCard } from '@/components/ui/HubCard';
import { SubjectCard } from '@/components/ui/SubjectCard';

export default function NewHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 sm:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium">200+ New MCQs Added This Week</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Master PPSC Exams with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Pakistan's #1 Platform
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Free PPSC exam preparation with 200+ MCQs, mock exams, and comprehensive study material. Join 12,547 students preparing for success.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">12,547</div>
              <div className="text-sm text-slate-400">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-slate-400">MCQ Questions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">95%</div>
              <div className="text-sm text-slate-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">20+</div>
              <div className="text-sm text-slate-400">Mock Exams</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/subjects"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Start Learning Free
            </Link>
            <Link
              href="/practice/mock-exams"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Take Mock Exam
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Access comprehensive study materials, practice exams, and expert resources all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HubCard
            title="Exams"
            description="Complete guides for PPSC Lecturer, Tehsildar, and more"
            href="/exams"
            icon={GraduationCap}
            stats={[
              { label: 'Posts', value: '10+' },
              { label: 'Guides', value: '15' },
            ]}
            gradient="from-emerald-600 to-teal-600"
          />
          <HubCard
            title="Subjects"
            description="6 subjects with MCQs, notes, and past papers"
            href="/subjects"
            icon={BookOpen}
            stats={[
              { label: 'Subjects', value: '6' },
              { label: 'MCQs', value: '200+' },
            ]}
            gradient="from-blue-600 to-cyan-600"
          />
          <HubCard
            title="Practice"
            description="Mock exams and timed practice sessions"
            href="/practice"
            icon={Target}
            stats={[
              { label: 'Mock Exams', value: '20+' },
              { label: 'Questions', value: '1000+' },
            ]}
            gradient="from-purple-600 to-pink-600"
          />
          <HubCard
            title="Resources"
            description="Blog posts, study plans, and downloads"
            href="/resources"
            icon={Library}
            stats={[
              { label: 'Articles', value: '50+' },
              { label: 'Plans', value: '10' },
            ]}
            gradient="from-orange-600 to-red-600"
          />
        </div>
      </section>

      {/* Featured Subjects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Popular Subjects
          </h2>
          <p className="text-lg text-slate-600">
            Start learning with our most popular subjects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SubjectCard
            title="General Knowledge"
            description="World geography, famous personalities, important dates, and more"
            href="/subjects/general-knowledge"
            icon={Award}
            color="bg-emerald-600"
            mcqCount={50}
            topicCount={5}
            difficulty="Medium"
            progress={0}
          />
          <SubjectCard
            title="Islamic Studies"
            description="Quran, Hadith, Seerah, Fiqh, and Islamic history"
            href="/subjects/islamic-studies"
            icon={BookOpen}
            color="bg-blue-600"
            mcqCount={40}
            topicCount={5}
            difficulty="Easy"
            progress={0}
          />
          <SubjectCard
            title="Mathematics"
            description="Algebra, arithmetic, geometry, ratios, and percentages"
            href="/subjects/mathematics"
            icon={TrendingUp}
            color="bg-purple-600"
            mcqCount={30}
            topicCount={5}
            difficulty="Hard"
            progress={0}
          />
          <SubjectCard
            title="English"
            description="Grammar, vocabulary, idioms, and comprehension"
            href="/subjects/english"
            icon={BookOpen}
            color="bg-pink-600"
            mcqCount={35}
            topicCount={5}
            difficulty="Medium"
            progress={0}
          />
          <SubjectCard
            title="Computer Science"
            description="Fundamentals, MS Office, internet basics, and programming"
            href="/subjects/computer-science"
            icon={Target}
            color="bg-cyan-600"
            mcqCount={30}
            topicCount={5}
            difficulty="Medium"
            progress={0}
          />
          <SubjectCard
            title="Pakistan Studies"
            description="History, geography, constitution, economy, and current affairs"
            href="/subjects/pakistan-studies"
            icon={Award}
            color="bg-green-600"
            mcqCount={40}
            topicCount={5}
            difficulty="Easy"
            progress={0}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your PPSC Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of students who are preparing for success
          </p>
          <Link
            href="/subjects"
            className="inline-block px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
