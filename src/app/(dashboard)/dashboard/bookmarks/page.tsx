import { createClient } from '@/lib/supabase/server';
import { getUserBookmarks } from '@/app/actions/bookmarks';
import { Bookmark, BookOpen, FileText, ExternalLink, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default async function BookmarksPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase?.auth.getUser() || { data: { user: null } };

    // Fetch user bookmarks
    const bookmarksResult = await getUserBookmarks();
    const bookmarks = bookmarksResult.success ? bookmarksResult.data : [];

    // Group by content type
    const groupedBookmarks = bookmarks.reduce((acc: any, bookmark: any) => {
        if (!acc[bookmark.content_type]) {
            acc[bookmark.content_type] = [];
        }
        acc[bookmark.content_type].push(bookmark);
        return acc;
    }, {});

    const contentTypeIcons: Record<string, any> = {
        topic: BookOpen,
        question: FileText,
        resource: ExternalLink,
        page: Bookmark
    };

    const contentTypeLabels: Record<string, string> = {
        topic: 'Topics',
        question: 'Questions',
        resource: 'Resources',
        page: 'Pages'
    };

    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">My Bookmarks</h1>
                <p className="text-gray-600 mt-2">
                    Quick access to your saved topics, questions, and resources
                </p>
            </header>

            {bookmarks.length > 0 ? (
                <div className="space-y-8">
                    {Object.entries(groupedBookmarks).map(([type, items]: [string, any]) => {
                        const Icon = contentTypeIcons[type] || Bookmark;
                        return (
                            <div key={type} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                <div className="p-6 border-b border-gray-200 bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white rounded-lg shadow-sm">
                                            <Icon className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">
                                                {contentTypeLabels[type] || type}
                                            </h2>
                                            <p className="text-sm text-gray-600">{items.length} saved</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {items.map((bookmark: any) => (
                                        <div key={bookmark.id} className="p-6 hover:bg-gray-50 transition-colors group">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                                                        {bookmark.content_title}
                                                    </h3>
                                                    {bookmark.notes && (
                                                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                                            {bookmark.notes}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                                        <span>Saved {new Date(bookmark.created_at).toLocaleDateString()}</span>
                                                        {bookmark.content_url && (
                                                            <Link
                                                                href={bookmark.content_url}
                                                                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium"
                                                            >
                                                                <ExternalLink className="w-3 h-3" />
                                                                View
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                                <button
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                                    title="Remove bookmark"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Bookmark className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No bookmarks yet</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Start bookmarking important topics and questions to quickly access them later.
                    </p>
                    <Link
                        href="/pakistan-studies"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
                    >
                        Browse Subjects
                    </Link>
                </div>
            )}
        </div>
    );
}
