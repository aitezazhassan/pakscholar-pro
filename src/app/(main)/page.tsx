import Link from 'next/link';
import { BookOpen, ArrowRight, Award, Zap, Users, Clock, Shield, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const subjects = [
    { name: 'Pakistan Studies', icon: '🇵🇰', href: '/pakistan-studies' },
    { name: 'Islamic Studies', icon: '📖', href: '/islamic-studies' },
    { name: 'Mathematics', icon: '📐', href: '/mathematics' },
    { name: 'English', icon: '✍️', href: '/english' },
    { name: 'General Science', icon: '🔬', href: '/science' },
    { name: 'Current Affairs', icon: '📰', href: '/current-affairs' }
  ];

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Complete Coverage', desc: 'All subjects for PPSC, FPSC & CSS exams' },
    { icon: <Users className="w-6 h-6" />, title: 'Expert Content', desc: 'Created by educators and subject experts' },
    { icon: <Clock className="w-6 h-6" />, title: 'Always Updated', desc: 'Current affairs and exam patterns updated regularly' },
    { icon: <Shield className="w-6 h-6" />, title: 'Proven Success', desc: 'Trusted by thousands of successful candidates' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Award className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-medium text-emerald-700">Free for all Pakistani students</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your
              <span className="block bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                Competitive Exams
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Pakistan's comprehensive preparation platform for PPSC, FPSC, and CSS.
              Study smarter with expert-curated content and structured learning paths.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/pakistan-studies"
                className="px-8 py-4 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-all hover:shadow-2xl hover:shadow-emerald-200 hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition-all"
              >
                How It Works
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-emerald-700">6</div>
                <div className="text-sm text-gray-600">Core Subjects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700">3</div>
                <div className="text-sm text-gray-600">Exam Guides</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700">100%</div>
                <div className="text-sm text-gray-600">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      < section className="py-20 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PakScholar Pro</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed in one platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Subjects Section */}
      < section className="py-20" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Subject Coverage</h2>
            <p className="text-xl text-gray-600">All subjects you need for competitive exams</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, idx) => (
              <Link
                key={idx}
                href={subject.href}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-4">{subject.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {subject.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 group-hover:text-emerald-700 transition-colors">
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >

      {/* Exam Preparation */}
      < section className="py-20 bg-gradient-to-br from-emerald-50 to-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored Exam Preparation</h2>
            <p className="text-xl text-gray-600">Choose your target exam and get customized preparation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/exams/ppsc"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PPSC</h3>
              <p className="text-gray-600 mb-6">Punjab Public Service Commission preparation guide with exam pattern and syllabus</p>
              <div className="flex items-center text-emerald-700 font-semibold">
                <span>View Guide</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/exams/fpsc"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FPSC</h3>
              <p className="text-gray-600 mb-6">Federal Public Service Commission guide with complete exam structure and tips</p>
              <div className="flex items-center text-emerald-700 font-semibold">
                <span>View Guide</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/exams/css"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CSS</h3>
              <p className="text-gray-600 mb-6">Central Superior Services comprehensive guide with subjects and preparation roadmap</p>
              <div className="flex items-center text-emerald-700 font-semibold">
                <span>View Guide</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-900" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of students preparing for their competitive exams. Completely free, always.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pakistan-studies"
              className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:shadow-2xl transition-all hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Browse Subjects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-emerald-800 text-white font-semibold rounded-full hover:bg-emerald-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-emerald-200 text-sm mt-6">No registration required • 100% free forever</p>
        </div>
      </section >
    </div >
  );
}
