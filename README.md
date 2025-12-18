# PakScholar Pro

Premium academic knowledge platform for Pakistani competitive exam preparation (PPSC, FPSC, CSS, NTS).

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x LTS
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
pakscholar-pro/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/             # Utilities and helpers
│   └── types/           # TypeScript types
├── content/             # Keystatic CMS content
│   ├── essays/
│   ├── mcqs/
│   ├── past-papers/
│   └── authors/
└── public/              # Static assets
```

## 🔐 Admin Access

**Admin Panel**: [http://localhost:3000/keystatic](http://localhost:3000/keystatic)

**Default Login:**
- Password: `admin123`

> ⚠️ **IMPORTANT**: Change the default password in `src/app/keystatic/[[...params]]/page.tsx` before deploying to production!

### Admin Features
- Create/Edit/Delete Essays
- Manage MCQ Questions
- Upload Past Papers (PDF)
- Manage Authors
- Configure Categories

## 📄 Main Pages

- **Homepage** (`/`) - Hero, stats, categories
- **Essays** (`/essays`) - Article listing and detail pages
- **Practice** (`/practice`) - Interactive MCQ quiz
- **Past Papers** (`/past-papers`) - Downloadable exam papers

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **CMS**: Keystatic (file-based)
- **Fonts**: Playfair Display, Inter, JetBrains Mono

## 📝 Sample Content

The project includes 2 sample essays and 2 sample MCQs to demonstrate functionality:

1. **Pakistan's Constitutional Framework** - Pakistan Studies essay
2. **CSS English Essay Writing** - Exam preparation guide

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

No environment variables required for local file-based CMS.

## 🔒 Security Notes

1. **Change default admin password** before production
2. Consider implementing proper authentication (NextAuth.js)
3. Add rate limiting to API routes
4. Configure CORS for API endpoints

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Keystatic Documentation](https://keystatic.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contributing

This is a private project. For support, contact the development team.

## 📄 License

Proprietary - All rights reserved
