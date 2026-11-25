# Homework 2 · Giorgi Urjumelashvili (@UrjuHub) · Team TANKISTEBI
 
## 1. Ship report
 
| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Machine unload button, status reset handler, and unload API endpoint | S4 | `commit_gu_01` | Yes | BT walked on phone |
| Audio chime alert triggered in browser when countdown reaches 0:00 | S6 (Sprint 2) | `commit_gu_02` | Yes | AK tested in browser |
| Neon Postgres table schemas and initial machine seed data | S1 / Setup | `commit_gu_03` | Yes | AK verified connection |
| Reviewed S2 (Building selector tabs) on production URL | S2 (as reviewer) | `commit_gu_04` | Yes | BT verified layout |
| Ran and documented Usability Test Session 3 with Resident-G204 | Test plan, Session 3 | `commit_gu_05` | n/a | BT reviewed log |
 
**The piece I am least sure works for a real person, and how I will know by Lab 8:** whether residents actually pull out their phones and tap "Unload" while carrying wet laundry, or if they simply take their clothes and walk away. I will monitor the ratio of `resident_starts_wash_timer` to `resident_unloads_machine` in PostHog on Wednesday to see how many machines sit on "Finished".
 
**One thing I did that was not my assigned story:** when connecting the Neon database, I found that Next.js server components were aggressively caching machine status responses and serving stale countdown times. I added `export const dynamic = "force-dynamic"` to the API route to ensure students always receive live machine states.
 
## 2. Pattern journal, Weeks 5 to 7
 
### Week 5 · One metric that matters
During our worksheet discussions, I pushed back against using registered users as our core metric. In our discovery interviews, students emphasized that creating accounts with passwords would kill adoption immediately. Value is delivered only when laundry is done without a wasted staircase trip. Beyond my assigned lane: I ran Usability Session 3, where Resident-G204 got stuck when all machines were full, giving us the evidence to add the "Notify when free" concept in v2. My hack: I manually seeded the 8 machines in our local database before we had any frontend UI working.
 
### Week 6 · The smallest complete journey
My biggest contribution was defending Step 5 (Unload / Free Machine) in our MVP journey. AK and BT considered stopping at the countdown reaching zero, but our discovery logs proved that forgotten wet clothes dumped on dusty chairs was the primary friction point between residents. Without an explicit "Unload" state, the physical problem remains unsolved. Beyond my assigned lane: I verified that no PII (student names or room numbers) was written into the schema properties, adhering strictly to course privacy guidelines. My hack: I used standard HTML5 Web Audio API beeps instead of waiting for complex push notification permissions.
 
### Week 7 · Ship to learn
Watching our first live walk in Lab 7 was eye-opening. We expected database writes to be our biggest point of failure, but the database performed flawlessly. Instead, the biggest trap was analytics instrumentation: a duplicate capture call inside our client component artificially doubled our North Star count. Reconciling PostHog against Neon caught this before any real student touched the link. Beyond my assigned lane: I reviewed the PostHog live event ingestion stream during BT's walk to confirm that `ms_latency` and cycle durations arrived with valid properties. My hack: I did not draft this pattern journal during Week 5; I compiled my entries during the Lab 7 ship review.
 
## 3. My DECISIONS.md lines
 
> `Wk6 · MVP boundary: 5-step journey (open status page to unload machine); cut user accounts, SMS/Messenger push bot, and advance booking queue · evidence: 03-build/mvp-boundary.md, logs 01, 04, 06, 08, sessions 1 to 3 · owner: BT`
 
I drove the evidence that kept Step 5 (unload machine) inside the MVP boundary, based on interview quotes showing that un-cleared machines are the root cause of clothes being dumped on dusty chairs.
 
> `Wk8 · AI feature: Laundry Courtesy & Schedule Advisor grounded in live machine states and dorm courtesy rules to reduce idle drum time and stair trips; resident approves action · evidence: 03-build/analytics/break-readout.md, logs 01, 03, 05, 06 · owner: GU`
 
I owned this decision, framing the AI feature around solving the 42-minute idle drum bottleneck by enforcing the 15-minute courtesy protocol established in our discovery logs.
 
## 4. My person this week
 
**The field-week person I am responsible for:** Resident-G204, 2nd floor Block G (from Usability Session 3) · **how and when the link reaches them:** direct message on Messenger on Monday afternoon before their weekly Tuesday laundry routine, with the production link.
