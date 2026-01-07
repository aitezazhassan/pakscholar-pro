import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  async redirects() {
    return [
      // MCQ Bank → Subjects
      {
        source: '/mcq-bank',
        destination: '/subjects',
        permanent: true,
      },
      {
        source: '/mcq-bank/general-knowledge',
        destination: '/subjects/general-knowledge/mcqs',
        permanent: true,
      },
      {
        source: '/mcq-bank/geography',
        destination: '/subjects/general-knowledge/mcqs', // Geography is part of GK
        permanent: true,
      },
      {
        source: '/mcq-bank/computer',
        destination: '/subjects/computer-science/mcqs',
        permanent: true,
      },
      {
        source: '/mcq-bank/mathematics',
        destination: '/subjects/mathematics/mcqs',
        permanent: true,
      },
      {
        source: '/mcq-bank/english',
        destination: '/subjects/english/mcqs',
        permanent: true,
      },
      {
        source: '/mcq-bank/urdu',
        destination: '/subjects/pakistan-studies/mcqs', // Urdu merged with Pakistan Studies
        permanent: true,
      },
      {
        source: '/mcq-bank/:subject',
        destination: '/subjects/:subject/mcqs',
        permanent: true,
      },

      // Old subject pages → New subject hubs
      {
        source: '/pakistan-studies',
        destination: '/subjects/pakistan-studies',
        permanent: true,
      },
      {
        source: '/islamic-studies',
        destination: '/subjects/islamic-studies',
        permanent: true,
      },
      {
        source: '/mathematics',
        destination: '/subjects/mathematics',
        permanent: true,
      },
      {
        source: '/english',
        destination: '/subjects/english',
        permanent: true,
      },
      {
        source: '/science',
        destination: '/subjects/computer-science',
        permanent: true,
      },
      {
        source: '/current-affairs',
        destination: '/subjects/pakistan-studies/notes/current-affairs',
        permanent: true,
      },

      // Study Material → Subject Notes
      {
        source: '/study-material',
        destination: '/subjects',
        permanent: true,
      },

      // Past Papers → Subject Past Papers
      {
        source: '/past-papers',
        destination: '/subjects',
        permanent: true,
      },

      // Resources → Blog
      {
        source: '/resources',
        destination: '/resources/blog',
        permanent: true,
      },

      // Essays → Subject Essays
      {
        source: '/essays',
        destination: '/subjects',
        permanent: true,
      },
      {
        source: '/essays/:slug',
        destination: '/resources/blog/:slug',
        permanent: true,
      },

      // Practice → Mock Exams
      {
        source: '/practice',
        destination: '/practice/mock-exams',
        permanent: true,
      },

      // Tools → Remove (redirect to homepage temporarily)
      {
        source: '/tools',
        destination: '/',
        permanent: false, // Temporary until 3+ tools exist
      },
      {
        source: '/tools/:path*',
        destination: '/',
        permanent: false,
      },

      // Exams → New exams hub
      {
        source: '/exams/ppsc',
        destination: '/exams/ppsc',
        permanent: true, // Keep same URL
      },
    ];
  },
};

export default nextConfig;

