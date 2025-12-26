import { ChevronRight } from 'lucide-react';

interface TopicCardProps {
    id: string;
    icon: string;
    title: string;
    desc: string;
    count: string | number;
    active: boolean;
    onClick: () => void;
    theme: 'emerald' | 'blue' | 'purple' | 'cyan' | 'rose' | 'amber';
}

const themeStyles = {
    emerald: {
        activeBorder: 'border-emerald-500',
        activeBg: 'bg-emerald-50',
        hoverBorder: 'hover:border-emerald-300',
        text: 'text-emerald-900',
        subText: 'text-emerald-700',
        iconBg: 'group-hover:text-emerald-600'
    },
    blue: {
        activeBorder: 'border-blue-500',
        activeBg: 'bg-blue-50',
        hoverBorder: 'hover:border-blue-300',
        text: 'text-blue-900',
        subText: 'text-blue-700',
        iconBg: 'group-hover:text-blue-600'
    },
    purple: {
        activeBorder: 'border-purple-500',
        activeBg: 'bg-purple-50',
        hoverBorder: 'hover:border-purple-300',
        text: 'text-purple-900',
        subText: 'text-purple-700',
        iconBg: 'group-hover:text-purple-600'
    },
    cyan: {
        activeBorder: 'border-cyan-500',
        activeBg: 'bg-cyan-50',
        hoverBorder: 'hover:border-cyan-300',
        text: 'text-cyan-900',
        subText: 'text-cyan-700',
        iconBg: 'group-hover:text-cyan-600'
    },
    rose: {
        activeBorder: 'border-rose-500',
        activeBg: 'bg-rose-50',
        hoverBorder: 'hover:border-rose-300',
        text: 'text-rose-900',
        subText: 'text-rose-700',
        iconBg: 'group-hover:text-rose-600'
    },
    amber: {
        activeBorder: 'border-amber-500',
        activeBg: 'bg-amber-50',
        hoverBorder: 'hover:border-amber-300',
        text: 'text-amber-900',
        subText: 'text-amber-700',
        iconBg: 'group-hover:text-amber-600'
    }
};

export function TopicCard({ icon,
    title,
    desc,
    count,
    active,
    onClick,
    theme = 'emerald'
}: TopicCardProps) {
    const styles = themeStyles[theme];

    return (
        <button
            onClick={onClick}
            className={`group text-left p-8 rounded-3xl border-2 transition-all duration-300 ease-out 
                hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-20
                ${active
                    ? `${styles.activeBorder} ${styles.activeBg} shadow-lg ring-4 ring-opacity-20 ring-current`
                    : `border-slate-100 bg-white ${styles.hoverBorder} hover:shadow-2xl`
                }`}
        >
            <div className="flex justify-between items-start mb-6">
                <span className={`text-5xl filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {icon}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-white/50 border border-slate-100 ${styles.subText}`}>
                    {count} Lessons
                </span>
            </div>

            <h3 className={`text-2xl font-bold mb-3 tracking-tight ${active ? styles.text : 'text-slate-900'}`}>
                {title}
            </h3>

            <p className="text-base text-slate-500 mb-6 leading-relaxed font-medium">
                {desc}
            </p>

            <div className={`flex items-center gap-2 font-bold text-sm ${active ? styles.subText : 'text-slate-400 group-hover:text-slate-600'}`}>
                <span>Start Learning</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${active ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
            </div>
        </button>
    );
}
