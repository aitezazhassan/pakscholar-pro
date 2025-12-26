interface PageHeroProps {
    icon: string;
    title: string;
    description: string;
    stats?: { value: string; label: string }[];
    theme: 'emerald' | 'blue' | 'purple' | 'cyan' | 'rose' | 'amber';
}

const themeStyles = {
    emerald: {
        accent: 'text-emerald-400',
        bg: 'from-emerald-900',
        blur: 'bg-emerald-700/20'
    },
    blue: {
        accent: 'text-blue-400',
        bg: 'from-blue-900',
        blur: 'bg-blue-700/20'
    },
    purple: {
        accent: 'text-purple-400',
        bg: 'from-purple-900',
        blur: 'bg-purple-700/20'
    },
    cyan: {
        accent: 'text-cyan-400',
        bg: 'from-cyan-900',
        blur: 'bg-cyan-700/20'
    },
    rose: {
        accent: 'text-rose-400',
        bg: 'from-rose-900',
        blur: 'bg-rose-700/20'
    },
    amber: {
        accent: 'text-amber-400',
        bg: 'from-amber-900',
        blur: 'bg-amber-700/20'
    }
};

export function PageHero({ icon, title, description, stats, theme }: PageHeroProps) {
    const styles = themeStyles[theme];

    return (
        <section className="relative isolate overflow-hidden bg-slate-950 pt-32 pb-24">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 z-[-2] h-full w-full bg-[#020617] bg-[radial-gradient(#ffffff33_1px,#020617_1px)] bg-[size:24px_24px] opacity-[0.15]"></div>
                <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full ${styles.blur} blur-[120px] animate-pulse-slow`} />
                <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full ${styles.blur} blur-[120px] animate-pulse-slow delay-1000`} />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-block animate-bounce-slow mb-6">
                        <span className="text-8xl filter drop-shadow-2xl">{icon}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight leading-tight">
                        {title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        {description}
                    </p>

                    {/* Glass Stats Cards */}
                    {stats && (
                        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/5 backdrop-blur-xl rounded-2xl px-8 py-5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
                                >
                                    <div className={`text-3xl md:text-4xl font-bold ${styles.accent} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

// Add these custom animations to global css or tailwind config later:
// animate-pulse-slow, animate-bounce-slow, animate-fade-in-up
