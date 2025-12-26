import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
    name: string;
    href: string;
}

interface NavDropdownProps {
    label: string;
    items: DropdownItem[];
    activeId: string | null;
    id: string;
    scrolled: boolean;
    onMouseEnter: (id: string) => void;
    onMouseLeave: () => void;
}

export function NavDropdown({ label, items, activeId, id, scrolled, onMouseEnter, onMouseLeave }: NavDropdownProps) {
    const isOpen = activeId === id;

    return (
        <div className="relative group">
            <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${scrolled
                        ? 'text-slate-700 hover:bg-slate-100'
                        : 'text-white hover:bg-white/10'
                    } ${isOpen ? 'bg-white/10' : ''}`}
                onMouseEnter={() => onMouseEnter(id)}
                aria-expanded={isOpen}
            >
                {label} <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 transition-all duration-200 origin-top-left ${isOpen
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                    }`}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={onMouseLeave}
            >
                {items.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

interface MobileMenuLinkProps {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
    primary?: boolean;
}

export function MobileMenuLink({ href, children, onClick, primary = false }: MobileMenuLinkProps) {
    if (primary) {
        return (
            <Link
                href={href}
                className="block w-full py-3 bg-emerald-700 text-white rounded-full text-center font-bold shadow-lg hover:bg-emerald-800 transition-all active:scale-95"
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className="block py-2.5 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg px-2 transition-colors"
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
