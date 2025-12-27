'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export interface BookmarkData {
    contentType: 'topic' | 'question' | 'resource' | 'page';
    contentId: string;
    contentTitle: string;
    contentUrl?: string;
    notes?: string;
}

/**
 * Add a bookmark
 */
export async function addBookmark(data: BookmarkData) {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, error: 'Database not configured' };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, error: 'User not authenticated' };
    }

    try {
        const { data: bookmark, error } = await supabase
            .from('bookmarks')
            .insert({
                user_id: user.id,
                content_type: data.contentType,
                content_id: data.contentId,
                content_title: data.contentTitle,
                content_url: data.contentUrl,
                notes: data.notes
            })
            .select()
            .single();

        if (error) throw error;

        revalidatePath('/dashboard/bookmarks');

        return { success: true, data: bookmark };
    } catch (error: any) {
        console.error('Error adding bookmark:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Remove a bookmark
 */
export async function removeBookmark(bookmarkId: string) {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, error: 'Database not configured' };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, error: 'User not authenticated' };
    }

    try {
        const { error } = await supabase
            .from('bookmarks')
            .delete()
            .eq('id', bookmarkId)
            .eq('user_id', user.id);

        if (error) throw error;

        revalidatePath('/dashboard/bookmarks');

        return { success: true };
    } catch (error: any) {
        console.error('Error removing bookmark:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Get all user bookmarks
 */
export async function getUserBookmarks() {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, error: 'Database not configured', data: [] };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, error: 'User not authenticated', data: [] };
    }

    try {
        const { data, error } = await supabase
            .from('bookmarks')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false });

        if (error) throw error;

        return { success: true, data: data || [] };
    } catch (error: any) {
        console.error('Error fetching bookmarks:', error);
        return { success: false, error: error.message, data: [] };
    }
}

/**
 * Update bookmark notes
 */
export async function updateBookmarkNotes(bookmarkId: string, notes: string) {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, error: 'Database not configured' };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, error: 'User not authenticated' };
    }

    try {
        const { error } = await supabase
            .from('bookmarks')
            .update({ notes })
            .eq('id', bookmarkId)
            .eq('user_id', user.id);

        if (error) throw error;

        revalidatePath('/dashboard/bookmarks');

        return { success: true };
    } catch (error: any) {
        console.error('Error updating bookmark notes:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Check if content is bookmarked
 */
export async function isBookmarked(contentType: string, contentId: string) {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, isBookmarked: false };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, isBookmarked: false };
    }

    try {
        const { data, error } = await supabase
            .from('bookmarks')
            .select('id')
            .eq('user_id', user.id)
            .eq('content_type', contentType)
            .eq('content_id', contentId)
            .single();

        if (error && error.code !== 'PGRST116') throw error;

        return { success: true, isBookmarked: !!data, bookmarkId: data?.id };
    } catch (error: any) {
        console.error('Error checking bookmark:', error);
        return { success: false, isBookmarked: false };
    }
}
