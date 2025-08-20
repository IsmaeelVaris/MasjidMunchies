# Project Setup Guide

This project includes:
- React Web (frontend-web)
- React Native Mobile (frontend-mobile via Expo)
- Node.js Backend API (backend)
- Shared folder for common code

---

## 1. Prerequisites

Make sure you have installed:
- Node.js (>=22.x)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

---

## 2. Backend Setup

```bash
cd backend
npm install
npm start
```
The backend will run at `http://localhost:5000`.

---

## 3. Web Frontend Setup

```bash
cd frontend-web
npm install
npm start
```
The React web app will run at `http://localhost:3000`.

---

## 4. Mobile Frontend Setup

```bash
cd frontend-mobile
npm install
npm start
```
This starts Expo. You can:
- Run on iOS/Android simulator
- Scan QR code in Expo Go app (on your phone)
- Open in browser using React Native Web

---

## 5. Shared Code

Put shared logic, constants, or utils in `shared/` and import them in web, mobile, or backend.

---

## 6. Next Steps

- Add authentication logic in `backend/routes/auth.js`
- Add integrations (Google, Athan+/Masjidal) in `backend/routes/api.js`
- Expand UI for both web and mobile

