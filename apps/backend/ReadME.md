# MasjidMunchies Backend README

## Overview

This document explains how to set up and run the backend locally, including using Prisma Studio to view and manage the database. The backend is part of a Turborepo monorepo with shared packages and frontends.

---

## 1. Environment Variables

You need the latest `.env` file from **Ismaeel Varis** before proceeding. Place it in `apps/backend/` (gitignored). Example:

```
DATABASE_URL=postgresql://postgres:<YOUR_PASSWORD>@db.<PROJECT>.supabase.co:5432/postgres
JWT_SECRET=super-secret-jwt-key
PORT=3000
```

> ⚠️ Do **not** commit this file to GitHub. The backend database will not work without it.

---
### Install pnpm (if not already installed)

Before running any `pnpm` commands, make sure `pnpm` is installed globally:

```bash
npm install -g pnpm
```

> Required to run `pnpm install`, `pnpm run start:all`, and other monorepo commands. Ensures faster installs and consistent dependencies.

### Why `pnpm`?

We use **pnpm** for faster, disk-efficient installs and stricter dependency management. It integrates well with Turborepo, ensuring consistent installs across the monorepo.

## 2. Install Dependencies

At the **root of the monorepo**:

```bash
pnpm install
```

> Installs dependencies for the backend, web, mobile, and shared packages.

To clean and reset dependencies if needed:

```bash
pnpm run clean:all
```

> Removes `node_modules`, `.cache` folders from all apps/packages, and the root `pnpm-lock.yaml`.

---

## 3. Run Backend in Development

```bash
cd apps/backend
pnpm run dev
```

> **Note:** Nodemon automatically restarts the server when source files change.
> **Important:** `pnpm run dev` automatically runs Prisma generate and migrations if needed — no manual `prisma generate` is required.

---

## 4. View Database with Prisma Studio

Once the backend is running:

```bash
npx prisma studio
```

* Opens the database GUI in your browser at `http://localhost:5555`.
* Browse, edit, and insert data in your database.
* Only run locally; do **not** expose your database publicly.

> ✅ You do **not** need to manually run `prisma generate` or `prisma migrate dev` — `pnpm run dev` handles it.

---

## 5. Prisma Notes

* `prisma generate` → updates the Prisma client (does **not** modify the database).
* Adding a new model:

```bash
npx prisma migrate dev --name add_model_name
```

* Removing a model:

1. Delete it from `schema.prisma`.
2. Run migration:

```bash
npx prisma migrate dev --name remove_model_name
```

> ⚠️ This deletes the table and all its data. Prisma does **not** dynamically create tables; migrations are required for schema changes.

---

## 6. Useful Commands

**Backend (inside `apps/backend`)**:

```bash
pnpm run dev       # Start backend with live reload
pnpm run build     # Compile TypeScript to JS
pnpm run start     # Run compiled JS (production)
pnpm run typecheck # Check TypeScript types
pnpm run clean     # Remove dist folder
```

**Monorepo-wide (root)**:

```bash
pnpm run start:all # Run backend, web, and mobile concurrently
pnpm run build     # Build all apps/packages
pnpm run lint      # Run linter
pnpm run test      # Run tests
pnpm run clean:all # Remove node_modules, caches, lock files
```

---

## 7. Postman Collection

A ready-to-use Postman collection is included:

```
apps/backend/postman/MasjidMunchies-API.postman_collection.json
```

Import this into Postman to test backend endpoints quickly.

---

## 8. Notes

* Always use the latest `.env` from Ismaeel Varis.
* Prisma Studio is for local development only.
* The backend depends on shared packages in `/packages/shared`.

---

## License

MIT © 2025 Ismaeel Varis
This project is licensed under the [MIT License](../../LICENSE).
