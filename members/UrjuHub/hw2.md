# Homework 2 · Giorgi Urjumelashvili (@UrjuHub) · KIU Laundry Tracker
 
## 1. Ship report
 
| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Block F and Block G building selector tabs and live machine cards | S2 | `8f4b12c` | Yes | GU |
| Inaccurate timer / broken washer flag UI and report modal | S5b (Sprint 2) | `4c7a91d` | Yes | AK |
| Walked the entire journey on phone (mobile data) to clear Rungs 1 & 2 | Gate walk (Rung 1, 2) | `3e9f02b` | Yes | AK watched PostHog Activity |
| Reviewed S4 (Unload and free machine) on phone at production URL | S4 (as reviewer) | `1b8d5e4` | Yes | GU fixed button margin |
| Logged prototype test Session 2 with Resident-F305 | Test plan, Session 2 | `7a2c89f` | n/a | AK read log |
**The piece I am least sure works for a real person, and how I will know by Lab 8:** whether students living in Block G switch to the Block G tab or if they mistakenly look at Block F by default. I will check the `block` property on `resident_opens_status_page` and `resident_starts_wash_timer` in PostHog on Wednesday to see if Block G events are actually occurring.
 
**One thing I did that was not my assigned story:** during the Lab 7 production walk on mobile data, I noticed that the machine countdown timers on Safari were rendering as `NaN:NaN` because iOS handles ISO date strings differently than Chromium. I reported the string formatting issue immediately to AK so it could be fixed before we gave the link to dorm residents.
 
## 2. Pattern journal, Weeks 5 to 7
 
### Week 5 · One metric that matters
 
I initially suggested tracking total page visits because if students don't visit the link, the product dies. AK pointed out that page views are a vanity presence metric; a student can look at 4 full machines and walk away angry with their basket. We narrowed the North Star down to completed wash cycles per resident per month. Beyond my lane: I conducted Usability Session 2 with Resident-F305, which revealed that students didn't know how long wash programs take, prompting us to add preset cycle buttons (30m, 45m, 60m). My hack: I manually refreshed test timers on my own phone to see how noticeable a 5-minute timer drift felt.
 
### Week 6 · The smallest complete journey
 
I pushed to cut advance machine bookings and queue reservations from Sprint 1. In our interviews, students said that leaving baskets on the basement floor to "hold a spot" caused yelling matches; creating a digital reservation system before basic machine tracking worked would have caused ghost claims. Beyond my lane: I helped size S1 and S3 with AK and GU so our total sprint hours stayed at an honest 20 hours rather than an impossible estimate. My hack: I mapped the 4 machine cards using simple static arrays before we had the live database route connected.
 
### Week 7 · Ship to learn
 
Walking the live production link on mobile data in the basement stairwell proved that Wi-Fi assumptions are dangerous. The page loaded fast, but I realized that our live dashboard was double-counting timer starts. Seeing PostHog jump by 2 for every single button tap showed me why automated tests aren't enough—reconciling against real database rows is the only way to know if numbers are true. Beyond my lane: I set up our PostHog team dashboard tiles and generated the public share link so the TA could inspect our telemetry. My hack: I verified our internal filter by intentionally starting a test cycle with `test_walker_bt` to confirm it did not pollute our live metrics.
 
## 3. My DECISIONS.md lines
 
> `Wk5 · Prototype v2: added preset cycle buttons (30m, 45m, 60m) and a 'Notify when free' button on busy machines · evidence: 02-design/user-testing/usability-findings.md (sessions 2, 3) · owner: GU`
 
I drove the evidence for this decision during Usability Session 2, where the tester paused and asked how they were supposed to guess the machine's exact minutes.
 
> `Wk7 · Gate passed: live at the README's Live product link, north star event firing from production, PostHog 3 = database 3 · evidence: README links, 03-build/analytics/event-schema.md · owner: AK`
 
I performed the live mobile walk that verified this gate, starting and completing cycles on machine `f-1` on mobile data while AK checked PostHog Activity.
 
## 4. My person this week
 
**The field-week person I am responsible for:** Resident-F105, 1st floor Block F (from Interview 08) · **how and when the link reaches them:** direct message on Messenger on Sunday at 18:00 before peak laundry hours, asking him to test the live link when doing his evening wash load.
