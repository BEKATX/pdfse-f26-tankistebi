# Pattern journal · Beka Tkhilaishvili (@BEKATX)

Same prompt every week: Where did you apply this pattern this week, where did you exercise agency beyond your assigned lane, and what did you hack together to test something faster than the plan allowed? Link the DECISIONS.md lines you drove.

---

## Week 1 · Act like an owner, not a role
Observed real-world operational friction across campus life and pooled 3 concrete observations: Block F dorm laundry machine runs, the morning transit rush from Kutaisi to KIU, and campus cafeteria terminal bottlenecks. Helped align the team on observing human struggle and quantifiable costs rather than inventing imaginary software ideas.

## Week 2 · Evidence over opinion
Led the formulation of our Four Filters scorecard and problem hypothesis, backing the Block F laundry bottleneck with personal observations of empty trips down 3 flights of stairs. Stepped outside my Discovery lane to initialize the semester repository structure, configure documentation logs, and set up our README. Conducted Interview 01 as the primary asker and logged Interview 03, testing our hypothesis against unprompted stories of resident frustration. Drove line 1 of [DECISIONS.md](../../DECISIONS.md).

## Week 3 · Synthesis over summary
Synthesized the findings from our 6 interview logs into an affinity map and 5 Whys analysis. Instead of treating complaints as generic feature requests, I helped identify the root causes: the physical disconnect to the -1 floor and the hygiene breakdown when finished cycles sit idle. Logged our prediction confirmation in DECISIONS.md backed by all 6 logs.

## Week 4 · Test the riskiest assumption
Applied this pattern by isolating our core assumption: that students check machine status before walking down if the information is accessible in under 10 seconds. Led the formulation of our Problem Statement v1 in `01-discovery/problem-statement.md`, explicitly narrowing the focus to Block F and G basement laundry bottlenecks, timer drift, and idle clothes removal. Beyond my assigned lane: I designed the initial frozen usability test task and failure criteria in `02-design/prototype-plan.md` before our tool was opened. My hack: I used paper cards and a phone stopwatch with my Block F roommates to test how quickly someone could identify an open washer before writing the prompt for v0. Drove the Week 4 line of [DECISIONS.md](../../DECISIONS.md).

## Week 5 · One metric that matters
I was initially tempted to measure raw visits to the website because getting students to open the link from the dorm Messenger chat felt like our biggest obstacle. AK showed that page views are a vanity presence metric; a resident can open the site, see four occupied washers, and walk away frustrated with their basket. We committed to completed wash cycles per resident per month. Beyond my assigned lane: during Usability Session 2, I noticed Resident-F305 hesitating over how long wash programs take, which convinced us to replace manual duration inputs with preset buttons (30m, 45m, 60m). My hack: I manually manipulated device system clocks to test how noticeable a 5-minute timer drift felt. Drove the Week 5 line of [DECISIONS.md](../../DECISIONS.md).

## Week 6 · The smallest complete journey
I fought hard to remove advance machine reservations from Sprint 1. In our interviews, residents described how leaving baskets on the floor to hold a spot triggered verbal arguments in the hallway; adding a digital queue before basic availability tracking worked would have created ghost reservations. Beyond my assigned lane: I worked with GU to trim our story scope so our total sprint estimate stayed within an honest 20 hours instead of an unachievable target. My hack: I built the machine status cards using static arrays in React so the layout could be reviewed before the database was connected. Drove the Week 6 line of [DECISIONS.md](../../DECISIONS.md).

## Week 7 · Ship to learn
Walking the production URL myself on mobile data in the basement stairwell proved that campus Wi-Fi assumptions hide real bugs. The site loaded quickly, but we immediately noticed our live dashboard was double-counting timer starts when I tapped the button. Seeing PostHog increment by two for my single action showed me why automated tests are not enough—reconciling telemetry against raw database rows is the only reliable way to know if counts are true. Beyond my assigned lane: I configured our three PostHog dashboard tiles and set up the public share link for grading. My hack: I verified our internal filter by intentionally starting a test cycle under `test_walker_bt` to confirm it did not contaminate our live metrics. Drove the Week 7 line of [DECISIONS.md](../../DECISIONS.md).

## Week 8 · Read what happened, not what you hoped
Applied this pattern during our field-week readout by confronting our widest drop: 9 wash cycles started, but 6 were left un-cleared on the board with a median idle drum time of 42 minutes. Instead of assuming students were lazy, interview follow-ups revealed that students left their phones upstairs while fetching laundry. Beyond my assigned lane: I stepped up to personally own and run Experiment 1, committing to send manual Messenger reminder nudges to students 5 minutes before cycle completion for 7 days. My hack: when I noticed Block G had fewer visits than Block F, I walked down to the basement and found the QR sticker had fallen off the door; I re-printed and re-mounted it within 20 minutes. Evidence documented in `03-build/analytics/break-readout.md` and `03-build/experiments/experiment-1.md`.
