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
│   │   ├── features/           # Public features page
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
│   │   │   ├── layout.tsx      # App layout with sidebar
│   │   │   └── page.tsx        # App dashboard
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Public landing page
│   ├── components/
│   │   ├── layout/             # Layout components (Sidebar, Header)
│   │   └── ui/                 # shadcn/ui + custom components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── styles/                 # Global styles
│   └── types/                  # TypeScript types
├── .eslintrc.json
├── .prettierrc
├── components.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

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

## Implementation Status

### Implemented (UI + Scaffolding)

| Feature | Route | Status |
|---------|-------|--------|
| Public Landing Page | `/` | UI Complete |
| Features Page | `/features` | UI Complete |
| App Dashboard | `/app` | UI Complete |
| Legal Assistant | `/app/legal-assistant` | UI Scaffolding |
| Legal Research | `/app/legal-research` | UI Scaffolding |
| Case Timeline | `/app/timeline` | UI Scaffolding |
| Discovery | `/app/discovery` | UI Scaffolding |
| Drafting | `/app/drafting` | UI Scaffolding |
| Strategy | `/app/strategy` | UI Scaffolding |
| Contract Redlining | `/app/contract-redlining` | UI + File Upload |
| Compare Contracts | `/app/compare-contracts` | UI + Comparison Table |
| Word Add-in | `/app/word-addin` | Coming Soon + Email Capture |

### Stubbed (Needs Backend Implementation)

- **AI Logic** - All AI-powered features require backend integration
- **Authentication** - User auth not yet implemented
- **File Storage** - Document upload needs storage backend (S3, etc.)
- **API Routes** - Backend endpoints for all features
- **Database Operations** - CRUD operations for all models

### Database Models

| Model | Description | Status |
|-------|-------------|--------|
| Case | Legal case management | Schema Ready |
| Document | Document storage | Schema Ready |
| TimelineEvent | Case timeline events | Schema Ready |
| Note | Case notes | Schema Ready |
| ContractTemplate | Contract templates | Schema Ready |
| ContractComparisonJob | Comparison job tracking | Schema Ready |
| GeneratedArtifact | AI-generated content | Schema Ready |
| WaitlistSignup | Email waitlist | Schema Ready |

## Reusable Components

- `NotLegalAdviceBanner` - Disclaimer banner for all app pages
- `FeatureSection` - Feature list component for marketing pages
- `ComingSoonPage` - Coming soon template
- `FileUpload` - Drag & drop file upload component
- `DashboardLayout` - App layout with sidebar and header

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
