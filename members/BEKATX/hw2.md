# Homework 2 · Beka Tkhilaishvili (@BEKATX) · Team TANKISTEBI

## 1. Ship report

| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Block F and Block G toggle tabs and live machine status cards | S2 | `commit_hash_1` | Yes | GU |
| Machine issue reporting modal and flagged state toggle | S5b (Sprint 2) | `commit_hash_2` | Yes | AK |
| Mobile data production walk on -1 floor to clear Rungs 1 and 2 | Gate walk (Rung 1, 2) | `commit_hash_3` | Yes | AK verified in PostHog |
| Reviewed S4 (Unload and free washer) on mobile browser | S4 (as reviewer) | `commit_hash_4` | Yes | GU adjusted button padding |
| Ran and documented Usability Test Session 2 with Resident-F305 | Test plan, Session 2 | `commit_hash_5` | n/a | AK reviewed log |

**The piece I am least sure works for a real person, and how I will know by Lab 8:** whether residents in Block G notice the building toggle tab at the top of the screen or accidentally look at Block F's default view. I will inspect the `block` property on incoming `resident_opens_status_page` events in PostHog on Wednesday to verify that Block G students are successfully viewing their own building.

**One thing I did that was not my assigned story:** during the Lab 7 production walk on mobile data, I discovered that countdown timers rendered as `NaN:NaN` on iOS Safari due to how WebKit handles ISO date strings. I reported the exact string parsing bug to AK so we could fix it before handing the production link to dorm residents.

## 2. Pattern journal, Weeks 5 to 7

### Week 5 · One metric that matters
I was initially tempted to measure raw visits to the website because getting students to open the link from the dorm Messenger chat felt like our biggest obstacle. AK showed that page views are a vanity presence metric; a resident can open the site, see four occupied washers, and walk away frustrated with their basket. We committed to completed wash cycles per resident per month. Beyond my assigned lane: during Usability Session 2, I noticed Resident-F305 hesitating over how long wash programs take, which convinced us to replace manual duration inputs with preset buttons (30m, 45m, 60m). My hack: I manually manipulated device system clocks to test how noticeable a 5-minute timer drift felt.

### Week 6 · The smallest complete journey
I fought hard to remove advance machine reservations from Sprint 1. In our interviews, residents described how leaving baskets on the floor to hold a spot triggered verbal arguments in the hallway; adding a digital queue before basic availability tracking worked would have created ghost reservations. Beyond my assigned lane: I worked with GU to trim our story scope so our total sprint estimate stayed within an honest 20 hours instead of an unachievable target. My hack: I built the machine status cards using static arrays in React so the layout could be reviewed before the database was connected.

### Week 7 · Ship to learn
Walking the production URL myself on mobile data in the basement stairwell proved that campus Wi-Fi assumptions hide real bugs. The site loaded quickly, but we immediately noticed our live dashboard was double-counting timer starts when I tapped the button. Seeing PostHog increment by two for my single action showed me why automated tests are not enough—reconciling telemetry against raw database rows is the only reliable way to know if counts are true. Beyond my assigned lane: I configured our three PostHog dashboard tiles and set up the public share link for grading. My hack: I verified our internal filter by intentionally starting a test cycle under `test_walker_bt` to confirm it did not contaminate our live metrics.

## 3. My DECISIONS.md lines

> `Wk5 · North star: successful wash starts preceded by a remote status check per active resident per week; rejected total page views (presence, fails test 1) and registered dorm accounts (cumulative, fails test 3) · evidence: 03-build/analytics/event-schema.md, 01-discovery/interview-logs/01-resident-blockf.md, 02-resident-blockf.md, 06-resident-blockf.md · owner: BT`

I owned this decision, with the evidence living in `03-build/analytics/event-schema.md` and interview logs 01, 02, and 06, which proved that value lands only when an open machine is verified before heading downstairs.

> `Wk6 · MVP boundary: 5-step journey (open status page to unload machine); cut user accounts, SMS/Messenger push bot, and advance booking queue · evidence: 03-build/mvp-boundary.md, logs 01, 04, 06, 08, sessions 1 to 3 · owner: BT`

The evidence is documented in `03-build/mvp-boundary.md` and usability sessions 1 to 3, showing that login friction kills adoption while a 5-step journey solves the bottleneck without complex reservation queues.

> `Wk7 · Gate passed: live at the README's Live product link, north star event firing from production, PostHog 3 = database 3 · evidence: README links, 03-build/analytics/event-schema.md · owner: BT`

The evidence is our Gate reconcile block in `03-build/analytics/event-schema.md`, where the 3 test cycles I walked on mobile data in the basement matched the Neon database count character-for-character.
## 4. My person this week

**The field-week person I am responsible for:** Resident-F105, 1st floor Block F (from Interview 07) · **how and when the link reaches them:** direct message on Messenger on Sunday at 18:00 before the evening laundry rush, asking him to test the live link when doing his laundry.
