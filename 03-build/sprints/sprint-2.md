# Sprint 2: the field week

Sprint 2 runs from Lab 7 to Lab 8. Real students in Block F and Block G use the product this week, and Lab 8 opens by reading what they did.

## Sprint 1 review

Our definition of done: merged to `main`, deployed at the public URL, walked on a phone by a teammate who did not build it, events in PostHog's Activity view.

| Story | Owner | Done by our definition? | If not: which clause is missing, and what happened |
|---|---|---|---|
| S1 Deploy and instrument stack | AK | Yes | Walked by BT; PostHog and Neon connected on Vercel |
| S2 Building selector & machine cards | BT | Yes | Walked by GU; Block F and Block G cards render live |
| S3 Start wash cycle timer | AK | Yes, after one fix | Reconcile caught double-fire bug; fixed and verified (3 = 3) |
| S4 Unload and free machine | GU | Yes | Walked by BT; card returns to green "Available" on unload |
| S5 Inaccurate timer / broken report | BT | Slipped | Did not finish before lab; moved to Sprint 2 per slip rule |

**Slip rule:** Fired as written. Story S5 (Report inaccurate status) moved to Sprint 2. Stories S1 to S4 were deployed and walked, testing the complete core value journey.

## The gate

| Rung | Reached? | Evidence: a link or a number | If not: owner, and by when |
|---|---|---|---|
| 1 Production URL loads on a phone | Yes | Live product row in README | |
| 2 Journey completes there | Yes | BT's walk in lab on mobile data; machine `f-1` started and unloaded | |
| 3 North star event in Activity, from production | Yes | `resident_starts_wash_timer` visible in PostHog Activity | |
| 4 Counts reconcile | Yes | PostHog 3 = Database 3 (documented in `event-schema.md`) | |
| 5 Dashboard, linked in README | Yes | 3-tile dashboard link in README Analytics dashboard row | |

## Real hours before Lab 8

| Initials | Hours free | When, specifically |
|---|---|---|
| AK | 5 | Tue 20:00 to 22:00, Sun 11:00 to 14:00 |
| BT | 6 | Mon 20:00 to 22:00, Wed 19:00 to 21:00, Sat 14:00 to 16:00 |
| GU | 4 | Wed 20:00 to 22:00, Sat 11:00 to 13:00 |
| **Total** | **15** | |

## Stories this week

### S5b · Inaccurate timer / broken washer flag · owner BT · reviewer AK · 3 h

Slipped from Sprint 1. As a student finding a washer running unrecorded or broken, I tap "Flag Machine" so the dashboard status stays trustworthy. Done when `resident_reports_machine_issue` fires from production.

### S6 · Audio / vibration alert when timer reaches 0:00 · owner GU · reviewer BT · 3 h

As a resident waiting in their room, my phone beeps/vibrates when my countdown ends so I don't leave wet laundry sitting in the drum. Done when the browser triggers a web audio chime at 0:00.

### F1 · Two QR signs printed for Block F & G laundry doors · owner AK · reviewer GU · 2 h

Print two QR code signs linking directly to the production URL and stick them on the -1 laundry entrance doors of Block F and Block G. Done when both signs are physically mounted.

### F2 · Mid-week dashboard look · owner BT · reviewer AK · 1 h

Open PostHog dashboard on Wednesday night, check real student wash starts, and log findings.

*Total: 9 of 15 hours committed; 6 hours reserved for live fixes.*

## Field week: who uses it

4 real students from our ICP logs and usability sessions. None are in this course.

| Code name and role | Log or session they come from | How the link reaches them | Sent by, and by when | Opened? (fill in during the week) |
|---|---|---|---|---|
| Resident-F304, 3rd floor Block F | Interview 06 | Direct Messenger link | AK, Sunday 18:00 | |
| Resident-F105, 1st floor Block F | Interview 08 | Direct Messenger link | BT, Sunday 18:00 | |
| Resident-G204, 2nd floor Block G | Usability Session 3 | Direct Messenger link | GU, Monday 14:00 | |
| Resident-G301, 3rd floor Block G | Interview 07 | Direct Messenger link | AK, Monday 16:00 | |

**What we tell them:** "Here is the dorm laundry live tracker we talked about. Open this link before heading down to -1 to check if washers in Block F or G are free, and tap your cycle when you load clothes. No accounts or passwords needed. It is a student project; we only count machine timer starts to see if it reduces empty trips."

## Prediction

**By Lab 8:** 8 `resident_starts_wash_timer` events from real dorm residents (excluding our test records). Also: at least 25 `resident_opens_status_page` visits across Block F and G.

**We are wrong if:** fewer than 4 wash timers are started, or if students post in the dorm Messenger chat asking "is washer 2 really free?" because they don't trust the board.

**Mid-week look:** BT opens the dashboard on Wednesday evening and writes the count here.

## The DECISIONS.md line

`Wk7 · Gate passed: live at the README's Live product link, north star event firing from production, PostHog 3 = database 3 · evidence: README links, 03-build/analytics/event-schema.md · owner: AK`