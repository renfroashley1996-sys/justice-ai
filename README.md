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
│   └── schema.prisma        # Database schema
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── discovery/        # Discovery management
│   │   ├── drafting/         # Document drafting
│   │   ├── research/         # Legal research
│   │   ├── strategy/         # Case strategy
│   │   ├── timeline/         # Case timeline
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Dashboard home
│   ├── components/
│   │   ├── layout/           # Layout components (Sidebar, Header)
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── styles/               # Global styles
│   └── types/                # TypeScript types
├── .eslintrc.json            # ESLint configuration
├── .prettierrc               # Prettier configuration
├── components.json           # shadcn/ui configuration
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
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

## Features (Planned)

- **Legal Research** - AI-powered case law and statute search
- **Case Timeline** - Visual timeline of case events and deadlines
- **Discovery** - Document management and organization
- **Drafting** - AI-assisted legal document drafting
- **Strategy** - Case analysis and strategy planning

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
