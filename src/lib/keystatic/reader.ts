import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';

export const reader = createReader('', keystaticConfig);

// Essays
export async function getAllEssays() {
    const essays = await reader.collections.essays.all();
    return essays
        .filter((essay) => essay.entry.status === 'published')
        .sort((a, b) => {
            const dateA = a.entry.publishedDate
                ? new Date(a.entry.publishedDate).getTime()
                : 0;
            const dateB = b.entry.publishedDate
                ? new Date(b.entry.publishedDate).getTime()
                : 0;
            return dateB - dateA;
        });
}

export async function getEssayBySlug(slug: string) {
    try {
        const entry = await reader.collections.essays.read(slug);
        if (!entry) return null;
        return { slug, entry };
    } catch (error) {
        return null;
    }
}

export async function getFeaturedEssays(limit: number = 3) {
    const essays = await getAllEssays();
    return essays.filter((essay) => essay.entry.featured).slice(0, limit);
}

export async function getEssaysByCategory(category: string) {
    const essays = await getAllEssays();
    return essays.filter((essay) => essay.entry.category === category);
}

export async function getRelatedEssays(
    currentSlug: string,
    category: string,
    limit: number = 3
) {
    const essays = await getEssaysByCategory(category);
    return essays.filter((essay) => essay.slug !== currentSlug).slice(0, limit);
}

export async function getEssaysByTags(tags: string[], currentSlug?: string) {
    const essays = await getAllEssays();
    return essays
        .filter((essay) => {
            if (currentSlug && essay.slug === currentSlug) return false;
            return essay.entry.tags?.some((tag) => tags.includes(tag));
        })
        .sort((a, b) => {
            // Sort by number of matching tags
            const aMatches = a.entry.tags?.filter((tag) => tags.includes(tag)).length || 0;
            const bMatches = b.entry.tags?.filter((tag) => tags.includes(tag)).length || 0;
            return bMatches - aMatches;
        });
}

// MCQs
export async function getAllMCQs() {
    const mcqs = await reader.collections.mcqs.all();
    return mcqs;
}

export async function getMCQsByCategory(category: string) {
    const mcqs = await getAllMCQs();
    return mcqs.filter((mcq) => mcq.entry.category === category);
}

export async function getMCQsByDifficulty(difficulty: string) {
    const mcqs = await getAllMCQs();
    return mcqs.filter((mcq) => mcq.entry.difficulty === difficulty);
}

export async function getRandomMCQs(count: number) {
    const mcqs = await getAllMCQs();
    const shuffled = mcqs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Past Papers
export async function getAllPastPapers() {
    const papers = await reader.collections.pastPapers.all();
    return papers.sort((a, b) => (b.entry.year || 0) - (a.entry.year || 0));
}

export async function getPastPapersByYear(year: number) {
    const papers = await getAllPastPapers();
    return papers.filter((paper) => paper.entry.year === year);
}

export async function getPastPapersByExam(examType: string) {
    const papers = await getAllPastPapers();
    return papers.filter((paper) => paper.entry.examType === examType);
}

// Authors
export async function getAuthorBySlug(slug: string) {
    return await reader.collections.authors.read(slug);
}

export async function getEssaysByAuthor(authorSlug: string) {
    const essays = await getAllEssays();
    return essays.filter((essay) => essay.entry.author === authorSlug);
}

// Categories
export async function getAllCategories() {
    return await reader.collections.categories.all();
}
