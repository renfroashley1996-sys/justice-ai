# Justice AI

AI-powered legal case analysis and management platform for legal professionals.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Database:** PostgreSQL with Prisma ORM
- **Code Quality:** ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd justice-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your database connection:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/justice_ai?schema=public"
   ```

4. **Initialize the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
justice-ai/
├── prisma/
│   └── schema.prisma           # Database schema
├── src/
│   ├── app/
│   │   ├── api/                # API routes
│   │   │   └── waitlist/       # Waitlist signup API
│   │   ├── app/                # Protected app routes
│   │   │   ├── legal-assistant/
│   │   │   ├── legal-research/
│   │   │   ├── timeline/
│   │   │   ├── discovery/
│   │   │   ├── drafting/
│   │   │   ├── strategy/
│   │   │   ├── contract-redlining/
│   │   │   ├── compare-contracts/
│   │   │   ├── word-addin/
│   │   │   ├── layout.tsx      # App layout with NotLegalAdviceBanner
│   │   │   └── page.tsx        # Dashboard
│   │   ├── features/           # Features marketing page
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Public landing page
│   ├── components/
│   │   ├── layout/             # Layout components (Sidebar, Header)
│   │   ├── shared/             # Shared components
│   │   │   ├── not-legal-advice-banner.tsx
│   │   │   ├── feature-section.tsx
│   │   │   └── coming-soon-page.tsx
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/                    # Utility functions
│   └── styles/                 # Global styles
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── components.json             # shadcn/ui configuration
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Implementation Status

### Implemented (UI + Routes + Scaffolding)

| Feature | Route | Status |
|---------|-------|--------|
| Public Landing Page | `/` | ✅ Implemented |
| Features Page | `/features` | ✅ Implemented |
| Dashboard | `/app` | ✅ Implemented |
| Legal Assistant | `/app/legal-assistant` | ✅ UI Scaffolding |
| Legal Research | `/app/legal-research` | ✅ UI Scaffolding |
| Timeline | `/app/timeline` | ✅ UI Scaffolding |
| Discovery | `/app/discovery` | ✅ UI Scaffolding |
| Drafting | `/app/drafting` | ✅ UI Scaffolding |
| Strategy | `/app/strategy` | ✅ UI Scaffolding |
| Contract Redlining | `/app/contract-redlining` | ✅ Upload UI + Status |
| Compare Contracts | `/app/compare-contracts` | ✅ Upload UI + Diff Table |
| Word Add-in | `/app/word-addin` | ✅ Coming Soon + Waitlist |

### Database Models

| Model | Status |
|-------|--------|
| Case | ✅ Implemented |
| Document | ✅ Implemented |
| TimelineEvent | ✅ Implemented |
| Note | ✅ Implemented |
| User | ✅ Implemented |
| ContractTemplate | ✅ Implemented |
| ContractComparisonJob | ✅ Implemented |
| GeneratedArtifact | ✅ Implemented |
| WaitlistSignup | ✅ Implemented |

### Reusable Components

| Component | Status |
|-----------|--------|
| NotLegalAdviceBanner | ✅ Implemented |
| FeatureSection | ✅ Implemented |
| ComingSoonPage | ✅ Implemented |

### Stubbed (Pending AI Integration)

- AI chat functionality in Legal Assistant
- AI-powered legal research search
- AI document analysis in Discovery
- AI-assisted document drafting
- AI case strategy analysis
- AI contract comparison logic
- AI redline generation

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to database |
| `npm run db:migrate` | Run database migrations |
| `npm run db:studio` | Open Prisma Studio |

## Product Capabilities

### A) Immediate Legal Answers & Deep Analysis
- Receive immediate answers to legal questions & analysis of complex fact patterns
- Draft extensive memos & high-quality PDF summaries in 10–15 minutes
- Produce early brief drafts (memoranda of law)
- Benefit from an intelligent legal AI "army" providing cases, statutes, & more

### B) Contract Redlining at 10X Speed
- Redline contracts 10X faster
- Summarize core & discrete differences vs. your gold standard
- Compare against market for every provision
- See AI-generated redline suggestions with 1-click
- Draft from scratch or using your own templates

### C) Discovery & Timelines Beyond ChatGPT for Law
- Use the Word add-in to draft contracts via AI (Coming Soon)
- Create timelines & statements of facts with relevant files
- Conduct doc review with enormous numbers of documents in minutes
- Proofread & improve writing
- Leverage a flexible Legal AI Assistant

## Adding shadcn/ui Components

To add additional shadcn/ui components:

```bash
npx shadcn-ui@latest add <component-name>
```

Example:
```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
```

## License

Private - All rights reserved.
