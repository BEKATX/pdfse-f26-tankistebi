# Homework 2 · Beka Tkhilaishvili (@BEKATX) · Team TANKISTEBI

## 1. Ship report

| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Initial Next.js structure and Vercel production deploy | S1 / Rung 1 | `commit_hash_1` | Yes | BT walked on phone |
| Wash cycle timer buttons (30m, 45m, 60m) and start API handler | S3 / Rung 2 | `commit_hash_2` | Yes | GU checked on phone |
| Fixed double-fire bug in PostHog event capture | Rung 4 | `commit_hash_3` | Yes | Reconcile verified 3 = 3 with BT |
| Walked S2 (Block F & G selector) on my phone and verified live countdown | S2 (as reviewer) | `commit_hash_4` | Yes | Me, on mobile data |
| Logged prototype test Session 1 with Resident-F102 | Test plan, Session 1 | `commit_hash_5` | n/a | GU read log |

**The piece I am least sure works for a real person, and how I will know by Lab 8:** whether residents remember to tap "Unload" when taking wet clothes out, or if the washer card sits on "Finished" for hours. I will check the time gap between countdown completion and `resident_unloads_machine` in PostHog on Wednesday.

**One thing I did that was not my assigned story:** during the Lab 7 walk, I helped troubleshoot why PostHog recorded 6 events instead of 3 in the reconcile check. I inspected the timer button handler and removed the duplicate client-side capture call so our PostHog count matched Neon exactly.

## 2. Pattern journal, Weeks 5 to 7

### Week 5 · One metric that matters

I initially wanted to track "total visits to the status page" because getting residents to open the link from the Messenger chat seemed like the hardest hurdle. My teammates pointed out that opening a webpage doesn't mean a machine was found or a staircase trip was saved; someone could open the page, see it's full, and get frustrated. We settled on "tracked wash cycles completed per active resident" as our North Star. Beyond my lane: I wrote the anonymous UUID generator in `localStorage` so we could track individual retention without a login barrier. My hack: I tested the timer flow by manually advancing system clocks before we had automatic database expirations.

### Week 6 · The smallest complete journey

The hardest decision was cutting the Messenger notification bot. We spent hours reading the Facebook Graph API docs before realizing that business page verification would take longer than the sprint. Cutting the bot and keeping the timer strictly on-screen felt like a downgrade, but it allowed us to ship a full 5-step journey that actually works. Beyond my lane: I reviewed GU's SQL schema in Neon to ensure the `ends_at` timestamps were stored in UTC so Tbilisi phones wouldn't show negative minutes. My hack: I hardcoded the 8 machines in an SQL seed script so we didn't have to build an admin management dashboard.

### Week 7 · Ship to learn

Watching BT walk the production URL on phone mobile data taught us more in two minutes than a week of local testing. The page loaded instantly, but our test washer fired duplicate events because of an uncleaned click handler. Reconciling the database against PostHog caught a silent data bug that would have completely warped our field test numbers. Beyond my lane: I drafted the field week outreach messages for the 4 dorm residents so we had our testers booked before the lab ended. My hack: I did not write this journal in Week 5; I reconstructed my notes during the Week 7 ship review.

## 3. My DECISIONS.md lines

> `Wk5 · North star: tracked wash cycles completed per active resident per month; rejected site page views (presence, does not mean a machine was found) and total registered accounts (cumulative, violates zero-login requirement) · evidence: 03-build/analytics/event-schema.md, 01-discovery/interview-logs/01-resident-blockf.md, 06-resident-blockf.md, 10-resident-blockf.md · owner: AK`

I owned this decision. It established that value lands only when a student actually cycles laundry through the tracker, not when they passively browse the page.

> `Wk7 · Gate passed: live at the README's Live product link, north star event firing from production, PostHog 3 = database 3 · evidence: README links, 03-build/analytics/event-schema.md · owner: AK`

The evidence is our Gate reconcile block in `event-schema.md`, where PostHog's 3 wash events matched the 3 rows in Neon after fixing the duplicate capture call.

## 4. My person this week

**The field-week person I am responsible for:** Resident-F304, 3rd floor Block F · **how and when the link reaches them:** direct message on Messenger on Sunday at 18:00 before peak laundry rush, with a brief explanation and the production link.