# MasjidMunchies

A unique app for Muslims to discover halal restaurants, mosque proximity, mosque reviews, masjid events, and Islamic-only advertising. Includes: **Web (React)**, **Mobile (React Native/Expo)**, and **Backend API (Node.js + TypeScript)**, sharing login and shared code.

---

## Tech Stack

* **Frontend Web:** React + TypeScript (CRA)
* **Frontend Mobile:** React Native + Expo + TypeScript
* **Backend API:** Node.js + Express + TypeScript
* **Database:** PostgreSQL (via Supabase, Prisma ORM)
* **Monorepo:** Turborepo
* **Shared Code:** `/packages/shared`
* **Backlog & Docs:** Trello, Google Drive

---

## Folder Structure

```
masjidmunchies/
│   package.json
│   turbo.json
│   tsconfig.json
│
├── apps/
│   ├── backend/          # Node.js + Express + TypeScript
│   ├── frontend-web/     # React + TypeScript (CRA)
│   └── frontend-mobile/  # React Native + Expo + TypeScript
│
└── packages/
    └── shared/           # Shared TypeScript code
```

---

## Getting Started

### Why `pnpm`?

We use **pnpm** for faster, disk-efficient installs and stricter dependency management. It stores one copy of each package globally and links it to apps/packages, preventing “works on my machine” issues. pnpm integrates well with Turborepo, ensuring consistent installs across the monorepo. Most npm commands work the same, just replace `npm` with `pnpm`.


1. **Install dependencies (root)**

```bash
pnpm install
```

> Installs dependencies for all apps and shared packages.

2. **Clean all caches (optional)**

```bash
pnpm run clean:all
```

> Removes `node_modules`, `.cache` folders from all apps/packages, and the root `pnpm-lock.yaml`. Use if dependencies break.

3. **Run all apps concurrently**

```bash
pnpm run start:all
```

> Backend → `http://localhost:3000`
> Web → `http://localhost:3001`
> Mobile (Expo) → Metro Bundler on `19000+`

> ⚠️ **Database note:** The backend database will not work without the `.env` file. Get it from Ismaeel Varis.

4. **Run Prisma Studio (ORM GUI)**

```bash
cd apps/backend
pnpm prisma studio
```

> Opens the database GUI in a new browser tab for exploring and editing data.
> Make sure `prisma` and `@prisma/client` are version `5.22.0` to avoid version conflicts.

---

## Running Individual Apps

### Backend

```bash
cd apps/backend
pnpm run dev
```

### Web App

```bash
cd apps/frontend-web
pnpm start
```

### Mobile App (Expo)

```bash
cd apps/frontend-mobile
pnpm run dev
# or
npx expo start
```

---

## Useful Commands

**Root (monorepo-wide):**

```bash
pnpm run start:all   # Run all apps concurrently
pnpm run build       # Build all apps/packages
pnpm run lint        # Run linter
pnpm run test        # Run tests
pnpm run clean:all   # Remove node_modules, .cache, lock files
```

**Per app:**

```bash
pnpm run dev
pnpm run build
pnpm start
pnpm run studio   # Open Prisma Studio (backend only)
```

---

## Troubleshooting

* **Port conflicts:**

```bash
# Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

* **Missing TypeScript types:**

```bash
# Web
cd apps/frontend-web
pnpm install -D @types/react @types/react-dom

# Mobile
cd apps/frontend-mobile
pnpm install -D @types/react @types/react-native
```

* **Backend cannot find modules:**

  * Ensure `src/index.ts` exists
  * Use relative imports or `paths` in `tsconfig.json`
  * Routes should be `.ts` files, not `.js`

* **Expo TypeScript issues:**

```bash
npx expo install typescript @types/react @types/react-native
```

* **Prisma issues:**

  * Make sure `prisma` and `@prisma/client` are version `5.22.0` in `apps/backend/package.json`
  * Run Prisma commands from `apps/backend` only
  * Use `pnpm prisma studio` or add `"studio": "prisma studio"` to backend scripts

---

## Notes

* `packages/shared` is shared between web, mobile, and backend
* Turborepo caches tasks in `.turbo/`
* `.gitignore` ignores all `node_modules`

---

## License

MIT © 2025 Ismaeel Varis
