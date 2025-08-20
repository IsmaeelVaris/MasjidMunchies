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
> **Important:** Prisma is automatically prepared when running this command (client generated and migrations applied if needed).

---

## 4. View Database with Prisma Studio

Once the backend is running:

```bash
npx prisma studio
```

* Prisma Studio opens in your browser at `http://localhost:5555`.
* You can browse, edit, and insert data in your database.
* Only run locally; do not expose your database publicly.

> ✅ You do **not** need to manually run `prisma generate` or `prisma migrate dev` before starting the backend — `npm run dev` handles that.

---

## 5. Prisma Notes

* `prisma generate` → updates the Prisma client, does **not touch the database**.
* Adding a new model:

  ```bash
  npx prisma migrate dev --name add_model_name
  ```

  creates the table in the database.
* Removing a model:

  1. Delete it from `schema.prisma`.
  2. Run migration:

     ```bash
     npx prisma migrate dev --name remove_model_name
     ```

  **Caution:** this deletes the table and all its data.
* Prisma does **not dynamically create tables**; migrations are required for schema changes.

---

## 6. Notes

* Always make sure you have the updated `.env` file from Ismaeel before running the backend.
* Run `npm run dev` to start the backend server while developing.
* Prisma Studio is strictly for local development and testing.

---

## Postman Collection

A ready-to-use Postman collection is included:

```
apps/backend/postman/MasjidMunchies-API.postman_collection.json
```

Import this file into Postman to quickly test all backend endpoints.
