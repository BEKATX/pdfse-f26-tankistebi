# Homework 2 · [Anastasia Khevtsuriani] (@aniararis) · Team TANKISTEBI
 
## 1. Ship report
 
| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Initial Next.js scaffold, Vercel configuration, and production deploy | S1 / Rung 1 | `commit_ak_01` | Yes | BT walked on phone |
| Wash cycle timer API (`/api/machines/[id]/start`) and duration logic | S3 (North Star) | `commit_ak_02` | Yes | GU checked on phone |
| Diagnosed and resolved PostHog duplicate capture bug during reconcile | Rung 4 | `commit_ak_03` | Yes | BT verified 3 = 3 |
| Reviewed S5b (Inaccurate timer flag modal) on production URL | S5b (as reviewer) | `commit_ak_04` | Yes | BT verified submission |
| Ran and documented Usability Test Session 1 with Resident-F102 | Test plan, Session 1 | `commit_ak_05` | n/a | GU reviewed log |
 
**The piece I am least sure works for a real person, and how I will know by Lab 8:** whether residents remember to tap "Unload" when taking wet laundry out of the machine, or if machines stay marked as "Finished" for hours. I will monitor the time difference between countdown completion and `resident_unloads_machine` in PostHog on Wednesday evening.
 
**One thing I did that was not my assigned story:** during early prototype testing, I noticed that students refused to use the app if forced to create an account. I wrote the anonymous UUID generator using browser `localStorage` so we could track individual retention without requiring a login barrier.
 
## 2. Pattern journal, Weeks 5 to 7
 
### Week 5 · One metric that matters
I pushed back against tracking registered accounts. In our discovery interviews, residents stated that university email logins would cause immediate drop-off. A registration measures presence, not relief from the laundry bottleneck. We defined our North Star as completed wash cycles per resident per month because value only lands when a student successfully washes clothes without a blind stair trip. Beyond my assigned lane: I reviewed the event schema to ensure `resident_id` remained an internal hash without personal contact details. My hack: I manually seeded database records directly in the SQL editor so we could test frontend cards before our API routes were built.
 
### Week 6 · The smallest complete journey
My main focus was architecting the timer route so `ends_at` was calculated strictly on the server in UTC. In Georgia (UTC+4), calculating countdowns across different client device timezones can easily show negative minutes. Beyond my assigned lane: I helped GU audit our `.gitignore` to ensure production database credentials in `.env.local` were never exposed to GitHub. My hack: I mocked server responses with static JSON files for an entire afternoon so BT could build the machine cards while database tables were being configured.
 
### Week 7 · Ship to learn
Watching BT walk the production URL in the basement stairwell taught us more in two minutes than hours of local testing. The deployment succeeded, but our reconcile check immediately revealed 6 events in PostHog versus 3 rows in Neon. I traced the bug to an uncleaned click handler that fired alongside the API route handler. Fixing that duplicate capture before real students used the product saved our field-week analytics. Beyond my assigned lane: I drafted the field-week outreach messages sent to our ICP contacts. My hack: I did not draft this pattern journal during Week 5; I compiled my entries during our Week 7 ship review.
 
## 3. My DECISIONS.md lines
 
> `Wk7 · Gate passed: live at the README's Live product link, north star event firing from production, PostHog 3 = database 3 · evidence: README links, 03-build/analytics/event-schema.md · owner: BT`
 
I drove the technical evidence for this decision by finding and removing the duplicate client-side capture call that was causing PostHog to register 6 events instead of 3.
 
> `Wk8 · Field-week read: predicted 8 wash starts, real 9; widest drop after finish (6 of 9 not unloaded, 42 min idle), actor: resident; advance booking cut, post-cycle reminder experiment next · evidence: 03-build/analytics/break-readout.md · owner: AK`
 
I owned this decision after reconciling our PostHog telemetry against the Neon database for the field week, which proved that our widest drop occurred when residents failed to clear machines after the cycle finished.
 
## 4. My person this week
 
**The field-week person I am responsible for:** Resident-F304, 3rd floor Block F (from Interview 06) · **how and when the link reaches them:** direct message on Messenger on Sunday at 18:00 before peak laundry rush, with the production URL and instructions to check availability before walking down.
