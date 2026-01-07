import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface HubCardProps {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
    stats?: {
        label: string;
        value: string | number;
    }[];
    gradient: string;
}

export function HubCard({ title, description, href, icon: Icon, stats, gradient }: HubCardProps) {
    return (
        <Link href={href}>
            <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm">
                        <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-6">{description}</p>

                    {/* Stats */}
                    {stats && stats.length > 0 && (
                        <div className="flex gap-6">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-white/80">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Arrow */}
                    <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}
