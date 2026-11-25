# Architecture

One diagram, one line of why per layer. The question each line answers is not "is this the best technology" but "can this team deploy it at a public URL by the Week 7 lab."

## The diagram

```mermaid
flowchart LR
  R[Resident phone browser] -->|opens /f or /g| APP[Next.js app on Vercel]
  APP -->|read machine status, write wash sessions| DB[(Postgres on Neon)]
  APP -->|capture client & server events| PH[PostHog]
  APP -->|live countdown & finished state| R
