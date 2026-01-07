import { Metadata } from 'next';
import { BookOpen, Award, TrendingUp, Target } from 'lucide-react';
import { SubjectCard } from '@/components/ui/SubjectCard';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';

export const metadata: Metadata = {
    title: 'Subjects - All PPSC Exam Subjects',
    description: '6 comprehensive subjects for PPSC preparation: General Knowledge, Islamic Studies, Mathematics, English, Computer Science, and Pakistan Studies. MCQs, notes, essays, and past papers.',
    keywords: ['PPSC subjects', 'PPSC MCQs', 'General Knowledge', 'Islamic Studies', 'Mathematics', 'English', 'Computer Science', 'Pakistan Studies'],
};

export default function SubjectsHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[{ label: 'Subjects' }]} />

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 mb-6">
                        <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        All Subjects
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Master every subject with our comprehensive MCQs, detailed notes, practice essays, and past papers
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
                        <div className="text-sm text-slate-600">Subjects</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">200+</div>
                        <div className="text-sm text-slate-600">MCQs</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-1">30+</div>
                        <div className="text-sm text-slate-600">Topics</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
                        <div className="text-sm text-slate-600">Past Papers</div>
                    </div>
                </div>

                {/* Subjects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SubjectCard
                        title="General Knowledge"
                        description="World geography, famous personalities, important dates, inventions, and international organizations"
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
                        description="Quran, Hadith, Seerah, Fiqh, and Islamic history for PPSC exams"
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
                        description="Algebra, arithmetic, geometry, ratios, proportions, and percentages"
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
                        description="Grammar, vocabulary, idioms, phrases, sentence correction, and comprehension"
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
                        description="Fundamentals, MS Office, internet basics, programming concepts, and databases"
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
                        description="History (712-1947), geography, constitution, economy, and current affairs"
                        href="/subjects/pakistan-studies"
                        icon={Award}
                        color="bg-green-600"
                        mcqCount={40}
                        topicCount={5}
                        difficulty="Easy"
                        progress={0}
                    />
                </div>

                {/* Learning Path */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Recommended Learning Path</h2>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Start with easier subjects like Islamic Studies and Pakistan Studies, then move to medium difficulty subjects, and finally tackle Mathematics
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">1. Islamic Studies</span>
                        <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">2. Pakistan Studies</span>
                        <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">3. General Knowledge</span>
                        <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">4. English</span>
                        <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">5. Computer Science</span>
                        <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">6. Mathematics</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
