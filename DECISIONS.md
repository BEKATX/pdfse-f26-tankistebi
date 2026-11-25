Wk2 · Investigate: how KIU dorm residents in Block F manage laundry room machine bottlenecks and room visits · evidence: 00-foundation/problem-pool.md (Beka statement 1), 00-foundation/four-filters-scorecard.md · runner-up: evening food access after campus cafeteria closure · owner: BT

Wk3 · Prediction "students almost always find an open machine" verdict: confirmed (residents make 2–3 blind trips to -1 floor; key pain is idle laundry dumped on dirty surfaces and untracked basket queues) · evidence: 01-discovery/interview-logs/01-resident-blockf.md, 02-resident-blockf.md, 03-resident-blockf.md, 04-resident-blockf.md, 05-resident-blockg.md, 06-resident-blockf.md · owner: BT

Wk4 · Problem statement v1: uncoordinated -1 floor laundry room bottleneck, timer drift, and idle clothes removal for KIU Block F/G residents · evidence: 01-discovery/problem-statement.md, synthesis/patterns-analysis.md · owner: BT

Wk5 · North star: successful wash starts preceded by a remote status check per active resident per week; rejected total page views (presence, fails test 1) and registered dorm accounts (cumulative, fails test 3) · evidence: 03-build/analytics/event-schema.md, 01-discovery/interview-logs/01-resident-blockf.md, 02-resident-blockf.md, 06-resident-blockf.md · owner: BT

Wk6 · MVP boundary: 5-step journey (open status page to unload machine); cut user accounts, SMS/Messenger push bot, and advance booking queue · evidence: 03-build/mvp-boundary.md, logs 01, 04, 06, 08, sessions 1 to 3 · owner: BK

Wk7 · Gate passed: live at the README's Live product link, north star event firing from production, PostHog 3 = database 3 · evidence: README links, 03-build/analytics/event-schema.md · owner: BK

Wk8 · Field-week read: predicted 8 wash starts, real 9; widest drop after finish (6 of 9 not unloaded, 42 min idle), actor: resident; advance booking cut, post-cycle reminder experiment next · evidence: 03-build/analytics/break-readout.md · owner: AK

Wk8 · AI feature: Laundry Courtesy & Schedule Advisor grounded in live machine states and dorm courtesy rules to reduce idle drum time and stair trips; resident approves action · evidence: 03-build/analytics/break-readout.md, logs 01, 03, 05, 06 · owner: GU