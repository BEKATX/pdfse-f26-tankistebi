# Homework 2 · Giorgi Urjumelashvili (@UrjuHub) · Team TANKISTEBI

## 1. Ship report

| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Block F and Block G building selector tabs and live machine cards | S2 | `8f4b12c` | Yes | BT checked on phone |
| Inaccurate timer / broken washer flag UI and report modal | S5b (Sprint 2) | `4c7a91d` | Yes | AK verified payload |
| Walked the entire journey on phone (mobile data) to clear Rungs 1 & 2 | Gate walk (Rung 1, 2) | `3e9f02b` | Yes | AK watched PostHog Activity |
| Reviewed S4 (Unload and free machine) on phone at production URL | S4 (as reviewer) | `1b8d5e4` | Yes | AK & I checked state reset |
| Logged prototype test Session 2 with Resident-F305 | Test plan, Session 2 | `7a2c89f` | n/a | BT read log |

**The piece I am least sure works for a real person, and how I will know by Lab 8:** whether students living in Block G switch to the Block G tab or if they mistakenly look at Block F by default because Block F is selected initially. I will check the `block` property on `resident_opens_status_page` and `resident_starts_wash_timer` in PostHog on Wednesday to see if Block G events are actually occurring alongside Block F.

**One thing I did that was not my assigned story:** during the Lab 7 production walk on mobile data, I noticed that the machine countdown timers on iOS Safari were rendering as `NaN:NaN` because Safari parses ISO timestamps more strictly than Chromium. I flagged the string formatting mismatch right away to AK so we could normalize the timestamp parsing before sharing the live link with dorm residents.

## 2. Pattern journal, Weeks 5 to 7

### Week 5 · One metric that matters

I initially suggested tracking total page visits because if students don't open the link from our group chats, the tracker never gets used. AK pointed out that page views are a vanity presence metric—a student can open the status page, see all washers taken, and walk back up the stairs frustrated with a full basket. We narrowed the North Star down to tracked wash cycles completed per active resident per month. Beyond my lane: I ran Usability Session 2 with Resident-F305, where confusion over wash cycle lengths showed us we needed preset duration buttons (30m, 45m, 60m). My hack: I manually refreshed test timers on my own phone to see how noticeable a 5-minute timer drift felt in practice.

### Week 6 · The smallest complete journey

I pushed to cut advance machine bookings and queue reservations from Sprint 1. In our interviews, students mentioned that leaving laundry baskets on the basement floor to "hold a spot" already caused arguments—building a digital queue before reliable live machine tracking would have created ghost reservations and more friction. Beyond my lane: I helped scope S1, S2, and S3 with BT and AK so our sprint plan stayed realistic around an honest 20-hour budget instead of overcommitting. My hack: I rendered the initial machine cards from static mock arrays before wiring up the live Neon database endpoint so UI layout and tab switching could be tested early.

### Week 7 · Ship to learn

Walking the live Vercel production link on phone mobile data in the basement stairwell proved that Wi-Fi assumptions are dangerous. The page loaded quickly, but checking PostHog Activity alongside the live flow revealed duplicate event firing on timer actions—showing me why unit or happy-path checks aren't enough and reconciling against real database rows is essential. Beyond my lane: I set up our PostHog team dashboard tiles and share view so telemetry could be inspected cleanly during review. My hack: I verified our internal traffic filter by triggering a test cycle with `test_walker_bt` to confirm our own testing did not pollute live resident metrics.

## 3. My DECISIONS.md lines

> `Wk5 · Prototype v2: added preset cycle buttons (30m, 45m, 60m) and a 'Notify when free' button on busy machines · evidence: 02-design/user-testing/usability-findings.md (sessions 2, 3) · owner: GU`

I gathered key evidence for this change during Usability Session 2, where the resident hesitated over guessing exact wash durations and asked how long each cycle actually runs.

> `Wk7 · Gate passed: live at the README's Live product link, north star event firing from production, PostHog 3 = database 3 · evidence: README links, 03-build/analytics/event-schema.md · owner: AK`

I helped verify this gate during the live mobile walk by running test cycles on machine `f-1` over mobile data while AK watched PostHog Activity and reconciled rows against Neon.

## 4. My person this week

**The field-week person I am responsible for:** Resident-F105, 1st floor Block F (from Interview 08) · **how and when the link reaches them:** direct message on Messenger on Sunday at 18:00 right before peak evening laundry hours, asking him to use the live link during his wash load and share quick feedback on accuracy and usability.
