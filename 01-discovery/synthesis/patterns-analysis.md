# Patterns Analysis

**Save this file as:** `01-discovery/synthesis/patterns-analysis.md`

## Pattern 1: Students routinely make multiple blind trips up and down stairs because phone alarms and mental estimates fail to match machine cycle times.

**Interviews behind it:** 01, 02, 03, 04

1. **Why does this happen?** Students set phone timers based on estimated wash durations, but washing machine weight sensors and water pressure dynamically change the remaining cycle time. (02)
2. **Why that?** The only place the actual remaining countdown is visible is on the physical LED display in the basement laundry room. (01, 02)
3. **Why that?** There is no remote sync or shared visibility between the machines in the basement and residents living on floors 2, 3, and 4. (01, 03, 04)

**Root cause, one sentence:** A physical barrier of up to 4 flights of stairs exists with zero real-time information sync between the physical machine timers and residents upstairs.

**Which answer above is a guess rather than a quote?** The exact machine sensor behavior in Why 1 is inferred from resident quotes about timer drift. To be verified during upcoming interviews.

---

## Pattern 2: Removing strangers' finished laundry is socially accepted after 15–20 minutes of waiting, but placing wet clothes on dirty surfaces causes intense disgust.

**Interviews behind it:** 01, 02, 03

1. **Why does this happen?** Incoming students need machines to start their own wash and cannot afford to wait indefinitely for an absent owner. (02, 03)
2. **Why are owners absent after a cycle ends?** Owners are not alerted when the cycle actually stops and get delayed in study sessions, dorm rooms, or campus events. (01, 02)
3. **Why does placing clothes on tables cause conflict?** Laundry tables and chairs in the facility are dusty, so clean wet laundry gets re-contaminated, forcing residents to use makeshift plastic bags as barriers. (01, 03)

**Root cause, one sentence:** Because owners receive no automated alert upon cycle completion, machines sit idle with finished laundry, forcing incoming students to choose between dirtying a peer's clothes or losing their study time waiting.

---

## Pattern 3: Asking in dorm Messenger chats completely fails because inquiries get buried.

**Interviews behind it:** 01, 03

1. **Why does this happen?** Laundry questions are posted to general dorm group chats with hundreds of members discussing food orders, dorm rules, and campus chatter. (01, 03)
2. **Why do they post in the general group chat?** There is no identifier on the physical machines linking a running wash to a specific student's contact. (01)

**Root cause, one sentence:** Communication is broadcasted to an entire building rather than directed to the single person currently occupying that specific machine.

---

**Strongest pattern:** Pattern 2 (Idle cycles and hygiene conflict during laundry removal).

**Why it is the strongest, in two sentences, citing log numbers:** While Pattern 1 explains wasted time, Pattern 2 reveals the primary social friction and courtesy boundary (waiting 15–20 mins, using plastic bags) across interviews 01, 02, and 03. Solving the notification gap automatically prevents clothes from ever sitting idle and getting dumped on dirty surfaces.