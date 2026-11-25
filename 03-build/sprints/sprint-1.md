# Sprint 1

Sprint 1 runs from today's lab to the Week 7 lab and ends at the gate: deployed at a public URL, north star event firing in PostHog. Everything here is sized to the hours you actually have.

## Definition of done

A story is done when it is merged to `main`, deployed to production at the Vercel URL, walked on a phone by a teammate who did not build it, and its events show in PostHog's Activity view.

## Real hours before the Week 7 lab

| Initials | Hours free | When, specifically |
|---|---|---|
| AK | 7 | Tue 19:00 to 21:00, Thu 20:00 to 22:00, Sun 11:00 to 14:00 |
| BT | 7 | Mon 20:00 to 22:00, Wed 19:00 to 21:00, Sat 12:00 to 15:00 |
| GU | 6 | Tue 20:00 to 22:00, Fri 18:00 to 20:00, Sun 14:00 to 16:00 |
| **Total** | **20** | |

## The board

GitHub Projects on the team repository. Columns: Next, Doing, Review, Done. One card per story below. Merge to `main` every day anyone works.

## Stories

### S1 · Deploy and instrument stack · owner AK · reviewer BT · 3 h

First, not last: execute `Lab-6/setup/SHIP-STACK-SETUP.md` on the first evening. Next.js in `app/`, Neon DB connected with initial tables, PostHog client/server wired with reverse proxy, and deployed to Vercel.

**Acceptance criteria:**
- Given the production URL on a phone browser, when opened, then the database connection test returns a valid timestamp
- And `NEXT_PUBLIC_POSTHOG_KEY` initializes without console errors
- And an initial test event appears in PostHog's Activity view within 15 seconds

**Smallest demo that proves it:** Open production URL on phone, show Neon timestamp, show event in PostHog Activity.

---

### S2 · Building selector and machine status cards · owner BT · reviewer GU · 5 h

**As** a dorm resident in Block F or G, **I** open the site and instantly see the real-time status of all 4 machines in my building **so that** I don't walk down to -1 with a heavy basket when everything is full.

**Acceptance criteria:**
- Given `/` on a phone browser, when loaded, then Block F and Block G toggle tabs are visible at the top without scrolling
- And each block displays 4 washer cards with current status (Available in green, Running with minutes remaining in blue, or Finished in amber)
- And `resident_opens_status_page` fires once with `block` and `source` (`qr_door`, `messenger_link`, or `direct`)

**Smallest demo that proves it:** Toggle between Block F and G, see 4 machine statuses with live minutes, show event in PostHog.

---

### S3 · Start wash cycle timer (North Star step) · owner AK · reviewer GU · 5 h

**As** a resident who just loaded a machine in the basement, **I** select a wash program duration and start the timer with one tap **so that** everyone in the dorm knows the machine is occupied and when it will finish.

**Acceptance criteria:**
- Given an "Available" washer card, when I tap it, then a modal appears with preset cycle buttons: "Quick (30m)", "Daily (45m)", and "Cotton (60m)"
- And tapping a preset immediately changes the card to "Running" with countdown timer, and writes an active row to `wash_sessions` in Neon
- And `resident_starts_wash_timer` fires on the client, and `system_registers_machine_busy` fires from the server route after database commit

**Smallest demo that proves it:** Tap Washer 2, select 45m, see countdown start, show the database row, show both events in PostHog.

---

### S4 · Unload and free machine · owner GU · reviewer BT · 4 h

**As** a resident whose cycle has ended (or a waiting student finding a stopped machine), **I** tap "Unloaded" **so that** the washer is marked available for the next load without delay.

**Acceptance criteria:**
- Given a machine whose countdown reached 0:00, when viewed, then the card displays "Finished - Please Unload"
- And tapping "Unloaded / Machine Free" resets the card status to "Available" in green and updates the database row `finished_at`
- And `resident_unloads_machine` fires with `machine_id`, `block`, and `minutes_after_finish`

**Smallest demo that proves it:** Set a test washer to 0:00, tap Unload, see the card revert to green Available, show `resident_unloads_machine` in PostHog.

---

### S5 · Inaccurate timer / broken machine report · owner BT · reviewer AK · 3 h

**As** a resident who walked down to -1 and found a washer running without a timer or out of order, **I** tap "Report Issue" **so that** the status board stays accurate and doesn't mislead others.

**Acceptance criteria:**
- Given any machine card, when I tap the small alert flag, then I can select "Running unrecorded" or "Out of order"
- And submitting updates the card status and records the issue type in `wash_sessions`
- And `resident_reports_machine_issue` fires with `machine_id` and `issue_type`

**Smallest demo that proves it:** Flag Washer 3 as "Running unrecorded", verify card updates to busy, show event in PostHog.

---

## Slip rule

Written now, obeyed later. If story **S5 (Inaccurate timer / broken machine report)** is not complete by **Tuesday evening (22:00) before the Week 7 lab**, S5 moves to Sprint 2. Stories S1, S2, S3, and S4 stay in Sprint 1 no matter what, because without the start and unload cycle, the core value hypothesis cannot be tested.

## The DECISIONS.md lines

The boundary line is in `03-build/mvp-boundary.md`.
