export const structuredData = {
    organization: {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'PakScholar Pro',
        description: 'Premium academic platform for Pakistani competitive exam preparation (PPSC, FPSC, CSS, NTS)',
        url: 'https://pakscholarpro.com',
        logo: 'https://pakscholarpro.com/logo.png',
        sameAs: [
            'https://facebook.com/pakscholarpro',
            'https://twitter.com/pakscholarpro',
            'https://linkedin.com/company/pakscholarpro',
        ],
    },

    website: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PakScholar Pro',
        url: 'https://pakscholarpro.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://pakscholarpro.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    },

    article: (data: {
        title: string;
        description: string;
        publishedDate: string;
        author: string;
        image?: string;
        url: string;
    }) => ({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image || 'https://pakscholarpro.com/og-image.png',
        datePublished: data.publishedDate,
        author: {
            '@type': 'Person',
            name: data.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'PakScholar Pro',
            logo: {
                '@type': 'ImageObject',
                url: 'https://pakscholarpro.com/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
        },
    }),

    breadcrumbs: (items: { name: string; href: string }[]) => ({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://pakscholarpro.com${item.href}`,
        })),
    }),
};
