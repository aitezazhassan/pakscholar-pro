import Script from 'next/script';

export default function StructuredData() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'PakScholar Pro',
        description: 'Free PPSC exam preparation platform with 200+ MCQs, mock exams, and study material for Pakistani students',
        url: 'https://pakscholar-pro.vercel.app',
        logo: 'https://pakscholar-pro.vercel.app/logo.png',
        sameAs: [
            'https://facebook.com/pakscholarpro',
            'https://twitter.com/pakscholarpro',
            'https://linkedin.com/company/pakscholarpro',
            'https://github.com/aitezazhassan/pakscholar-pro'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'aitezazhassan260@gmail.com',
            contactType: 'Customer Service',
            areaServed: 'PK',
            availableLanguage: ['English', 'Urdu']
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'PK',
            addressRegion: 'Punjab'
        },
        founder: {
            '@type': 'Person',
            name: 'Aitezaz Hassan',
            email: 'aitezazhassan260@gmail.com'
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'PKR',
            description: '100% free PPSC exam preparation'
        }
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
