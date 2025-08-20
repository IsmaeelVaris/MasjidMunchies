# MasjidMunchies Backend README

## Overview

This document explains how to set up and run the backend locally, including using Prisma Studio to view and manage the database.

---

## 1. Environment Variables

You need the latest `.env` file from Ismaeel Varis before proceeding. Place it in `apps/backend/` (gitignored). It should contain:

```
DATABASE_URL=postgresql://postgres:<YOUR_PASSWORD>@db.<PROJECT>.supabase.co:5432/postgres
JWT_SECRET=super-secret-jwt-key
PORT=3000
```

> Do not commit this file to GitHub.

---

## 2. Install Dependencies

```bash
cd apps/backend
npm install
```

---

## 3. Run Backend in Development

```bash
npm run dev
```

> **Note:** Nodemon automatically restarts the server when source files change.

---

## 4. Prisma Commands

### Generate Prisma Client

```bash
npx prisma generate
```

### Apply Migrations

```bash
npx prisma migrate dev --name init
```

### Open Prisma Studio

```bash
npx prisma studio
```

* Prisma Studio opens in your browser at `http://localhost:5555`
* You can browse, edit, and insert data in your database.
* Only run locally; do not expose your database publicly.

---

## 5. Notes

* Always make sure you have the updated `.env` file from Ismaeel before running any Prisma commands.
* Run `npm run dev` to start the backend server while developing.
* Prisma Studio is strictly for local development and testing.



## Postman Collection

A ready-to-use Postman collection is included:

`apps/backend/postman/MasjidMunchies-API.postman_collection.json`

Import this file into Postman to quickly test all backend endpoints.