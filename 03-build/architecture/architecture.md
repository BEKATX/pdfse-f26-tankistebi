# Architecture

One diagram, one line of why per layer. The question each line answers is not "is this the best technology" but "can this team deploy it at a public URL by the Week 7 lab."

## The diagram

```mermaid
flowchart LR
  R[Resident phone browser] -->|opens /f or /g| APP[Next.js app on Vercel]
  APP -->|read machine status, write wash sessions| DB[(Postgres on Neon)]
  APP -->|capture client & server events| PH[PostHog]
  APP -->|live countdown & finished state| R

All 8 machines (4 in Block F, 4 in Block G) are public to anyone with the link. No accounts or passwords in Sprint 1; each phone generates a persistent anonymous UUID in localStorage.
The stack, one line per layer
Layer	Choice	Why we can deploy it by Week 7
Hosting	Vercel	Free tier; automated HTTPS and public URL in under five minutes
App framework	Next.js (App Router)	React-based; deployed via Vercel AI tool
Database	Postgres on Neon	Hosted serverless Postgres with instant free tier; two tables needed
Analytics	PostHog	Fixed for the course; captures client and server events
Messages out	None in Sprint 1	Messenger bots require verification; countdown is on-screen
Sign-in	None	Device UUID in localStorage identifies unique residents without login friction
Layers we deliberately do not have in Sprint 1: user login/passwords, Messenger bots, IoT hardware sensors.
Secrets and data
Secrets live in: .env.local (DATABASE_URL, NEXT_PUBLIC_POSTHOG_KEY); .gitignore lists .env*.
Personal data we store: zero personal data. No student names, phone numbers, or Messenger handles. Only anonymous device IDs and timestamps.
The one thing in this design most likely to break on deploy day: timezone mismatch between UTC timestamps and the student phone's local time (Tbilisi UTC+4).
