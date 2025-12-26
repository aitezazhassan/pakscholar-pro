interface SectionHeaderProps {
    title: string;
    subtitle: string;
    align?: 'center' | 'left';
    className?: string;
}

export function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
    return (
        <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                {title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                {subtitle}
            </p>
        </div>
    );
}

interface GradientCTAProps {
    title: string;
    subtitle: string;
    primaryBtnText: string;
    secondaryBtnText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    theme: 'emerald' | 'blue' | 'purple' | 'cyan' | 'rose' | 'amber';
}

const themeStyles = {
    emerald: { from: 'from-emerald-900', to: 'to-slate-900', btnText: 'text-emerald-900', btnHover: 'hover:bg-emerald-50' },
    blue: { from: 'from-blue-900', to: 'to-slate-900', btnText: 'text-blue-900', btnHover: 'hover:bg-blue-50' },
    purple: { from: 'from-purple-900', to: 'to-slate-900', btnText: 'text-purple-900', btnHover: 'hover:bg-purple-50' },
    cyan: { from: 'from-cyan-900', to: 'to-slate-900', btnText: 'text-cyan-900', btnHover: 'hover:bg-cyan-50' },
    rose: { from: 'from-rose-900', to: 'to-slate-900', btnText: 'text-rose-900', btnHover: 'hover:bg-rose-50' },
    amber: { from: 'from-amber-900', to: 'to-slate-900', btnText: 'text-amber-900', btnHover: 'hover:bg-amber-50' }
};

export function GradientCTA({ title, subtitle, primaryBtnText, secondaryBtnText, theme }: GradientCTAProps) {
    const styles = themeStyles[theme];

    return (
        <section className={`py-24 bg-gradient-to-br ${styles.from} ${styles.to} text-white relative overflow-hidden`}>
            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-tight">
                    {title}
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-10 font-light max-w-2xl mx-auto">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className={`px-10 py-4 bg-white ${styles.btnText} rounded-full font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ${styles.btnHover}`}>
                        {primaryBtnText}
                    </button>
                    {secondaryBtnText && (
                        <button className="px-10 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white active:scale-95 transition-all duration-300 backdrop-blur-sm">
                            {secondaryBtnText}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
