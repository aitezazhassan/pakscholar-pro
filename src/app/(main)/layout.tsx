import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MobileTabBar } from '@/components/layout/MobileTabBar';
import { createClient } from '@/lib/supabase/server';

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();

    let user = null;
    if (supabase) {
        const { data } = await supabase.auth.getUser();
        user = data.user;
    }

    return (
        <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-emerald-700 selection:text-white font-sans antialiased">
            <Header user={user} />
            <main className="flex-1 pb-16 md:pb-0 pt-16 sm:pt-20">{children}</main>
            <Footer />
            <MobileTabBar />
        </div>
    );
}
