# masjidmunchies

A unique app designed for Muslims to discover halal restaurants, mosque proximity, mosque reviews, masjid events, and Islamic-only advertising. The solution includes a **web application (React)**, a **mobile app (React Native / Expo)**, and a **backend API (Node.js + TypeScript)**, all sharing the same login system and a common shared package.

---

## Tech Stack

* **Frontend Web:** React + TypeScript (CRA)
* **Frontend Mobile:** React Native + Expo + TypeScript
* **Backend API:** Node.js + Express + TypeScript
* **Database:** PostgreSQL (via **Supabase** for hosting/auth/storage)
* **Monorepo Management:** Turborepo
* **Shared Code:** TypeScript packages in `/packages/shared`
* **Backlog & Docs:** Trello (sprint/backlog management), Google Drive (design & documentation)

---

## Folder Structure

```
masjidmunchies/
│   package.json
│   turbo.json
│   tsconfig.json
│   .gitignore
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

1. **Install dependencies** at the root (handles all apps and packages):

```bash
npm install
```

2. **Run all apps simultaneously** using Turborepo:

```bash
npm run dev
```

This will start:

* **Backend** on port `3000` → [http://localhost:3000](http://localhost:3000)
* **Web app** on port `3001` → [http://localhost:3001](http://localhost:3001)
* **Mobile app (Expo)** → Metro Bundler starts on `19000+`

---

## Running Individual Apps

### Backend

```bash
cd apps/backend
npm run dev
```

* Runs backend with **ts-node-dev**
* Hot reload works for TypeScript changes

### Web App

```bash
cd apps/frontend-web
npm start
```

* Starts React web app on **[http://localhost:3001](http://localhost:3001)**
* Make sure `.env` file contains `PORT=3001`

### Mobile App (Expo)

```bash
cd apps/frontend-mobile
npm run dev
# or
npx expo start
```

* Starts Expo Metro Bundler
* Make sure `@types/react` and `@types/react-native` are installed for TypeScript

---

## Useful `npm run` Commands

At the **root** (using Turborepo):

```bash
npm run dev      # Run all apps concurrently
npm run build    # Build all apps/packages (if applicable)
npm run lint     # Run linter across all packages
npm run test     # Run tests across all packages
```

Per app (inside each `apps/` folder):

```bash
npm run dev      # Start development server
npm run build    # Build the app
npm start        # Alias for starting dev server (web/mobile)
```

---

## Troubleshooting

### 1. Port Conflicts

* Backend uses port `3000`, Web uses `3001`.
* If ports are in use:

```bash
# Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### 2. Missing TypeScript Types

```bash
# Web
cd apps/frontend-web
npm install --save-dev @types/react @types/react-dom

# Mobile
cd apps/frontend-mobile
npm install --save-dev @types/react @types/react-native
```

### 3. Backend cannot find modules

* Ensure `src/index.ts` exists
* Routes should be `.ts` files, not `.js`
* Import using relative paths or `paths` in `tsconfig.json`

### 4. Expo TypeScript Errors

```bash
npx expo install typescript @types/react @types/react-native
```

---

## Build

* **Web:** `cd apps/frontend-web && npm run build` → outputs `build/`
* **Backend:** Uses `ts-node-dev` for live TypeScript execution
* **Mobile:** Expo handles builds with `expo build` or `eas build`

---

## Notes

* `packages/shared` contains code shared between web, mobile, and backend
* Turborepo caches tasks in `.turbo/`
* Ignore all `node_modules` via `.gitignore`

---

## Adding a New App or Package

1. **Create new folder** under `apps/` or `packages/`.
2. **Add package.json** with `name` and `version`.
3. **Add TypeScript config** (`tsconfig.json`) extending root tsconfig.
4. **Add dev scripts** for `dev`, `build`, `lint`.
5. **Include in `turbo.json`** references if you want to run it via `npm run dev`.

This ensures the new app/package integrates seamlessly into the monorepo.
---

## License

Copyright (c) 2025 Ismaeel Varis and MasjidMunchies  

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.
