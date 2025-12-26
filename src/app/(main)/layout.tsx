import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
        <>
            <Header user={user} />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
