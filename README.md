# PERN Monorepo with pnpm & TypeScript

A **production-ready** monorepo template using **pnpm workspaces**, **TypeScript**, **Express API**, **Next.js 14 App Router**, **Tailwind CSS**, and **OpenAPI** specification. Features concurrent development, Separation of Concerns architecture, barrel exports, and modern React patterns.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8.0-orange.svg)](https://pnpm.io/)

## 🚀 Quick Start

```bash
# 1. Clone or use as template
git clone <your-repo-url>
cd pern-pnpm-monorepo-ts

# 2. Install dependencies
pnpm install

# 3. Copy environment variables
cp .env.example .env

# 4. Run both API and Web servers concurrently
pnpm dev

# Access applications:
# API:  http://localhost:5000
# Web:  http://localhost:3000
```

### Individual Commands

```bash
pnpm dev:api  # API server only
pnpm dev:web  # Web app only
pnpm lint     # Check code quality
pnpm format   # Format all files
```

## ✨ What Makes This Production-Ready?

This template includes everything you need to start building immediately:

- 🔒 **Git Safe** - Comprehensive `.gitignore` prevents committing sensitive files
- 🔧 **Environment Management** - `.env.example` with all required variables documented
- 📏 **Code Quality** - ESLint and Prettier pre-configured with sensible defaults
- 🚨 **Error Handling** - Loading states, error boundaries, and API error middleware
- 🎨 **Consistent Formatting** - Auto-format on save with Prettier
- ✅ **Type Safety** - Full TypeScript coverage with strict mode
- 🧪 **Quality Scripts** - Lint, format, and type-check commands ready for CI/CD
- 📝 **SEO Ready** - Proper HTML structure with metadata in Next.js

No setup needed - just clone, install, and start coding!

## 📁 Project Structure

```
pern-pnpm-monorepo-ts/
├─ .vscode/
│  └─ settings.json          # VS Code workspace settings
├─ packages/
│  ├─ api/                   # Express API (TypeScript)
│  │  ├─ src/
│  │  │  ├─ index.ts         # API entry point
│  │  │  └─ routes/
│  │  │     └─ users.ts      # User routes
│  │  ├─ package.json
│  │  └─ tsconfig.json       # API TypeScript config
│  │
│  ├─ shared/                # Shared code & generated API client
│  │  ├─ src/
│  │  │  └─ api/             # OpenAPI generated client (target)
│  │  └─ package.json
│  │
│  └─ web/                   # Next.js 14 frontend (App Router + Tailwind)
│     ├─ app/
│     │  ├─ about/           # About page route
│     │  │  ├─ page.tsx      # Route handler
│     │  │  └─ views/
│     │  │     └─ AboutView.tsx  # Presentation component
│     │  ├─ context/
│     │  │  ├─ UserContext.tsx   # React context for user state
│     │  │  └─ index.ts          # Barrel export
│     │  ├─ dashboard/       # Dashboard route
│     │  │  ├─ layout.tsx    # Dashboard-specific layout (sidebar)
│     │  │  ├─ page.tsx
│     │  │  └─ views/
│     │  │     └─ DashboardView.tsx
│     │  ├─ users/           # Users section
│     │  │  ├─ [id]/         # Dynamic route for user details
│     │  │  │  ├─ page.tsx
│     │  │  │  └─ views/
│     │  │  │     └─ UserDetailView.tsx
│     │  │  ├─ page.tsx
│     │  │  └─ views/
│     │  │     └─ UsersView.tsx
│     │  ├─ views/           # Root page views
│     │  │  ├─ HomePage.tsx
│     │  │  └─ index.ts
│     │  ├─ globals.css      # Tailwind directives + global styles
│     │  ├─ layout.tsx       # Root layout (navbar, providers)
│     │  └─ page.tsx         # Home page route
│     ├─ components/         # Reusable UI components
│     │  ├─ Navbar.tsx       # Navigation component
│     │  ├─ UserList.tsx     # User list table
│     │  ├─ UserDetail.tsx   # User detail card
│     │  └─ index.ts         # Barrel export
│     ├─ next.config.js
│     ├─ postcss.config.js   # PostCSS with Tailwind
│     ├─ tailwind.config.js  # Tailwind CSS configuration
│     ├─ package.json
│     └─ tsconfig.json
│
├─ openapi.yaml              # OpenAPI 3.0 specification
├─ package.json              # Root package with scripts
├─ pnpm-workspace.yaml       # pnpm workspace configuration
└─ tsconfig.base.json        # Base TypeScript config

```

## 🛠️ Tech Stack

### Backend (API)

- **Express.js** - Fast, minimalist web framework
- **TypeScript** - Type-safe JavaScript
- **CORS** - Cross-origin resource sharing
- **ts-node-dev** - Development server with hot reload

### Frontend (Web)

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Axios** - HTTP client
- **TypeScript** - Type-safe components

### Architecture Patterns

- **Separation of Concerns (SoC)** - Clear separation between routing, views, and components
- **Barrel Exports** - Clean imports with index files
- **Views Pattern** - Page-specific UI logic separated from route handlers
- **Component-Based** - Reusable UI components with consistent styling

### Development Tools

- **pnpm** - Fast, disk space efficient package manager
- **OpenAPI 3.0** - API specification and documentation
- **Concurrently** - Run multiple commands simultaneously
- **ESLint & Prettier** - Code quality and formatting

## 📦 Package Configuration

### Root `package.json`

```json
{
  "name": "pern-monorepo",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "install:all": "pnpm --recursive install",
    "dev": "concurrently \"pnpm --filter api dev\" \"pnpm --filter web dev\" --names \"API,WEB\" --prefix-colors \"blue,green\"",
    "dev:api": "pnpm --filter api dev",
    "dev:web": "pnpm --filter web dev",
    "gen:client": "openapi-typescript-codegen --input ./openapi.yaml --output ./packages/shared/src/api --client axios",
    "build": "pnpm -w -r run build",
    "start": "pnpm -w -r run start"
  },
  "devDependencies": {
    "concurrently": "^9.2.1",
    "openapi-typescript-codegen": "^0.29.0"
  }
}
```

### Workspace Configuration (`pnpm-workspace.yaml`)

```yaml
packages:
  - "packages/*"
```

## 🔧 TypeScript Configuration

### Base Config (`tsconfig.base.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@shared/*": ["packages/shared/src/*"]
    }
  }
}
```

### API Config (`packages/api/tsconfig.json`)

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "module": "commonjs" // Required for Node.js
  }
}
```

## 🔌 API Specification

The API is defined using OpenAPI 3.0 in `openapi.yaml`:

```yaml
openapi: 3.0.0
info:
  title: Simple Users API
  version: 1.0.0
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"
        "404":
          description: Not found
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
      required: [id, name, email]
```

## 📝 Available Scripts

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `pnpm install`      | Install all dependencies                           |
| `pnpm dev`          | Run API + Web concurrently with color-coded output |
| `pnpm dev:api`      | Run API server only (port 5000)                    |
| `pnpm dev:web`      | Run Web app only (port 3000)                       |
| `pnpm lint`         | Check code with ESLint                             |
| `pnpm lint:fix`     | Auto-fix linting issues                            |
| `pnpm format`       | Format all files with Prettier                     |
| `pnpm format:check` | Check if files are formatted                       |
| `pnpm type-check`   | Run TypeScript type checking                       |
| `pnpm gen:client`   | Generate TypeScript API client from OpenAPI spec   |
| `pnpm build`        | Build all packages for production                  |
| `pnpm start`        | Start all packages in production mode              |
| `pnpm clean`        | Remove build artifacts and cache                   |

## 🏗️ Architecture & Patterns

### Separation of Concerns (SoC)

The project follows modern React/Next.js patterns with clear separation:

```
Route Handling (page.tsx)
    ↓
View Logic (views/*.tsx)
    ↓
UI Components (components/*.tsx)
```

**Example Structure:**

```typescript
// app/users/page.tsx - Routing & Data Fetching
export default async function UsersPage() {
  // Handle URL params, fetch data
  return <UsersView />;
}

// app/users/views/UsersView.tsx - Page-specific UI
export default function UsersView() {
  // Business logic, hooks, composition
  return <UserList />; // Uses reusable component
}

// components/UserList.tsx - Reusable UI
export default function UserList() {
  // Generic, reusable across pages
}
```

### Layout System

- **Root Layout** (`app/layout.tsx`) - Navbar, providers, global styles
- **Nested Layouts** (`app/dashboard/layout.tsx`) - Section-specific UI (sidebar)
- **Views** (`app/*/views/*.tsx`) - Page-specific presentation
- **Components** (`components/*.tsx`) - Reusable UI elements

### Barrel Exports

Clean imports using index files:

```typescript
// Instead of:
import Navbar from "@/components/Navbar";
import UserList from "@/components/UserList";

// Use:
import { Navbar, UserList } from "@/components";
```

## 🚦 Development Workflow

1. **Start Development Servers**

   ```bash
   pnpm dev
   ```

   This runs both API (blue) and Web (green) with prefixed, color-coded output.

2. **Update API Specification**
   - Edit `openapi.yaml`
   - Preview with Swagger Editor (VS Code extension)
   - The spec documents your API endpoints

3. **Access Applications**
   - API: http://localhost:5000
   - Web: http://localhost:3000

4. **Add New Pages**

   ```bash
   mkdir -p packages/web/app/new-page/views
   # Create page.tsx (route handler)
   # Create views/NewPageView.tsx (presentation)
   ```

5. **Add New Components**
   ```bash
   # Create in packages/web/components/
   # Add to components/index.ts for barrel export
   ```

## 🎯 Key Features

### Core Architecture

✅ **Monorepo Structure** - Single repository with multiple packages  
✅ **Type Safety** - Full TypeScript coverage across all packages  
✅ **Separation of Concerns** - Clear separation between routing, views, and components  
✅ **Workspace Management** - Efficient dependency management with pnpm

### Modern Frontend

✅ **Next.js 14 App Router** - Latest routing with React Server Components  
✅ **Tailwind CSS 3** - Utility-first styling with responsive design  
✅ **Barrel Exports** - Clean import patterns with index files  
✅ **Views Pattern** - Scalable page organization for large applications

### Development Experience

✅ **Hot Reload** - Both API and Web support hot module replacement  
✅ **Concurrent Development** - Run multiple servers with color-coded logs  
✅ **ESLint + Prettier** - Consistent code quality and formatting  
✅ **VS Code Integration** - Pre-configured workspace settings  
✅ **OpenAPI Specification** - API documentation with Swagger preview

### Production Ready

✅ **Environment Variables** - Flexible configuration for different environments  
✅ **Error Handling** - Comprehensive error boundaries and loading states  
✅ **Git Safe** - Proper .gitignore with all sensitive files excluded  
✅ **Type Checking** - Automated TypeScript validation across packages  
✅ **Code Quality** - Linting and formatting scripts ready for CI/CD

## 🔄 Package Dependencies

```
api/
├─ express
├─ cors
├─ dotenv
└─ devDependencies:
   ├─ @types/express
   ├─ @types/cors
   ├─ @types/node
   ├─ ts-node-dev
   └─ typescript

web/
├─ next
├─ react
├─ react-dom
├─ axios
├─ tailwindcss
├─ postcss
└─ devDependencies:
   ├─ @types/react
   ├─ @types/react-dom
   ├─ autoprefixer
   └─ typescript

shared/
└─ (shared types and utilities)
```

## ⚙️ Configuration

### Environment Variables

The project uses environment variables for configuration. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Available variables:

- `PORT` - API server port (default: 5000)
- `NEXT_PUBLIC_API_URL` - API URL for the frontend (default: http://localhost:5000)
- `NODE_ENV` - Node environment (development/production)

### Code Quality

The project includes pre-configured tools for maintaining code quality:

- **ESLint** - `eslint.config.mjs` with TypeScript support
- **Prettier** - `.prettierrc` for consistent formatting
- **TypeScript** - Strict mode enabled in `tsconfig.base.json`

Run quality checks:

```bash
pnpm lint          # Check for code issues
pnpm format:check  # Verify formatting
pnpm type-check    # Validate types
```

## 🐛 Troubleshooting

### TypeScript Errors in API

All necessary types are already installed. If you see module import errors, ensure dependencies are installed:

```bash
pnpm install
```

### TypeScript Errors in Web

React types are included. If issues persist:

```bash
cd packages/web
pnpm add -D @types/react @types/react-dom
```

### Module Resolution Issues

Ensure `tsconfig.base.json` paths are correctly set and that packages extend the base config.

### Port Already in Use

- API default: 5000 (change via `PORT` env variable)
- Web default: 3000 (change with Next.js `PORT` env variable)

## 📚 VS Code Settings

The project includes workspace settings in `.vscode/settings.json`:

- Format on save enabled
- Prettier as default YAML formatter
- Consistent code formatting across the team

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure TypeScript compiles without errors
5. Test both API and Web applications
6. Submit a pull request

## 📄 License

MIT

## 🎓 Learn More

- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
